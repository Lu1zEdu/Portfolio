import React from 'react';
import heroImage from '../assets/profile.jpg';

const Hero = ({ texts }) => {
    return (
        <div id="hero" className='w-full h-screen bg-primary text-txt flex items-center'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-2 gap-8 p-4 items-center'>

                <div className='flex flex-col justify-center h-full space-y-4'>
                    <p className='text-accent font-bold tracking-widest uppercase'>
                        {texts.welcome}
                    </p>
                    <h1 className='text-4xl sm:text-6xl font-bold text-white'>
                        {texts.greeting} <span className='text-accent'>Luiz Eduardo</span>
                    </h1>
                    <h2 className='text-2xl sm:text-3xl font-bold text-gray-300'>
                        {texts.role}
                    </h2>
                    <p className='py-4 text-gray-400 max-w-[90%] md:max-w-[80%]'>
                        {texts.description}
                    </p>

                    <div className='flex gap-4'>
                        <a href="#projects" className='px-6 py-3 rounded-lg bg-accent text-white font-bold hover:brightness-110 transition text-center'>
                            {texts.btnProject}
                        </a>
                        <a href="#contact" className='px-6 py-3 rounded-lg border border-accent text-accent font-bold hover:bg-accent hover:text-white transition text-center'>
                            {texts.btnContact}
                        </a>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-8 md:mt-0'>
                    <div className='relative w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gradient-to-b from-accent to-primary rounded-full p-2 animate-pulse-slow'>
                        <div className='w-full h-full bg-primary rounded-full overflow-hidden flex justify-center items-center'>
                            <img
                                src={heroImage}
                                alt="Luiz Eduardo"
                                className='object-cover w-full h-full opacity-90 hover:opacity-100 transition duration-500 hover:scale-105'
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;