import styles from "./styles.module.css";

type Props = {
    percentage: number;
};

export default function BossHp({ percentage }: Props) {
    return (
        <div className={styles.hpWrapper}>
            <div
                className={styles.hpBar}
                style={{
                    width: `${percentage}%`,
                    background:
                        percentage === 0
                            ? "linear-gradient(to left, #FF0000, red)"
                            : "linear-gradient(to left, red, darkred)",
                }}
            />
            <img
                src="/src/assets/bosshp3.svg"
                alt="Vida do Boss"
                className={styles.dragon}
            />
        </div>
    );
}
