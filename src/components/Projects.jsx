import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        id: 10,
        title: "Job Board SaaS API",
        category: "API",
        problem: "Job platforms must handle high-volume, complex queries while maintaining strict security and performance under load. As a system scales, basic database lookups become bottlenecks, APIs become vulnerable to abuse, and debugging failures across concurrent requests becomes nearly impossible without proper observability.",
        solution: "I architected and deployed a highly scalable, backend-only SaaS API designed for high-performance job matching. The system leverages PostgreSQL's full-text search with GIN indexing to ensure lightning-fast query resolution across thousands of listings. To guarantee stability under load, I implemented a Redis-backed cache-aside pattern and strict route-specific rate limiting.",
        tech: ["Node.js", "Express", "TypeScript", "PostgreSQL", "Prisma 7", "Redis", "Docker", "JWT", "Google OAuth"],
        image: "/job_board_api.png",
        live: "https://jobboard-api-navy.vercel.app/",
        github: "https://github.com/ShafnyHadhy/jobboard-api",
        details: "This API was built to tackle the core challenges of a production-grade SaaS platform.\n\n**Core Architecture:** Developed a robust REST API using Node.js, Express, and TypeScript, managing five core entities (Users, Companies, Jobs, Applications, Notifications) via Prisma ORM. Authentication is secured via JWT and Google OAuth.\n\n**Performance Optimization:** Bypassed standard query bottlenecks by implementing PostgreSQL full-text search with GIN indexing. Integrated Redis using a cache-aside pattern (utilizing scanStream over blocking KEYS commands) to significantly reduce database load during traffic spikes.\n\n**Security & Reliability:** Protected sensitive endpoints with distributed rate-limiting.\n\n**Observability:** Engineered an end-to-end tracing system by injecting UUID correlation IDs into structured JSON logs, allowing seamless request tracing and debugging across the entire system lifecycle. The infrastructure is fully containerized using Docker Compose for reliable local deployment and testing."
    },
    {
        id: 1,
        title: "CareBridge",
        category: "Web App",
        problem: "Monolithic healthcare systems struggle with data fragmentation, scaling during high traffic, and integrating real-time video consultations seamlessly.",
        solution: "Engineered a scalable, microservices-based telemedicine platform. Decoupled core domains (appointments, patient records, payments) into independent services orchestrated by an API Gateway, allowing the system to scale components independently.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "Tailwind CSS"],
        image: "/carebridge_dashboard.png",
        live: "",
        github: "https://github.com/ShafnyHadhy/health_care_appointment-microservices.git",
        details: "**Architecture:** Developed using React, Node.js, and Express, with MongoDB for data persistence. Designed a microservices architecture consisting of independent services for authentication, patient/doctor management, telemedicine, and an AI symptom checker.\n\n**Infrastructure & DevOps:** Containerized the entire application suite using Docker and orchestrated deployments with Kubernetes, ensuring high availability and seamless horizontal scaling.\n\n**Key Features:** Integrated secure virtual video consultations, automated prescription generation, and robust role-based access control for administrators, doctors, and patients."
    },
    {
        id: 2,
        title: "FinFlow",
        category: "Web App",
        problem: "Personal finance tools often lack real-time data synchronization and struggle to securely process, categorize, and visualize large volumes of transactional data efficiently.",
        solution: "Developed a full-stack financial dashboard designed for high data integrity and real-time analytics. Implemented a robust React and Laravel architecture with automated workflow integrations to categorize transactions and dynamically visualize spending patterns.",
        tech: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "n8n"],
        image: "/finflow_dashboard.png",
        live: "#",
        github: "https://github.com/riyajkm/f-tracker",
        details: "**Tech Stack:** Built with a React and TypeScript frontend, powered by a Laravel backend and a MySQL relational database. Styled with Tailwind CSS for a highly responsive user experience.\n\n**Data Pipelines & Automation:** Integrated n8n to handle automated workflows for transaction categorization and real-time alerts.\n\n**Analytics & Dashboarding:** Created interactive, real-time data visualizations to track income and expenses, utilizing efficient MySQL queries and Laravel's Eloquent ORM to process financial data securely and quickly."
    },
    {
        id: 3,
        title: "Revolve",
        category: "Web App",
        problem: "Traditional waste management lacks real-time tracking, geolocation routing, and structured categorization, leading to operational inefficiencies and poor resource allocation.",
        solution: "Architected a full-stack waste management ecosystem to digitize recycling tracking and disposal routing. Integrated Google Maps API for location-based services and built secure role-based access controls for administrators and regular users.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Maps API"],
        image: "/revolve_dashboard.png",
        live: "https://revolve-af.vercel.app/",
        github: "https://github.com/ShafnyHadhy/AF-frontend-react",
        details: "**Core System:** Developed using the MERN stack. Designed robust RESTful APIs to handle high-frequency data logging for waste entries and disposal activities.\n\n**Geolocation Integration:** Leveraged the Google Maps API to map recycling centers and optimize disposal tracking, making the platform interactive and location-aware.\n\n**User Roles & Security:** Implemented JWT-based authentication with strict role-based routing (Admin vs. User) to maintain system integrity and data security."
    },
    {
        id: 4,
        title: "CocoSmart",
        category: "Web App",
        problem: "Agricultural operations often rely on fragmented, paper-based systems, creating severe bottlenecks in inventory tracking, order processing, and financial reporting.",
        solution: "Led the development of a centralized, MERN-stack plantation ERP system. Engineered modules for product management, secure order processing, and automated financial tracking, transitioning the operation from manual logs to a digitized workflow.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "/cocosmart.png",
        live: "https://cocosmart.vercel.app/",
        github: "https://github.com/ShafnyHadhy/cocosmart-frontend",
        details: "**Leadership & Architecture:** Acted as Team Lead, orchestrating the system architecture, database schema design, and API structure to ensure cross-module compatibility.\n\n**Core Modules:** Personally developed the Authentication system, the B2B/B2C Marketplace, and the Finance module. Ensured strict ACID compliance in MongoDB transactions for order processing and financial record-keeping.\n\n**DevOps & Collaboration:** Managed version control workflows via Git/GitHub, resolving merge conflicts and maintaining CI/CD best practices across the development team."
    },
    {
        id: 5,
        title: "BillOut",
        category: "Web App",
        problem: "Managing recurring financial obligations requires reliable scheduling systems; manual tracking frequently results in missed deadlines and late penalties.",
        solution: "Engineered a robust scheduling and reminder system utilizing Java Servlets and MySQL. Implemented CRON-like background processes to manage state changes and trigger timely notifications for pending bills and events.",
        tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
        image: "/bill-reminder.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/online-bill-and-event-reminder",
        details: "**Backend Engineering:** Built a robust server-side architecture using Java, JSP, and Servlets. Implemented session management and secure user authentication flows.\n\n**Database Design:** Designed a normalized MySQL relational database schema to efficiently store user profiles, recurring bills, and event schedules without data redundancy.\n\n**Frontend Integration:** Developed a responsive UI with HTML, CSS, and Bootstrap, ensuring seamless interaction with the Java backend through structured HTTP requests."
    },
    {
        id: 6,
        title: "iBank",
        category: "Web App",
        problem: "Digital banking platforms must adhere to strict security protocols, handle concurrent transactions safely, and manage complex state across user and admin roles.",
        solution: "Developed a secure, MVC-based online banking application simulating core financial operations. Engineered transactional safeguards using Java and MySQL to prevent race conditions during account updates and transfers.",
        tech: ["HTML", "CSS", "Bootstrap", "Java", "JSP", "Servlets", "MySQL"],
        image: "/finance-tracker.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/online-banking-system",
        details: "**Architecture:** Implemented a strict Model-View-Controller (MVC) architecture using Java, JSP, and Servlets to cleanly separate business logic from presentation.\n\n**Security & Transactions:** Built secure user authentication and session handling. Leveraged MySQL transactional features to ensure financial data integrity during simulated deposits, withdrawals, and transfers.\n\n**Administration:** Developed a comprehensive admin dashboard with elevated privileges for user account oversight and system data maintenance."
    },
    {
        id: 7,
        title: "Taskify",
        category: "Web App",
        problem: "Task management systems require efficient state updates and relational data structures to handle categories, priorities, and user associations without performance degradation.",
        solution: "Built a highly performant, server-rendered task management application using the Laravel PHP framework. Leveraged Eloquent ORM for complex database relationships and Blade templating for rapid UI delivery.",
        tech: ["Laravel", "Blade", "MySQL"],
        image: "/taskify_dashboard.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/task-management-laravel",
        details: "**Framework Expertise:** Utilized Laravel's robust ecosystem to implement secure authentication, CSRF protection, and RESTful routing.\n\n**Database & ORM:** Designed a relational MySQL database and used Eloquent ORM to manage complex relationships between users, task categories, and statuses.\n\n**Frontend:** Leveraged Blade templating engine for efficient server-side rendering, ensuring fast initial page loads and secure data injection."
    },
    {
        id: 8,
        title: "Mindly",
        category: "Mobile App",
        problem: "Mental wellness tracking requires continuous user engagement, offline-first capabilities, and sophisticated data analysis to recognize emotional patterns effectively.",
        solution: "Engineered a native Android application prioritizing local data persistence and real-time cloud syncing. Integrated AI-driven insights to analyze mood trends, leveraging the MVVM architecture for clean UI state management.",
        tech: ["Kotlin", "XML", "Android Studio", "RecyclerView", "ViewModel", "Room"],
        image: "/mindly_app.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/mindly-personal-wellness-app",
        details: "**Mobile Architecture:** Built natively using Kotlin and XML layouts, strictly adhering to the MVVM (Model-View-ViewModel) architectural pattern for predictable state management and testability.\n\n**Local & Cloud Data:** Implemented the Room persistence library for reliable offline caching of journal entries and mood logs, syncing seamlessly with a Node.js/Express backend and MongoDB database.\n\n**Real-time Features:** Integrated Firebase for secure authentication and push notifications, ensuring users receive timely reminders and updates."
    },
    {
        id: 9,
        title: "TrekkiwMate",
        category: "Mobile App",
        problem: "Travel applications often suffer from cluttered interfaces and poor data structuring, leading to high cognitive load when planning complex itineraries.",
        solution: "Designed and developed a UI/UX-centric Android travel application. Translated high-fidelity Figma prototypes into responsive XML layouts, utilizing RecyclerViews and View Binding for fluid, memory-efficient list rendering.",
        tech: ["Figma", "Android Studio", "XML", "Kotlin", "Material Design", "View Binding"],
        image: "/trekkiwmate_app.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/trekkieMate-travel-app",
        details: "**UI/UX Engineering:** Started with comprehensive wireframing and prototyping in Figma, focusing on user-centered design principles before translating flows into native Android code.\n\n**Android Development:** Implemented pixel-perfect UIs using XML and Material Design components. Utilized advanced Android techniques like View Binding for null-safe view interactions and RecyclerViews for performant list scrolling.\n\n**Focus:** The project highlights the bridge between strict design systems and native mobile implementation, ensuring both aesthetic appeal and technical performance."
    }
];

const FilterTabs = ({ activeFilter, setFilter }) => {
    const filters = ["All", "Web App", "Mobile App", "API"];

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

const ProjectCard = ({ project, onClick, index }) => {
    const normalizedIndex = index % 4;
    const isLargeLeft = normalizedIndex === 0;
    const isSmallTopRight = normalizedIndex === 1 || normalizedIndex === 2;
    const isWideBottomRight = normalizedIndex === 3;

    let gridClasses = '';
    let layoutClasses = 'flex-col';
    let imageClasses = 'w-full border-b border-white/10';
    let contentClasses = 'w-full flex-grow';
    let titleClasses = 'font-bold text-gray-200 group-hover:text-accent transition-colors ';
    let descClasses = 'text-gray-400 text-sm leading-relaxed ';

    if (isLargeLeft) {
        gridClasses = 'md:col-span-2 lg:col-span-2 lg:row-span-2';
        imageClasses += ' h-64 lg:h-[55%]';
        contentClasses += ' p-6 lg:p-8';
        titleClasses += 'text-2xl lg:text-3xl';
        descClasses += 'line-clamp-4 lg:line-clamp-none';
    } else if (isWideBottomRight) {
        gridClasses = 'md:col-span-2 lg:col-span-2';
        layoutClasses = 'flex-col sm:flex-row';
        imageClasses = 'w-full sm:w-[45%] h-48 sm:h-auto border-b sm:border-b-0 sm:border-r border-white/10';
        contentClasses = 'w-full sm:w-[55%] justify-center p-6 lg:p-8';
        titleClasses += 'text-xl lg:text-2xl';
        descClasses += 'line-clamp-3';
    } else { // isSmallTopRight
        gridClasses = 'md:col-span-1 lg:col-span-1';
        imageClasses += ' h-48 lg:h-40';
        contentClasses += ' p-5';
        titleClasses += 'text-lg lg:text-xl';
        descClasses += 'line-clamp-2';
    }

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
            onClick={() => onClick(project)}
            className={`group w-full bg-surface border border-white/10 hover:border-accent/40 rounded-xl cursor-pointer transition-all duration-300 flex overflow-hidden relative ${gridClasses} ${layoutClasses}`}
        >
            {/* Image Container */}
            <div className={`relative overflow-hidden bg-primary/20 flex-shrink-0 ${imageClasses}`}>
                <img src={project.image} alt={project.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700" />
            </div>

            {/* Content Container */}
            <div className={`flex flex-col gap-3 ${contentClasses}`}>
                <div className="flex items-center gap-3">
                    <h3 className={titleClasses}>
                        {project.title}
                    </h3>
                </div>

                <p className={descClasses}>
                    {project.solution}
                </p>

                <div className="flex flex-wrap items-center gap-2 mt-auto pt-2">
                    {project.tech.slice(0, isSmallTopRight ? 3 : 5).map((t, i) => (
                        <span key={i} className="text-[11px] px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-gray-300 flex items-center gap-1.5 hover:bg-white/10 hover:text-accent transition-colors cursor-default">
                            <FaCode size={10} className="text-accentGreen" /> {t}
                        </span>
                    ))}
                    {project.tech.length > (isSmallTopRight ? 3 : 5) && (
                        <span className="text-[11px] px-2 py-1 rounded-full border border-transparent text-gray-500 font-medium hover:text-accent transition-colors cursor-default">
                            +{project.tech.length - (isSmallTopRight ? 3 : 5)}
                        </span>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

const Projects = ({ limit = 4, showViewMore = true, showBackButton = false }) => {
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
                {showBackButton && (
                    <div className="mb-6 z-20 relative">
                        <Link to="/" className="text-accent hover:text-white font-bold flex w-fit items-center gap-2 transition-colors">
                            ← Back to Portfolio
                        </Link>
                    </div>
                )}
                <div className="text-center mb-10 border-b border-white/5 pb-6">
                    <h2 className="text-2xl font-sans font-bold text-white mb-3">{showBackButton ? 'All ' : 'Featured '}<span className="text-accent">Projects</span></h2>
                    <p className="text-gray-400 text-sm max-w-2xl mx-auto">
                        A showcase of my technical projects, ranging from web applications to full-stack solutions.
                    </p>
                </div>

                <FilterTabs activeFilter={filter} setFilter={setFilter} />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto"
                >
                    <AnimatePresence>
                        {filteredProjects.slice(0, limit ? limit : filteredProjects.length).map((project, index) => (
                            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} index={index} />
                        ))}
                    </AnimatePresence>
                </motion.div>

                {showViewMore && filteredProjects.length > limit && (
                    <div className="mt-12 text-center relative z-20 flex justify-center">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-primary text-accent font-normal rounded-md transition-all duration-300 hover:underline underline-offset-4"
                            onClick={() => window.scrollTo(0, 0)}
                        >
                            View All Projects -{'>'}
                        </Link>
                    </div>
                )}
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
