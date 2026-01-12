import styles from './styles.module.css';
import ROUTES from '@/core/constants/routes';
import { useNavigate } from 'react-router';
import { LogOut, Plus, UserPlus, Minus } from 'lucide-react';
import IMAGES from "@/core/constants/images"
import { usePlayer } from "@/contexts/PlayerProgression";
import { useUser } from "@/contexts/User";
import { useEffect, useState } from 'react';

const INITIAL_STATS = {
  STR: 1,
  INT: 1,
  SPD: 1,
  VIT: 1,
  BST: 1,
  CMB: 1,
  FLX: 1,
};

export default function ProfilePage() {
    const navigate = useNavigate();
    const { user } = useUser();
    const {formatLevel, availablePoints, spendPoints } = usePlayer();
    const [baseStats, setBaseStats] = useState(INITIAL_STATS);
    const [tempStats, setTempStats] = useState(INITIAL_STATS);
    const [spentPoints, setSpentPoints] = useState(0);

    function handleIncrease(statKey: keyof typeof INITIAL_STATS) {
        if (spentPoints >= availablePoints) return;
        setTempStats(prev => ({
            ...prev,
            [statKey]: prev[statKey] + 1
        }));
        setSpentPoints(prev => prev + 1);
    }

    function handleDecrease(statKey: keyof typeof INITIAL_STATS) {
        if (spentPoints <= 0) return;
        setTempStats(prev => ({
            ...prev,
            [statKey]: prev[statKey] - 1
        }));
        setSpentPoints(prev => prev - 1);
    }

    function handleConfirm() {
        if (spentPoints <= 0) return;
        if (spentPoints > availablePoints) return;

        setBaseStats(tempStats);
        spendPoints(spentPoints);
        setSpentPoints(0);
    }

    useEffect(() => {
        setTempStats(baseStats);
    }, [baseStats]);

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
                                <Minus onClick={() => handleDecrease(key as any)} className={styles.icon} />
                                <Plus onClick={() => handleIncrease(key as any)} className={styles.icon} />
                            </div>
                        </div>
                    ))}
                    <button onClick={() => handleConfirm()} className={styles.button}>Confirmar</button>
                </div>
            </div>
            <h3>Pontos disponíveis: {availablePoints - spentPoints}</h3>
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