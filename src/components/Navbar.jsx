import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const links = [
        { id: 1, link: 'home' },
        { id: 2, link: 'about' },
        { id: 3, link: 'projects' },
        { id: 4, link: 'skills' },
        { id: 5, link: 'experience' },
        { id: 6, link: 'resume' },
        { id: 7, link: 'contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed w-full h-20 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/80 backdrop-blur-md border-b border-white/5' : 'bg-transparent'}`}>
            <div className="flex justify-between items-center h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center">
                    <h1 className="text-2xl tracking-tight cursor-pointer flex items-center group">
                        <span className="font-bold text-gray-100 transition-colors duration-300 group-hover:text-white">Shafny</span>
                        <span className="font-normal text-gray-500 ml-1.5 transition-colors duration-300 group-hover:text-gray-400">Hadhy</span>
                    </h1>
                </div>

                <ul className="hidden md:flex space-x-8">
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="relative group cursor-pointer capitalize font-medium text-gray-300 hover:text-white transition-colors duration-300"
                        >
                            <Link to={link} smooth duration={500} offset={-80}>
                                {link}
                            </Link>
                            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                        </li>
                    ))}
                </ul>

                <div
                    onClick={() => setNav(!nav)}
                    className="cursor-pointer z-50 text-gray-300 md:hidden hover:text-accent transition-colors"
                >
                    {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                </div>

                <AnimatePresence>
                    {nav && (
                        <motion.div
                            initial={{ opacity: 0, x: '100%' }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: '100%' }}
                            transition={{ duration: 0.3 }}
                            className="fixed top-0 left-0 w-full h-screen bg-surface flex flex-col justify-center items-center md:hidden"
                        >
                            <ul className="flex flex-col items-center space-y-6">
                                {links.map(({ id, link }) => (
                                    <li
                                        key={id}
                                        className="cursor-pointer capitalize text-2xl font-medium text-gray-300 hover:text-accent transition-colors"
                                    >
                                        <Link
                                            onClick={() => setNav(false)}
                                            to={link}
                                            smooth
                                            duration={500}
                                            offset={-80}
                                        >
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </nav>
    );
};

export default Navbar;
