import styles from "./styles.module.css";
import { Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";

export default function Header() {
    const { theme, toggleTheme } = useTheme();

    return (
        <header className={styles.header}>
            <h1 className={styles.logoTitle}>SoloQuest</h1>
            <div
                className={styles.themeContainer}
                onClick={toggleTheme}>
                {theme === "light" ? <Moon size={32} /> : <Sun size={32} />}
            </div>
        </header>
    )
};