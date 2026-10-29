import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name="about" className="w-full py-24 bg-primary relative overflow-hidden">
            {/* Ambient Background */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-accent mb-4">
                            <span className="h-px w-8 bg-accent"></span>
                            About
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium text-white">The person behind<br /><span className="text-muted">the systems.</span></h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                        Engineering is the craft of making complex things feel understandable, dependable, and useful.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-surface border border-white/10 rounded-md p-6 md:p-10 shadow-2xl relative overflow-hidden group hover:border-accent/30 transition-all duration-500"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none group-hover:bg-accent/10 transition-colors duration-700"></div>

                    <div className="flex flex-col md:flex-row gap-10 lg:gap-16 items-center md:items-start">
                        {/* Profile Image Area */}
                        <div className="w-48 h-48 md:w-56 md:h-56 flex-shrink-0 relative rounded-2xl overflow-hidden border border-white/10 shadow-lg group-hover:border-accent/40 group-hover:shadow-[0_0_20px_rgba(0,216,255,0.15)] transition-all duration-500 transform group-hover:-translate-y-1 bg-surface/50">
                            <img
                                src="/me2.png"
                                alt="Shafny Profile"
                                className="w-full h-full object-cover opacity-90 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                            />
                        </div>

                        {/* Text Content */}
                        <div className="flex-grow text-center md:text-left mt-2 md:mt-0">
                            <h3 className="text-2xl md:text-3xl font-heading font-medium text-white mb-6 tracking-wide">Hello, I'm Shafny.</h3>
                            <div className="space-y-5 text-gray-400 text-[15px] leading-relaxed">
                                <p>
                                    I am a Software Engineering undergraduate at SLIIT with a deep passion for building robust, scalable applications. Currently working as a Full-Stack Developer, I bridge the gap between elegant frontend interfaces and complex backend architectures.
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
                                <span className="px-4 py-2 bg-surface border border-white/10 rounded-md text-sm font-medium text-gray-300 shadow-sm hover:border-accent/40 hover:bg-white/5 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default">
                                    Undergrad at SLIIT
                                </span>
                                <span className="px-4 py-2 bg-surface border border-white/10 rounded-md text-sm font-medium text-gray-300 shadow-sm hover:border-accent/40 hover:bg-white/5 hover:text-white hover:-translate-y-1 transition-all duration-300 cursor-default">
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
