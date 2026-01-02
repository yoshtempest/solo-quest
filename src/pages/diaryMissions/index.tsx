import styles from './styles.module.css';
import IMAGES from "@/core/constants/images"
import { useState } from "react";

type Mission = {
    id: string;
    title: string;
    image: string;
    total: number;
    unit: string;
    completed: boolean;
    tasks: string[];
};

const INITIAL_MISSIONS: Mission[] = [
    {
        id: "stretch",
        title: "Alongue-se",
        image: IMAGES.stretching,
        total: 5,
        unit: "min",
        completed: false,
        tasks: [
            "Alongamento lateral do pescoço",
            "Alongamento de braço cruzado no peito",
            "Panturrilha em pé (apoiado na parede)"
        ]
    },
    {
        id: "run",
        title: "Corra",
        image: IMAGES.run,
        total: 10,
        unit: "km",
        completed: false,
        tasks: [
            "Corrida explosiva",
            "Corrida contínua (ritmo constante)",
            "Corrida intervalada"
        ]
    },
    {
        id: "abs",
        title: "Abdômen",
        image: IMAGES.abdominal,
        total: 10,
        unit: "min",
        completed: false,

        tasks: [
            "Abdominal tradicional",
            "Prancha",
            "Elevação de pernas deitado"
        ]
    },
    {
        id: "pushup",
        title: "Flexão",
        image: IMAGES.pushUp,
        total: 100,
        unit: "reps",
        completed: false,

        tasks: [
            "Flexão tradicional",
            "Flexão com pegada aberta",
            "Flexão diamante (pegada fechada)"
        ]
    },
    {
        id: "lower",
        title: "Inferiores",
        image: IMAGES.lower,
        total: 100,
        unit: "reps",
        completed: false,

        tasks: [
            "Elevação de panturrilha em pé",
            "Elevação de quadril (ponte)",
            "Avanço (passada) parado"
        ]
    }
];


export default function DiaryPage() {
    const [missions, setMissions] = useState(INITIAL_MISSIONS);

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