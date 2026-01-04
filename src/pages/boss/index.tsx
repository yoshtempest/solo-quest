import styles from './styles.module.css'
import { ChevronRight } from 'lucide-react'
import BOSS_MISSIONS from '@/core/constants/boss';
import { useState } from "react";

export default function BossPage() {
    const [missions, setMissions] = useState(BOSS_MISSIONS);

    const [difficultyOpen, setDifficultyOpen] = useState(false);
    const [difficulty, setDifficulty] = useState("Fácil");
    const difficulties = ["Fácil", "Médio", "Difícil", "Insano", "Impossível"];

    function completeMission(id: string) {
        setMissions((prev) =>
            prev.map((mission) =>
                mission.id === id
                    ? { ...mission, completed: true }
                    : mission
            )
        );
    }
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
            {missions.map((mission) => {
                const progress = mission.completed
                ? `${mission.total}/${mission.total}${mission.unit}`
                : `0/${mission.total}${mission.unit}`;

                return (
                    <div
                        key={mission.id}
                        className={`columnContainer ${styles.justifyStart}`}
                    >
                        <div className="rowContainer spacement">
                            <div className="rowContainer">
                                <img src={mission.image} />
                                <h3>{mission.title}</h3>
                            </div>
                            <div className="rowContainer">
                                <h3>{progress}</h3>
                                <input
                                    type="checkbox"
                                    className="checkBox"
                                    checked={mission.completed}
                                    disabled={mission.completed}
                                    onChange={() => completeMission(mission.id)}
                                />
                            </div>
                        </div>
                        {mission.tasks.map((task, index) => (
                            <h4 key={index}>
                                {index + 1} - {task}
                            </h4>
                        ))}
                    </div>
                );
            })}
        </div>
    )
} 