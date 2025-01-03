'use client';
import { useEffect } from 'react';

interface UseCloseElementOnClickProps {
    ref: React.RefObject<HTMLElement> ;
    onClickOutside: () => void;
}

export const useCloseElementOnClick = ({ ref, onClickOutside }: UseCloseElementOnClickProps): void => {
    return useEffect(() => {
        /**
         * Invoke Function onClick outside of element
         */
        function handleClickOutside(event: MouseEvent): void {
            // If the menu is open and the clicked target is not within the menu,
            // then close the menu
            if (ref.current && !ref.current.contains(event.target as Node)) {
                onClickOutside();
            }
        }
        // attach event listener to the body
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // cleanup event listener
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [ref, onClickOutside]);
};