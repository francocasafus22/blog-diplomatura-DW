import { useState } from "react";
import {useMutation} from "@tanstack/react-query"
import { login } from "../services/userService";
import { toast } from "react-toastify";
import { loginSchema } from "../schemas/userSchema";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const {mutate, isPending} = useMutation({
        mutationFn: login,
        onSuccess: async (data)=>{
            toast.success("Iniciaste sesión correctamente", {
                onClose: ()=>navigate("/"),
                autoClose: 2000
            })
            await cookieStore.set({
                name: "AUTH_TOKEN",
                value: data.token,
                httpOnly: true,
                path:"/"
            })
            
        },
        onError: async (error)=>{        
            toast.error(error.message)
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        const formData = {
            email,
            password
        }
        
        const result = loginSchema.safeParse(formData)
        
        if(!result.success){
            result.error.issues.map(issue=>toast.error(issue.message))
            
            return
        }

        mutate(formData)
    }

    return (
        <div className=" min-h-screen bg-gray-200  flex flex-col items-center justify-center px-10">

        <form className=" rounded-xl flex flex-col gap-2 w-full max-w-lg" onSubmit={(e)=>{handleSubmit(e)}}>
            <p className="text-center text-5xl text-blue-600 font-semibold">Iniciar Sesión</p>
            
                <label className="flex flex-col gap-1">
                    <span className="text-md font-medium ">Email</span>
                    <input
                    name="email"
                    type="email"
                    required
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-2 placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </label>
                <label className="flex flex-col gap-1">
                    <span className="text-md font-medium">Password</span>
                    <input
                    name="password"
                    required
                    type="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-2 placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
            
            <button className="bg-blue-600 rounded-lg py-2 mt-2 text-accent-foreground hover:bg-blue-700 transition-all duration-200 cursor-pointer " type="submit">{isPending ? "Cargando" : "Iniciar Sesión"}</button>
            <p className="text-sm text-center mt-5">¿No tienes cuenta? <span className="text-blue-600 font-bold">Registrate</span></p>
        </form>
        </div>
    );
}
