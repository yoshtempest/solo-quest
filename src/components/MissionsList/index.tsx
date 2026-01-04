import { useState } from "react";

type MissionListProps = {
    missionsData: Mission[];
    checkboxClassName?: string;
    containerClassName?: string;
    showDivider?: boolean;
};

export default function MissionList({
    missionsData,
    checkboxClassName,
    containerClassName,
    showDivider = true
}: MissionListProps) {
    const [missions, setMissions] = useState(missionsData);

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
        <>
            {missions.map((mission) => {
                const progress = mission.completed
                    ? `${mission.total}/${mission.total}${mission.unit}`
                    : `0/${mission.total}${mission.unit}`;

                return (
                    <div
                        key={mission.id}
                        className={`columnContainer ${
                            containerClassName ?? ""
                        }`}
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
                                    className={checkboxClassName}
                                    checked={mission.completed}
                                    disabled={mission.completed}
                                    onChange={() =>
                                        completeMission(mission.id)
                                    }
                                />
                            </div>
                        </div>

                        {mission.tasks.map((task, index) => (
                            <h4 key={index}>
                                {index + 1} - {task}
                            </h4>
                        ))}

                        {showDivider && <hr />}
                    </div>
                );
            })}
        </>
    );
}
