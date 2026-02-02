import styles from './styles.module.css';
import ROUTES from '@/core/constants/routes';
import { useNavigate } from 'react-router';
import { useState } from "react";
import { LogOut, Plus, UserPlus, Minus, XSquare } from 'lucide-react';
import IMAGES from "@/core/constants/images"
import { useUser } from "@/contexts/User";
import { useStatsAllocation } from "@/hooks/useStatsAllocation";
import { usePlayer } from "@/contexts/PlayerProgression";
import Poppup from "@/components/Poppup";
import { usePopup } from "@/hooks/usePoppup";

export default function ProfilePage() {
    const poppup = usePopup();
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

    const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
    const mockUsers = [
        { id: 1, username: "ShadowWolf" },
        { id: 2, username: "LunaX" },
        { id: 3, username: "IronFist" },
        { id: 4, username: "Nyx" },
        { id: 5, username: "Blaze" },
        { id: 6, username: "Vortex" },
        { id: 7, username: "RogueStar" },
        { id: 8, username: "Phantom" },
        { id: 9, username: "CrimsonHawk" },
        { id: 10, username: "FrostByte" },
    ];
    const [friendName, setFriendName] = useState("");


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
                <div className='rowContainer' onClick={() => setIsAddFriendOpen(true)}>
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
            {isAddFriendOpen && (
            <div className={styles.overlay}>
                <div className={styles.modal}>
                    <div className='rowContainer'>
                        <input
                            type="text"
                            placeholder="Nome do usuário"
                            value={friendName}
                            className={styles.input}
                            onChange={(e) => setFriendName(e.target.value)}
                        />
                        <button
                            className={styles.closeButton}
                            onClick={() => setIsAddFriendOpen(false)}
                        >
                            <XSquare size={40} />
                        </button>
                    </div>
 
                    <div className={styles.userList}>

                        {mockUsers.map(user => (
                            <div
                                key={user.id}
                                className={styles.userItem}
                                onClick={() => setFriendName(user.username)}
                            >
                                <img
                                    src="/src/assets/usericon.svg"
                                    alt={user.username}
                                    className={styles.avatar}
                                />
                                <h4>{user.username}</h4>
                            </div>
                        ))}
                    </div>

                    <button className={styles.button} onClick={() => poppup.open(`Pedido de amizade enviado para ${friendName}`)}>
                        Enviar convite
                    </button>
                    <Poppup 
                        message={poppup.message}
                        visible={poppup.visible}
                        onClose={poppup.close}
                    />
                </div>
            </div>
        )}
        </div>
    )
}