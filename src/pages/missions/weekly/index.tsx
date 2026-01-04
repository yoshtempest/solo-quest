import WEEKLY_MISSIONS from '@/core/constants/weekly';
import { useState } from "react";
import ReturnHome from "@/components/ReturnHome"

export default function WeeklyPage() {
    const [missions, setMissions] = useState(WEEKLY_MISSIONS);

    function completeMission(id: string) {
        setMissions((prev) =>
            prev.map((mission) =>
                mission.id === id
                    ? { ...mission, completed: true}
                    : mission
            )
        );
    }
    return (
        <div className="page">
            <div className='rowContainer'>
                <ReturnHome />
                <h2>Missões Semanais</h2>
            </div>
            {missions.map((mission) => {
                const progress = mission.completed
                ? `${mission.total}/${mission.total}${mission.unit}`
                : `0/${mission.total}${mission.unit}`;

                return (
                    <div
                        key={mission.id}
                        className="columnContainer justifyStart"
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
                        <hr />
                    </div>
                );
            })}
        </div>
    );
}