import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const ProjectModal = ({ project, onClose, language }) => {
    if (!project) return null;

    const handleOverlayClick = (e) => {
        if (e.target.id === 'modal-overlay') onClose();
    };

    const hasLink = (url) => url && url.length > 1 && url !== "#";

    return (
        <div
            id="modal-overlay"
            onClick={handleOverlayClick}
            className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex justify-center items-center p-4 overflow-y-auto"
        >
            <div className="bg-[#1e293b] w-full max-w-4xl rounded-2xl overflow-hidden shadow-2xl border border-gray-700 relative animate-fadeIn">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-black/50 p-2 rounded-full transition"
                >
                    <FaTimes size={20} />
                </button>

                <div className="grid md:grid-cols-2">
                    <div className="h-64 md:h-full w-full bg-black">
                        <img
                            src={project.img}
                            alt={project.title}
                            className="w-full h-full object-cover opacity-90"
                        />
                    </div>

                    <div className="p-8 max-h-[80vh] overflow-y-auto">
                        <h2 className="text-3xl font-bold text-white mb-2">{project.title}</h2>

                        <span className="inline-block bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                            {project.category.toUpperCase()}
                        </span>

                        <p className="text-gray-300 mb-8 leading-relaxed text-sm">
                            {language === 'pt' ? project.long_desc_pt : project.long_desc_en}
                        </p>

                        <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-700 pb-2">
                            Tech Stack
                        </h3>

                        <div className="grid grid-cols-2 gap-3 mb-8">
                            {project.tech_details.map((tech, index) => (
                                <div key={index} className="flex items-center gap-2 text-gray-300">
                                    <span className="text-xl">{tech.icon}</span>
                                    <span className="text-xs font-bold">{tech.name}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex gap-4">
                            {hasLink(project.gitUrl) && (
                                <a
                                    href={project.gitUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-3 rounded-lg font-bold transition"
                                >
                                    <FaGithub size={20} /> GitHub
                                </a>
                            )}

                            {hasLink(project.previewUrl) && (
                                <a
                                    href={project.previewUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="flex-1 flex items-center justify-center gap-2 bg-accent hover:bg-accent/80 text-white py-3 rounded-lg font-bold transition"
                                >
                                    <FaExternalLinkAlt size={18} /> Demo
                                </a>
                            )}

                            {!hasLink(project.gitUrl) && !hasLink(project.previewUrl) && (
                                <p className='text-sm text-gray-500 italic w-full text-center border border-gray-700 p-2 rounded'>
                                    {language === 'pt' ? 'Código privado ou em desenvolvimento.' : 'Private code or under development.'}
                                </p>
                            )}
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;