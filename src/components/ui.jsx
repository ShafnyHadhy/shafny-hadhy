import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const EASE = [0.22, 1, 0.36, 1];

/** Fade-up once: 0.5s, 14px, ease-out. On load (hero) or when scrolled into view. Static under reduced motion. */
export const Reveal = ({ as = 'div', children, className = '', delay = 0, duration = 0.5, distance = 14, onLoad = false, ...rest }) => {
    const reduce = useReducedMotion();
    if (reduce) {
        const Plain = as;
        return <Plain className={className} {...rest}>{children}</Plain>;
    }
    const Tag = motion[as];
    const target = { opacity: 1, y: 0 };
    return (
        <Tag
            className={className}
            initial={{ opacity: 0, y: distance }}
            {...(onLoad ? { animate: target } : { whileInView: target, viewport: { once: true, amount: 'some' } })}
            transition={{ duration, ease: EASE, delay }}
            {...rest}
        >
            {children}
        </Tag>
    );
};

/** Section shell: lime-dashed label in the left column, content on the right. */
export const Section = ({ id, label, children, className = '' }) => (
    <section id={id} aria-labelledby={`${id}-label`} className={`border-t border-line py-[90px] md:py-[140px] ${className}`}>
        <div className="wrap grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
            <div className="md:col-span-3">
                <Reveal>
                    <h2 id={`${id}-label`} className="label label-dash md:sticky md:top-24">{label}</h2>
                </Reveal>
            </div>
            <div className="md:col-span-9">{children}</div>
        </div>
    </section>
);

export const Arrow = ({ className = '' }) => (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
        <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const GitHubIcon = ({ className = '' }) => (
    <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="currentColor" className={className}>
        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z" />
    </svg>
);
