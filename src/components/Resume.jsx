import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGoogleDrive } from 'react-icons/fa';

const Resume = () => {
    return (
        <div name="resume" className="w-full bg-surface/30 py-20 border-y border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-primary to-surface p-8 md:p-12 rounded-2xl border border-white/10 shadow-[0_0_30px_rgba(0,242,255,0.1)] relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-accentGreen/5 rounded-full blur-3xl -ml-32 -mb-32"></div>

                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-white mb-6 relative z-10">
                        Check out my <span className="text-accent">Resume</span>
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                        Take a look at my professional journey, skills, and qualifications. Feel free to download it for offline viewing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-6 py-2.5 bg-accent text-primary font-bold rounded-full hover:bg-white hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-accent/20"
                        >
                            <FaDownload /> Download PDF
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-2.5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <FaGoogleDrive /> View on Drive
                        </a>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default Resume;
