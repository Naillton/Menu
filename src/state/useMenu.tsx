import { useState } from "react";

export function useMenu() {
    const [isOpen, setIsOpen] = useState<number | null>(null);


    const toggleMenu = (index: number) => {
        setIsOpen((prev) => (prev === index ? null : index));
    }

    return { isOpen, toggleMenu };
}