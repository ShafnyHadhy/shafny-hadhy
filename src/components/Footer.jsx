import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="w-full bg-surface py-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">

                <div className="text-center md:text-left">
                    <h3 className="text-2xl tracking-tight flex items-center justify-center md:justify-start group mb-2">
                        <span className="font-bold text-gray-100 transition-colors duration-300 group-hover:text-white">Shafny</span>
                        <span className="font-normal text-gray-500 ml-1.5 transition-colors duration-300 group-hover:text-gray-400">Hadhy</span>
                    </h3>
                </div>

                <div className="flex gap-6">
                    <a href="https://github.com/ShafnyHadhy" className="text-gray-400 hover:text-accent transition-colors text-xl"><FaGithub /></a>
                    <a href="https://www.linkedin.com/in/shafnyhadhy" className="text-gray-400 hover:text-accent transition-colors text-xl"><FaLinkedin /></a>
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
