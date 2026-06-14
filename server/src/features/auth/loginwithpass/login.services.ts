import { loginCredentials, loginPayload } from "../shared/auth.types.js";
import { findbyemail } from "../shared/auth.repository.js"; 
import { verifyPassword } from "../shared/passwordHash.utils.js";
import { createSession } from "../shared/session.repository.js";
import { redisClient } from "../../../config/connectredis.js";

//login with pass fn
export const loginwithpass = async(credentials:loginCredentials):Promise<loginPayload> =>{

 
    const user = await findbyemail(credentials.email)
    
    if (!user) throw new Error("user not found")
    
    const hashPassword = user.password;
    

    // vefifying client cred
    const isMatch = verifyPassword(credentials.password,hashPassword)
    
    if(!isMatch){
        throw new Error("Invalid username or password");
    }

    // sessionid creation in pg
  const sessionId = await createSession({
    userId: user.userId,
    expiredAt: new Date(Date.now() + 24 * 60 * 60 * 1000) 
  });


  // login payload after auth
  const loginpayload ={


    sessionId,
    userId: user.userId,
    username: user.username,
    status: user.status
  
  }



  //serialising payload

  const serialisedPayload = JSON.stringify(loginpayload)


//passing serialised payload to redis 

const redisKey = `session:${sessionId}`

  await redisClient.set(redisKey,serialisedPayload,{

    EX:24*60*60
  })

  return loginpayload;

}


    
    