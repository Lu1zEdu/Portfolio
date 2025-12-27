import React from 'react';
import { FaGraduationCap, FaBriefcase, FaCode } from 'react-icons/fa';

const About = ({ language }) => {

    // Dados da Jornada (Pode mover para um arquivo separado depois se quiser)
    const timeline = [

        {
            id: 1,
            year: "2023 - 2024",
            title_pt: "Graduação na FIAP",
            title_en: "Graduation at FIAP",
            title_detail_pt: "Análise e Desenvolvimento de Sistemas",
            title_detail_en: "Systems Analysis and Development",
            desc_pt: "Vencedor do Challenge Global Solution. Foco em arquitetura de software, mobile development e inovação com IA.",
            desc_en: "Winner of the Challenge Global Solution. Focus on software architecture, mobile development, and AI innovation.",
            icon: <FaGraduationCap />,
        },
        {
            id: 2,
            year: "2024 - Present",
            title_pt: "Estágio no ITA (LPP)",
            title_en: "Internship at ITA (LPP)",
            desc_pt: "Desenvolvimento de sistemas críticos de controle de acesso e automação IoT para o Laboratório de Pesquisa em Plasmas. Foco em Java, Spring Boot e Hardware.",
            desc_en: "Development of critical access control and IoT automation systems for the Plasma Research Laboratory. Focus on Java, Spring Boot, and Hardware.",
            icon: <FaBriefcase />,
        },
        {
            id: 3,
            year: "2022 - Present",
            title_pt: "Desenvolvimento Freelance",
            title_en: "Freelance Development",
            desc_pt: "Criação de landing pages, automações em Python e sistemas web para pequenos negócios. Início da jornada Full Stack.",
            desc_en: "Creation of landing pages, Python automations, and web systems for small businesses. Start of the Full Stack journey.",
            icon: <FaCode />,
        }
    ];

    return (
        <div id='about' className='w-full py-16 px-4 bg-[#0f172a] text-gray-300'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 gap-12'>

                {/* COLUNA 1: TEXTO SOBRE MIM */}
                <div className='flex flex-col justify-center'>
                    <p className='text-xl tracking-widest uppercase text-accent font-bold mb-4'>
                        {language === 'pt' ? 'Sobre Mim' : 'About Me'}
                    </p>
                    <h2 className='text-4xl font-bold text-white mb-6'>
                        {language === 'pt' ? 'Mais que código, resolvo problemas.' : 'More than code, I solve problems.'}
                    </h2>
                    <p className='mb-4 text-lg leading-relaxed'>
                        {language === 'pt'
                            ? 'Sou um desenvolvedor Full Stack apaixonado por arquitetura de software e performance. Minha jornada começou com a curiosidade de entender como as coisas funcionam, passando pela lógica pura do C/C++ até chegar a ecossistemas complexos com Java e React.'
                            : 'I am a Full Stack developer passionate about software architecture and performance. My journey began with the curiosity to understand how things work, moving through the pure logic of C/C++ to complex ecosystems with Java and React.'}
                    </p>
                    <p className='mb-6 text-lg leading-relaxed'>
                        {language === 'pt'
                            ? 'Atualmente, combino a rigeur acadêmica do ITA com a agilidade de mercado aprendida na FIAP para entregar soluções que não apenas funcionam, mas escalam.'
                            : 'Currently, I combine the academic rigor of ITA with the market agility learned at FIAP to deliver solutions that not only work but scale.'}
                    </p>

                    {/* Skills Rápidas */}
                    <div className='grid grid-cols-2 gap-4 mt-4'>
                        <div className='p-4 bg-[#1e293b] rounded-lg border-l-4 border-accent'>
                            <h3 className='font-bold text-white'>Backend Strong</h3>
                            <p className='text-sm'>Java, C#, Python, SQL</p>
                        </div>
                        <div className='p-4 bg-[#1e293b] rounded-lg border-l-4 border-blue-500'>
                            <h3 className='font-bold text-white'>Frontend Modern</h3>
                            <p className='text-sm'>React, Tailwind, Expo</p>
                        </div>
                    </div>
                </div>

                <div className='flex flex-col justify-center'>
                    <h3 className='text-2xl font-bold text-white mb-8'>
                        {language === 'pt' ? 'Minha Jornada' : 'My Journey'}
                    </h3>

                    <div className='relative border-l-4 border-gray-700 ml-3 space-y-8'>
                        {timeline.map((item) => (
                            <div key={item.id} className='mb-10 ml-6 relative group'>
                                <span className='absolute flex items-center justify-center w-8 h-8 bg-accent rounded-full -left-[42px] ring-4 ring-[#0f172a] text-white'>
                                    {item.icon}
                                </span>

                                <div className='p-4 bg-[#1e293b] rounded-lg shadow-lg hover:translate-x-2 transition duration-300 border border-gray-700'>
                                    <span className='text-sm text-accent font-bold'>{item.year}</span>
                                    <h4 className='text-xl font-bold text-white mt-1'>
                                        {language === 'pt' ? item.title_pt : item.title_en}
                                    </h4>
                                    {item.title_detail_pt && (
                                        <p className='text-sm text-gray-400 font-semibold'>
                                            {language === 'pt' ? item.title_detail_pt : item.title_detail_en}
                                        </p>
                                    )}
                                    <p className='mt-2 text-gray-300 text-sm'>
                                        {language === 'pt' ? item.desc_pt : item.desc_en}
                                    </p>
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