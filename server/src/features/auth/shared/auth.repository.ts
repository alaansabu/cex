import { getDB } from '../../../config/connectdb.js';
import { users,userDocuments } from './auth.model.js';
import {eq} from 'drizzle-orm'

export const findbyemail =  async(email:string):Promise<userDocuments|null> =>{

    const db = await getDB()
    const result = await db.select()
        .from(users).where(eq(users.email,email)) //checks if email entered is same as in repository

    return result[0] || null;
}   


//session creation

