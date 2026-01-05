import styles from './styles.module.css'
import BOSS_MISSIONS from '@/core/constants/boss';
import MissionList from '@/components/MissionsList';
import DifficultySelector from '@/components/DifficultySelector';
import { useState } from "react";

type Difficulty = "Fácil" | "Médio" | "Difícil" | "Insano" | "Impossível";

export default function BossPage() {
    const [bossLevel, setBossLevel] = useState(10);
    const [difficulty, setDifficulty] = useState<Difficulty>("Fácil");

    return (
        <div className={styles.bossPage}>
            <div className="columnContainer">
                <h3 className={styles.textCenter}>Leônidas, o Guerreiro - Nv {bossLevel}</h3>
                <img
                    src="/src/assets/bosshp.svg"
                    alt="Leonidas"
                    className={styles.boss}
                />
                <img
                    src="/src/assets/leonidas.svg"
                    alt="Leonidas"
                    className={styles.boss}
                />
            </div>
            <h3 className={styles.textCenter}>Nível recomendado: {bossLevel}</h3>
            <DifficultySelector
                value={difficulty}
                onChange={(newDifficulty, level) => {
                    setDifficulty(newDifficulty);
                    setBossLevel(level);
                }}
            />
            <MissionList 
                missionsData={BOSS_MISSIONS}
                checkboxClassName={styles.checkBox}
                containerClassName={styles.justifyStart}
                showDivider={false}
            />
        </div>
    )
} 