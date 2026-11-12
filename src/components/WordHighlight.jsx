import React, { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Words light from grey to ink as the paragraph moves up the screen, scrubbed to the scrollbar
 * (runs backwards on the way up). Starts when the paragraph's top is at 80% of the viewport,
 * finishes when it reaches 35%. The text is always in the DOM and readable: unlit words are
 * #8A8A93 on #0A0A0B (about 5.6:1). Reduced motion: all words lit, no listener.
 */
const START = 0.8;
const END = 0.35;

const WordHighlight = ({ text, className = '' }) => {
    const reduce = useReducedMotion();
    const ref = useRef(null);
    const words = text.split(' ');
    const [lit, setLit] = useState(words.length);

    useEffect(() => {
        if (reduce) return undefined;
        let frame = 0;
        const update = () => {
            frame = 0;
            const el = ref.current;
            if (!el) return;
            const vh = window.innerHeight;
            const top = el.getBoundingClientRect().top;
            const p = Math.min(1, Math.max(0, (vh * START - top) / (vh * (START - END))));
            setLit(Math.round(p * words.length));
        };
        const onScroll = () => {
            if (!frame) frame = requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        return () => {
            cancelAnimationFrame(frame);
            window.removeEventListener('scroll', onScroll);
            window.removeEventListener('resize', onScroll);
        };
    }, [reduce, words.length]);

    const shown = reduce ? words.length : lit;

    return (
        <p ref={ref} className={className}>
            {words.map((w, i) => (
                <React.Fragment key={i}>
                    <span className={`transition-colors duration-150 ${i < shown ? 'text-ink' : 'text-grey'}`}>{w}</span>
                    {i < words.length - 1 ? ' ' : null}
                </React.Fragment>
            ))}
        </p>
    );
};

export default WordHighlight;
