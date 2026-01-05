import { useEffect } from "react";
import styles from "./styles.module.css";

interface Props {
    message: string;
    visible: boolean;
    duration?: number; // ms (default 5000)
    onClose: () => void;
}

export default function Poppup({
    message,
    visible,
    duration = 5000,
    onClose
}: Props) {

    useEffect(() => {
        if (!visible) return;

        const timer = setTimeout(onClose, duration);

        return () => clearTimeout(timer);
    }, [visible, duration, onClose]);

    if (!visible) return null;

    return (
        <div className={styles.poppup}>
            <h3>{message}</h3>
        </div>
    );
}
