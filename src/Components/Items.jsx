import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"



export const ItemMaster = () => {

    const [itemData , setItemData] = useState([]) 
    const [data , setData] = useState({
        items : "",
        price : ""
    })

    useEffect(()=> getData(),[])

    const HandleChange = (e) => {

        const {id,value} = e.target;
        setData({...data , [id]: value})
    }
    //console.log(data)

    const HandleSubmit = () => {
        axios.post("http://localhost:8080/itemMaster",data)
    }

    const getData = () => {
        axios.get("http://localhost:8080/itemMaster").then((res) => setItemData(res.data))
    }

    return(

        <>
        
        <div className="itemBox">
        <h1>Add your Items</h1>
        <input type="text" id="items" placeholder="enter your item" onChange={HandleChange} />
        <input type="number" id="price" placeholder="enter your price" onChange={HandleChange} />
        <button onClick={HandleSubmit}>Submit</button>
        </div>

        {itemData.map((el)=>(
            <div id="box">
                <p>{el.id}.</p>
                <p>{el.items}</p> 
                <p>{el.price}</p>
                <button> Add To Cart </button>
            </div>
        ))}
        </>
    )
}