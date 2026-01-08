import { createContext, useContext } from "react";
import { usePlayerProgression } from "@/hooks/usePlayerProgression";

const PlayerProgressionContext = createContext<ReturnType<typeof usePlayerProgression> | null>(null);

export function PlayerProgressionProvider({ children }: { children: React.ReactNode }) {
    const progression = usePlayerProgression();
    return (
        <PlayerProgressionContext.Provider value={progression}>
            {children}
        </PlayerProgressionContext.Provider>
    );
}

export function usePlayer() {
    const context = useContext(PlayerProgressionContext);
    if (!context) {
        throw new Error("usePlayer deve ser usado dentro de PlayerProgressionProvider");
    }
    return context;
}
