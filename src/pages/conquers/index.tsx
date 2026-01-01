import styles from './styles.module.css'
import IMAGES from "@/core/constants/images";

export default function ConquersPage() {
    return (
        <div className="page">
            <div>
                <div className={styles.rowContainer}>
                    <div className={styles.moreBig}>
                        <img
                        src={IMAGES.bossBadge}
                        alt="Chefão"
                        className={styles.icon}
                        />
                    </div>
                    <div className={styles.columnContainer}>
                        <div className={styles.difficulties}>
                            <h4>Fácil</h4>
                            <h4>Médio</h4>
                            <h4>Difícil</h4>
                            <h4>Insano</h4>
                            <h4>Impossível</h4>
                        </div>
                        <div className={styles.item}>
                            <h3>Derrote Leonidas, o Guerreiro no modo Fácil</h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}