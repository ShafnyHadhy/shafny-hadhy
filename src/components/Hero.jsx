import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FaArrowDown, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
    return (
        <div name="home" className="hero-shell w-full min-h-screen bg-primary flex items-center pt-28 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            <div className="hero-grid absolute inset-0 pointer-events-none"></div>
            <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-accent/10 blur-[120px] pointer-events-none"></div>
            <div className="absolute bottom-0 -left-40 w-96 h-96 rounded-full bg-accentGreen/5 blur-[130px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto w-full relative z-10">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-accent mb-8">
                    <span className="h-px w-10 bg-accent"></span>
                    <span>Software engineer / builder</span>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="max-w-5xl"
                >
                    <h1 className="text-5xl sm:text-7xl lg:text-8xl font-heading font-medium text-white tracking-tight leading-[0.95]">
                        Building useful systems
                        <span className="block text-muted">for a changing world.</span>
                    </h1>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.15 }}
                    className="max-w-2xl mt-8"
                >
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed">
                        I am Shafny Hadhy, an Associate Software Engineer and software engineering undergraduate focused on full-stack products, resilient APIs, and thoughtful AI-assisted workflows.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="flex flex-col sm:flex-row gap-3 mt-10"
                >
                    <Link to="projects" smooth duration={500} offset={-80} className="inline-flex items-center justify-center gap-3 px-5 py-3 bg-accent text-primary font-bold rounded-md hover:bg-white transition-colors duration-300 cursor-pointer">
                        Explore selected work <FaArrowDown size={13} />
                    </Link>
                    <a href="https://github.com/ShafnyHadhy" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-3 px-5 py-3 border border-white/15 text-white font-bold rounded-md hover:border-accent hover:text-accent transition-colors duration-300">
                        <FaGithub size={16} /> GitHub profile
                    </a>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-white/10 border border-white/10 mt-20 max-w-3xl"
                >
                    <div className="bg-surface p-5 sm:p-6">
                        <span className="text-3xl font-heading text-white block mb-2">12+</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Products and<br />experiments</span>
                    </div>
                    <div className="bg-surface p-5 sm:p-6">
                        <span className="text-3xl font-heading text-white block mb-2">4</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Product areas<br />explored</span>
                    </div>
                    <div className="bg-surface p-5 sm:p-6">
                        <span className="text-3xl font-heading text-accent block mb-2">Now</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Building with<br />curiosity</span>
                    </div>
                </motion.div>

                <div className="flex items-center gap-5 mt-10 text-gray-500">
                    <span className="text-[10px] uppercase tracking-[0.25em]">Find me</span>
                    <a href="https://github.com/ShafnyHadhy" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-accent transition-colors"><FaGithub /></a>
                    <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-accent transition-colors"><FaLinkedinIn /></a>
                </div>

            </div>
        </div>
    );
};

export default Hero;
