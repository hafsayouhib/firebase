import { useState ,useEffect} from "react"
const Form = ()=>{
    const [formdata, setFormdata] = useState({
        fullname:"",
        password:""
    });

    const Onchange=(e)=>{
        const {name,value}=e.target
        setFormdata({...formdata ,[name]:value})  
    }


    const Onsumbit = (e)=>{
        e.preventDefault()
  
        const options =  { 
            method: "POST" ,
            headers: {
            "Content-Type": "application/json"
            },
            body:JSON.stringify(formdata)
        }


        fetch("http://localhost:1000",options)
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
        })
        .catch(e=>console.log(`error is ${e}`))

  
        // console.log(` ${name},${pass}`)
    }
    return(
        <form onSubmit={Onsumbit}>
            <input type="text" name='fullname' placeholder='enter name' onChange={Onchange} />
            <input type="password" name='password' placeholder="enter password"  onChange={Onchange}  />
            <input type="submit" />
        </form>
    )
}

export default Form