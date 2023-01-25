import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import ContactPages from "../pages/ContactPages";


export default function CustomsRoutes(){
    return (
        <Route>

            <Routes>
                <Route exact path="/" element={ContactPages}></Route>
            </Routes>
        </Route>
    )
}