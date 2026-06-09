import { useState } from "react"


export const Form = ({values, onChange, onSubmit, children})=>{
 
    return(

        <div>

            <form onSubmit={onSubmit}> 


                <div>

                {/*this is input email part*/}
                    <input 
                    
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={onChange}
                    placeholder="Enter your registered emial"
                    required
                    />
                </div>


                <div>

                {/*this is input password part*/}
                    <input 
                    
                    type="password"
                    name="password"
                    value={values.password}
                    onChange={onChange}
                    placeholder="Enter your password"
                    required
                    />
                </div>
                    {children}
            </form>
            
        </div>


    )


}