import ROUTES from "@/core/constants/routes";
import { useLocation } from "react-router-dom";

export function useIsTabRoute() {
    const { pathname } = useLocation();
    const tabRoutes = [
        ROUTES.home,
        ROUTES.boss,
        ROUTES.conquers,
        ROUTES.profile,
    ];
    return tabRoutes.includes(pathname);
}