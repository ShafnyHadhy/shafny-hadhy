import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane, FaCopy, FaCheck } from 'react-icons/fa';

const Contact = () => {
    const [copied, setCopied] = useState(false);
    const emailAddress = "shafnyhadhy@gmail.com";

    const handleCopy = () => {
        navigator.clipboard.writeText(emailAddress);
        setCopied(true);
        setTimeout(() => setCopied(false), 2500);
    };

    return (
        <div name="contact" className="w-full bg-primary py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 border-b border-white/10 pb-8">
                    <div>
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-accent mb-4">
                            <span className="h-px w-8 bg-accent"></span>
                            Contact
                        </div>
                        <h2 className="text-4xl md:text-5xl font-heading font-medium text-white">Have a good problem<br /><span className="text-muted">to solve?</span></h2>
                    </div>
                    <p className="text-gray-400 text-sm max-w-md leading-relaxed">
                        Open to thoughtful product work, engineering opportunities, and conversations about building better software.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch">

                    {/* Contact Info Channels */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-6"
                    >
                        <div className="bg-surface p-5 rounded-md border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-full text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                    <FaEnvelope size={20} />
                                </div>
                                <div className="min-w-0">
                                    <h4 className="text-white font-bold text-base">Email</h4>
                                    <a href={`mailto:${emailAddress}`} className="text-gray-400 text-[13px] hover:text-accent transition-colors break-all">
                                        {emailAddress}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface p-5 rounded-md border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-full text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                    <FaLinkedin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">LinkedIn</h4>
                                    <a href="https://www.linkedin.com/in/shafnyhadhy" target="_blank" rel="noreferrer" className="text-gray-400 text-[13px] hover:text-accent transition-colors">
                                        Connect on LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface p-5 rounded-md border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-full text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                    <FaGithub size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">GitHub</h4>
                                    <a href="https://github.com/ShafnyHadhy" target="_blank" rel="noreferrer" className="text-gray-400 text-[13px] hover:text-accent transition-colors">
                                        Follow on GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Direct Email Call-To-Action Card */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-surface p-8 rounded-md border border-white/10 flex flex-col justify-between"
                    >
                        <div>
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium bg-accentGreen/10 text-accentGreen border border-accentGreen/20 mb-6">
                                <span className="w-2 h-2 rounded-full bg-accentGreen animate-pulse"></span>
                                Available for opportunities & collaborations
                            </div>

                            <h3 className="text-2xl font-heading font-medium text-white mb-3">
                                Let's build something together.
                            </h3>

                            <p className="text-gray-400 text-sm leading-relaxed mb-6">
                                Whether you have an open engineering role, a technical question, or an idea to discuss, feel free to drop me a note. I'll get back to you promptly.
                            </p>
                        </div>

                        <div className="space-y-3 pt-4 border-t border-white/10">
                            <a
                                href={`mailto:${emailAddress}`}
                                className="w-full py-3 px-5 bg-accent text-primary font-bold rounded-lg hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 text-sm shadow-md"
                            >
                                <FaEnvelope size={15} /> Send an Email ({emailAddress})
                            </a>

                            <button
                                onClick={handleCopy}
                                type="button"
                                className="w-full py-3 px-5 bg-primary border border-white/10 text-gray-300 font-medium rounded-lg hover:border-accent/40 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 text-sm cursor-pointer"
                            >
                                {copied ? (
                                    <>
                                        <FaCheck className="text-accentGreen" size={14} />
                                        <span className="text-accentGreen">Copied to clipboard!</span>
                                    </>
                                ) : (
                                    <>
                                        <FaCopy size={14} />
                                        <span>Copy email address</span>
                                    </>
                                )}
                            </button>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
