import { Route, Routes } from "react-router-dom"
import { Cart } from "../Cart"
import { ItemMaster } from "../Items"



export const AllRoutes = () => {

    return(

        <>
        <Routes>
            <Route path="/" element={<ItemMaster />} />
            <Route path="/cart/:id" element={<Cart />} />
        </Routes>
        </>
    )
}