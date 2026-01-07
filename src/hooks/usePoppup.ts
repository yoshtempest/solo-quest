import { useState } from "react";

export function usePopup() {
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState("");

    function open(msg: string) {
        setMessage(msg);
        setVisible(true);
    }

    function close() {
        setVisible(false);
    }

    return { visible, message, open, close };
}
