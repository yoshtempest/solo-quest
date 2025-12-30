import ROUTES from "@/core/constants/routes";
import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import HomePage from "@/pages/home";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.auth.login} element={<LoginPage />} />
            <Route path={ROUTES.auth.register} element={<RegisterPage />} />
            <Route path={ROUTES.home} element={<HomePage />} />
        </Routes>
    )
}