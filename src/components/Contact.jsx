import React, { useState } from 'react';
import { Reveal, Section, Arrow } from './ui';

const emailAddress = 'shafnyhadhy@gmail.com';

const channels = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shafnyhadhy' },
    { label: 'GitHub', href: 'https://github.com/ShafnyHadhy' },
    { label: 'Resume (PDF)', href: '/resume.pdf' },
];

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
                <p className="max-w-[36rem] text-[16px]">
                    Open to engineering roles, product work and technical conversations. Email is the fastest way to
                    reach me.
                </p>
                <a
                    href={`mailto:${emailAddress}`}
                    className="mt-8 inline-block break-all py-1 font-heading text-[clamp(1.75rem,4.2vw,3.25rem)] font-semibold leading-[1.05] tracking-head text-ink underline decoration-transparent decoration-2 underline-offset-8 transition-colors duration-150 hover:decoration-lime"
                >
                    {emailAddress}
                </a>
                <div className="mt-6">
                    <button type="button" onClick={copy} className="btn-outline min-h-[44px]" aria-live="polite">
                        {copied ? 'Copied' : 'Copy email address'}
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
