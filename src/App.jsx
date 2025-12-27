import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { translations } from './data/translations';
import { FaGithub, FaLinkedin, FaArrowUp } from 'react-icons/fa'; // Importe FaArrowUp

function App() {
  const [language, setLanguage] = useState('pt');
  const [showScrollTop, setShowScrollTop] = useState(false); // Estado para o botão

  const toggleLanguage = () => setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  const currentTexts = translations[language];

  // Lógica para mostrar/esconder o botão de scroll
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
    <div className="bg-[#0f172a] min-h-screen text-gray-300 font-sans relative">
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
        className={`fixed bottom-8 right-8 bg-accent hover:bg-purple-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 z-50 animate-bounce
        ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
      >
        <FaArrowUp size={20} />
      </button>

      <footer className="w-full py-8 text-center text-gray-500 bg-[#0b1120] border-t border-gray-800 text-sm flex flex-col items-center gap-4">
        <div className="flex gap-6 text-2xl">
          <a href="https://github.com/lu1zedu" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/luiz-eduardo-da-silva-pinto" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
            <FaLinkedin />
          </a>
        </div>
        <p>© 2025 Luiz Eduardo. {language === 'pt' ? 'Feito com React & Café.' : 'Built with React & Coffee.'}</p>
      </footer>
    </div>
  )
}

export default App;