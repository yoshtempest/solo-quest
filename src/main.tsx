import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AllRoutes from "./routers/index.tsx";
import './globals.css'
import Header from "@/components/Header/index.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      <AllRoutes />
    </BrowserRouter>
  </StrictMode>
)
