import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import About from './components/About';
import { translations } from './data/translations';

function App() {
  const [language, setLanguage] = useState('pt');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  const currentTexts = translations[language];

  return (
    <div className="bg-primary min-h-screen text-txt font-sans">
      <Navbar
        toggleLanguage={toggleLanguage}
        currentLang={language}
        texts={currentTexts.navbar}
      />

      <main>
        <Hero texts={currentTexts.hero} />
        <Projects language={language} />
        <About language={language} />
        <Contact language={language} />
      </main>

      <footer className="w-full py-6 text-center text-gray-500 bg-primary border-t border-gray-800 text-sm">
        <p>© 2025 Luiz Eduardo. {language === 'pt' ? 'Todos os direitos reservados.' : 'All rights reserved.'}</p>
      </footer>
    </div>
  )
}

export default App;