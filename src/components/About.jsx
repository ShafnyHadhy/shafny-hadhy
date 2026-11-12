import React from 'react';
import { Reveal, Section } from './ui';

const About = () => (
    <Section id="about" label="About">
        <Reveal className="flex flex-col gap-8 sm:flex-row sm:gap-10">
            <img
                src="/me-240.webp"
                alt="Shafny Hadhy"
                width="140"
                height="140"
                loading="lazy"
                className="h-[140px] w-[140px] shrink-0 rounded-xl border border-line object-cover transition-transform duration-300 ease-out hover:scale-[1.02]"
            />
            <div className="max-w-[640px] space-y-5 text-[16px]">
                <p className="text-ink">
                    I am a Software Engineering undergraduate at SLIIT and an Associate Software Engineer, working
                    across the stack: frontend interfaces on one side, backend architecture on the other.
                </p>
                <p>
                    My approach is grounded in pragmatism and continuous learning. Whether I am designing relational
                    databases, building responsive components or deploying APIs, I focus on clean, maintainable code
                    that solves real problems.
                </p>
                <p>
                    I work best in collaborative teams, bringing problem-solving, adaptability and a drive for
                    leadership to every team I join.
                </p>
            </div>
        </Reveal>
    </Section>
);

export default About;
