import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { getUser } from "../services/userService";

export const AuthContext = createContext()

export function AuthProvider({children}){
    const navigate = useNavigate()
    const queryClint = useQueryClient();

    const {data: user, isLoading, isError, refetch, error} = useQuery({
        queryKey: ["user"],
        queryFn: getUser,
        refetchOnWindowFocus: false,
        enabled: !!cookieStore.get("AUTH_TOKEN")
    })

    const logout = () => {
        cookieStore.delete("AUTH_TOKEN");
        queryClint.removeQueries(["user"]);
        toast.success("Sesión cerrada exitosamente")
        navigate("/login")
    }

    return(
        <AuthContext.Provider
        value={{user,isLoading, isError, refetch, error, logout}}>
            {children}
        </AuthContext.Provider>
    )
}