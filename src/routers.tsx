import { Route, Routes } from "react-router";
import Main from "./pages/Main/Main";
import Card from "./pages/Card/Card";

function AppRoute() {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/card/:id" element={<Card />} />
        </Routes>
    );
}

export default AppRoute;
