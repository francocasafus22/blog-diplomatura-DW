import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { login } from "../services/userService";
import { toast } from "react-toastify";
import { loginSchema } from "../schemas/userSchema";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import InputForm from "../components/ui/InputForm";
import { useForm } from "react-hook-form";

export default function LoginPage() {
    const {register, handleSubmit} = useForm() 

    const navigate = useNavigate();

    const { mutate, isPending } = useMutation({
        mutationFn: login,
        onSuccess: (data) => {       
            toast.success(data.message);                     
            navigate("/")
        },  
        onError: (error) => {
        toast.error(error.message);
        },
    });

    const onSubmit = (data) => {

        const result = loginSchema.safeParse(data);

        if (!result.success) {
        result.error.issues.map((issue) => toast.error(issue.message));

        return;
        }

        mutate(result.data);
    };

    return (
        <form
        className=" rounded-xl flex flex-col gap-2 w-full max-w-lg"
        onSubmit={handleSubmit(onSubmit)}
        >
        <div className="flex flex-col items-center gap-3">
            <img src="/logo-notitas.png" className="w-18"></img>
            <p className="text-center text-3xl font-bold flex items-center gap-2">
            Notitas
            </p>            
            <p className="text-sidebar-ring">Explore and share notes with the world</p>
           
        </div>

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
            bg-primary text-primary-foreground
            text-warm-500 rounded-lg py-2 mt-2
            shadow-md transition-all duration-300 cursor-pointer
            hover:brightness-105 
        "
        type="submit"
        >
            {isPending ? "Cargando" : "Iniciar Sesión"}
        </button>
        <Link to={"/register"} className="text-sm text-center mt-5 group">
            Don´t have an account?{" "}
            <span className="text-primary font-bold ">
            Sign up
            </span>
        </Link>
        </form>
    );
}
