import React, { useState, useEffect } from 'react';

const Navbar = ({ toggleLanguage, currentLang, texts }) => {
    const [nav, setNav] = useState(false);
    const [shadow, setShadow] = useState(false);

    const handleNav = () => {
        setNav(!nav);
    };

    useEffect(() => {
        const handleShadow = () => {
            if (window.scrollY >= 90) {
                setShadow(true);
            } else {
                setShadow(false);
            }
        };
        window.addEventListener('scroll', handleShadow);
    }, []);

    const links = [
        { id: 1, text: texts.home, href: '#hero' },
        { id: 2, text: texts.about, href: '#about' },
        { id: 3, text: 'Skills', href: '#skills' },
        { id: 4, text: texts.projects, href: '#projects' },
        { id: 5, text: texts.contact, href: '#contact' },
    ];

    return (
        <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#0f172a]/90 backdrop-blur-sm transition-all' : 'fixed w-full h-20 z-[100] bg-[#0f172a] transition-all'}>
            <div className='flex justify-between items-center w-full h-full px-4 2xl:px-16'>

                <a href="#hero" className='cursor-pointer'>
                    <h1 className='text-3xl font-bold text-accent'>
                        Luiz<span className='text-white'> Eduardo</span>
                    </h1>
                </a>

                <div>
                    <ul className='hidden md:flex items-center'>
                        {links.map((link) => (
                            <li key={link.id} className='ml-10 text-sm uppercase hover:text-accent font-medium text-gray-300 transition-colors'>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}

                        {/* Botão de Idioma */}
                        <li className='ml-10'>
                            <button
                                onClick={toggleLanguage}
                                className='border border-accent text-accent px-3 py-1 rounded hover:bg-accent hover:text-white transition font-bold text-xs'
                            >
                                {currentLang === 'pt' ? 'EN 🇺🇸' : 'PT 🇧🇷'}
                            </button>
                        </li>
                    </ul>

                    <div onClick={handleNav} className='md:hidden cursor-pointer text-gray-300'>
                        <span className="text-3xl">☰</span>
                    </div>
                </div>
            </div>

            <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
                <div className={
                    nav
                        ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#1e293b] p-10 ease-in duration-500'
                        : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
                }>
                    <div>
                        <div className='flex w-full items-center justify-between'>
                            <h2 className='text-2xl font-bold text-accent'>Luiz Eduardo.</h2>
                            <div onClick={handleNav} className='rounded-full shadow-lg shadow-gray-900 p-3 cursor-pointer bg-[#0f172a] text-gray-300'>
                                <span className='font-bold text-lg'>✕</span>
                            </div>
                        </div>
                        <div className='border-b border-gray-700 my-4'>
                            <p className='w-[85%] md:w-[90%] py-4 text-gray-400'>
                                {currentLang === 'pt' ? 'Construindo soluções digitais.' : 'Building digital solutions.'}
                            </p>
                        </div>
                    </div>

                    <div className='py-4 flex flex-col'>
                        <ul className='uppercase'>
                            {links.map((link) => (
                                <a href={link.href} key={link.id} onClick={() => setNav(false)}>
                                    <li className='py-4 text-sm text-gray-300 hover:text-accent border-b border-gray-800'>
                                        {link.text}
                                    </li>
                                </a>
                            ))}
                        </ul>
                        <div className='pt-10'>
                            <p className='uppercase tracking-widest text-accent text-sm font-bold mb-4'>Idioma / Language</p>
                            <button
                                onClick={() => { toggleLanguage(); setNav(false); }}
                                className='w-full py-3 rounded-xl bg-gray-800 text-white font-bold hover:bg-accent transition'
                            >
                                {currentLang === 'pt' ? 'Mudar para Inglês 🇺🇸' : 'Switch to Portuguese 🇧🇷'}
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;