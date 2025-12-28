import React from 'react';
import { FaLinkedin, FaEnvelope, FaTelegramPlane, FaDiscord } from 'react-icons/fa';

const Contact = ({ language }) => {
    return (
        <div id='contact' className='w-full py-20 px-4 bg-[#0f172a]'>
            <div className='max-w-[1000px] mx-auto text-center'>
                <p className='text-xl tracking-widest uppercase text-accent font-bold'>
                    {language === 'pt' ? 'Contato' : 'Contact'}
                </p>
                <h2 className='py-4 text-4xl font-bold text-white'>
                    {language === 'pt' ? 'Canais de Comunicação' : 'Communication Channels'}
                </h2>
                <p className='text-gray-400 text-lg mb-12 max-w-[600px] mx-auto'>
                    {language === 'pt'
                        ? 'Entre em contato para orçamentos de freelancer ou oportunidades profissionais.'
                        : 'Get in touch for freelance quotes or professional opportunities.'}
                </p>

                <div className='grid md:grid-cols-2 gap-6'>

                    <a href="https://www.linkedin.com/in/luiz-eduardo-da-silva-pinto-b2a190302/" target="_blank" rel="noreferrer" className='group bg-[#1e293b] p-6 rounded-2xl border border-gray-700 hover:border-blue-500 transition cursor-pointer flex items-center gap-4 hover:bg-blue-900/10'>
                        <div className='p-3 bg-gray-800 rounded-full text-blue-500 group-hover:bg-blue-500 group-hover:text-white transition'>
                            <FaLinkedin size={24} />
                        </div>
                        <div className='text-left'>
                            <h3 className='font-bold text-white'>LinkedIn</h3>
                            <p className='text-gray-400 text-sm'>Perfil Profissional</p>
                        </div>
                    </a>

                    <a href="mailto:le6269199@gmail.com" className='group bg-[#1e293b] p-6 rounded-2xl border border-gray-700 hover:border-accent transition cursor-pointer flex items-center gap-4 hover:bg-accent/10'>
                        <div className='p-3 bg-gray-800 rounded-full text-accent group-hover:bg-accent group-hover:text-white transition'>
                            <FaEnvelope size={24} />
                        </div>
                        <div className='text-left'>
                            <h3 className='font-bold text-white'>E-mail</h3>
                            <p className='text-gray-400 text-sm'>le6269199@gmail.com</p>
                        </div>
                    </a>

                    <a href="https://t.me/@M3rl1m15" target="_blank" rel="noreferrer" className='group bg-[#1e293b] p-6 rounded-2xl border border-gray-700 hover:border-blue-400 transition cursor-pointer flex items-center gap-4 hover:bg-blue-400/10'>
                        <div className='p-3 bg-gray-800 rounded-full text-blue-400 group-hover:bg-blue-400 group-hover:text-white transition'>
                            <FaTelegramPlane size={24} />
                        </div>
                        <div className='text-left'>
                            <h3 className='font-bold text-white'>Telegram</h3>
                            <p className='text-gray-400 text-sm'>Mensagem rápida</p>
                        </div>
                    </a>

                    <a href="https://discord.com/users/merlin9875" target="_blank" rel="noreferrer" className='group bg-[#1e293b] p-6 rounded-2xl border border-gray-700 hover:border-indigo-500 transition cursor-pointer flex items-center gap-4 hover:bg-indigo-500/10'>
                        <div className='p-3 bg-gray-800 rounded-full text-indigo-500 group-hover:bg-indigo-500 group-hover:text-white transition'>
                            <FaDiscord size={24} />
                        </div>
                        <div className='text-left'>
                            <h3 className='font-bold text-white'>Discord</h3>
                            <p className='text-gray-400 text-sm'>Iniciar conversa</p>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default Contact;