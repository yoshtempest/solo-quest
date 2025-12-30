import ROUTES from "@/core/constants/routes";
import { Route, Routes } from "react-router-dom";
import LoginPage from "@/pages/auth/login";
import RegisterPage from "@/pages/auth/register";
import HomePage from "@/pages/home";
import BossPage from "@/pages/boss";
import ConquersPage from "@/pages/conquers";
import ProfilePage from "@/pages/profile";

export default function AllRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.auth.login} element={<LoginPage />} />
            <Route path={ROUTES.auth.register} element={<RegisterPage />} />
            <Route path={ROUTES.home} element={<HomePage />} />
            <Route path={ROUTES.boss} element={<BossPage />} />
            <Route path={ROUTES.conquers} element={<ConquersPage />} />
            <Route path={ROUTES.profile} element={<ProfilePage />} />
        </Routes>
    )
}