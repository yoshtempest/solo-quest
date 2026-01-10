import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "./routers";
import './globals.css'
import Header from "@/components/Header";
import TabBar from '@/components/TabBar';
import { PlayerProgressionProvider } from './contexts/PlayerProgression'
import { UserProvider } from "@/contexts/User";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <PlayerProgressionProvider>
        <UserProvider>
          <Header />
          <TabBar />
          <AllRoutes />
        </UserProvider>
      </PlayerProgressionProvider>
    </BrowserRouter>
  </StrictMode>
)
