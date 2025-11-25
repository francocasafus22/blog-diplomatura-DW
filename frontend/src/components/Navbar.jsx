import { useState } from "react";
import { LogOut} from "lucide-react"
import { Link } from "react-router-dom";

export default function Navbar({user}) {

    const [active, setActive] = useState(null)

    return (
        <nav className="flex items-center justify-between px-6 py-3">
        {/* Izquierda */}
        <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 cursor-pointer">
                <img src="/logo-notitas.png" className="w-10" />            
            </div>
        </div>
        <ul className="hidden md:flex md:gap-2">
            <Link to={"/notes"} className="hover:bg-primary py-2 px-5 rounded-xl hover:text-primary-foreground cursor-pointer transition-colors duration-200">Notas</Link>
            <Link to={"/explore"} className="hover:bg-primary py-2 px-5 rounded-xl hover:text-primary-foreground cursor-pointer transition-colors duration-200">Explorar</Link>
            <Link to={"/profile"} className="hover:bg-primary py-2 px-5 rounded-xl hover:text-primary-foreground cursor-pointer transition-colors duration-200">Perfil</Link>
        </ul>
        {/* Derecha */}
        <button className=" rounded-xl hover:text-celeste-500 transition-colors duration-200 cursor-pointer">
            <img src={user.image || "https://i.pinimg.com/736x/40/98/2a/40982a8167f0a53dedce3731178f2ef5.jpg"} className="w-12 rounded-full"></img>
        </button>
        </nav>
    );
}
