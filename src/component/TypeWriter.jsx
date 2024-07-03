import React, { useState, useEffect } from 'react';

const Typewriter = ({ text, speed = 100, pause = 2000 }) => {
    const [displayedText, setDisplayedText] = useState('');
    const [index, setIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        let timeoutId;
        if (index < text.length && !isDeleting) {
            timeoutId = setTimeout(() => {
                setDisplayedText(text.slice(0, index + 1));
                setIndex(index + 1);
            }, speed);
        } else if (index === text.length && !isDeleting) {
            timeoutId = setTimeout(() => {
                setIsDeleting(true);
            }, pause);
        } else if (isDeleting && index > 0) {
            timeoutId = setTimeout(() => {
                setDisplayedText(text.slice(0, index - 1));
                setIndex(index - 1);
            }, speed);
        } else if (isDeleting && index === 0) {
            setIsDeleting(false);
        }

        return () => clearTimeout(timeoutId);
    }, [index, isDeleting, text, speed, pause]);

    return <span>{displayedText}</span>;
};

export default Typewriter;
