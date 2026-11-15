import React, { useRef } from 'react';
import { motion, useInView, useReducedMotion } from 'framer-motion';
import { Reveal, Section } from './ui';

/**
 * A connected, laddered timeline. One rail runs through every entry; the current role is a lit
 * lime node, and the rail segment from the internship up to it is lit to show the promotion.
 */
const items = [
    {
        when: '05/2026 — Present',
        state: 'current',
        role: 'Associate Software Engineer',
        company: 'IT Starter Pvt Ltd',
        where: 'Colombo, Sri Lanka',
        step: 'Promoted from intern',
        summary: 'Building a full-stack EdTech product end to end, from Laravel APIs to responsive Next.js UI.',
        points: [
            'Ship features and fixes across the Next.js and React (TypeScript) front end and the Laravel API, on MySQL.',
            'Build mobile-responsive UI components, with testing and validation before release.',
            'Work with the engineering manager on workflow, architecture decisions and development priorities.',
        ],
        tech: ['Next.js', 'React', 'TypeScript', 'Laravel', 'MySQL'],
    },
    {
        when: '10/2025 — 04/2026',
        state: 'past',
        role: 'Software Engineer Intern',
        company: 'IT Starter Pvt Ltd',
        where: 'Colombo, Sri Lanka',
        summary: 'Full-stack features for finance and POS systems, built with React and Laravel.',
        points: [
            'Built RESTful APIs, business logic, authentication flows and role-based access control.',
            'Modelled MySQL data, wrote SQL queries and tuned them for performance.',
            'Worked in Agile with Git and GitHub code reviews; used AI coding assistants and explored automation with n8n.',
        ],
        tech: ['React', 'Laravel', 'MySQL', 'REST APIs', 'n8n'],
    },
    {
        when: '2023 — Present',
        state: 'study',
        role: 'BSc (Hons) in IT, Software Engineering',
        company: 'SLIIT',
        where: 'CGPA 3.6+',
        summary: 'Full-stack development, software architecture, data structures and algorithms, and modern engineering practice.',
        points: [],
        tech: [],
    },
];

const EASE = [0.22, 1, 0.36, 1];

/** The node on the rail: lit (current role) or unlit. A dark ring masks the rail behind it. */
const Node = ({ state }) => (
    <span aria-hidden="true" className="absolute left-0 top-[3px] z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full bg-bg">
        {state === 'current' ? (
            <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border border-lime/50">
                <span className="h-[9px] w-[9px] rounded-full bg-lime" />
            </span>
        ) : state === 'past' ? (
            <span className="flex h-[17px] w-[17px] items-center justify-center rounded-full border border-[#3F3F46]">
                <span className="h-[7px] w-[7px] rounded-full bg-[#52525B]" />
            </span>
        ) : (
            <span className="h-[11px] w-[11px] rounded-full border border-[#3F3F46]" />
        )}
    </span>
);

/** Rail segment from this node down to the next one. Draws downward once when it scrolls into view. */
const Segment = ({ lit, delay }) => {
    const reduce = useReducedMotion();
    // Outer span has the real height so in-view detection works; only the inner line scales.
    const box = 'absolute left-[8px] top-[20px] -bottom-[3px] w-px';
    const line = `block h-full w-full origin-top ${lit ? 'bg-lime/70' : 'bg-[#2A2A2E]'}`;
    if (reduce) {
        return (
            <span aria-hidden="true" className={box}>
                <span className={line} />
            </span>
        );
    }
    return <DrawnSegment box={box} line={line} delay={delay} />;
};

const DrawnSegment = ({ box, line, delay }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: '0px 0px -15% 0px' });
    return (
        <span ref={ref} aria-hidden="true" className={box}>
            <motion.span
                className={line}
                initial={{ scaleY: 0 }}
                animate={{ scaleY: inView ? 1 : 0 }}
                transition={{ duration: 0.9, ease: EASE, delay }}
            />
        </span>
    );
};

const Experience = () => (
    <Section id="experience" label="Experience">
        <ol>
            {items.map((it, i) => {
                const next = items[i + 1];
                // The promotion path (intern -> associate) is the lit rung of the ladder.
                const lit = it.state === 'current' && next?.state === 'past';
                return (
                    <li key={it.role} className="relative pb-16 pl-10 last:pb-0 md:pl-12">
                        <Node state={it.state} />
                        {next && <Segment lit={lit} delay={0.15} />}

                        <Reveal delay={i * 0.06} className="grid gap-4 md:grid-cols-[200px_1fr] md:gap-10">
                            {/* Meta: when and where. */}
                            <div>
                                <p className={`label ${it.state === 'current' ? 'text-ink' : ''}`}>{it.when}</p>
                                <p className="mt-3 text-[15px] font-medium text-ink/80">{it.company}</p>
                                <p className="text-[14px] text-body">{it.where}</p>
                            </div>

                            {/* The story: role, one-line summary, proof, stack. */}
                            <div>
                                <h3 className={`${it.state === 'study' ? 'text-[20px]' : 'text-[22px] md:text-[24px]'}`}>{it.role}</h3>
                                <p className="mt-3 max-w-[42rem] text-[16px] text-ink/90">{it.summary}</p>
                                {it.points.length > 0 && (
                                    <ul className="mt-4 max-w-[42rem] space-y-3">
                                        {it.points.map((p) => (
                                            <li key={p} className="relative pl-5 text-[16px] before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-faint">
                                                {p}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                {it.tech.length > 0 && (
                                    <div className="mt-5 flex flex-wrap gap-1.5">
                                        {it.tech.map((t) => (
                                            <span key={t} className="pill">{t}</span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </Reveal>
                    </li>
                );
            })}
        </ol>
    </Section>
);

export default Experience;
