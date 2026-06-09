import { pgTable , varchar ,timestamp ,serial , integer, date} from "drizzle-orm/pg-core";


//users schema

export const users = pgTable('users',{

    userId:serial('user_id').primaryKey(),

    username:varchar('username',{length:50})
        .notNull()
        .unique(),

    password:varchar('password',{length:50})
        .notNull(),

    email:varchar("email",{length:50})
        .unique(),
       
    createdAt: timestamp('created_at', { withTimezone: true })
    .defaultNow()
    .notNull(),
})

//userprofile schema

export const userprofile = pgTable('userprofile',{

    profileId:serial('profile_id').primaryKey(),

    userId:integer('user_id')
    .references(() => users.userId),

    firstName:varchar('first_name',{length:10}),
    
    lastName:varchar('last_name',{length:10}),

    dob:date('dob').
        notNull(),

    phoneNumber:varchar('phonenumber',{length:15})
        .unique()
        .notNull() 
})

//sessiones schema

/* */

