import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name="about" className="w-full py-24 bg-primary relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 border-b border-white/5 pb-8">
                    <h2 className="text-3xl font-sans font-bold text-white mb-4">About <span className="text-accent">Me</span></h2>
                    <p className="text-accent text-[13px] tracking-widest uppercase font-semibold">Associate Software Engineer</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-surface border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-500"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none group-hover:bg-accent/10 transition-colors duration-700"></div>

                    <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-start">
                        {/* Profile Image Area */}
                        <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(0,216,255,0.15)] transition-all duration-500 transform group-hover:-translate-y-1 bg-surface/50">
                            <img
                                src="/myProf.jpeg"
                                alt="Shafny Profile"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex-grow text-center md:text-left mt-2 md:mt-0">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6 tracking-wide">Hello, I'm Shafny!</h3>
                            <div className="space-y-5 text-gray-400 text-[15px] leading-relaxed">
                                <p>
                                    I am a Software Engineering undergraduate at SLIIT with a deep passion for building robust, scalable applications. Currently working as a Full-Stack Developer Intern, I bridge the gap between elegant frontend interfaces and complex backend architectures.
                                </p>
                                <p>
                                    My approach to software engineering is grounded in pragmatism and continuous learning. Whether I'm designing relational databases, crafting responsive components, or deploying APIs, I focus on writing clean, maintainable code that solves real-world problems.
                                </p>
                                <p>
                                    Beyond coding, I thrive in collaborative environments, bringing strong problem-solving skills, adaptability, and a drive for leadership to every team I join.
                                </p>
                            </div>

                            {/* Authentic Highlights */}
                            <div className="flex flex-wrap justify-center md:justify-start gap-3 mt-8">
                                <span className="px-4 py-2 bg-surface border border-white/10 rounded-lg text-sm font-medium text-gray-300 shadow-sm hover:border-accent/40 hover:bg-white/5 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default">
                                    Undergrad at SLIIT
                                </span>
                                <span className="px-4 py-2 bg-surface border border-white/10 rounded-lg text-sm font-medium text-gray-300 shadow-sm hover:border-accent/40 hover:bg-white/5 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default">
                                    Full-Stack Dev
                                </span>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
