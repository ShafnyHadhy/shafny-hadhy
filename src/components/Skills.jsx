import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaPhp, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiSpringboot, SiLaravel, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Java", icon: <FaJava />, level: 80 },
            { name: "JavaScript", icon: <FaJs />, level: 90 },
            { name: "PHP", icon: <FaPhp />, level: 75 },
            { name: "C++", icon: <span className="font-bold text-lg">C++</span>, level: 70 },
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "React", icon: <FaReact />, level: 85 },
            { name: "Laravel", icon: <SiLaravel />, level: 75 },
            { name: "Node.js", icon: <FaNodeJs />, level: 80 },
            { name: "Spring Boot", icon: <SiSpringboot />, level: 65 },
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "MySQL", icon: <SiMysql />, level: 85 },
            { name: "MongoDB", icon: <SiMongodb />, level: 80 },
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: <FaGitAlt />, level: 90 },
            { name: "Postman", icon: <SiPostman />, level: 85 },
            { name: "VS Code", icon: <VscCode />, level: 95 },
            { name: "Figma", icon: <FaFigma />, level: 70 },
        ]
    }
];

const SkillCard = ({ name, icon, level }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-surface p-4 rounded-xl border border-white/5 hover:border-accent/30 transition-all duration-300 flex flex-col items-center gap-3 group"
        >
            <div className="text-4xl text-gray-400 group-hover:text-accent transition-colors duration-300 h-12 flex items-center justify-center">
                {icon}
            </div>
            <h4 className="text-white font-medium">{name}</h4>
            <div className="w-full bg-gray-700 h-1.5 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="h-full bg-gradient-to-r from-accent to-accentGreen"
                ></motion.div>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div name="skills" className="w-full min-h-screen bg-primary py-20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Skills & <span className="text-accentGreen">Tools</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">My technical expertise and the technologies I use to build products.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {skills.map((category, idx) => (
                        <div key={idx}>
                            <h3 className="text-2xl font-bold text-white mb-6 border-l-4 border-accent pl-4">{category.category}</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                                {category.items.map((skill, i) => (
                                    <SkillCard key={i} {...skill} />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
