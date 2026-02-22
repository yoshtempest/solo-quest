import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "@/routers";
import '@/globals.css'
import Header from "@/components/Header";
import TabBar from '@/components/TabBar';
import { PlayerProgressionProvider } from '@/contexts/PlayerProgression'
import { UserProvider } from "@/contexts/User";
import { BossProgressionProvider } from '@/contexts/BossProgression';
import { ThemeProvider } from '@/contexts/ThemeContext';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <ThemeProvider>
      <PlayerProgressionProvider>
        <BossProgressionProvider>
          <UserProvider>
          <Header />
          <TabBar />
          <AllRoutes />
        </UserProvider>
        </BossProgressionProvider>
      </PlayerProgressionProvider>
    </ThemeProvider>
  </BrowserRouter>
)
