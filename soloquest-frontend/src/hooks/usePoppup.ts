import { useState, useCallback, useEffect } from "react";

interface Props {
    message: string;
    priority: number;
}

export function usePopup() {
    const [queue, setQueue] = useState<Props[]>([]);
    const [current, setCurrent] = useState<Props | null>(null);

    const open = useCallback((message: string, priority = 2) => {
        setQueue(prev =>
            [...prev, { message, priority }]
                .sort((a, b) => a.priority - b.priority)
        );
    }, []);

    const close = useCallback(() => {
        setCurrent(null);
    }, []);

    // sempre que não houver popup ativo, puxa o próximo da fila
    useEffect(() => {
        if (!current && queue.length > 0) {
            const [next, ...rest] = queue;
            setCurrent(next);
            setQueue(rest);
        }
    })

    return {
        visible: !!current,
        message: current?.message ?? "",
        open,
        close
    };
}
