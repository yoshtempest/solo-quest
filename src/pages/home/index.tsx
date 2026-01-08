import styles from './styles.module.css';
import { CircleFadingArrowUp, Flame, Award, Skull, CalendarFold, Annoyed } from 'lucide-react';
import ROUTES from '@/core/constants/routes';
import { useNavigate } from 'react-router';
import Poppup from "@/components/Poppup";
import { usePlayerProgression } from '@/hooks/usePlayerProgression';

export default function HomePage() {
    const navigate = useNavigate();

    const {
        rank,
        xpToNextLevel,
        xpPercent,
        formatLevel,
        poppup
    } = usePlayerProgression();

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
                    <h3>Nível: {formatLevel()}</h3>
                    <div className='rowContainer'>
                        <Award />
                        <h4>Ranque: {rank}</h4>
                    </div>
                    <div className='rowContainer'>
                        <Flame />
                        <h4>Ofensiva: 0 dias</h4>
                    </div>
                    <div className='rowContainer'>
                        <Skull />
                        <h4>Bosses derrotados: 0</h4>
                    </div>
                    <h4>{xpToNextLevel} de XP para o próximo nível</h4>
                    <div className="rowContainer">
                        <h3>EXP</h3>
                        <div className={styles.xpBar}>
                            <div
                                className={styles.xpFill}
                                style={{ width: `${xpPercent}%` }}
                            />
                            <CircleFadingArrowUp className={styles.icon}/>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={() => navigate(ROUTES.missions.daily)}>
                <div className='rowContainer'>
                    <CalendarFold />
                    Missões Diárias
                </div>
            </button>
            <button onClick={() => navigate(ROUTES.missions.weekly)}>
                <div className='rowContainer'>
                    <CalendarFold />
                    Missões Semanais
                </div>
            </button>
            <h2>Conquistas Adquiridas</h2>
            <Annoyed className={styles.face}/>
            <h3 className='textCenter'>Você ainda não adquiriu nenhuma conquista</h3>
            <Poppup 
                message={poppup.message}
                visible={poppup.visible}
                onClose={poppup.close}
            />
        </div>
    )
} 