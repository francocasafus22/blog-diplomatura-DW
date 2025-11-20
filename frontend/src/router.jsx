import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import LoginPage from "./pages/LoginPage"
import AppLayout from "./Layouts/AppLayout"

export default function Router(){
    return(
        <BrowserRouter>
        
            <Routes>

                <Route element={<AppLayout/>}>
                    <Route path="/" element={<HomePage/>}></Route>
                </Route>
                <Route path="/login" element={<LoginPage/>}></Route>
            </Routes>
        
        </BrowserRouter>
)
}