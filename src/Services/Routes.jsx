import {Route, Routes} from "react-router-dom";
import { Main } from "../Pages/Main/Main";
import { About } from "../Pages/About/About";
import { User } from "../Pages/User/User";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/user:id" element={<User/>}/>
        </Routes>
    )
}