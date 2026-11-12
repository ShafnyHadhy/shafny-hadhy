import React from 'react';
import { Reveal, Section } from './ui';

const items = [
    {
        when: '05/2026 — Present',
        current: true,
        role: 'Associate Software Engineer',
        company: 'IT Starter Pvt Ltd',
        where: 'Colombo, Sri Lanka',
        points: [
            'Building and enhancing Recall with Next.js, React (TypeScript), Laravel and MySQL.',
            'Fixing bugs, shipping feature enhancements and building mobile-responsive UI components, with testing and validation.',
            'Collaborating with the manager on workflow, architecture decisions and development priorities.',
        ],
    },
    {
        when: '10/2025 — 04/2026',
        role: 'Software Engineer Intern',
        company: 'IT Starter Pvt Ltd',
        where: 'Colombo, Sri Lanka',
        points: [
            'Designed and developed full-stack features with React and Laravel, integrating RESTful APIs and database-driven functionality.',
            'Built business logic, authentication flows and role-based access for finance and POS systems, with MySQL modelling and query optimisation.',
            'Worked in Agile teams with Git and GitHub code reviews; used AI coding assistants and explored automation with n8n.',
        ],
    },
    {
        when: '2023 — Present',
        role: 'BSc (Hons) in IT, Software Engineering',
        company: 'SLIIT',
        where: 'CGPA 3.6+',
        points: [
            'Focusing on full-stack development, software architecture and modern development practices.',
            'Data structures, algorithms and software engineering principles for building scalable applications.',
        ],
    },
];

const Experience = () => (
    <Section id="experience" label="Experience">
        <ol className="relative border-l border-line">
            {items.map((it, i) => (
                <Reveal as="li" key={it.role} delay={i * 0.06} className="relative pb-14 pl-8 last:pb-0 md:pl-10">
                    <span
                        aria-hidden="true"
                        className={`absolute -left-[4px] top-[7px] h-[7px] w-[7px] rounded-full ${it.current ? 'bg-lime' : 'bg-dot'}`}
                    />
                    <p className="label">{it.when}</p>
                    <h3 className="mt-4 text-[22px] md:text-[24px]">{it.role}</h3>
                    <p className="mt-2 text-[15px] text-body">
                        <span className="font-medium text-ink/70">{it.company}</span>
                        {it.where && <span className="text-faint"> · {it.where}</span>}
                    </p>
                    <ul className="mt-5 max-w-[42rem] space-y-3">
                        {it.points.map((p) => (
                            <li key={p} className="relative pl-5 text-[16px] before:absolute before:left-0 before:top-[0.8em] before:h-px before:w-2.5 before:bg-faint">
                                {p}
                            </li>
                        ))}
                    </ul>
                </Reveal>
            ))}
        </ol>
    </Section>
);

export default Experience;
