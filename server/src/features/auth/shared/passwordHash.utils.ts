import { hash, compare } from 'bcrypt-ts';

const SALT_ROUNDS = 10;

//HASING PART

export const hashPassword = async(password:string):Promise<string> =>{

    return hash(password, SALT_ROUNDS);
}

//verying password

export const verifyPassword = async(plain:string,hashed:string):Promise<boolean> =>{

    return compare(plain, hashed)

}