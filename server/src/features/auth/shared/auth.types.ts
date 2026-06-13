
export interface loginCredentials {

    email:string,
    password:string

}
//the payload that shoul be returned
export interface loginPayload {

sessionId:string,
userId:number,
username:string,
status:string



}

export interface CreateSessionInput {

    userId:number,
    expiredAt:Date

}