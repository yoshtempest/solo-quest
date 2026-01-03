import IMAGES from "@/core/constants/images"

type Mission = {
    id: string;
    title: string;
    image: string;
    total: number;
    unit: string;
    completed: boolean;
    tasks: string[];
};

const WEEKLY_MISSIONS: Mission[] = [
    {
        id: "stretch",
        title: "Alongue-se",
        image: IMAGES.stretching,
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
        image: IMAGES.squat,
        total: 80,
        unit: "rep",
        completed: false,
        tasks: [
            "Agachamento tradicional",
            "Agachamento sumô",
            "Agachamento com pausa (desce e  fica 2s)"
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
        image: IMAGES.abs,
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
        image: IMAGES.pushUp,
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
        image: IMAGES.planche,
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
        image: IMAGES.addicted,
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