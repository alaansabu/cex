import { useState } from "react";
import { Form } from "../../../components/Form";
import  {ButtonOne} from "../../../components/Button"
    
export function LoginForm(){

const [serverError,setServerError] = useState('')
   const [credentials,setCredentials] = useState({

            email:'',
            password:''

    })
    const [loading,SetLoading] = useState(false)

   
    const HandleChange  = (e)=>{
 
        const {name,value} = e.target
         setCredentials(
        {
            ...credentials,
            [name]:value
        }
    )}
    // submit funcion validation and auth from backend 
    
    const HandleSubmit =async (e)=>{

        e.preventDefault();
        SetLoading(true)
        setServerError('')
      
        
        try {
            const response = await fetch("http://localhost:5000/api/v1/auth",
            {
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify(credentials)
            }

        )
        const data = await response.json()
        
        if(!response.ok){
            throw new Error("Something went wrong")
        }
        
        } catch (error) {
            setServerError(error.message)
        }finally{
            SetLoading(false)
        }
    }

    

    return(

        <div>
                <h1>Login page</h1>
                <Form
                    onChange={HandleChange}
                    values={credentials}
                    loading={loading}
                    error={serverError}
                >
                    

                <ButtonOne
                
                text={loading?"loading":"login"}
                type="submit"
                onClick={HandleSubmit}
                
                />
                
                </Form>
                
            
        </div>

    )

}

