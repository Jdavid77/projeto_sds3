import Dashboard from "Pages/Dashboard";
import Home from "Pages/Home";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const RoutesConfig = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route path="/dashboard" element={ <Dashboard /> } />
        </Routes>
        </BrowserRouter>
    );
}

export default RoutesConfig;