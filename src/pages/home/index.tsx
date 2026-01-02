import styles from './styles.module.css';
import { CircleFadingArrowUp, Flame, Award, Skull } from 'lucide-react';
import ROUTES from '@/core/constants/routes';
import { useNavigate } from 'react-router';

export default function HomePage() {
    const navigate = useNavigate();
    return (
        <div className="page">
            <div className="rowContainer">
                <div className="columnContainer">
                    <h2>Chikage</h2>
                    <img
                        src="/src/assets/character.svg"
                        alt="character"
                        className={styles.character}
                    />
                </div>
                <div className={styles.characterInfos}>
                    <h3>Nível: 01</h3>
                    <div className='rowContainer'>
                        <Award />
                        <h4>Ranque: Frango</h4>
                    </div>
                    <div className='rowContainer'>
                        <Flame />
                        <h4>Ofensiva: 0 dias</h4>
                    </div>
                    <div className='rowContainer'>
                        <Skull />
                        <h4>Bosses derrotados: 0</h4>
                    </div>
                    <h4>10 de XP para o próximo nível</h4>
                    <div className="rowContainer">
                        <h3>EXP</h3>
                        <div className={styles.xpBar}>
                            <CircleFadingArrowUp className={styles.icon}/>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate(ROUTES.diaryMissions)}>Missões Diárias</button>
            <button>Missões Semanais</button>
        </div>
    )
} 