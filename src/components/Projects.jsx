import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';

const projectsData = [
    {
        id: 1,
        title: "CocoSmart",
        category: "Web App",
        problem: "Plantation management is manual & inefficient",
        solution: "A MERN-based system automating inventory, sales & workforce",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        image: "/cocosmart.png",
        live: "#",
        github: "#",
        details: "Full details about CocoSmart..."
    },
    {
        id: 2,
        title: "BillOut",
        category: "Web App",
        problem: "Users forget due dates",
        solution: "Automated reminder + dashboard system",
        tech: ["PHP", "MySQL", "JavaScript"],
        image: "/bill-reminder.png",
        live: "#",
        github: "#",
        details: "Full details about Bill Reminder..."
    },
    {
        id: 3,
        title: "EasyMoney",
        category: "Web App",
        problem: "People struggle to manage budgets",
        solution: "Tracker with charts, budgets & goals",
        tech: ["Laravel", "React", "PostgreSQL"],
        image: "/finance-tracker.png",
        live: "#",
        github: "#",
        details: "Full details about Finance Tracker..."
    },
    {
        id: 4,
        title: "TaskMaster",
        category: "Mobile App",
        problem: "Task management on the go",
        solution: "React Native app for tracking daily tasks",
        tech: ["React Native", "Firebase"],
        image: "https://via.placeholder.com/600x400?text=TaskMaster", // Placeholder
        live: "#",
        github: "#",
        details: "Mobile task manager..."
    }
];

const FilterTabs = ({ activeFilter, setFilter }) => {
    const filters = ["All", "Web App", "Mobile App"];

    return (
        <div className="flex justify-center gap-4 mb-12 flex-wrap">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setFilter(filter)}
                    className={`px-6 py-2 rounded-full text-sm font-bold transition-all duration-300 border ${activeFilter === filter
                        ? "bg-accent text-primary border-accent shadow-[0_0_15px_rgba(0,242,255,0.4)]"
                        : "bg-transparent text-gray-400 border-white/10 hover:border-accent hover:text-white"
                        }`}
                >
                    {filter}
                </button>
            ))}
        </div>
    );
};

const ProjectCard = ({ project, onClick }) => {
    return (
        <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            onClick={() => onClick(project)}
            className="group relative bg-surface/50 backdrop-blur-sm rounded-2xl overflow-hidden cursor-pointer border border-white/5 hover:border-accent/50 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,242,255,0.15)]"
        >
            <div className="relative h-56 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent z-10 opacity-80"></div>

                {/* Image with Zoom Effect */}
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />

                {/* Category Badge */}
                <div className="absolute top-4 left-4 z-20">
                    <span className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-full text-xs text-accent font-bold uppercase tracking-wider">
                        {project.category}
                    </span>
                </div>

                {/* Hover Actions */}
                <div className="absolute top-4 right-4 z-20 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-[-10px] group-hover:translate-y-0">
                    <a href={project.github} target="_blank" rel="noreferrer" className="p-2 bg-white text-primary rounded-full hover:bg-accent transition-colors" onClick={(e) => e.stopPropagation()}><FaGithub /></a>
                    <a href={project.live} target="_blank" rel="noreferrer" className="p-2 bg-white text-primary rounded-full hover:bg-accent transition-colors" onClick={(e) => e.stopPropagation()}><FaExternalLinkAlt /></a>
                </div>
            </div>

            <div className="p-6 relative z-20">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.solution}</p>

                <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.slice(0, 3).map((t, i) => (
                        <span key={i} className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-300 flex items-center gap-1">
                            <FaCode size={10} className="text-accentGreen" /> {t}
                        </span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="text-xs px-2 py-1 rounded bg-white/5 border border-white/5 text-gray-500">
                            +{project.tech.length - 3}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const [filter, setFilter] = useState("All");
    const [filteredProjects, setFilteredProjects] = useState(projectsData);

    useEffect(() => {
        if (filter === "All") {
            setFilteredProjects(projectsData);
        } else {
            setFilteredProjects(projectsData.filter(p => p.category === filter));
        }
    }, [filter]);

    return (
        <div name="projects" className="w-full min-h-screen bg-primary py-20 relative">
            {/* Background Decorations */}
            <div className="absolute top-20 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px] pointer-events-none"></div>
            <div className="absolute bottom-20 left-0 w-96 h-96 bg-accentGreen/5 rounded-full blur-[100px] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-heading font-bold text-white mb-4">Featured <span className="text-accent">Projects</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        A showcase of my technical projects, ranging from web applications to full-stack solutions.
                    </p>
                </div>

                <FilterTabs activeFilter={filter} setFilter={setFilter} />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Project Modal */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            transition={{ duration: 0.3 }}
                            className="bg-surface w-full max-w-5xl rounded-2xl overflow-hidden border border-white/10 relative shadow-2xl shadow-accent/10 flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-accent z-50 transition-colors">
                                <FaTimes size={20} />
                            </button>

                            {/* Left Side - Image */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:bg-gradient-to-r"></div>
                            </div>

                            {/* Right Side - Details */}
                            <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col">
                                <div className="mb-6">
                                    <span className="px-3 py-1 bg-accent text-primary text-xs font-bold rounded-full mb-3 inline-block">{selectedProject.category}</span>
                                    <h3 className="text-3xl font-bold text-white mb-2">{selectedProject.title}</h3>
                                </div>

                                <div className="space-y-6 mb-8 flex-grow">
                                    <div>
                                        <h4 className="text-accent font-bold mb-2 flex items-center gap-2">The Problem</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-accentGreen font-bold mb-2 flex items-center gap-2">The Solution</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.solution}</p>
                                    </div>

                                    <div>
                                        <h4 className="text-white font-bold mb-3">Technologies</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1 rounded bg-white/5 border border-white/10 text-gray-300 text-sm">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>

                                <div className="flex gap-4 mt-auto">
                                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex-1 py-2.5 bg-accent text-primary font-bold rounded-xl text-center hover:bg-white transition-all hover:scale-[1.02] shadow-lg shadow-accent/20">
                                        Live Demo
                                    </a>
                                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 py-2.5 border border-white/20 text-white font-bold rounded-xl text-center hover:bg-white/10 transition-all hover:scale-[1.02]">
                                        GitHub Repo
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Projects;
