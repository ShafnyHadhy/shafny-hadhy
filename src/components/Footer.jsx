import React from 'react';

const Footer = () => (
    <footer className="border-t border-line">
        {/* The closing word: the name set across the page, with the logo's lime dot. Decorative. */}
        <div className="wrap overflow-hidden pt-14 md:pt-20">
            <p
                aria-hidden="true"
                className="close-name select-none whitespace-nowrap pb-[0.14em] font-heading font-bold leading-[0.9] tracking-[-0.045em] text-ink"
            >
                Shafny Hadhy<span className="text-lime">.</span>
            </p>
        </div>
        <div className="wrap flex flex-col gap-2 py-8 text-[13px] text-body sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Shafny Hadhy</p>
            <p>Colombo, Sri Lanka</p>
        </div>
    </footer>
);

export default Footer;
