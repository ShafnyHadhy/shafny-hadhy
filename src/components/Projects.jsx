import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const projectsData = [
    {
        id: 1,
        title: "CareBridge",
        category: "Web App",
        problem: "Accessing healthcare services is often inefficient, with manual appointment systems, lack of centralized medical records, and limited support for remote consultations.",
        solution: "CareBridge is a microservices-based telemedicine platform that enables patients to book appointments, attend virtual consultations, manage medical records, and receive AI-assisted health insights through a scalable and modern system.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Docker", "Kubernetes", "Tailwind CSS"],
        image: "/carebridge_dashboard.png",
        live: "",
        github: "https://github.com/ShafnyHadhy/health_care_appointment-microservices.git",
        details: "CareBridge is a full-stack telemedicine platform designed to digitize and streamline healthcare interactions between patients, doctors, and administrators. The system allows patients to book and manage appointments, upload medical reports, view prescriptions, and join video consultations. Doctors can manage schedules, respond to appointment requests, and conduct virtual consultations, while administrators oversee system operations.\n\nThe platform is built using a microservices architecture, where each core functionality (authentication, patient management, doctor management, appointments, telemedicine, payments, notifications, and AI symptom checking) is developed as an independent service. These services are orchestrated through an API Gateway, enabling efficient request routing and improved scalability.\n\nThe frontend is developed using React with Tailwind CSS for a responsive and modern user interface, while the backend services are built with Node.js and Express. MongoDB is used for data storage, and the entire system is containerized using Docker for consistent development and deployment environments.\n\nTo enhance scalability and resilience, the application is designed to be deployed on Kubernetes, allowing independent scaling of services and better resource management. This project demonstrates my ability to design and implement a complex, real-world system using modern software architecture and DevOps practices."
    },
    {
        id: 2,
        title: "FinFlow",
        category: "Web App",
        problem: "Managing personal finances manually can be time-consuming and error-prone. Users often struggle to track expenses, categorize transactions, and gain meaningful insights into their financial habits.",
        solution: "FinFlow is a full-stack finance tracking application that enables users to efficiently manage income and expenses, visualize spending patterns, and make informed financial decisions through an intuitive dashboard.",
        tech: ["React", "TypeScript", "Laravel", "MySQL", "Tailwind CSS", "n8n"],
        image: "/finflow_dashboard.png",
        live: "#",
        github: "https://github.com/riyajkm/f-tracker",
        details: "FinFlow is a full-stack personal finance management system developed to simplify the process of tracking and analyzing financial activities. The application allows users to record income and expenses, categorize transactions, and monitor their financial status in real-time.\n\nThe platform features a clean and responsive user interface, enabling users to easily navigate through dashboards, view summaries, and identify spending patterns. It also supports secure user authentication and structured data management to ensure reliability and data integrity.\n\nOn the technical side, the application is built using the MERN stack. React is used to create a dynamic and interactive frontend, while Node.js and Express handle backend services and API development. MongoDB is used for efficient data storage and retrieval, and Tailwind CSS ensures a modern and responsive design. Docker is used to containerize the application, enabling consistent development and deployment environments.\n\nThis project highlights my ability to build scalable full-stack applications, implement RESTful APIs, manage state effectively, and integrate modern development tools for real-world problem solving."
    },
    {
        id: 3,
        title: "Revolve",
        category: "Web App",
        problem: "Waste management processes are often manual, inefficient, and lack proper tracking, leading to increased environmental impact and poor resource utilization.",
        solution: "Revolve is a MERN stack-based waste management platform designed to streamline waste tracking, encourage recycling, and promote reuse through a structured and user-friendly system.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Google Maps API"],
        image: "/revolve_dashboard.png",
        live: "https://revolve-af.vercel.app/",
        github: "https://github.com/ShafnyHadhy/AF-frontend-react",
        details: "Revolve is a full-stack web application developed to address inefficiencies in traditional waste management systems. The platform enables users to manage, track, and categorize waste effectively while encouraging sustainable practices such as recycling and reuse.\n\nThe system provides an intuitive interface for users to log waste entries, monitor disposal activities, and gain insights into their environmental impact. It also supports role-based interactions, allowing administrators to oversee operations and maintain system integrity.\n\nOn the technical side, the application is built using the MERN stack, with React handling the frontend UI, Node.js and Express powering the backend APIs, and MongoDB managing data storage. Tailwind CSS is used for responsive and modern UI design.\n\nThis project demonstrates my ability to design and develop a complete full-stack solution, focusing on usability, scalability, and real-world problem solving."
    },
    {
        id: 4,
        title: "CocoSmart",
        category: "Web App",
        problem: "Coconut plantation management is often manual and fragmented, making it difficult to track inventory, manage sales, monitor finances, and coordinate daily operations efficiently.",
        solution: "CocoSmart is a MERN stack-based plantation management system that digitizes and streamlines operations such as product management, order handling, financial tracking, and overall plantation workflows through a centralized and user-friendly platform.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        image: "/cocosmart.png",
        live: "https://cocosmart.vercel.app/",
        github: "https://github.com/ShafnyHadhy/cocosmart-frontend",
        details: "CocoSmart is a full-stack Coconut Plantation Management System developed as part of an undergraduate project at SLIIT, designed to simulate a real-world client-based application.\n\nI worked as the Team Lead and was mainly responsible for developing the Authentication system, Marketplace module, and Finance module. This included handling the full workflow from product management and order processing to financial tracking and reporting, ensuring secure and well-structured system operations.\n\nI also built the main dashboards and user interfaces used to manage products, orders, and financial data, focusing on usability and clarity. In addition, I contributed to database design, system architecture planning, and API structure to support scalable development.\n\nBeyond development, I managed Git/GitHub integration, version control, and coordinated team workflows to maintain smooth collaboration throughout the project.\n\nThis project highlights my skills in full-stack MERN development, system design, and team leadership while building a production-style application."
    },
    {
        id: 5,
        title: "BillOut",
        category: "Web App",
        problem: "Users often struggle to manage multiple bills and important event reminders manually, leading to missed payments, poor financial tracking, and disorganized scheduling.",
        solution: "BillOut is a full-stack bill management and event reminder system designed to help users track bills, set reminders, and organize important events in one centralized platform. It ensures timely notifications and better personal organization.",
        tech: ["HTML", "CSS", "Bootstrap", "PHP", "MySQL"],
        image: "/bill-reminder.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/online-bill-and-event-reminder",
        details: "BillOut is a full-stack web application developed to help users manage their bills and important events efficiently. The system allows users to add bills, set due dates, and receive reminders for upcoming payments and events.\n\nThe application features a user-friendly dashboard where users can view all their pending and completed bills, along with scheduled reminders. It also includes authentication to ensure secure access to personal data.\n\nThe frontend is developed using HTML, CSS, and Bootstrap to provide a responsive and clean interface. The backend is built using Java with JSP and Servlets, following structured server-side processing. MySQL is used for storing user data, bills, and event schedules securely.\n\nThis project demonstrates my ability to build practical reminder-based systems, implement CRUD operations, manage user sessions, and design database-driven web applications."
    },
    {
        id: 6,
        title: "iBank",
        category: "Web App",
        problem: "Traditional banking processes often lack accessibility and require users to physically visit branches for basic services. Additionally, managing user accounts and administrative operations manually can be inefficient and prone to errors.",
        solution: "iBank is a full-stack online banking system that enables users to securely manage their accounts and perform essential banking operations through a centralized web platform. The system also provides an administrative dashboard for efficient user and system management.",
        tech: ["HTML", "CSS", "Bootstrap", "Java", "JSP", "Servlets", "MySQL"],
        image: "/finance-tracker.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/online-banking-system",
        details: "iBank is a full-stack web-based online banking system developed to simulate real-world banking functionalities in a secure and structured environment. The application allows users to register, log in, and manage their bank accounts through a user-friendly interface.\n\nThe system includes core features such as user authentication, account management, and an admin dashboard. Users can view and update their account details, while administrators have control over managing users and maintaining system data efficiently.\n\nThe frontend is built using HTML, CSS, and Bootstrap to ensure a responsive and intuitive user experience. The backend is developed using Java with JSP and Servlets, following the MVC architecture to separate concerns and maintain scalability. MySQL is used as the database for reliable data storage and management.\n\nThis project demonstrates my ability to develop full-stack web applications using Java-based technologies, implement authentication mechanisms, design structured databases, and build functional administrative systems. It also reflects my understanding of server-side rendering, session handling, and web application architecture."
    },
    {
        id: 7,
        title: "Taskify",
        category: "Webb App",
        problem: "Managing daily tasks efficiently can be challenging, especially when users rely on manual notes or disconnected tools that lack structure, reminders, and progress tracking.",
        solution: "Taskify is a full-stack task management web application built using Laravel that helps users organize, track, and manage their daily tasks in a structured and efficient way. The system allows users to create tasks, categorize them, update their status, and monitor productivity through a clean and intuitive interface.",
        tech: ["Laravel", "Blade", "MySQL"],
        image: "/taskify_dashboard.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/task-management-laravel",
        details: "Taskify is a personal productivity web application developed as a full-stack Laravel project. It demonstrates core web development concepts including authentication, CRUD operations, database relationships, and server-side rendering using Blade templates. The system is designed to improve daily productivity by allowing users to efficiently manage their tasks in one centralized platform."
    },
    {
        id: 8,
        title: "Mindly",
        category: "Mobile App",
        problem: "Many individuals struggle with managing stress, anxiety, and daily mental well-being due to lack of accessible tools, consistent habit tracking, and personalized emotional support systems.",
        solution: "Mindly is a mobile-based mental wellness application designed to help users track their mood, practice mindfulness, and receive AI-assisted emotional insights. It provides daily mental health check-ins, guided meditation sessions, journaling features, and personalized wellness recommendations to improve emotional well-being.",
        tech: ["Kotlin", "XML", "Android Studio", "RecyclerView", "ViewModel", "Room"],
        image: "/mindly_app.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/mindly-personal-wellness-app",
        details: "Mindly is a cross-platform mobile application focused on improving mental health awareness and emotional well-being. The app allows users to log their daily mood, track emotional patterns over time, and engage in guided mindfulness exercises such as meditation and breathing techniques.\n\nUsers can maintain a personal journal to express thoughts and reflections, while the system analyzes mood trends to provide personalized insights and suggestions. The app also includes AI-powered emotional support features that help users reflect on their mental state and suggest coping strategies.\n\nThe backend is built using Node.js and Express, with MongoDB used for storing user data, mood logs, and journal entries. Firebase is integrated for authentication and push notifications to ensure real-time engagement and reminders. The mobile frontend is developed using React Native to support both Android and iOS platforms with a consistent user experience.\n\nMindly demonstrates my ability to build user-centered mobile applications with a focus on emotional well-being, integrating AI-driven insights and modern mobile development practices."
    },
    {
        id: 9,
        title: "TrekkiwMate",
        category: "Mobile App",
        problem: "Travellers often struggle to plan trips efficiently, discover nearby attractions, and navigate unfamiliar locations due to fragmented travel information and lack of a centralized, user-friendly companion app.",
        solution: "TrekkiwMate is a UI/UX-focused travel companion mobile application designed to enhance the travel experience by providing trip planning tools, destination discovery, and interactive navigation support. The app allows users to explore places of interest, create personalized travel itineraries, and access essential travel information in a clean and intuitive interface designed in Figma and implemented using Android XML layouts.",
        tech: ["Figma", "Android Studio", "XML", "Kotlin", "Material Design", "View Binding"],
        image: "/trekkiwmate_app.png",
        live: "#",
        github: "https://github.com/ShafnyHadhy/trekkieMate-travel-app",
        details: "TrekkiwMate is a travel-focused mobile application designed with a strong emphasis on UI/UX principles and user-centered design. The project began with wireframing and prototyping in Figma, where key user flows such as trip planning, destination browsing, and itinerary management were designed for simplicity and ease of use.\n\nThe final UI was implemented in Android Studio using XML layouts and Material Design components to ensure a modern and consistent user experience. The app includes features such as destination listings, travel suggestions, itinerary creation, and smooth navigation between screens using RecyclerView and View Binding.\n\nThis project demonstrates my ability to translate UI/UX designs into functional Android applications while maintaining design consistency, usability, and performance. It highlights my skills in mobile UI design, layout structuring, and frontend Android development using XML."
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

const Projects = ({ limit = 3, showViewMore = true, showBackButton = false }) => {
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
                    className="flex flex-col gap-4 sm:gap-6 max-w-5xl mx-auto"
                >
                    <AnimatePresence>
                        {filteredProjects.slice(0, limit ? limit : filteredProjects.length).map((project) => (
                            <ProjectCard key={project.id} project={project} onClick={setSelectedProject} />
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
