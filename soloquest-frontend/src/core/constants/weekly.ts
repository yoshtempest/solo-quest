const WEEKLY_MISSIONS: Mission[] = [
    {
        id: "stretch",
        title: "Alongue-se",
        image: "stretching",
        total: 45,
        unit: "min",
        completed: false,
        tasks: [
            "Alongamento lateral do pescoço",
            "Alongamento de braço cruzado no peito",
            "Panturrilha em pé (apoiado na parede)"
        ]
    },
    {
        id: "squat",
        title: "Agachamento",
        image: "squat",
        total: 80,
        unit: "rep",
        completed: false,
        tasks: [
            "Agachamento tradicional",
            "Agachamento sumô",
            "Agachamento pausado (desce e  fica 3s)"
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
        total: 100,
        unit: "rep",
        completed: false,

        tasks: [
            "Abdominal tradicional",
            "Abdominal infra (elevação de pernas)",
            "Abdominal com toque no calcanhar"
        ]
    },
    {
        id: "pushup",
        title: "Flexão",
        image: "pushup",
        total: 500,
        unit: "rep",
        completed: false,

        tasks: [
            "Flexão tradicional",
            "Flexão com pegada aberta",
            "Flexão diamante (pegada fechada)"
        ]
    },
    {
        id: "planche",
        title: "Prancha",
        image: "planche",
        total: 10,
        unit: "min",
        completed: false,

        tasks: [
            "Prancha tradicional",
            "Prancha lateral",
            "Prancha alta"
        ]
    },
    {
        id: "addicted",
        title: "Viciado em treino",
        image: "addicted",
        total: 5,
        unit: "h",
        completed: false,

        tasks: [
            "Treine até a exaustão sem interrupção",
            "Complete 3 sessões de treino",
            "Finalize um treino completo (corpo todo)"
        ]
    }
];

export default WEEKLY_MISSIONS;