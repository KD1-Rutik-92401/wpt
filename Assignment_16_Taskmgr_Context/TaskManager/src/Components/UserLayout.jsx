import { Outlet } from "react-router";
import { userContext } from "../App";
import { useContext } from "react";
import { Navbar } from "./Navbar";


export function UserLayout(){
    const{user}=useContext(userContext)

    return <div>
        <Navbar/>
        {/* <Navbar/> */}
        <h2>Hi {user?.name}</h2>

    <Outlet/>
    </div>
}