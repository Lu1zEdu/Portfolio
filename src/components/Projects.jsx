import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import { projects } from '../data/projects';

const Projects = ({ language }) => {
    const [filter, setFilter] = useState('all');
    const [selectedProject, setSelectedProject] = useState(null);

    const filteredProjects = filter === 'all'
        ? projects
        : projects.filter(project => project.category === filter);

    // Mapeamento dos botões de filtro
    const categories = {
        all: language === 'pt' ? 'Todos' : 'All',
        work: language === 'pt' ? 'Trabalho (ITA)' : 'Work',
        college: language === 'pt' ? 'Faculdade (FIAP)' : 'College',
        personal: language === 'pt' ? 'Pessoais / Labs' : 'Personal / Labs' // <-- Adicionado aqui
    };

    return (
        <div id='projects' className='w-full py-16 px-4 bg-[#0f172a] text-gray-300'>
            <div className='max-w-[1240px] mx-auto'>
                <p className='text-xl tracking-widest uppercase text-accent font-bold'>
                    {language === 'pt' ? 'Portfólio' : 'Portfolio'}
                </p>
                <h2 className='py-4 text-4xl font-bold text-white'>
                    {language === 'pt' ? 'Meus Projetos' : 'My Projects'}
                </h2>

                {/* Filtros */}
                <div className='flex flex-wrap gap-4 mb-8 text-sm'>
                    {Object.keys(categories).map((key) => (
                        <button
                            key={key}
                            onClick={() => setFilter(key)}
                            className={`px-4 py-2 rounded-full border transition-all ${filter === key
                                    ? 'bg-accent border-accent text-white shadow-[0_0_10px_#8b5cf6]'
                                    : 'border-gray-600 text-gray-400 hover:text-white hover:border-white'
                                }`}
                        >
                            {categories[key]}
                        </button>
                    ))}
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                    {filteredProjects.map((project) => (
                        <div key={project.id} onClick={() => setSelectedProject(project)} className="cursor-pointer">
                            <ProjectCard project={project} language={language} />
                        </div>
                    ))}
                </div>
            </div>

            {selectedProject && (
                <ProjectModal
                    project={selectedProject}
                    language={language}
                    onClose={() => setSelectedProject(null)}
                />
            )}

        </div>
    );
};

export default Projects;