import styles from './styles.module.css';
import DAILY_MISSIONS from '@/core/constants/missions';
import { useState } from "react";

export default function DiaryPage() {
    const [missions, setMissions] = useState(DAILY_MISSIONS);

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
        <div className="page">
            <h1>Missões Diárias</h1>
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
                                    className={styles.checkBox}
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
    );
}