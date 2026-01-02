import styles from './styles.module.css';
import IMAGES from "@/core/constants/images"

export default function DiaryPage() {
    return (
        <div className="page">
            <h1>Missões Diárias</h1>
            <div className={`columnContainer ${styles.justifyStart}`}>
                <div className={`rowContainer ${styles.spacement}`}>
                    <div className="rowContainer">
                        <img src={IMAGES.stretching}/>
                        <h3>Alongue-se</h3>
                    </div>
                    <div className="rowContainer">
                        <h3>0/5min</h3>
                        <input type="checkbox" className={styles.checkBox} />
                    </div>
                </div>

                <h4>1 - Alongamento lateral do pescoço</h4>
                <h4>2 - Alongamento de braço cruzado no peito</h4>
                <h4>3 - Panturrilha em pé (apoiado na parede)</h4>
                <hr />
            </div>

            <div className={`columnContainer ${styles.justifyStart}`}>
                <div className={`rowContainer ${styles.spacement}`}>
                    <div className="rowContainer">
                        <img src={IMAGES.run}/>
                        <h3>Corra</h3>
                    </div>
                    <div className="rowContainer">
                        <h3>0/10km</h3>
                        <input type="checkbox" className={styles.checkBox} />
                    </div>
                </div>

                <h4>1 - Corrida explosiva</h4>
                <h4>2 - Corrida contínua (ritmo constante)</h4>
                <h4>3 - Corrida intervalada</h4>
                <hr />
            </div>

            <div className={`columnContainer ${styles.justifyStart}`}>
                <div className={`rowContainer ${styles.spacement}`}>
                    <div className="rowContainer">
                        <img src={IMAGES.abdominal}/>
                        <h3>Abdômen</h3>
                    </div>
                    <div className="rowContainer">
                        <h3>0/10min</h3>
                        <input type="checkbox" className={styles.checkBox} />
                    </div>
                </div>

                <h4>1 - Abdominal tradicional</h4>
                <h4>2 - Prancha</h4>
                <h4>3 - Elevação de pernas deitado</h4>
                <hr />
            </div>

            <div className={`columnContainer ${styles.justifyStart}`}>
                <div className={`rowContainer ${styles.spacement}`}>
                    <div className="rowContainer">
                        <img src={IMAGES.pushUp}/>
                        <h3>Flexão</h3>
                    </div>
                    <div className="rowContainer">
                        <h3>0/100reps</h3>
                        <input type="checkbox" className={styles.checkBox} />
                    </div>
                </div>

                <h4>1 - Flexão tradicional</h4>
                <h4>2 - Flexão com pegada aberta</h4>
                <h4>3 - Flexão diamante (com pegada fechada)</h4>
                <hr />
            </div>

            <div className={`columnContainer ${styles.justifyStart}`}>
                <div className={`rowContainer ${styles.spacement}`}>
                    <div className="rowContainer">
                        <img src={IMAGES.lower}/>
                        <h3>Inferiores</h3>
                    </div>
                    <div className="rowContainer">
                        <h3>0/100reps</h3>
                        <input type="checkbox" className={styles.checkBox} />
                    </div>
                </div>

                <h4>1 - Elevação de panturrilha em pé</h4>
                <h4>2 - Elevação de quadril (ponte)</h4>
                <h4>3 - Avanço (passada) parado</h4>
                <hr />
            </div>
        </div>
    )
} 