import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export default function useAuth(){
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth debe ser usado dentro de su provider")
    }

    return context
}