import { useEffect } from "react";

export function useMenuClose(isMenuOpen, closeMenu) {

    useEffect(() => {

        if (!isMenuOpen) return;

        const handleOverlay = (event) => {

            if (event.target.classList.contains("menu_open")) {
                closeMenu();
            }
        };

        const handleEscape = (event) => {

            if (event.key === 'Escape') {
                closeMenu();
            }

        };

        document.addEventListener("mousedown", handleOverlay);
        document.addEventListener("keydown", handleEscape);

        return () => {

            document.removeEventListener("mousedown", handleOverlay);
            document.removeEventListener("keydown", handleEscape);

        };

    }, [isMenuOpen, closeMenu])

}