import { useState,useEffect } from "react";
const Call=() =>{
    const [message, setMessage] = useState("");

    useEffect(() => {
      fetch("http://localhost:8000/message")
        .then((res) => res.json())
        .then((data) => setMessage(data));
        console.log( message)
    });
  
    return (
      <div >
        <p>post request</p>
        {/* <h1>{message}</h1> */}
      </div>
    );
}
