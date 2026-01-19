import { SquareArrowLeft } from "lucide-react";
import { useNavigate } from 'react-router';
import ROUTES from "@/core/constants/routes";
import styles from "./styles.module.css"


export default function ReturnHome() {
    const navigate = useNavigate();
    return (
        <SquareArrowLeft
            onClick={() => navigate(ROUTES.home)}
            className={styles.icon}
        />
    )
};