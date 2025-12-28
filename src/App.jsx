import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { translations } from './data/translations';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'; // <--- Importei a Seta

function App() {
  const [language, setLanguage] = useState('pt');
  const [showScrollTop, setShowScrollTop] = useState(false); // <--- Estado do botão

  const toggleLanguage = () => setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  const currentTexts = translations[language];

  // Lógica para mostrar/esconder o botão
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-primary min-h-screen text-txt font-sans relative">
      <Navbar toggleLanguage={toggleLanguage} currentLang={language} texts={currentTexts.navbar} />

      <main>
        <Hero texts={currentTexts.hero} />
        <About language={language} />
        <Skills language={language} />
        <Services language={language} />
        <Projects language={language} />
        <Contact language={language} />
      </main>

      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-accent hover:bg-cyan-600 text-white p-4 rounded-full shadow-neon transition-all duration-300 z-50 animate-bounce
        ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <FaArrowUp size={20} />
      </button>

      <footer className="w-full py-8 text-center text-gray-500 bg-primary border-t border-gray-800 text-sm flex flex-col items-center gap-4">
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/lu1zedu" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/luiz-eduardo-da-silva-pinto-b2a190302/" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
        </div>
        <p>© 2025 Luiz Eduardo. {language === 'pt' ? 'Feito com React & Café.' : 'Built with React & Coffee.'}</p>
      </footer>
    </div>
  )
}

export default App;