import React from 'react';
import { motion } from 'framer-motion';
import { FaJava, FaJs, FaPhp, FaReact, FaNodeJs, FaGitAlt, FaFigma, FaGithub, FaDocker } from 'react-icons/fa';
import { SiSpringboot, SiLaravel, SiMysql, SiMongodb, SiPostman, SiExpress, SiPostgresql, SiTypescript, SiN8N, SiNextdotjs, SiCplusplus, SiC } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';

const skills = [
    {
        category: "Languages",
        items: [
            { name: "Java", icon: <FaJava />, level: 80 },
            { name: "JavaScript", icon: <FaJs />, level: 90 },
            { name: "TypeScript", icon: <SiTypescript />, level: 90 },
            { name: "PHP", icon: <FaPhp />, level: 75 },
            { name: "C++", icon: <SiCplusplus />, level: 70 },
            { name: "C", icon: <SiC />, level: 70 },
        ]
    },
    {
        category: "Frameworks",
        items: [
            { name: "React", icon: <FaReact />, level: 85 },
            { name: "Next.js", icon: <SiNextdotjs />, level: 80 },
            { name: "Laravel", icon: <SiLaravel />, level: 75 },
            { name: "Node.js", icon: <FaNodeJs />, level: 80 },
            { name: "Spring Boot", icon: <SiSpringboot />, level: 65 },
            { name: "Express.js", icon: <SiExpress />, level: 80 },
        ]
    },
    {
        category: "Databases",
        items: [
            { name: "MySQL", icon: <SiMysql />, level: 85 },
            { name: "MongoDB", icon: <SiMongodb />, level: 80 },
            { name: "PostgreSQL", icon: <SiPostgresql />, level: 75 },
        ]
    },
    {
        category: "Tools",
        items: [
            { name: "Git", icon: <FaGitAlt />, level: 90 },
            { name: "GitHub", icon: <FaGithub />, level: 90 },
            { name: "Postman", icon: <SiPostman />, level: 85 },
            { name: "VS Code", icon: <VscCode />, level: 95 },
            { name: "Figma", icon: <FaFigma />, level: 70 },
            { name: "Docker", icon: <FaDocker />, level: 70 },
            { name: "n8n", icon: <SiN8N />, level: 70 },
        ]
    }
];

const SkillPill = ({ name, icon, level }) => {
    return (
        <motion.div
            whileHover={{ y: -2 }}
            className="flex items-center gap-2.5 p-2.5 bg-surface border border-white/5 rounded-lg hover:bg-white/5 hover:border-accent/40 transition-all duration-300 group cursor-default relative overflow-hidden shadow-sm hover:shadow-accent/5"
        >
            {/* Proficiency progress bar at the bottom */}
            <div 
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-accent/40 to-accentGreen/40 group-hover:from-accent group-hover:to-accentGreen transition-all duration-500" 
                style={{ width: `${level}%` }}
            ></div>
            
            <div className="text-gray-400 group-hover:text-accent transition-colors duration-300 text-xl flex-shrink-0 relative z-10 pl-0.5">
                {icon}
            </div>
            
            <div className="flex flex-col min-w-0 relative z-10 pl-0.5">
                <span className="text-gray-200 text-[13px] font-semibold group-hover:text-white transition-colors truncate leading-tight">
                    {name}
                </span>
                <span className="text-gray-500 text-[9px] font-mono group-hover:text-accentGreen transition-colors mt-[1px]">
                    {level}%
                </span>
            </div>
        </motion.div>
    );
};

const Skills = () => {
    return (
        <div name="skills" className="w-full py-20 bg-primary relative overflow-hidden">
            {/* Decorative background elements */}
            <div className="absolute top-40 left-0 w-72 h-72 bg-accent/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
            <div className="absolute bottom-40 right-0 w-96 h-96 bg-accentGreen/5 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16 border-b border-white/5 pb-8">
                    <h2 className="text-3xl font-sans font-bold text-white mb-4">Skills & <span className="text-accent">Tools</span></h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
                        My technical expertise and the technologies I use to build robust, scalable applications.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {skills.map((category, idx) => (
                        <motion.div 
                            key={idx} 
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.5, delay: idx * 0.1 }}
                            className="bg-surface border border-white/10 rounded-xl p-5 md:p-6 hover:border-white/20 transition-all duration-500 relative overflow-hidden group shadow-lg"
                        >
                            {/* Ambient glow in the corner of each category card */}
                            <div className="absolute -top-20 -right-20 w-48 h-48 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-all duration-700 pointer-events-none"></div>
                            
                            <div className="flex items-center gap-3 mb-6 relative z-10">
                                <h3 className="text-[15px] font-bold text-white tracking-widest uppercase">
                                    {category.category}
                                </h3>
                                <div className="h-[1px] flex-grow bg-gradient-to-r from-white/10 to-transparent"></div>
                            </div>
                            
                            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-3 gap-2.5 relative z-10">
                                {category.items.map((skill, i) => (
                                    <SkillPill key={i} name={skill.name} icon={skill.icon} level={skill.level} />
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
