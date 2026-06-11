// import { loginCredentials, loginPayload } from "../shared/auth.types.js";
// import { findbyemail } from "../shared/auth.repository.js"; 
// import { verifyPassword } from "../shared/passwordHash.utils.js";

// // export const loginwithpass = async(credentials:loginCredentials):Promise<loginPayload> =>{

 
// //     const user = await findbyemail(credentials.email)
    
// //     if (!user) throw new Error("user not found")
    
// //     const hashPassword = user.password;
    
// //     const isMatch = verifyPassword(credentials.password,hashPassword)
    
// //     if(!isMatch){
// //         throw new Error("Invalid username or password");
// //     }

// //   return {
// //     userId: user.userId,
// //     username: user.username,
// //     status: user.status
// //   }
// // }   