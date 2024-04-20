
import data from "../../data/json"
import { useState,useMemo } from "react"

const Usememo = ()=>{

    const [newdata,setNewdata]= useState(data)
    const [count , setCount] = useState(0)
    let num
    
    const appenddata = ()=>{
        setNewdata(
            [
                ...newdata,
                {
                    "userId": 10,
                    "id": 97,
                    "title": "new data",
                    "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
                }
            ]
        )
    }

    const expensivecalc = (data,num)=>{
        for( let i = 1; i<=data.length; i++){
            num+=i
        }
        return [data,count]
        
    }
     const countdata = ()=>{
        setCount((prev)=>prev+1)

     }
    const datalength = useMemo(()=>expensivecalc(newdata,num),[count])
    console.log(datalength)
    return(
        <>
            <h1>fetching data is</h1>
            <button onClick={appenddata}>
                append data
            </button>
            <button>
                count data {count}
            </button>
            {
                newdata.map((item,i)=>{
                    return(
                    <li key={i}>
                    {item.id} {item.title} {item.body}
                    </li>
                    )
                }
            )
            }
        </>
    )

}

export default Usememo