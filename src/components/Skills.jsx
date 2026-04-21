import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaPhp, FaReact, FaNodeJs, FaGitAlt, FaFigma } from 'react-icons/fa';
import { SiSpringboot, SiLaravel, SiMysql, SiMongodb, SiPostman } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import { BsTypescript } from "react-icons/bs";

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Java", icon: <FaJava />, level: 80 },
            { name: "JavaScript", icon: <FaJs />, level: 90 },
            { name: "TypeScript", icon: <BsTypescript />, level: 90 },
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

const SkillPill = ({ name, icon }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-1.5 px-3 py-1.5 bg-surface border border-white/5 rounded-full hover:border-accent/40 hover:bg-white/5 transition-all duration-300 group cursor-default"
        >
            <div className="text-gray-400 group-hover:text-accent transition-colors duration-300 text-[14px]">
                {icon}
            </div>
            <span className="text-gray-300 text-[13px] font-medium group-hover:text-white transition-colors">
                {name}
            </span>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div name="skills" className="w-full py-16 bg-primary">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-10 border-b border-white/5 pb-6">
                    <h2 className="text-2xl font-sans font-bold text-white mb-3">Skills & <span className="text-accent">Tools</span></h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">My technical expertise and the technologies I use to build products.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skills.map((category, idx) => (
                        <div key={idx} className="bg-surface/50 border border-white/5 rounded-2xl p-5 md:p-6 hover:border-white/10 transition-colors">
                            <h3 className="text-base font-bold text-white mb-4 uppercase tracking-widest text-accentGreen/80">
                                {category.category}
                            </h3>
                            <div className="flex flex-wrap gap-3">
                                {category.items.map((skill, i) => (
                                    <SkillPill key={i} name={skill.name} icon={skill.icon} />
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
