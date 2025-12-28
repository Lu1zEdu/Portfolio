import React from 'react';
import { FaPlus } from 'react-icons/fa';

const ProjectCard = ({ project, language }) => {
    return (
        <div className='relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-900 rounded-xl group hover:bg-gradient-to-r from-primary to-accent overflow-hidden transition-all duration-300 border border-gray-800 hover:scale-105'>
            <img
                src={project.img}
                alt={project.title}
                className='rounded-xl group-hover:opacity-10 object-cover h-64 w-full transition duration-300'
            />

            <div className='hidden group-hover:flex flex-col items-center justify-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-full text-center px-4'>
                <h3 className='text-2xl font-bold text-white tracking-wider mb-2'>
                    {project.title}
                </h3>
                <p className='text-gray-200 text-sm mb-4'>
                    {language === 'pt' ? 'Clique para ver detalhes' : 'Click for details'}
                </p>

                <div className='flex justify-center gap-3 mb-4 text-2xl text-white'>
                    {project.tech_details.map((tech, i) => (
                        <span key={i}>{tech.icon}</span>
                    ))}
                </div>

                <div className="bg-white text-primary p-3 rounded-full animate-bounce">
                    <FaPlus />
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;