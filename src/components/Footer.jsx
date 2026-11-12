import React from 'react';

const Footer = () => (
    <footer className="border-t border-line">
        <div className="wrap flex flex-col gap-2 py-8 text-[13px] text-body sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Shafny Hadhy</p>
            <p>Colombo, Sri Lanka</p>
        </div>
    </footer>
);

export default Footer;
