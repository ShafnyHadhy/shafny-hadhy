import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div name="about" className="w-full min-h-screen bg-primary text-gray-300 py-20 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row gap-12 items-center">

                    {/* Image / Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-accent to-accentGreen rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                            <div className="relative bg-surface p-2 rounded-lg border border-white/10">
                                <img
                                    src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
                                    alt="Coding Workspace"
                                    className="rounded-md w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="w-full md:w-1/2"
                    >
                        <div className="border-l-4 border-accent pl-6 mb-8">
                            <h2 className="text-3xl font-heading font-bold text-white mb-2">About Me</h2>
                            <p className="text-accent text-lg font-medium">Full-Stack Developer & Student</p>
                        </div>

                        <p className="text-lg leading-relaxed mb-6 text-gray-400">
                            Hi, I’m Shafny — a software engineering student passionate about full-stack development, UI/UX and building useful digital tools. I love exploring JavaScript technologies and improving my engineering skills every day.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                            <div className="p-4 bg-surface/50 rounded-lg border border-white/5 hover:border-accent/30 transition-colors hover:bg-surface/80">
                                <h3 className="text-accent font-bold mb-2">What I'm Learning</h3>
                                <p className="text-sm text-gray-400">React, Java, MERN, Laravel, Spring Boot</p>
                            </div>
                            <div className="p-4 bg-surface/50 rounded-lg border border-white/5 hover:border-accentGreen/30 transition-colors hover:bg-surface/80">
                                <h3 className="text-accentGreen font-bold mb-2">Career Goal</h3>
                                <p className="text-sm text-gray-400">Full-Stack Developer with strong frontend creativity</p>
                            </div>
                            <div className="p-4 bg-surface/50 rounded-lg border border-white/5 hover:border-purple-500/30 transition-colors sm:col-span-2 hover:bg-surface/80">
                                <h3 className="text-purple-400 font-bold mb-2">Personal Interests</h3>
                                <p className="text-sm text-gray-400">Traveling, hiking, design, solving problems</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default About;
