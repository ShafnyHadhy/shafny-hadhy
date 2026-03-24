import React from 'react';
import { motion } from 'framer-motion';
import { FaCertificate, FaExternalLinkAlt, FaAward } from 'react-icons/fa';

// Sample certificate data
const certificates = [
    {
        id: 1,
        title: "Google IT Support Professional",
        issuer: "Google",
        date: "2024",
        image: "/certificates/google-cert.png",
        credentialUrl: "#",
        skills: ["IT Support", "Networking"]
    },
    {
        id: 2,
        title: "Microsoft Azure Fundamentals",
        issuer: "Microsoft",
        date: "2024",
        image: "/certificates/microsoft-cert.png",
        credentialUrl: "#",
        skills: ["Cloud Computing", "Azure"]
    },
    {
        id: 3,
        title: "Full-Stack Web Development",
        issuer: "freeCodeCamp",
        date: "2023",
        image: "/certificates/freecodecamp-cert.png",
        credentialUrl: "#",
        skills: ["React", "Node.js"]
    },
    {
        id: 4,
        title: "JS Algorithms & Data Structures",
        issuer: "freeCodeCamp",
        date: "2023",
        image: "/certificates/js-cert.png",
        credentialUrl: "#",
        skills: ["JavaScript", "Algorithms"]
    },
    {
        id: 5,
        title: "Meta Front-End Developer",
        issuer: "Meta",
        date: "2024",
        image: "/certificates/meta-cert.png",
        credentialUrl: "#",
        skills: ["React", "UX/UI"]
    }
];

const CertificateCard = ({ cert }) => {
    return (
        <div className="w-[280px] sm:w-[320px] flex-shrink-0 mx-3 bg-surface border border-white/5 rounded-xl overflow-hidden hover:border-accent/30 transition-all duration-300 group relative">
            {/* Image Section */}
            <div className="h-32 bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden flex items-center justify-center">
                {/* Placeholder for actual image if missing */}
                <FaAward className="text-6xl text-white/5 absolute" />

                <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                    onError={(e) => { e.target.style.display = 'none' }} // Hide broken images to show placeholder
                />

                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>

                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-sm">
                    <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-6 py-2 bg-accent text-primary font-bold rounded transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2 hover:opacity-90"
                    >
                        View Credential <FaExternalLinkAlt size={12} />
                    </a>
                </div>
            </div>

            {/* Content Section */}
            <div className="p-4 relative">
                <div className="absolute -top-5 right-3 w-8 h-8 bg-surface border border-white/10 rounded-full flex items-center justify-center shadow z-10">
                    <FaCertificate className="text-accent" size={12} />
                </div>

                <div className="text-[10px] text-accentGreen font-bold mb-1 uppercase tracking-wider">{cert.issuer}</div>
                <h3 className="text-base font-bold text-white mb-2 line-clamp-1" title={cert.title}>{cert.title}</h3>

                <div className="flex flex-wrap gap-1 mt-1">
                    {cert.skills.slice(0, 3).map((skill, idx) => (
                        <span key={idx} className="text-[10px] px-2 py-0.5 bg-primary border border-white/5 rounded text-gray-400">
                            {skill}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

const Certificates = () => {
    return (
        <div name="certificates" className="w-full py-16 bg-primary overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 text-center">
                <h2 className="text-2xl font-sans font-bold text-white mb-3 border-b border-white/5 pb-6 inline-block">
                    Certificates & <span className="text-accent">Achievements</span>
                </h2>
                <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                    Continuous learning and professional development.
                </p>
            </div>

            {/* Marquee Container */}
            <div className="relative w-full py-8">
                {/* Gradient Masks for smooth fade out at edges */}
                <div className="absolute top-0 left-0 w-20 sm:w-40 h-full bg-gradient-to-r from-primary to-transparent z-10 pointer-events-none"></div>
                <div className="absolute top-0 right-0 w-20 sm:w-40 h-full bg-gradient-to-l from-primary to-transparent z-10 pointer-events-none"></div>

                <div className="flex overflow-hidden group">
                    {/* First copy of items */}
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30, // Adjust speed here
                        }}
                    >
                        {certificates.map((cert) => (
                            <CertificateCard key={cert.id} cert={cert} />
                        ))}
                    </motion.div>

                    {/* Second copy of items for seamless loop */}
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                    >
                        {certificates.map((cert) => (
                            <CertificateCard key={`copy-${cert.id}`} cert={cert} />
                        ))}
                    </motion.div>
                    {/* Third copy of items for seamless loop on wide screens */}
                    <motion.div
                        className="flex"
                        animate={{ x: ["0%", "-100%"] }}
                        transition={{
                            repeat: Infinity,
                            ease: "linear",
                            duration: 30,
                        }}
                    >
                        {certificates.map((cert) => (
                            <CertificateCard key={`copy2-${cert.id}`} cert={cert} />
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;
