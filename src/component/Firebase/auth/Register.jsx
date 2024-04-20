import { useState } from "react"
import { auth } from "../../../config/firebase-config";
import { createUserWithEmailAndPassword} from 'firebase/auth'


import {Docadd} from "../crud/Crud";

const RegisterForm = ()=>{
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
        Docadd(formdata)
        
        await createUserWithEmailAndPassword(auth, formdata.email, formdata.password)
        .then((userCredential) => {
            console.log(`user registered`)
        })
        .catch((e) => {
          console.log(`error while register ${e}`)
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

export default RegisterForm