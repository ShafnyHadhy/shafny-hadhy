import React, { useState } from 'react';
import { Reveal, Section, Arrow } from './ui';

const emailAddress = 'shafnyhadhy@gmail.com';

const roles = [
    'Junior Full-Stack Developer',
    'Associate Software Engineer',
    'Associate Backend Engineer',
    'Software Engineer Intern',
];

const channels = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shafnyhadhy' },
    { label: 'GitHub', href: 'https://github.com/ShafnyHadhy' },
    { label: 'Resume (PDF)', href: '/resume.pdf' },
];

const CopyIcon = ({ done }) =>
    done ? (
        <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M3 8.5 6.5 12 13 4.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ) : (
        <svg aria-hidden="true" viewBox="0 0 16 16" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.4">
            <rect x="5.5" y="5.5" width="8" height="8" rx="1.5" />
            <path d="M10.5 5.5v-2A1.5 1.5 0 0 0 9 2H3.5A1.5 1.5 0 0 0 2 3.5V9A1.5 1.5 0 0 0 3.5 10.5h2" />
        </svg>
    );

const Contact = () => {
    const [copied, setCopied] = useState(false);

    const copy = async () => {
        try {
            await navigator.clipboard.writeText(emailAddress);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch {
            window.location.href = `mailto:${emailAddress}`;
        }
    };

    return (
        <Section id="contact" label="Contact">
            <Reveal>
                <h3 className="max-w-[40rem] text-balance text-[32px] md:text-[44px]">Open to entry-level engineering roles.</h3>
                <p className="mt-5 max-w-[36rem] text-[16px]">
                    Based in Colombo, Sri Lanka. Email is the best way to reach me; my resume and code are linked below.
                </p>

                <ul className="mt-8 grid max-w-[40rem] grid-cols-1 gap-x-8 gap-y-3 sm:grid-cols-2">
                    {roles.map((r) => (
                        <li key={r} className="flex items-center gap-3 text-[16px] text-ink">
                            <span aria-hidden="true" className="h-px w-3 shrink-0 bg-lime" />
                            {r}
                        </li>
                    ))}
                </ul>
            </Reveal>

            <Reveal className="mt-14">
                <a
                    href={`mailto:${emailAddress}`}
                    className="inline-block break-all py-2 font-heading text-[clamp(1.75rem,4.2vw,3.25rem)] font-semibold leading-[1.05] tracking-head text-ink underline decoration-transparent decoration-2 underline-offset-8 transition-colors duration-150 hover:decoration-lime"
                >
                    {emailAddress}
                </a>
                <div className="mt-6">
                    <button type="button" onClick={copy} className="btn-outline min-h-[44px] w-full sm:w-auto">
                        <span className={copied ? 'text-lime' : ''}>
                            <CopyIcon done={copied} />
                        </span>
                        <span aria-live="polite">{copied ? 'Copied' : 'Copy email address'}</span>
                    </button>
                </div>
            </Reveal>

            <ul className="mt-14 max-w-[36rem]">
                {channels.map(({ label, href }, i) => (
                    <Reveal as="li" key={label} delay={i * 0.06} className="border-t border-line last:border-b">
                        <a
                            href={href}
                            target="_blank"
                            rel="noreferrer"
                            className="group -mx-4 flex min-h-[56px] items-center justify-between rounded-md px-4 text-[16px] text-body transition-colors duration-150 hover:bg-hover hover:text-white"
                        >
                            {label}
                            <Arrow className="text-faint transition-[transform,color] duration-150 group-hover:translate-x-1 group-hover:text-lime" />
                        </a>
                    </Reveal>
                ))}
            </ul>
        </Section>
    );
};

export default Contact;
