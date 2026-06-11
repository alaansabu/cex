import { pgTable , varchar ,timestamp ,serial , integer, date,boolean,} from "drizzle-orm/pg-core";


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

    status:varchar('status',{length:20})
    .default("Active")
    .notNull(),

    lastlogin:timestamp("lastlogin",{withTimezone:true})

})

export type userDocuments = typeof users.$inferSelect

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
//sessiones schema


export const sessions = pgTable('sessions',{


    sessionId: serial('session_id').primaryKey(),
    
    userId: integer('user_id')
        .notNull()
        .references(() => users.userId, { onDelete: 'cascade' }),
        
    
    sessionStart: timestamp('session_start', { withTimezone: true })
        .defaultNow() 
        .notNull(),
        
    sessionEnd: timestamp('session_end', { withTimezone: true }),

})

//security schema

export const security = pgTable('security', {
    securityId: serial('security_id').primaryKey(),
    
    
    userId: integer('user_id')
        .notNull()
        .unique() 
        .references(() => users.userId, { onDelete: 'cascade' }),
        
    is2faEnabled: boolean('is_2fa_enabled').default(false).notNull(),
    
    verificationCode: varchar('verification_code', { length: 6 }),
    
    codeExpiresAt: timestamp('code_expires_at', { withTimezone: true }),
});
