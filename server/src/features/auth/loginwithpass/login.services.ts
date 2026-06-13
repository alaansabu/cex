import { loginCredentials, loginPayload } from "../shared/auth.types.js";
import { findbyemail } from "../shared/auth.repository.js"; 
import { verifyPassword } from "../shared/passwordHash.utils.js";
import { createSession } from "../shared/session.repository.js";
export const loginwithpass = async(credentials:loginCredentials):Promise<loginPayload> =>{

 
    const user = await findbyemail(credentials.email)
    
    if (!user) throw new Error("user not found")
    
    const hashPassword = user.password;
    
    const isMatch = verifyPassword(credentials.password,hashPassword)
    
    if(!isMatch){
        throw new Error("Invalid username or password");
    }

  const sessionId = await createSession({
    userId: user.userId,
    expiredAt: new Date(Date.now() + 24 * 60 * 60 * 1000) 
  });

  return {
    sessionId,
    userId: user.userId,
    username: user.username,
    status: user.status
  }
    }   