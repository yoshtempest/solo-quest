import styles from "./styles.module.css";
import ROUTES from "@/core/constants/routes";
import { useIsTabRoute } from "@/hooks/useIsTabRoute";
import { useLocation, useNavigate } from "react-router";
import { House, Swords, Trophy, CircleUser } from "lucide-react";

export default function TabBar() {
    const navigate = useNavigate();
    const isTabRoute = useIsTabRoute();
    const location = useLocation();
    const pathname = location.pathname;

      const tabs = [
    { key: "home", route: ROUTES.home, label: "Home", icon: <House size={32} /> },
    { key: "boss", route: ROUTES.boss, label: "Chefão", icon: <Swords size={32} /> },
    { key: "conquers", route: ROUTES.conquers, label: "Conquistas", icon: <Trophy size={32} /> },
    { key: "profile", route: ROUTES.profile, label: "Perfil", icon: <CircleUser size={32} /> },
  ];

    return (
        <>
            {isTabRoute && (
                <div className={isTabRoute ? styles.tabBar : styles.invisible}>
                    {tabs.map((tab) => {
                        const isActive = pathname === tab.route;
                        return (
                            <button
                                key={tab.key}
                                onClick={() => navigate(tab.route)}
                                className={styles.button}
                            >
                                <div 
                                    className={`${styles.content} ${
                                        isActive ? styles.active : styles.inactive
                                    }`}>
                                    <div className={styles.images}>
                                    {tab.icon}
                                    </div>
                                    <h4>{tab.label}</h4>
                                </div>
                            </button>
                        );
                    })}
                </div>
            )}
        </>
    );
}