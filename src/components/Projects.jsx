import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, categories } from '../data/projects';
import { Reveal, Section, Arrow, GitHubIcon } from './ui';

const hasLink = (url) => url && url !== '#';

const Filters = ({ active, onChange }) => (
    <div role="group" aria-label="Filter projects" className="-mx-3 flex flex-wrap gap-x-1 gap-y-0">
        {categories.map((c) => {
            const on = c === active;
            return (
                <button
                    key={c}
                    type="button"
                    aria-pressed={on}
                    onClick={() => onChange(c)}
                    className={`inline-flex min-h-[44px] items-center gap-2 px-3 text-[13px] ${on ? 'text-white' : 'text-body hover:text-white'}`}
                >
                    <span aria-hidden="true" className={`h-1.5 w-1.5 rounded-full bg-lime ${on ? 'opacity-100' : 'opacity-0'}`} />
                    {c}
                </button>
            );
        })}
    </div>
);

const Row = ({ project, index, onOpen, onLoad = false }) => (
    <Reveal as="li" delay={Math.min(index * 0.04, 0.4)} onLoad={onLoad} className="border-t border-line bg-transparent last:border-b">
        <button
            type="button"
            onClick={() => onOpen(project)}
            className="group -mx-4 grid w-[calc(100%+2rem)] grid-cols-1 gap-4 rounded-md bg-transparent px-4 py-7 text-left transition-colors duration-150 hover:bg-hover md:grid-cols-[1fr_auto] md:items-center md:gap-10"
        >
            <span className="flex min-w-0 gap-4">
                <span aria-hidden="true" className="w-6 shrink-0 pt-[7px] font-sans text-[12px] font-medium tabular-nums text-lime">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <span className="min-w-0">
                    <span className="block font-heading text-[22px] font-semibold leading-[1.05] tracking-head text-ink transition-transform duration-150 group-hover:translate-x-0.5 md:text-[26px]">
                        {project.title}
                    </span>
                    <span className="mt-2 block text-[16px] leading-[1.65] text-body">{project.does}</span>
                    <span className="mt-1 block text-[14px] leading-[1.65] text-faint">Solved: {project.solved}</span>
                </span>
            </span>
            <span className="flex items-center justify-between gap-6 pl-10 md:justify-end md:pl-0">
                <span className="flex flex-wrap gap-1.5 md:flex-nowrap md:justify-end">
                    {project.tech.slice(0, 3).map((t) => (
                        <span key={t} className="pill">{t}</span>
                    ))}
                    {project.tech.length > 3 && (
                        <span className="pill text-faint">+{project.tech.length - 3}</span>
                    )}
                </span>
                <Arrow className="shrink-0 text-faint transition-[transform,color] duration-150 group-hover:translate-x-1 group-hover:text-lime" />
            </span>
        </button>
    </Reveal>
);

const Details = ({ text }) => (
    <div className="space-y-3">
        {text.split(/\n\s*\n/).map((para, i) => (
            <p key={i} className="text-[15px] leading-[1.7] text-body">
                {para.trim().split(/\*\*(.*?)\*\*/g).map((part, j) =>
                    j % 2 === 1 ? (
                        <strong key={j} className="font-semibold text-ink">
                            {part}
                        </strong>
                    ) : (
                        part
                    )
                )}
            </p>
        ))}
    </div>
);

const ProjectDialog = ({ project, onClose }) => {
    const closeRef = useRef(null);

    useEffect(() => {
        const prev = document.activeElement;
        closeRef.current?.focus();
        document.body.style.overflow = 'hidden';
        const onKey = (e) => e.key === 'Escape' && onClose();
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
            prev?.focus?.();
        };
    }, [onClose]);

    return (
        <div
            className="fixed inset-0 z-50 flex items-end justify-center bg-black/80 backdrop-blur-sm md:items-center md:p-6"
            onClick={onClose}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="project-title"
                onClick={(e) => e.stopPropagation()}
                className="max-h-[92svh] w-full max-w-3xl overflow-y-auto rounded-t-lg border border-line bg-surface md:rounded-lg"
            >
                {/* Modal Header */}
                <div className="sticky top-0 z-10 flex items-center justify-between border-b border-line bg-surface px-6 py-4 md:px-8">
                    <p className="label label-dash">{project.category}</p>
                    <button
                        ref={closeRef}
                        type="button"
                        onClick={onClose}
                        className="-mr-2 min-h-[44px] px-3 text-[13px] text-body transition-colors hover:text-white"
                    >
                        Close
                    </button>
                </div>

                <div className="px-6 pb-10 pt-8 md:px-8">
                    {/* Title & Eyebrow */}
                    <h3 id="project-title" className="text-[28px] md:text-[36px] font-heading font-semibold text-ink leading-[1.1] tracking-head">
                        {project.title}
                    </h3>
                    {project.eyebrow && (
                        <p className="mt-2 text-[15px] text-body">{project.eyebrow}</p>
                    )}

                    {/* Screenshot if available */}
                    {project.screenshot && (
                        <img
                            src={project.screenshot}
                            alt={`${project.title} screenshot`}
                            width="1440"
                            height="900"
                            loading="lazy"
                            className="mt-6 aspect-[16/10] w-full rounded-md border border-line object-cover object-top"
                        />
                    )}

                    {/* Structured Content matching system typography */}
                    <div className="mt-8 space-y-8 border-t border-line pt-8">
                        <div>
                            <h4 className="label label-dash mb-2">Problem</h4>
                            <p className="text-[16px] leading-[1.65] text-ink">{project.problem}</p>
                        </div>

                        <div>
                            <h4 className="label label-dash mb-2">Solution</h4>
                            <p className="text-[16px] leading-[1.65] text-ink">{project.solution}</p>
                        </div>

                        {project.details && (
                            <div>
                                <h4 className="label label-dash mb-3">Technical details</h4>
                                <Details text={project.details} />
                            </div>
                        )}

                        <div>
                            <h4 className="label label-dash mb-3">Stack</h4>
                            <div className="flex flex-wrap gap-1.5">
                                {project.tech.map((t) => (
                                    <span key={t} className="pill">{t}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="mt-10 flex flex-col gap-3 border-t border-line pt-6 sm:flex-row">
                        {hasLink(project.live) && (
                            <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary group min-h-[44px]">
                                Open live demo <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
                            </a>
                        )}
                        {hasLink(project.github) && (
                            <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline min-h-[44px]">
                                <GitHubIcon /> View source
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Projects = ({ limit = 6, showViewMore = true, isFullPage = false }) => {
    const [filter, setFilter] = useState('All');
    const [open, setOpen] = useState(null);
    const close = useCallback(() => setOpen(null), []);
    const list = filter === 'All' ? projects : projects.filter((p) => p.category === filter);
    const shown = limit ? list.slice(0, limit) : list;

    // Full dedicated archive page (/projects) matching 12-column system
    if (isFullPage) {
        return (
            <div className="pt-28 pb-24 md:pt-36 md:pb-32">
                <div className="wrap">
                    <Link
                        to="/#work"
                        className="group inline-flex min-h-[44px] items-center gap-2 text-[14px] text-body transition-colors duration-150 hover:text-white mb-6"
                    >
                        <span className="transition-transform duration-150 group-hover:-translate-x-1">←</span>
                        Back to home
                    </Link>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 pb-12 border-b border-line">
                        <div className="md:col-span-9">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between">
                                <h1 className="text-[36px] md:text-[54px] font-heading font-semibold text-ink leading-none tracking-head">
                                    All Projects<span className="text-lime">.</span>
                                </h1>
                                <span className="label text-faint">
                                    {list.length} {list.length === 1 ? 'project' : 'projects'}
                                </span>
                            </div>
                            <p className="mt-4 max-w-[42rem] text-[17px] text-body leading-relaxed">
                                A complete index of production applications, APIs, distributed systems and full-stack work.
                            </p>
                            <div className="mt-8">
                                <Filters active={filter} onChange={setFilter} />
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8 pt-8">
                        <div className="hidden md:block md:col-span-2">
                            <span className="label text-faint sticky top-28">01 — {String(list.length).padStart(2, '0')}</span>
                        </div>
                        <div className="md:col-span-9">
                            <ul className="border-t border-line">
                                {list.map((p, i) => (
                                    <Row key={`${filter}-${p.id}`} project={p} index={i} onOpen={setOpen} onLoad={true} />
                                ))}
                            </ul>

                            {list.length === 0 && (
                                <p className="py-16 text-[15px] text-body">
                                    No projects in this category.
                                </p>
                            )}
                        </div>
                    </div>
                </div>

                {open && <ProjectDialog project={open} onClose={close} />}
            </div>
        );
    }

    // Homepage section view
    return (
        <Section id="work" label="Selected work">
            <Reveal>
                <Filters active={filter} onChange={setFilter} />
            </Reveal>
            <ul className="mt-8">
                {shown.map((p, i) => (
                    <Row key={`${filter}-${p.id}`} project={p} index={i} onOpen={setOpen} />
                ))}
            </ul>
            {showViewMore && list.length > shown.length && (
                <Reveal>
                    <Link to="/projects" className="group mt-8 inline-flex min-h-[44px] items-center gap-2 text-[15px] text-ink hover:text-lime">
                        All projects
                        <Arrow className="transition-transform duration-150 group-hover:translate-x-1" />
                    </Link>
                </Reveal>
            )}
            {open && <ProjectDialog project={open} onClose={close} />}
        </Section>
    );
};

export default Projects;
