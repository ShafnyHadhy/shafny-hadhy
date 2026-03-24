import React from 'react';
import { motion } from 'framer-motion';
import { FaDownload, FaGoogleDrive } from 'react-icons/fa';

const Resume = () => {
    return (
        <div name="resume" className="w-full bg-surface/30 py-16 border-y border-white/5">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-surface p-6 md:p-10 rounded-2xl border border-white/5 hover:border-accent/20 transition-colors duration-500 relative"
                >
                    <h2 className="text-xl md:text-2xl font-sans font-bold text-white mb-4 relative z-10">
                        Check out my <span className="text-accent">Resume</span>
                    </h2>
                    <p className="text-gray-400 mb-8 max-w-xl mx-auto relative z-10">
                        Take a look at my professional journey, skills, and qualifications. Feel free to download it for offline viewing.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10 mt-6">
                        <a
                            href="/resume.pdf"
                            download
                            className="px-6 py-2.5 bg-accent text-primary font-bold rounded-full hover:opacity-90 transition-all duration-300 flex items-center justify-center gap-2 text-[14px]"
                        >
                            <FaDownload /> Download PDF
                        </a>
                        <a
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                            className="px-6 py-2.5 border border-white/20 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 text-[14px]"
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
