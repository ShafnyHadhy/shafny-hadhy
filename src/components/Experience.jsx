import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    return (
        <div name="experience" className="w-full min-h-screen bg-primary py-16 flex items-center">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="text-center mb-10">
                    <h2 className="text-2xl font-sans font-bold text-white mb-3">
                        My <span className="text-accent">Experience</span>
                    </h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        My professional journey and educational background
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-8 border-l-2 border-white/10 ml-3 pl-8 relative">

                    {/* Item 1 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <span className="absolute -left-[41px] top-0 p-2 bg-primary border-2 border-accent/50 rounded-full text-accent">
                            <FaBriefcase size={12} />
                        </span>
                        <div className="bg-surface p-5 rounded-xl border border-white/5 hover:border-accent/30 transition-colors">
                            <span className="text-accent text-xs font-bold uppercase tracking-wider">Sample Date (e.g. 2024 - Present)</span>
                            <h4 className="text-lg font-bold text-white mt-1">Junior Developer Intern</h4>
                            <p className="text-gray-400 text-[13px] mb-2">NexaTech (Sample)</p>
                            <p className="text-gray-500 text-[13px]">
                                Worked on full-stack web applications using React and Node.js. Collaborated with senior developers to implement new features and optimize application performance.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <span className="absolute -left-[41px] top-0 p-2 bg-primary border-2 border-accent/50 rounded-full text-accent">
                            <FaGraduationCap size={12} />
                        </span>
                        <div className="bg-surface p-5 rounded-xl border border-white/5 hover:border-accent/30 transition-colors">
                            <span className="text-accent text-xs font-bold uppercase tracking-wider">2023 - Present</span>
                            <h4 className="text-lg font-bold text-white mt-1">Software Engineering Undergraduate</h4>
                            <p className="text-gray-400 text-[13px] mb-2">SLIIT</p>
                            <p className="text-gray-500 text-[13px]">
                                Pursuing a degree in Software Engineering. Focusing on full-stack development, software architecture, and modern development practices.
                            </p>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Experience;
