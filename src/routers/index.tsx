import ROUTES from "@/core/constants/routes";
import { Route, Routes } from "react-router";

const Login = import('@/pages/auth/login'));

export default function AllRoutes() {
    return (
        <Routes>
            <Route path={ROUTES.login} element={<Login />} />
        </Routes>
    )
}