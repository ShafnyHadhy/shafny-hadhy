import React from 'react';
import { Reveal, Section } from './ui';

const toolkit = [
    { group: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind'] },
    { group: 'Backend', items: ['Laravel', 'Node.js', 'MySQL', 'REST APIs'] },
    { group: 'Tools', items: ['Git', 'Docker', 'Vercel', 'Figma'] },
];

const Skills = () => (
    <Section id="toolkit" label="Toolkit">
        <Reveal className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-12">
            {toolkit.map(({ group, items }) => (
                <div key={group}>
                    <h3 className="text-[20px]">{group}</h3>
                    <p className="mt-3 text-[16px] leading-[1.8]">{items.join(', ')}</p>
                </div>
            ))}
        </Reveal>
    </Section>
);

export default Skills;
