import React from 'react';
import { Reveal, Arrow, GitHubIcon } from './ui';

const Hero = () => (
    <section id="top" aria-labelledby="hero-title" className="flex min-h-[100svh] items-center pb-16 pt-[110px] md:pb-24 md:pt-28">
        <div className="wrap">
            <Reveal onLoad>
                <p className="label label-dash">Shafny Hadhy — Colombo, Sri Lanka</p>
            </Reveal>

            <h1 id="hero-title" className="mt-8 text-[48px] leading-none md:text-[72px]">
                <Reveal as="span" onLoad delay={0.1} className="block text-white">
                    Full-Stack<br className="md:hidden" /> <span className="text-lime">Developer.</span>
                </Reveal>
                <Reveal as="span" onLoad delay={0.18} className="block text-grey">
                    Building production systems.
                </Reveal>
            </h1>

            <Reveal onLoad delay={0.25}>
                <p className="mt-8 max-w-[38rem] text-[17px] md:text-[18px]">
                    Associate Software Engineer based in Colombo, Sri Lanka. Currently building Recall with Next.js,
                    React, Laravel and MySQL. Focused on resilient APIs and clean, shippable UI.
                </p>
            </Reveal>

            <Reveal onLoad delay={0.35} className="mt-10 flex flex-col gap-3 sm:flex-row">
                <a href="#work" className="btn-primary group min-h-[48px] sm:min-h-[44px]">
                    View work
                    <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
                </a>
                <a href="https://github.com/ShafnyHadhy" target="_blank" rel="noreferrer" className="btn-outline min-h-[48px] sm:min-h-[44px]">
                    <GitHubIcon />
                    GitHub
                </a>
            </Reveal>
        </div>
    </section>
);

export default Hero;
