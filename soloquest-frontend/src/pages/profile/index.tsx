import styles from './styles.module.css';
import ROUTES from '@/core/constants/routes';
import { useNavigate } from 'react-router';
import { LogOut, Plus, UserPlus, Minus } from 'lucide-react';
import IMAGES from "@/core/constants/images"
import { useUser } from "@/contexts/User";
import { useStatsAllocation } from "@/hooks/useStatsAllocation";
import { usePlayer } from "@/contexts/PlayerProgression";

export default function ProfilePage() {
    const navigate = useNavigate();
    const { user } = useUser();
    const { formatLevel } = usePlayer();
    const {
        tempStats,
        remainingPoints,
        increase,
        decrease,
        confirm,
    } = useStatsAllocation();

    return (
        <div className="page">
            <div className='rowContainer'>
                <div className="columnContainer">
                    <h2>{user?.username}</h2>
                    <img
                        src="/src/assets/character.svg"
                        alt="character"
                        className={styles.character}
                    />
                <h3>Nível: {formatLevel()}</h3>
                </div>
                <div className={`columnContainer ${styles.spacement}`}>
                    {Object.entries(tempStats).map(([key, value]) => (
                        <div className={`rowContainer ${styles.alignment}`} key={key}>
                            <h3>{key}: {String(value).padStart(2, '0')}</h3>
                            <div className='rowContainer'>
                                <Minus onClick={() => decrease(key as any)} className={styles.icon} />
                                <Plus onClick={() => increase(key as any)} className={styles.icon} />
                            </div>
                        </div>
                    ))}
                    <button onClick={confirm} className={styles.button}>Confirmar</button>
                </div>
            </div>
            <h3>Pontos disponíveis: {remainingPoints}</h3>
            <button>
                <div className='rowContainer'>
                    <img src={IMAGES.guild} />
                    Criar uma guilda
                </div>
            </button>
            <button>
                <div className='rowContainer'>
                    <UserPlus /> 
                    Adicionar Amigo
                </div>
            </button>
            <button onClick={() => navigate(ROUTES.auth.login)}>
                <div className='rowContainer'>
                    <LogOut />
                    Sair
                </div>
            </button>
        </div>
    )
}