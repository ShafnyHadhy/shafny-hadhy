import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss } from 'react-icons/si';
import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <div name="home" className="w-full h-screen bg-primary relative overflow-hidden flex items-center">
            {/* Background Gradients */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-accentGreen/20 rounded-full blur-[120px] animate-pulse delay-1000"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between z-10 w-full pt-20">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:w-1/2 text-center md:text-left"
                >
                    <h2 className="text-accent font-medium text-lg mb-2 tracking-wide">Hello, I'm</h2>
                    <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4 leading-tight">
                        Shafny <span className="text-accentGreen">Hadhy</span>
                    </h1>
                    <h3 className="text-xl md:text-2xl text-gray-300 font-medium mb-6">
                        Software Engineering Student <span className="text-accent">|</span> Full-Stack Developer
                    </h3>
                    <p className="text-gray-400 text-lg max-w-lg mx-auto md:mx-0 mb-8 leading-relaxed">
                        I build modern, scalable, user-focused digital experiences with clean code and creative design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                        <Link to="projects" smooth duration={500} offset={-80} className="px-6 py-2.5 bg-accent text-primary font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(0,242,255,0.4)] cursor-pointer">
                            View Projects
                        </Link>
                        <Link to="contact" smooth duration={500} offset={-80} className="px-6 py-2.5 border border-accent text-accent font-bold rounded-full hover:bg-accent/10 hover:scale-105 transition-all duration-300 cursor-pointer">
                            Contact Me
                        </Link>
                    </div>

                    {/* Tech Badges */}
                    <div className="mt-12 flex items-center justify-center md:justify-start gap-6 text-gray-400">
                        <p className="text-sm font-medium uppercase tracking-widest">Tech Stack</p>
                        <div className="h-px w-12 bg-gray-700"></div>
                        <div className="flex gap-4">
                            <FaReact size={24} className="hover:text-accent transition-colors" />
                            <FaNodeJs size={24} className="hover:text-green-500 transition-colors" />
                            <SiMongodb size={24} className="hover:text-green-400 transition-colors" />
                            <SiTailwindcss size={24} className="hover:text-cyan-400 transition-colors" />
                        </div>
                    </div>
                </motion.div>

                {/* Image / Illustration */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="md:w-1/2 mt-12 md:mt-0 flex justify-center relative"
                >
                    {/* Placeholder for Profile Image */}
                    <div className="relative w-64 h-64 md:w-96 md:h-96 animate-float">
                        <div className="absolute inset-0 bg-gradient-to-tr from-accent to-accentGreen rounded-full blur-2xl opacity-30"></div>
                        <div className="w-full h-full rounded-full border-2 border-white/10 bg-surface/50 backdrop-blur-sm overflow-hidden flex items-center justify-center relative">
                            {/* Using a placeholder image service that supports text or just a generic avatar */}
                            <img src="/myProf.jpeg" alt="Shafny Hadhy" className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        {/* Floating Elements */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-4 -right-4 p-4 bg-surface border border-white/10 rounded-xl shadow-xl"
                        >
                            <FaReact className="text-accent text-3xl" />
                        </motion.div>
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            className="absolute bottom-8 -left-8 py-3 px-6 bg-surface border border-white/30 rounded-xl shadow-xl z-100"
                        >
                            <div className="text-accentGreen font-bold">10+ Projects</div>
                        </motion.div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
};

export default Hero;
