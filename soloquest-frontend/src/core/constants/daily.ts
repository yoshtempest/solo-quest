const DAILY_MISSIONS: Mission[] = [
    {
        id: "stretch",
        title: "Alongue-se",
        image: "stretching",
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
        image: "run",
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
        image: "abs",
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
        image: "pushup",
        total: 100,
        unit: "rep",
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
        image: "lower",
        total: 100,
        unit: "rep",
        completed: false,

        tasks: [
            "Elevação de panturrilha em pé",
            "Elevação de quadril (ponte)",
            "Avanço (passada) parado"
        ]
    }
];

export default DAILY_MISSIONS;