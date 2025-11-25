import { useMutation } from "@tanstack/react-query";
import InputForm from "../components/ui/InputForm";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";
import { registerUser } from "../services/userService";
import {useForm} from "react-hook-form"

export default function RegisterPage(){

    const navigate = useNavigate()
    const {register, handleSubmit} = useForm()

    const {mutate, isPending} = useMutation({
        mutationFn: registerUser,
        onSuccess: (data)=>{
            toast.success(data.message, {
                onClose: ()=>navigate("/login"),
                autoClose: 2000
            });
            
        },
        onError: (error)=>{console.log(error)}
    })

    const onSubmit = (data) => {
        mutate(data)     
    }
    return(
        <form
        className=" rounded-xl flex flex-col gap-2 w-full max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
        >
        <div className="flex flex-col-reverse items-center gap-2">
            <p className="text-sidebar-ring">Explore and share notes with the world</p>
            <p className="text-center text-2xl font-medium">
            Sign up for <span className="">Notitas</span>
            </p>

            <img src="logo-notitas.png" alt="Logo Notitas" className="w-18" />
            
        </div>

        
        <InputForm
            label={"Username"}
            name={"username"}                        
            placeholder={"Enter your username"}
            register = {register}
            required
        />
        
        
        <InputForm
            label={"Email"}
            name={"email"}
            type={"email"}
            required
            placeholder={"Enter your email"}
            register={register}
            
        />
        
        <InputForm
            label={"Password"}
            name={"password"}
            type={"password"}
            required
            placeholder={"Enter password"}
            register={register}
            
        ></InputForm>

        <button
            className="
            bg-primary text-primary-foreground rounded-lg py-2 mt-2
            transition-all duration-300 cursor-pointer
            hover:shadow-2xl
        "
        >
            {isPending ? "Cargando" : "Create account"}
        </button>
        <Link to={"/login"} className="text-sm text-center mt-5 group">
            ¿Already have an account?{" "}
            <span className="text-primary font-bold ">
            Log in
            </span>
        </Link>
        </form>
    )
}