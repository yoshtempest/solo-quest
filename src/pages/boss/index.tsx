import styles from './styles.module.css'
import BOSS_MISSIONS from '@/core/constants/boss';
import Poppup from "@/components/Poppup";
import MissionList from '@/components/MissionsList';
import DifficultySelector from '@/components/DifficultySelector';
import { useState } from "react";
import { DIFFICULTY_ORDER } from "@/core/constants/difficulty";
import type { Difficulty } from "@/core/constants/difficulty";

export default function BossPage() {
    const [poppupVisible, setPoppupVisible] = useState(false);
    const [poppupMessage, setPoppupMessage] = useState("");

    const [bossLevel, setBossLevel] = useState(10);
    const [difficulty, setDifficulty] = useState<Difficulty>("Fácil");
    const [unlockedUntil, setUnlockedUntil] = useState<Difficulty>("Fácil");

    function allMissionsCompleted() {
        const currentIndex = DIFFICULTY_ORDER.indexOf(difficulty);
        const unlockedIndex = DIFFICULTY_ORDER.indexOf(unlockedUntil);

        // 🔒 Impede pular dificuldade repetindo fases antigas
        if (currentIndex !== unlockedIndex) return;

        const nextDifficulty = DIFFICULTY_ORDER[currentIndex + 1];
        if (!nextDifficulty) return;

        setUnlockedUntil(nextDifficulty);

        // 🔔 POPUP AUTOMÁTICO
        setPoppupMessage(`Dificuldade liberada: ${nextDifficulty}`);
        setPoppupVisible(true);
    }
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
                unlockedUntil={unlockedUntil}
                onChange={(newDifficulty, level) => {
                    setDifficulty(newDifficulty);
                    setBossLevel(level);
                }}
            />
            <MissionList 
                key={difficulty}
                missionsData={BOSS_MISSIONS}
                checkboxClassName={styles.checkBox}
                containerClassName={styles.justifyStart}
                showDivider={false}
                onAllCompleted={allMissionsCompleted}
            />
            <Poppup
                message={poppupMessage}
                visible={poppupVisible}
                onClose={() => setPoppupVisible(false)}
            />
        </div>
    )
} 