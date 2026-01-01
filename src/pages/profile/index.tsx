import styles from './styles.module.css';
import ROUTES from '@/core/constants/routes';
import { useNavigate } from 'react-router';
import { LogOut, Plus, UserPlus } from 'lucide-react';
import IMAGES from "@/core/constants/images"

const stats = [
  { label: 'Força', value: 1 },
  { label: 'Inteligência', value: 1 },
  { label: 'Velocidade', value: 1 },
  { label: 'Resistência', value: 1 },
  { label: 'Explosividade', value: 1 },
  { label: 'Artes Marciais', value: 1 },
  { label: 'Flexibilidade', value: 1 },
];

export default function ProfilePage() {
    const navigate = useNavigate();
    return (
        <div className="page">
            <div className='rowContainer'>
                <div className="columnContainer">
                    <h2>Chikage</h2>
                    <img
                        src="/src/assets/character.svg"
                        alt="character"
                        className={styles.character}
                    />
                </div>
                <div className={`columnContainer ${styles.spacement}`}>
                    {stats.map((stat) => (
                        <div className={`rowContainer ${styles.alignment}`} key={stat.label}>
                        <h3>{stat.label}: {stat.value.toString().padStart(2, '0')}</h3>
                        <Plus className={styles.icon} />
                        </div>
                    ))}
                </div>
            </div>
            <h3>Pontos disponíveis: 01</h3>
            <button>
                <img src={IMAGES.guild} />
                Criar uma guilda
            </button>
            <button className={styles.gap}>
                <UserPlus /> Adicionar Amigo
            </button>
            <button
                className={styles.gap}
                onClick={() => navigate(ROUTES.auth.login)}>
                <LogOut /> Sair
            </button>
        </div>
    )
}