import React from 'react';
import {
    FaJava, FaPython, FaReact, FaDocker, FaGitAlt, FaDatabase, FaWindows, FaCode, FaTerminal,
    FaJs, FaLeaf, FaLayerGroup, FaMicrochip, FaServer, FaLaptopCode, FaLinux, FaAws, FaNodeJs,
    FaCloud, FaBolt, FaFlask, FaCogs, FaChartLine, FaAndroid
} from 'react-icons/fa';

const Skills = ({ language }) => {

    const skillCategories = [
        {
            title_pt: "Linguagens & Core",
            title_en: "Languages & Core",
            skills: [
                { name: "Java", icon: <FaJava className="text-orange-600" /> },
                { name: "C# / .NET", icon: <FaWindows className="text-purple-600" /> },
                { name: "Python", icon: <FaPython className="text-yellow-400" /> },
                { name: "Kotlin", icon: <FaAndroid className="text-purple-500" /> },
                { name: "C / C++", icon: <FaCode className="text-blue-600" /> },
                { name: "Fortran", icon: <FaTerminal className="text-red-700" /> },
                { name: "COBOL", icon: <FaCogs className="text-gray-500" /> },
                { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
                { name: "TypeScript", icon: <FaLaptopCode className="text-blue-500" /> },
            ]
        },
        {
            title_pt: "Frameworks & Modern Web",
            title_en: "Frameworks & Modern Web",
            skills: [
                { name: "Spring Boot", icon: <FaLeaf className="text-green-500" /> },
                { name: "Node.js", icon: <FaNodeJs className="text-green-600" /> },
                { name: "Django", icon: <FaPython className="text-green-800" /> },
                { name: "Flask API", icon: <FaFlask className="text-gray-200" /> },
                { name: "React.js", icon: <FaReact className="text-blue-400" /> },
                { name: "Vite", icon: <FaBolt className="text-yellow-400" /> },
                { name: "Next.js", icon: <FaLayerGroup className="text-white" /> },
            ]
        },
        {
            title_pt: "Cloud, Dados & Infra",
            title_en: "Cloud, Data & Infra",
            skills: [
                { name: "AWS Cloud", icon: <FaAws className="text-orange-400" /> },
                { name: "Azure", icon: <FaCloud className="text-blue-500" /> },
                { name: "Linux", icon: <FaLinux className="text-white" /> },
                { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
                { name: "Prometheus", icon: <FaChartLine className="text-orange-500" /> },
                { name: "Oracle SQL", icon: <FaDatabase className="text-red-600" /> },
                { name: "MySQL", icon: <FaDatabase className="text-blue-300" /> },
                { name: "MongoDB", icon: <FaLeaf className="text-green-400" /> },
                { name: "Redis", icon: <FaServer className="text-red-500" /> },
            ]
        }
    ];

    return (
        <div id='skills' className='w-full py-16 px-4 bg-[#0b1120] text-gray-300'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <div className='mb-10 text-center md:text-left'>
                    <p className='text-xl tracking-widest uppercase text-accent font-bold'>
                        {language === 'pt' ? 'Habilidades' : 'Skills'}
                    </p>
                    <h2 className='py-4 text-4xl font-bold text-white'>
                        {language === 'pt' ? 'Full Stack Ecosystem' : 'Full Stack Ecosystem'}
                    </h2>
                    <p className='py-2 text-gray-400 max-w-[800px]'>
                        {language === 'pt'
                            ? 'Do legado (Cobol/Fortran) à nuvem moderna (AWS/Azure). Uma stack completa para resolver qualquer tipo de problema.'
                            : 'From legacy (Cobol/Fortran) to modern cloud (AWS/Azure). A complete stack to solve any kind of problem.'}
                    </p>
                </div>

                <div className='grid md:grid-cols-3 gap-8'>
                    {skillCategories.map((category, index) => (
                        <div key={index} className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-[#1e293b] border border-gray-700 flex flex-col'>
                            <h3 className='font-bold text-xl text-white mb-6 border-b border-gray-600 pb-2 flex items-center gap-2'>
                                {language === 'pt' ? category.title_pt : category.title_en}
                            </h3>
                            <div className='grid grid-cols-2 gap-y-6 gap-x-2'>
                                {category.skills.map((skill, idx) => (
                                    <div key={idx} className='flex items-center gap-3 group'>
                                        <span className='text-2xl group-hover:scale-110 transition duration-300'>{skill.icon}</span>
                                        <span className='text-sm font-medium text-gray-300 group-hover:text-white transition'>{skill.name}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className='mt-16 flex flex-col md:flex-row gap-8 justify-center items-center'>
                    <div className='transform hover:scale-105 transition duration-300'>
                        <img
                            src="https://my-stats-43gk.vercel.app/api?username=Lu1zEdu&show_icons=true&theme=radical&hide=contribs,issues&show=discussions_answered&rank_icon=github&include_all_commits=true&card_width=300"
                            alt="Luiz Edu GitHub Stats"
                            className='rounded-xl shadow-lg border border-gray-700'
                        />
                    </div>
                    <div className='transform hover:scale-105 transition duration-300'>
                        <img
                            src="https://my-stats-43gk.vercel.app/api/top-langs/?username=Lu1zEdu&hide=python,html,css,scss&langs_count=20&layout=compact&theme=radical&card_width=300"
                            alt="Luiz Edu Top Langs"
                            className='rounded-xl shadow-lg border border-gray-700'
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Skills;