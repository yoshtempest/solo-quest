import styles from "./styles.module.css";
// import ROUTES from "@/core/constants/routes";
import { Home, CircleUser, Medal } from "lucide-react";

export default function TabBar() {
//       const tabs = [
//     { key: "home", route: ROUTES.home, label: "Home" },
//     // { key: "boss", route: ROUTES.boss, label: "Passagens" },
//     // { key: "conquers", route: ROUTES.conquers, label: "Motorista" },
//     // { key: "profile", route: ROUTES.profile, label: "Perfil" },
//   ];

    return (
        <div className={styles.tabBar}>
            <div className="columnContainer">
                <Home />
                <h4>Home</h4>
            </div>
            <div className="columnContainer">
                <img src="/src/assets/boss-icon.svg" alt="boss icon" className={styles.boss}/>
                <h4>Boss</h4>
            </div>
            <div className="columnContainer">
                <Medal />
                <h4>Conquistas</h4>
            </div>
            <div className="columnContainer">
                <CircleUser />
                <h4>Perfil</h4>
            </div>
        </div>
    )
};