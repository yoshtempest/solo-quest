import IMAGES from "@/core/constants/images"


const BOSS_MISSIONS: Mission[] = [
    {
        id: "pushup",
        title: "Flexão",
        image: IMAGES.pushUp2,
        total: 50,
        unit: "rep",
        completed: false,

        tasks: [
            "Flexão tradicional",
            "Flexão com pegada aberta",
            "Flexão diamante (pegada fechada)"
        ]
    },
    {
        id: "bar",
        title: "Barra",
        image: IMAGES.bar,
        total: 50,
        unit: "rep",
        completed: false,

        tasks: [
            "Barra tradicional",
            "Barra isométrica (mantenha-se no topo)",
            "Barra negativa (descida lenta)"
        ]
    },
    {
        id: "dips",
        title: "Dips",
        image: IMAGES.dips,
        total: 50,
        unit: "rep",
        completed: false,

        tasks: [
            "Dip tradicional",
            "Dip entre bancos/cadeiras",
            "Dip russa"
        ]
    },
];

export default BOSS_MISSIONS;