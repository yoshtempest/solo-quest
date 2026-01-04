import DAILY_MISSIONS from '@/core/constants/daily';
import MissionList from "@/components/MissionsList";
import ReturnHome from "@/components/ReturnHome"

export default function DailyPage() {
    return (
        <div className="page">
            <div className='rowContainer'>
                <ReturnHome />
                <h2>Missões Diárias</h2>
            </div>
            <MissionList
                missionsData={DAILY_MISSIONS}
                containerClassName="justifyStart"
            />
        </div>
    );
}