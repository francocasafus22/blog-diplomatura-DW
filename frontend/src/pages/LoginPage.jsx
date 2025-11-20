import { useState } from "react";

export default function LoginPage() {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    return (
        <div className=" min-h-screen  flex flex-col items-center justify-center px-10">

        <form className="px-15 py-8 rounded-xl flex flex-col gap-2 w-full max-w-lg">
            <p className="text-center text-5xl text-blue-600 font-semibold">Iniciar Sesión</p>
            
                <label className="flex flex-col gap-1">
                    <span className="text-md font-medium ">Email</span>
                    <input
                    name="email"
                    id="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-2 placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-blue-500"/>
                </label>
                <label className="flex flex-col gap-1">
                    <span className="text-md font-medium">Password</span>
                    <input
                    name="password"
                    id="password"
                    placeholder="Enter password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border border-gray-300 rounded-lg py-2 px-2 placeholder:text-placeholder focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </label>
            
            <button className="bg-blue-600 rounded-lg py-2 mt-2 text-accent-foreground hover:bg-blue-700 transition-all duration-200 cursor-pointer ">Iniciar Sesión</button>
            <p className="text-sm text-center mt-5">¿No tienes cuenta? <span className="text-blue-600 font-bold">Registrate</span></p>
        </form>
        </div>
    );
}
