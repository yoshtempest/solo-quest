import styles from './styles.module.css'
import { ChevronRight } from 'lucide-react'
import BOSS_MISSIONS from '@/core/constants/boss';
import { useState } from "react";

export default function BossPage() {
    const [missions, setMissions] = useState(BOSS_MISSIONS);

    function toggleMission(id: string) {
        setMissions((prev) =>
            prev.map((mission) =>
                mission.id === id
                    ? { ...mission, completed: !mission.completed }
                    : mission
            )
        );
    }
    return (
        <div className={styles.bossPage}>
            <div>
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
                <button>Dificuldade: Fácil<ChevronRight/></button>
                {missions.map((mission) => {
                    const progress = mission.completed
                    ? `${mission.total}/${mission.total}${mission.unit}`
                    : `0/${mission.total}${mission.unit}`;

                    return (
                        <div
                            key={mission.id}
                            className={`columnContainer ${styles.justifyStart}`}
                        >
                            <div className={`rowContainer ${styles.spacement}`}>
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
                                        onChange={() => toggleMission(mission.id)}
                                    />
                                </div>
                            </div>
                            {mission.tasks.map((task, index) => (
                                <h4 key={index}>
                                    {index + 1} - {task}
                                </h4>
                            ))}
                            <hr />
                        </div>
                    );
                })}
            </div>
        </div>
    )
} 