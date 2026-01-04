import DAILY_MISSIONS from '@/core/constants/daily';
import { useState } from "react";
import ReturnHome from "@/components/ReturnHome"

export default function DailyPage() {
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
            <div className='rowContainer'>
                <ReturnHome />
                <h2>Missões Diárias</h2>
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