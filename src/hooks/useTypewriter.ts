import { useState, useEffect } from 'react';

interface UseTypewriterProps {
    text: string;
    speed?: number;
    delay?: number;
}

export const useTypewriter = ({ text, speed = 70, delay = 0 }: UseTypewriterProps) => {
    const [displayText, setDisplayText] = useState('');
    const [currentIndex, setCurrentIndex] = useState(-1);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        // Initial delay before starting
        const delayTimeout = setTimeout(() => {
            setCurrentIndex(0);
        }, delay);

        return () => clearTimeout(delayTimeout);
    }, []); // Only run once on mount

    useEffect(() => {
        if (currentIndex >= 0 && currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, speed);

            return () => clearTimeout(timeout);
        } else if (currentIndex === text.length && !isComplete) {
            setIsComplete(true);
        }
    }, [currentIndex, text, speed, isComplete]);

    return { displayText, isComplete };
};
