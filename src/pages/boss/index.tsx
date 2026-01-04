import styles from './styles.module.css'
import { ChevronRight } from 'lucide-react'
import BOSS_MISSIONS from '@/core/constants/boss';
import MissionList from '@/components/MissionsList';
import { useState } from "react";

export default function BossPage() {
    const [difficultyOpen, setDifficultyOpen] = useState(false);
    const [difficulty, setDifficulty] = useState("Fácil");
    const difficulties = ["Fácil", "Médio", "Difícil", "Insano", "Impossível"];

    return (
        <div className={styles.bossPage}>
            <div className="columnContainer">
                <h3 className={styles.textCenter}>Leônidas, o Guerreiro - Nv 10</h3>
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
            <h3 className={styles.textCenter}>Nível recomendado: 10</h3>
            <div>
                <button onClick={() => setDifficultyOpen(!difficultyOpen)}>
                    Dificuldade: {difficulty}
                    <ChevronRight
                        className={difficultyOpen ? styles.rotate : ""}
                    />
                </button>

                {difficultyOpen && (
                    <div>
                        {difficulties.map((level) => (
                            <button
                                key={level}
                                className={styles.option}
                                onClick={() => {
                                    setDifficulty(level);
                                    setDifficultyOpen(false);
                                }}
                            >
                                {level}
                            </button>
                        ))}
                    </div>
                )}
            </div>
            <MissionList 
                missionsData={BOSS_MISSIONS}
                checkboxClassName={styles.checkBox}
                containerClassName={styles.justifyStart}
                showDivider={false}
            />
        </div>
    )
} 