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
        live: "https://cocosmart.vercel.app/",
        github: "https://github.com/ShafnyHadhy/cocosmart-frontend",
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
        github: "https://github.com/ShafnyHadhy/online-bill-and-event-reminder",
        details: "Full details about Bill Reminder..."
    },
    {
        id: 3,
        title: "iBank",
        category: "Web App",
        problem: "People struggle to manage their bank accounts",
        solution: "A Java based system for managing bank accounts",
        tech: ["Java", "Bootstrap", "MySQL"],
        image: "/finance-tracker.png",
        live: "#",
        github: "#",
        details: "Full details about iBank..."
    },
    {
        id: 4,
        title: "Taskify",
        category: "Webb App",
        problem: "Task management on the go",
        solution: "React web app for tracking daily tasks",
        tech: ["Laravel", "React", "MySQL"],
        image: "https://via.placeholder.com/600x400?text=TaskMaster", // Placeholder
        live: "#",
        github: "https://github.com/ShafnyHadhy/task-management-laravel",
        details: "Full details about Taskify..."
    },
    {
        id: 5,
        title: "Revolve",
        category: "Web App",
        problem: "Waste management is manual & inefficient",
        solution: "A MERN based systems to reduce waste and promote reuse",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind"],
        image: "https://via.placeholder.com/600x400?text=TaskMaster", // Placeholder
        live: "https://revolve-af.vercel.app/",
        github: "https://github.com/ShafnyHadhy/AF-frontend-react",
        details: "Full details about Revolve..."
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
                    className={`px-5 py-1.5 rounded text-[13px] font-bold transition-all duration-300 border ${activeFilter === filter
                        ? "bg-accent text-primary border-accent"
                        : "bg-surface text-gray-400 border-white/10 hover:border-accent hover:text-accent"
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
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => onClick(project)}
            className="group w-full bg-surface border border-white/5 hover:border-accent/40 rounded-2xl p-5 md:p-6 cursor-pointer transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-6 relative"
        >
            <div className="flex-grow flex flex-col gap-1.5 relative z-10 w-full md:w-auto">
                <div className="flex items-center gap-3">
                    <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-accent transition-colors">
                        {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] text-accent font-bold uppercase tracking-widest hidden sm:inline-block">
                        {project.category}
                    </span>
                </div>

                <p className="text-gray-400 text-[13px] md:text-sm mb-2 md:mb-0 max-w-2xl">
                    {project.solution}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-1.5">
                    {project.tech.map((t, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5 hover:bg-white/10 transition-colors">
                            <FaCode size={10} className="text-accentGreen" /> {t}
                        </span>
                    ))}
                </div>
            </div>

            <div className="hidden md:flex items-center flex-shrink-0 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0 duration-300">
                <div className="w-10 h-10 rounded-full border border-gray-700 bg-primary flex items-center justify-center text-white group-hover:bg-accent group-hover:text-primary group-hover:border-accent transition-colors shadow-lg">
                    <FaExternalLinkAlt size={12} />
                </div>
            </div>

            {/* Show category badge on mobile absolute top-right */}
            <span className="px-3 py-1 bg-accent/10 border border-accent/20 rounded text-[10px] text-accent font-bold uppercase tracking-widest sm:hidden absolute top-6 right-6">
                {project.category}
            </span>
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
        <div name="projects" className="w-full min-h-screen bg-primary py-16 relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-10 border-b border-white/5 pb-6">
                    <h2 className="text-2xl font-sans font-bold text-white mb-3">Featured <span className="text-accent">Projects</span></h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        A showcase of my technical projects, ranging from web applications to full-stack solutions.
                    </p>
                </div>

                <FilterTabs activeFilter={filter} setFilter={setFilter} />

                <motion.div
                    layout
                    className="flex flex-col gap-4 sm:gap-6 max-w-5xl mx-auto"
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
                            className="bg-surface w-full max-w-5xl rounded-xl overflow-hidden border border-gray-800 relative flex flex-col md:flex-row max-h-[90vh]"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-gray-300 hover:text-white z-50 transition-colors">
                                <FaTimes size={20} />
                            </button>

                            {/* Left Side - Image */}
                            <div className="w-full md:w-1/2 h-64 md:h-auto relative">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent md:bg-gradient-to-r"></div>
                            </div>

                            {/* Right Side - Details */}
                            <div className="w-full md:w-1/2 p-8 overflow-y-auto flex flex-col">
                                <div className="mb-6 border-b border-white/10 pb-4">
                                    <span className="px-3 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-bold rounded mb-3 inline-block">{selectedProject.category}</span>
                                    <h3 className="text-3xl font-sans font-bold text-white mb-2">{selectedProject.title}</h3>
                                </div>

                                <div className="space-y-6 mb-8 flex-grow">
                                    <div>
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">The Problem</h4>
                                        <p className="text-gray-400 text-sm leading-relaxed">{selectedProject.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-white font-bold mb-2 flex items-center gap-2">The Solution</h4>
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

                                <div className="flex gap-4 mt-auto border-t border-white/10 pt-6">
                                    <a href={selectedProject.live} target="_blank" rel="noreferrer" className="flex-1 py-3 bg-accent text-primary font-bold rounded text-center hover:opacity-90 transition-all">
                                        Live Demo
                                    </a>
                                    <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex-1 py-3 border border-white/20 text-white font-bold rounded text-center hover:bg-white/5 transition-all outline-none">
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
