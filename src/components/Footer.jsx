import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-surface py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-center md:text-left">
                    <h3 className="text-2xl font-sans font-bold text-white mb-2">Shafny<span className="text-accent">.</span></h3>
                    <p className="text-gray-400 text-sm">Made with ❤️ by Shafny</p>
                </div>

                <div className="flex gap-6">
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors text-xl"><FaGithub /></a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors text-xl"><FaLinkedin /></a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors text-xl"><FaTwitter /></a>
                    <a href="#" className="text-gray-400 hover:text-accent transition-colors text-xl"><FaInstagram /></a>
                </div>

                <div className="text-gray-500 text-sm">
                    &copy; {new Date().getFullYear()} All rights reserved.
                </div>

            </div>
        </footer>
    );
};

export default Footer;
