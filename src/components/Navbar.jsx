import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const links = [
    { href: 'about', label: 'About' },
    { href: 'work', label: 'Work' },
    { href: 'experience', label: 'Experience' },
    { href: 'contact', label: 'Contact' },
];

const Available = () => (
    <span className="inline-flex h-7 items-center gap-2 rounded-full border border-line bg-surface px-3 text-[12px] text-body">
        <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-lime" />
        <span className="hidden sm:inline">Available for work</span>
        <span className="sm:hidden">Available</span>
    </span>
);

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState('');
    const { pathname } = useLocation();
    const onProjectsPage = pathname.startsWith('/projects');
    const base = onProjectsPage ? '/' : '';

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Underline the link of the section nearest the top of the viewport.
    const current = onProjectsPage ? 'work' : active;
    useEffect(() => {
        if (onProjectsPage) return undefined;
        const sections = links.map((l) => document.getElementById(l.href)).filter(Boolean);
        if (!sections.length) return;
        const io = new IntersectionObserver(
            (entries) => {
                const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
                if (hit) setActive(hit.target.id);
                else if (window.scrollY < window.innerHeight * 0.5) setActive('');
            },
            { rootMargin: '-40% 0px -55% 0px' }
        );
        sections.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, [pathname, onProjectsPage]);

    useEffect(() => {
        document.body.style.overflow = open ? 'hidden' : '';
        const onKey = (e) => e.key === 'Escape' && setOpen(false);
        window.addEventListener('keydown', onKey);
        return () => {
            document.body.style.overflow = '';
            window.removeEventListener('keydown', onKey);
        };
    }, [open]);

    return (
        <header
            className={`fixed inset-x-0 top-0 z-40 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
                scrolled || open ? 'border-line bg-bg/85 backdrop-blur-md' : 'border-transparent bg-bg/0'
            }`}
        >
            <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-bg">
                Skip to content
            </a>
            <nav aria-label="Primary" className="wrap flex h-16 items-center justify-between">
                <a href={`${base}#top`} className="-my-2 flex min-h-[44px] items-center font-heading text-[19px] font-bold tracking-[-0.02em] text-white">
                    Shafny Hadhy<span className="text-lime">.</span>
                </a>

                <div className="hidden items-center gap-8 md:flex">
                    <ul className="flex items-center gap-7">
                        {links.map(({ href, label }) => {
                            const on = current === href;
                            return (
                                <li key={href}>
                                    <a
                                        href={`${base}#${href}`}
                                        aria-current={on ? 'true' : undefined}
                                        className={`group relative flex h-16 items-center text-[14px] transition-colors duration-150 hover:text-white ${on ? 'text-white' : 'text-body'}`}
                                    >
                                        {/* Hover line: draws in from the left, leaves to the right. Hidden on the active link. */}
                                        <span className={`nav-draw relative ${on ? 'nav-draw--off' : ''}`}>{label}</span>
                                        {/* Active section: a still 2px lime bar at the bar's bottom edge. */}
                                        {on && <span aria-hidden="true" className="absolute inset-x-0 bottom-0 h-0.5 bg-lime" />}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                    <Available />
                </div>

                <div className="flex items-center gap-3 md:hidden">
                    <Available />
                    <button
                        type="button"
                        onClick={() => setOpen(!open)}
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="-mr-3 flex min-h-[44px] min-w-[44px] items-center justify-center px-3 text-[14px] font-medium text-white"
                    >
                        {open ? 'Close' : 'Menu'}
                    </button>
                </div>
            </nav>

            {open && (
                <div id="mobile-menu" className="fixed inset-x-0 bottom-0 top-16 z-40 bg-bg md:hidden">
                    <ul className="wrap flex flex-col pt-4">
                        {links.map(({ href, label }) => (
                            <li key={href} className="border-b border-line">
                                <a
                                    href={`${base}#${href}`}
                                    onClick={() => setOpen(false)}
                                    className="flex min-h-[56px] items-center font-heading text-[28px] font-semibold tracking-head text-ink"
                                >
                                    {label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </header>
    );
};

export default Navbar;
