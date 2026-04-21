import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaLinkedin, FaGithub, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
    return (
        <div name="contact" className="w-full min-h-screen bg-primary py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 border-b border-white/5 pb-6">
                    <h2 className="text-2xl font-sans font-bold text-white mb-3">Contact <span className="text-accent">Me</span></h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">Get in touch with me for collaborations, opportunities, or just to say hi!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex flex-col justify-center space-y-8"
                    >
                        <div className="bg-surface p-5 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-full text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                    <FaEnvelope size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">Email</h4>
                                    <a href="mailto:mohamedshafny02@gmail.com" className="text-gray-400 text-[13px] hover:text-accent transition-colors">mohamedshafny02@gmail.com</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface p-5 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-full text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                    <FaLinkedin size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">LinkedIn</h4>
                                    <a href="#" className="text-gray-400 text-[13px] hover:text-accent transition-colors">Connect on LinkedIn</a>
                                </div>
                            </div>
                        </div>

                        <div className="bg-surface p-5 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300 group">
                            <div className="flex items-center gap-4">
                                <div className="p-3 bg-primary rounded-full text-accent group-hover:bg-accent group-hover:text-primary transition-colors duration-300">
                                    <FaGithub size={20} />
                                </div>
                                <div>
                                    <h4 className="text-white font-bold text-base">GitHub</h4>
                                    <a href="#" className="text-gray-400 text-[13px] hover:text-accent transition-colors">Follow on GitHub</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-surface p-6 rounded-2xl border border-white/10"
                    >
                        <form action="https://formspree.io/f/YOUR_ID" method="POST" className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-xs font-medium text-gray-400 mb-1.5">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className="w-full px-4 py-2.5 bg-primary border border-white/10 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white transition-colors text-sm"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-medium text-gray-400 mb-1.5">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className="w-full px-4 py-2.5 bg-primary border border-white/10 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white transition-colors text-sm"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-medium text-gray-400 mb-1.5">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    rows="4"
                                    required
                                    className="w-full px-4 py-2.5 bg-primary border border-white/10 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent text-white transition-colors resize-none text-sm"
                                    placeholder="Your message..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-2.5 bg-accent text-primary font-bold rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-sm"
                            >
                                Send Message <FaPaperPlane />
                            </button>
                        </form>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Contact;
