import React, { useState } from 'react';
import {
    FaGraduationCap, FaBriefcase, FaCode, FaEnvelope, FaCertificate,
    FaExternalLinkAlt, FaCheckCircle, FaChevronDown, FaChevronUp
} from 'react-icons/fa';

const About = ({ language }) => {
    // Estado para controlar qual item está expandido (Accordion)
    const [expandedId, setExpandedId] = useState(null);

    const toggleExpand = (id) => {
        setExpandedId(expandedId === id ? null : id);
    };

    // Dados dos Cursos
    const coursesData = {
        FIAP: [
            "Desenvolvimento .NET (2025)",
            "Formação Social e Sustentabilidade (2024)",
            "Python (2024)"
        ],
        Alura: [
            "Django: Aplicações em Python (2024)",
            "Modelagem de Dados (2024)",
            "Python com Orientação a Objetos (2024)",
            "Java com Orientação a Objetos (2024)",
            "Conhecendo SQL (2024)"
        ]
    };

    const timeline = [
        {
            id: 1,
            year: "2024 - 2026",
            title_pt: "Análise e Desenv. de Sistemas",
            title_en: "Systems Analysis & Dev",
            title_detail_pt: "FIAP - São Paulo",
            title_detail_en: "FIAP - São Paulo",
            desc_pt: "Foco em arquitetura de software, Java, .NET e Inovação.",
            desc_en: "Focus on software architecture, Java, .NET and Innovation.",
            icon: <FaGraduationCap />,
            hasCourses: true // Indica que este item pode expandir
        },
        {
            id: 2,
            year: "Atual",
            title_pt: "Estágio no ITA (LPP)",
            title_en: "Internship at ITA (LPP)",
            title_detail_pt: "Desenvolvedor de Sistemas",
            title_detail_en: "Systems Developer",
            desc_pt: "Desenvolvimento de banco de dados (PL/SQL), automação IoT e sistemas críticos em Java/Spring.",
            desc_en: "Database development (PL/SQL), IoT automation, and critical systems in Java/Spring.",
            icon: <FaBriefcase />,
            link: "https://www.lpp.ita.br/"
        },
        {
            id: 3,
            year: "Freelancer",
            title_pt: "Desenvolvedor Full Stack",
            title_en: "Full Stack Developer",
            title_detail_pt: "Projetos Independentes",
            title_detail_en: "Independent Projects",
            desc_pt: "Criação de Landing Pages, APIs e automações para clientes diversos.",
            desc_en: "Creation of Landing Pages, APIs and automations for various clients.",
            icon: <FaCode />,
        }
    ];

    return (
        <div id='about' className='w-full py-16 px-4 bg-[#0f172a] text-gray-300'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12 items-start'>

                {/* COLUNA 1: TEXTO + BOTÃO */}
                <div className='sticky top-24'> {/* Sticky deixa o texto fixo enquanto a timeline rola */}
                    <p className='text-xl tracking-widest uppercase text-accent font-bold mb-4'>
                        {language === 'pt' ? 'Sobre Mim' : 'About Me'}
                    </p>
                    <h2 className='text-4xl font-bold text-white mb-6'>
                        {language === 'pt' ? 'Dev. Full Stack & Freelancer.' : 'Full Stack Dev & Freelancer.'}
                    </h2>
                    <p className='mb-4 text-lg leading-relaxed text-gray-400'>
                        {language === 'pt'
                            ? 'Sou Luiz Eduardo, estudante de ADS na FIAP, estagiário no ITA e atuo como Desenvolvedor Freelancer. Possuo um perfil técnico sólido focado em buscar soluções eficientes para problemas complexos.'
                            : 'I am Luiz Eduardo, an ADS student at FIAP, intern at ITA, and work as a Freelance Developer. I have a solid technical profile focused on finding efficient solutions to complex problems.'}
                    </p>
                    <p className='mb-6 text-lg leading-relaxed text-gray-400'>
                        {language === 'pt'
                            ? 'Tenho experiência avançada em Java e C#, atuando desde a comunicação do Front-end com bancos de dados (Oracle/PL-SQL) até a conteinerização com Docker e práticas de DevOps.'
                            : 'I have advanced experience in Java and C#, working from Front-end communication with databases (Oracle/PL-SQL) to Docker containerization and DevOps practices.'}
                    </p>

                    <a
                        href="mailto:le6269199@gmail.com?subject=Solicitação de Currículo (Portfólio)&body=Olá Luiz, visitei seu portfólio e gostaria de solicitar seu currículo completo."
                        className="inline-flex items-center gap-2 bg-accent hover:bg-accent/80 text-white font-bold py-3 px-6 rounded-lg transition-all shadow-lg hover:shadow-purple-500/30"
                    >
                        <FaEnvelope />
                        {language === 'pt' ? 'Solicitar Currículo Completo' : 'Request Full Resume'}
                    </a>
                </div>

                {/* COLUNA 2: TIMELINE (ACCORDION) */}
                <div className='relative pl-4'>
                    {/* Linha vertical contínua */}
                    <div className='absolute left-[27px] top-0 bottom-0 w-0.5 bg-gray-700'></div>

                    <div className='space-y-12'>
                        {timeline.map((item) => (
                            <div key={item.id} className='relative group'>

                                {/* ÍCONE (Bolinha) */}
                                <div className='absolute left-[-22px] top-0 z-10'>
                                    {item.link ? (
                                        <a
                                            href={item.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            title="Visitar LPP"
                                            className='w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center text-accent ring-4 ring-[#0f172a] border-2 border-gray-600 hover:border-accent hover:bg-gray-700 transition cursor-pointer'
                                        >
                                            {item.icon}
                                            <FaExternalLinkAlt className="absolute -top-1 -right-1 text-[10px] text-white bg-accent rounded-full p-0.5" />
                                        </a>
                                    ) : (
                                        <div
                                            onClick={() => item.hasCourses && toggleExpand(item.id)}
                                            className={`w-12 h-12 rounded-full flex items-center justify-center text-white ring-4 ring-[#0f172a] border-2 transition z-10
                          ${item.hasCourses
                                                    ? 'bg-accent border-accent cursor-pointer hover:brightness-110'
                                                    : 'bg-gray-800 border-gray-600 text-accent'}`}
                                        >
                                            {item.icon}
                                        </div>
                                    )}
                                </div>

                                {/* CONTEÚDO DO CARD */}
                                <div
                                    className={`ml-8 transition-all duration-300 ${item.hasCourses ? 'cursor-pointer' : ''}`}
                                    onClick={() => item.hasCourses && toggleExpand(item.id)}
                                >
                                    <div className='flex justify-between items-start'>
                                        <div>
                                            <span className='text-sm text-accent font-bold tracking-wide uppercase'>{item.year}</span>
                                            <h4 className='text-xl font-bold text-white flex items-center gap-2 mt-1'>
                                                {language === 'pt' ? item.title_pt : item.title_en}
                                                {item.link && <FaExternalLinkAlt size={12} className="text-gray-500 opacity-50" />}
                                            </h4>
                                            <p className='text-sm text-gray-400 font-semibold mb-2'>
                                                {language === 'pt' ? item.title_detail_pt : item.title_detail_en}
                                            </p>
                                        </div>
                                        {/* Seta indicando expansão */}
                                        {item.hasCourses && (
                                            <div className='text-gray-400 mt-2'>
                                                {expandedId === item.id ? <FaChevronUp /> : <FaChevronDown />}
                                            </div>
                                        )}
                                    </div>

                                    <p className='text-gray-500 text-sm leading-relaxed'>
                                        {language === 'pt' ? item.desc_pt : item.desc_en}
                                    </p>

                                    {/* ÁREA EXPANDÍVEL (CURSOS) */}
                                    <div className={`grid transition-all duration-500 ease-in-out overflow-hidden ${expandedId === item.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'
                                        }`}>
                                        <div className='min-h-0 bg-[#1e293b] rounded-xl p-6 border border-gray-700 shadow-inner'>
                                            <h5 className="flex items-center gap-2 font-bold text-white mb-4 border-b border-gray-600 pb-2">
                                                <FaCertificate className="text-yellow-500" />
                                                {language === 'pt' ? 'Cursos & Certificações' : 'Courses & Certs'}
                                            </h5>

                                            <div className="space-y-4">
                                                {/* FIAP */}
                                                <div>
                                                    <h6 className="text-accent text-xs font-bold uppercase mb-2">FIAP</h6>
                                                    <ul className="space-y-1">
                                                        {coursesData.FIAP.map((curso, idx) => (
                                                            <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                                                                <FaCheckCircle className="text-green-500 shrink-0" size={10} />
                                                                {curso}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>

                                                {/* ALURA */}
                                                <div>
                                                    <h6 className="text-blue-400 text-xs font-bold uppercase mb-2">Alura</h6>
                                                    <ul className="space-y-1">
                                                        {coursesData.Alura.map((curso, idx) => (
                                                            <li key={idx} className="text-xs text-gray-300 flex items-center gap-2">
                                                                <FaCheckCircle className="text-green-500 shrink-0" size={10} />
                                                                {curso}
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </div>
    );
};

export default About;