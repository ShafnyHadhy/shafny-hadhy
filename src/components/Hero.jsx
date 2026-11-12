import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Reveal, Arrow, GitHubIcon } from './ui';

const EASE = [0.22, 1, 0.36, 1];

/**
 * A word (or phrase) that rises out of its own clipped mask, once, on load.
 * The padding/negative margin keeps descenders (p, y, g) inside the mask at line-height 1.
 */
const Mask = ({ children, delay, className = '' }) => {
    const reduce = useReducedMotion();
    return (
        <span className={`inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom ${className}`}>
            {reduce ? (
                <span className="inline-block">{children}</span>
            ) : (
                <motion.span
                    className="inline-block will-change-transform"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, ease: EASE, delay }}
                >
                    {children}
                </motion.span>
            )}
        </span>
    );
};

// Lines rise 80ms apart; the rest follows from ~halfway through the last line (0.16 + 0.35).
const AFTER = 0.5;

const Hero = () => (
    <section id="top" aria-labelledby="hero-title" className="flex min-h-[100svh] items-center pb-16 pt-[110px] md:pb-24 md:pt-28">
        <div className="wrap">
            <Reveal onLoad duration={0.52} distance={12}>
                <p className="label label-dash">Shafny Hadhy — Colombo, Sri Lanka</p>
            </Reveal>

            <h1 id="hero-title" className="mt-8 text-[48px] leading-none md:text-[72px]">
                <span className="block text-white">
                    <Mask delay={0}>Full-Stack</Mask>
                    <br className="md:hidden" />
                    <span className="hidden md:inline"> </span>
                    <Mask delay={0.08} className="text-lime text-[56px] leading-none md:text-[72px]">Developer.</Mask>
                </span>
                <span className="block text-grey text-[42px] leading-none md:text-[72px]">
                    <Mask delay={0.16}>Building production systems.</Mask>
                </span>
            </h1>

            <Reveal onLoad delay={AFTER} duration={0.52} distance={12}>
                <p className="mt-8 max-w-[38rem] text-[17px] md:text-[18px]">
                    Associate Software Engineer based in Colombo, Sri Lanka. Currently building Recall with Next.js,
                    React, Laravel and MySQL. Focused on resilient APIs and clean, shippable UI.
                </p>
            </Reveal>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
                <Reveal onLoad delay={AFTER + 0.06} duration={0.52} distance={12} className="flex">
                    <a href="#work" className="btn-primary group min-h-[48px] w-full sm:min-h-[44px] sm:w-auto">
                        View work
                        <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
                    </a>
                </Reveal>
                <Reveal onLoad delay={AFTER + 0.12} duration={0.52} distance={12} className="flex">
                    <a href="https://github.com/ShafnyHadhy" target="_blank" rel="noreferrer" className="btn-outline min-h-[48px] w-full sm:min-h-[44px] sm:w-auto">
                        <GitHubIcon />
                        GitHub
                    </a>
                </Reveal>
            </div>
        </div>
    </section>
);

export default Hero;
