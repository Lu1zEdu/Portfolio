import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaServer, FaRocket } from 'react-icons/fa';

const Services = ({ language }) => {
    const services = [
        {
            id: 1,
            title_pt: "Desenvolvimento Web",
            title_en: "Web Development",
            desc_pt: "Sites rápidos, responsivos e otimizados com React e Tailwind. Landing Pages de alta conversão.",
            desc_en: "Fast, responsive, and optimized websites with React and Tailwind. High-converting Landing Pages.",
            icon: <FaLaptopCode size={30} />,
        },
        {
            id: 2,
            title_pt: "Sistemas Backend",
            title_en: "Backend Systems",
            desc_pt: "APIs robustas e seguras usando Java (Spring Boot) ou .NET. Integração de bancos de dados.",
            desc_en: "Robust and secure APIs using Java (Spring Boot) or .NET. Database integration.",
            icon: <FaServer size={30} />,
        },
        {
            id: 3,
            title_pt: "Apps Mobile",
            title_en: "Mobile Apps",
            desc_pt: "Aplicativos para Android e iOS usando React Native e Expo. Transforme sua ideia em app.",
            desc_en: "Apps for Android and iOS using React Native and Expo. Turn your idea into an app.",
            icon: <FaMobileAlt size={30} />,
        },
        {
            id: 4,
            title_pt: "Automação & MVP",
            title_en: "Automation & MVPs",
            desc_pt: "Tire seu projeto do papel rápido (MVP) ou automatize tarefas repetitivas com Python.",
            desc_en: "Get your project off the ground fast (MVP) or automate repetitive tasks with Python.",
            icon: <FaRocket size={30} />,
        }
    ];

    return (
        <div id='services' className='w-full py-16 px-4 bg-[#0b1120] text-gray-300'> {/* Fundo levemente diferente */}
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center mb-12'>
                    <p className='text-xl tracking-widest uppercase text-accent font-bold'>
                        {language === 'pt' ? 'O que eu faço' : 'What I Do'}
                    </p>
                    <h2 className='text-4xl font-bold text-white mt-2'>
                        {language === 'pt' ? 'Soluções para o seu Negócio' : 'Solutions for your Business'}
                    </h2>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                    {services.map((item) => (
                        <div key={item.id} className='p-6 bg-[#1e293b] rounded-xl hover:scale-105 transition duration-300 border border-transparent hover:border-accent group shadow-lg'>
                            <div className='w-16 h-16 bg-[#0f172a] rounded-lg flex items-center justify-center text-accent mb-4 group-hover:bg-accent group-hover:text-white transition'>
                                {item.icon}
                            </div>
                            <h3 className='text-xl font-bold text-white mb-2'>
                                {language === 'pt' ? item.title_pt : item.title_en}
                            </h3>
                            <p className='text-gray-400 text-sm'>
                                {language === 'pt' ? item.desc_pt : item.desc_en}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;