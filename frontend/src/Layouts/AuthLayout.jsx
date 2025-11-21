import { Outlet } from "react-router-dom";
import ToastNotifications from "../components/ui/ToastNotifications"


export default function AuthLayout(){

    return(
        <>
       
            <Outlet/>
            <ToastNotifications/>
        </>
    )
}