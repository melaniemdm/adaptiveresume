import { HashRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "../components/LandingPage";
import ContactPages from "../pages/ContactPages";


export default function CustomsRoutes(){
    return (
        <Router>

            <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/accueil" element={<LandingPage />} />
            <Route exact path="/demandeContact" element={<ContactPages />} />
            </Routes>
        </Router>
    )
}