import { useState } from "react"
import { auth } from "../../../config/firebase-config";
import { signInWithEmailAndPassword} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'

const LoginForm = ()=>{
    const navigate = useNavigate()
    const [formdata, setFormdata] = useState({
        email:"",
        password:""
    });

    const Onchange=(e)=>{
        const {name,value}=e.target
        setFormdata({...formdata ,[name]:value})  
    }


    const Onsumbit  =async  (e)=>{
        e.preventDefault()
        console.log(formdata)
        
        signInWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          console.log(user)
          navigate('/dashboard')
          // ...
        })
        .catch((error) => {
          console.log(error)
        });
       
        setFormdata(
            {
                email:"",
                password:""
            }
        )
    }

    
    return(
        <form onSubmit={Onsumbit}>
            <input type="email" name='email' placeholder='enter email' onChange={Onchange} />
            <input type="password" name='password' placeholder="enter password"  onChange={Onchange}  />
            <input type="submit" />
        </form>
    )
}

export default LoginForm