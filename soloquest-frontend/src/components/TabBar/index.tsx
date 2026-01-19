import styles from "./styles.module.css";
import ROUTES from "@/core/constants/routes";
import IMAGES from "@/core/constants/images";
import { useIsTabRoute } from "@/hooks/useIsTabRoute";
import { useLocation, useNavigate } from "react-router";

export default function TabBar() {
    const navigate = useNavigate();
    const isTabRoute = useIsTabRoute();
    const location = useLocation();
    const pathname = location.pathname;

      const tabs = [
    { key: "home", route: ROUTES.home, label: "Home", icon: IMAGES.home },
    { key: "boss", route: ROUTES.boss, label: "Chefão", icon: IMAGES.boss },
    { key: "conquers", route: ROUTES.conquers, label: "Conquistas", icon: IMAGES.conquers },
    { key: "profile", route: ROUTES.profile, label: "Perfil", icon: IMAGES.profile },
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
                                    <img
                                        className={styles.images}
                                        src={tab.icon}
                                        alt={tab.label}
                                        width={100}
                                        height={100}
                                    />
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