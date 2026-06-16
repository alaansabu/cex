import { Request,Response } from "express";
import { loginCredentials } from "../shared/auth.types.js";
import { loginwithpass } from "./login.services.js";

type loginReq = Request&{body:loginCredentials}

export const logindetails = async(req:loginReq,res:Response)=>{

        try {
            
            const {email,password} = req.body;
            
            const payload = await loginwithpass({email,password})

            res.cookie("sessionId",payload.sessionId,{

                httpOnly:true,
                secure:process.env.NODE_ENV === 'production',
                sameSite:'lax',
                maxAge:86400000,
                path:'/'
            })

            return res.status(200).json({userId:payload.userId,username:payload.username,status:payload.status})
        } catch (error) {
            return res.status(401).json({"message":"Authentication failed "})
        }


} 