import{z} from 'zod'

export const inputvalidation = z.object({

body:z.object({
    email:z.email("Invalid email format").trim().toLowerCase(),

    password:z.string().min(1,"password is required").max(100)
})


}).strict()


// input is done in routes 