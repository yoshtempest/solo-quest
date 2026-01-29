import { useState, useEffect, useRef } from "react";

interface Props {
    missionsData: Mission[];
    checkboxClassName?: string;
    containerClassName?: string;
    showDivider?: boolean;
    onProgressChange?: (completed: number, total: number) => void;
    onAllCompleted?: () => void;
    onMissionCompleted?: (mission: Mission) => void;
};

export default function BossMissions({
    missionsData,
    checkboxClassName,
    containerClassName = "justifyStart",
    showDivider = true,
    onProgressChange,
    onAllCompleted,
    onMissionCompleted
}: Props) {
    const [missions, setMissions] = useState(missionsData);
    const allCompletedRef = useRef(false);

    function completeMission(id: number) {
        setMissions((prev) => {
            const updated = prev.map((mission) =>
            (Number(mission.id)) === id
                ? { ...mission, completed: true }
                : mission
            );

            const completedMission = prev.find(
            mission => (Number(mission.id)) === id
            );

            if (completedMission) {
            onMissionCompleted?.(completedMission);
            }

            return updated;
        });
    }
    useEffect(() => {
        const completedCount = missions.filter(m => m.completed).length;
        const total = missions.length;

        onProgressChange?.(completedCount, total);

        if (
            completedCount === total &&
            total > 0 &&
            !allCompletedRef.current
        ) {
            allCompletedRef.current = true;
            onAllCompleted?.();
        }

        if (completedCount < total) {
            allCompletedRef.current = false;
        }
    }, [missions, onProgressChange, onAllCompleted]);

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
                                <mission.image />
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
                                        completeMission(Number(mission.id))
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
