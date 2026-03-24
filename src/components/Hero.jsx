import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div name="home" className="w-full min-h-screen bg-primary flex flex-col justify-center items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

            <div className="max-w-5xl mx-auto w-full flex flex-col items-center justify-center relative z-10 text-center">

                {/* Main Headline */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.1 }}
                    className="my-8"
                >
                    <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[8rem] font-sans font-black text-white tracking-tighter uppercase leading-[0.85]">
                        <span className="block sm:inline">Shafny</span>
                        <span className="hidden sm:inline"> </span>
                        <span className="block sm:inline text-gray-600 text-5xl sm:text-7xl md:text-8xl lg:text-[8rem]">Hadhy</span>
                    </h1>
                </motion.div>

                {/* Subheading & Bio */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl mx-auto mb-12"
                >
                    <h2 className="text-sm md:text-base font-bold text-accent mb-4 uppercase tracking-[0.2em]">Software Engineer Intern</h2>
                    <p className="text-gray-400 text-base md:text-lg leading-relaxed">
                        Passionate about creating intuitive and engaging user experiences. I specialize in transforming complex problems into beautifully crafted, efficient products.
                    </p>
                </motion.div>

                {/* CTA Buttons */}
                {/* <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-20"
                >
                    <Link to="projects" smooth duration={500} offset={-80} className="px-6 py-3 bg-white text-primary font-bold rounded-lg hover:bg-gray-200 transition-colors duration-300 text-base cursor-pointer flex items-center justify-center gap-2">
                        View My Work
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                    </Link>
                    <Link to="contact" smooth duration={500} offset={-80} className="px-6 py-3 border border-gray-700 bg-surface/50 text-white font-bold rounded-lg hover:border-gray-500 hover:bg-surface transition-colors duration-300 text-base cursor-pointer">
                        Let's Talk
                    </Link>
                </motion.div> */}

                {/* Stats / Bento Grid Row */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full max-w-4xl"
                >
                    <div className="bg-surface border border-gray-800 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center hover:border-gray-600 transition-colors">
                        <span className="text-3xl md:text-4xl font-black text-white mb-2">2+</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Years<br />Experience</span>
                    </div>
                    <div className="bg-surface border border-gray-800 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center hover:border-gray-600 transition-colors">
                        <span className="text-3xl md:text-4xl font-black text-white mb-2">10+</span>
                        <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Projects<br />Completed</span>
                    </div>
                    <div className="bg-surface border border-gray-800 rounded-2xl p-5 sm:p-6 flex flex-col items-center justify-center text-center md:items-start md:text-left hover:border-gray-600 transition-colors col-span-2 relative overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-r from-accent/0 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between w-full h-full gap-4">
                            <div className="flex flex-col justify-center">
                                <span className="text-accent text-[10px] font-bold uppercase tracking-widest mb-1.5">Currently Building</span>
                                <h3 className="text-lg sm:text-xl font-bold text-white leading-tight">Modern Web<br />Experiences</h3>
                            </div>
                            <div className="w-12 h-12 rounded-full border border-gray-700 bg-primary flex items-center justify-center group-hover:border-accent group-hover:bg-accent/10 transition-colors flex-shrink-0">
                                <svg className="w-5 h-5 text-accent transform group-hover:rotate-45 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            </div>
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
