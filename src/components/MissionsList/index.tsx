import { useState } from "react";

interface Props {
    missionsData: Mission[];
    checkboxClassName?: string;
    containerClassName?: string;
    showDivider?: boolean;
    onProgressChange?: (completed: number, total: number) => void;
    onAllCompleted?: () => void;
    onMissionCompleted?: (mission: Mission) => void;
};

export default function MissionList({
    missionsData,
    checkboxClassName,
    containerClassName = "justifyStart",
    showDivider = true,
    onProgressChange,
    onAllCompleted,
    onMissionCompleted
}: Props) {
    const [missions, setMissions] = useState(missionsData);

    function completeMission(id: string) {
        setMissions((prev) => {
            const updated = prev.map((mission) =>
                mission.id === id
                    ? { ...mission, completed: true }
                    : mission
            );

            const completedMission = prev.find(
                (mission) => mission.id === id
            );

            
            if (completedMission) {
                onMissionCompleted?.(completedMission);
            }

            const completedCount = updated.filter(
                (mission) => mission.completed
            ).length;

            const total = updated.length

            onProgressChange?.(completedCount, total);

            if (completedCount === total) {
                onAllCompleted?.();
            }

            return updated;
        });
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
