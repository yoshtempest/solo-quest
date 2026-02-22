import { useState } from "react";
import IMAGES from "@/core/constants/images";

interface Props {
    missionsData: Mission[];
    onMissionCompleted?: (mission: Mission) => void;
};

export default function MissionList({
    missionsData,
    onMissionCompleted
}: Props) {
    const [missions, setMissions] = useState(missionsData);

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

    return (
        <>
            {missions.map((mission) => {
                const progress = mission.completed
                    ? `${mission.total}/${mission.total}${mission.unit}`
                    : `0/${mission.total}${mission.unit}`;

                const imageSrc = IMAGES[mission.image] ?? IMAGES.abs;
                return (
                    <div
                        key={mission.id}
                        className={`columnContainer justifyStart`}
                    >
                        <div className="rowContainer spacement">
                            <div className="rowContainer">
                                <img className="darkInvert" src={imageSrc} alt={mission.title} />
                                <h3>{mission.title}</h3>
                            </div>

                            <div className="rowContainer">
                                <h3>{progress}</h3>
                                <input
                                    type="checkbox"
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

                        <hr />
                    </div>
                );
            })}
        </>
    );
}
