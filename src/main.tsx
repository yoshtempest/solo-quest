import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "./routers";
import './globals.css'
import Header from "@/components/Header";
import TabBar from '@/components/TabBar';
import { PlayerProgressionProvider } from './contexts/PlayerProgression'
import { UserProvider } from "@/contexts/User";
import { BossProgressionProvider } from './contexts/BossProgression';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <PlayerProgressionProvider>
      <BossProgressionProvider>
        <UserProvider>
        <Header />
        <TabBar />
        <AllRoutes />
      </UserProvider>
      </BossProgressionProvider>
    </PlayerProgressionProvider>
  </BrowserRouter>
)
