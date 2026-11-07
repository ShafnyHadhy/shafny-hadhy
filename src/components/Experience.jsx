import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap } from 'react-icons/fa';

const Experience = () => {
    return (
        <div name="experience" className="w-full bg-primary py-24 flex items-center">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-accent mb-4">
                            <span className="h-px w-8 bg-accent"></span>
                            Experience
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium text-white">How I got here,<br /><span className="text-muted">and where I am going.</span></h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                        A steady progression from software engineering fundamentals to shipping production features with a team.
                    </p>
                </div>

                {/* Experience Timeline */}
                <div className="space-y-6 border-l border-white/15 ml-3 pl-8 relative max-w-5xl">

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
                        <div className="bg-surface p-5 md:p-6 rounded-md border border-white/5 hover:border-accent/30 transition-colors">
                            <span className="text-accent text-xs font-bold uppercase tracking-wider">05/2026 - Present</span>
                            <h4 className="text-lg font-bold text-white mt-1">Associate Software Engineer</h4>
                            <p className="text-gray-400 text-[13px]">IT Starter Pvt Ltd</p>
                            <p className="text-gray-500 text-[13px] mb-2">Colombo, Sri Lanka.</p>
                            <p className="text-gray-500 text-[13px]">
                                Building and enhancing Recall using Next.js, React (TypeScript), Laravel, and MySQL. Fixing bugs, implementing 
                                feature enhancements, developing mobile-responsive UI components, conducting testing and validation, and collaborating 
                                with the manager on workflow, architecture decisions, and development priorities.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 2 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="relative"
                    >
                        <span className="absolute -left-[41px] top-0 p-2 bg-primary border-2 border-accent/50 rounded-full text-accent">
                            <FaBriefcase size={12} />
                        </span>
                        <div className="bg-surface p-5 md:p-6 rounded-md border border-white/5 hover:border-accent/30 transition-colors">
                            <span className="text-accent text-xs font-bold uppercase tracking-wider">10/2025 - 04/2026</span>
                            <h4 className="text-lg font-bold text-white mt-1">Software Engineer Intern</h4>
                            <p className="text-gray-400 text-[13px]">IT Starter Pvt Ltd</p>
                            <p className="text-gray-500 text-[13px] mb-2">Colombo, Sri Lanka.</p>
                            <p className="text-gray-500 text-[13px]">
                                Designed and developed full-stack web features using React and Laravel, integrating RESTful APIs and database-driven functionality. Built backend business logic, authentication flows, and role-based access controls for finance and POS systems. Worked with MySQL databases handling data modelling, SQL queries, and performance optimisation, while collaborating in Agile teams using Git and GitHub for version control and code reviews. Utilised AI coding assistants and explored workflow automation and third-party integrations using n8n.
                            </p>
                        </div>
                    </motion.div>

                    {/* Item 3 */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="relative"
                    >
                        <span className="absolute -left-[41px] top-0 p-2 bg-primary border-2 border-accent/50 rounded-full text-accent">
                            <FaGraduationCap size={12} />
                        </span>
                        <div className="bg-surface p-5 md:p-6 rounded-md border border-white/5 hover:border-accent/30 transition-colors">
                            <span className="text-accent text-xs font-bold uppercase tracking-wider">2023 - Present</span>
                            <h4 className="text-lg font-bold text-white mt-1">BSc (Hons) in IT Specializing in Software Engineering</h4>
                            <p className="text-gray-400 text-[13px] mb-2">SLIIT</p>
                            <p className="text-gray-500 text-[13px]">
                                Pursuing a degree in Software Engineering. Focusing on full-stack development, software architecture, and modern development practices.
                            </p>
                            <span className="text-accent text-xs font-bold uppercase tracking-wider">CGPA: 3.6+</span>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Experience;
