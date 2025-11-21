import { useOutletContext } from "react-router-dom"

export default function HomePage(){

    const user = useOutletContext()
    
    return(
        <p>Hola {user.firstName}</p>
    )
}