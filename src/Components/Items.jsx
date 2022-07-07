import axios from "axios";
import { useState } from "react"



export const ItemMaster = () => {

    const [data , setData] = useState({
        items : "",
        price : ""
    })

    const HandleChange = (e) => {

        const {id,value} = e.target;
        setData({...data , [id]: value})
    }
    console.log(data)

    const HandleSubmit = () => {
        
        axios.post("http://localhost:8080/itemMaster",data)
    }

    return(

        <>
        <h1>Add your Items</h1>
        <input type="text" id="items" placeholder="enter your item" onChange={HandleChange} />
        <input type="number" id="price" placeholder="enter your price" onChange={HandleChange} />
        <button onClick={HandleSubmit}>Submit</button>
        </>
    )
}