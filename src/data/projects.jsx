import {
    FaJava, FaReact, FaPython, FaDatabase, FaMobileAlt, FaGamepad, FaSteam, FaTerminal, FaCode, FaLaptopCode,
    FaServer, FaBrain, FaCloud, FaLeaf, FaWindows, FaFire, FaFileCode, FaProjectDiagram, FaCogs, FaMicrochip
} from 'react-icons/fa';

export const projects = [
    {
        id: 1,
        title: "LPP System (ITA)",
        category: "work",
        img: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=1000&auto=format&fit=crop",
        desc_pt: "Sistema de controle e automação para o laboratório do ITA.",
        desc_en: "Control and automation system for ITA laboratory.",
        long_desc_pt: "Sistema interno crítico desenvolvido para o Laboratório de Pesquisa em Plasmas (LPP) do ITA. Gerencia o acesso físico ao prédio, monitora atividades sensíveis via câmeras e mantém registros detalhados.",
        long_desc_en: "Critical internal system developed for ITA's Plasma Research Laboratory (LPP). Manages physical building access, monitors sensitive activities via cameras, and keeps detailed records.",
        gitUrl: "#",
        previewUrl: "#",
        tech_details: [
            { name: "Java", icon: <FaJava className="text-orange-500" />, purpose_pt: "Backend robusto.", purpose_en: "Robust Backend." },
            { name: "Spring Boot", icon: <FaLeaf className="text-green-500" />, purpose_pt: "API REST.", purpose_en: "REST API." },
            { name: "Arduino", icon: <FaMicrochip className="text-teal-500" />, purpose_pt: "Integração IoT.", purpose_en: "IoT integration." },
            { name: "React", icon: <FaReact className="text-blue-400" />, purpose_pt: "Dashboard administrativo.", purpose_en: "Administrative dashboard." }
        ]
    },
    {
        id: 2,
        title: "Includ.IA",
        category: "college",
        img: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1000&auto=format&fit=crop",
        desc_pt: "Plataforma premiada de recrutamento com IA Generativa.",
        desc_en: "Award-winning recruitment platform powered by Generative AI.",
        long_desc_pt: "Vencedor do FIAP Global Solution. Uma plataforma revolucionária que utiliza a IA Generativa para reescrever descrições de vagas de forma inclusiva e anonimizar perfis de candidatos.",
        long_desc_en: "FIAP Global Solution Winner. A revolutionary platform using Generative AI to rewrite job descriptions inclusively and anonymize candidate profiles.",
        gitUrl: "https://github.com/includia",
        previewUrl: "#",
        tech_details: [
            { name: "Gemini AI", icon: <FaBrain className="text-purple-500" />, purpose_pt: "IA Generativa.", purpose_en: "Generative AI." },
            { name: "Azure Cloud", icon: <FaCloud className="text-blue-600" />, purpose_pt: "Orquestração na Nuvem.", purpose_en: "Cloud Orchestration." },
            { name: "Oracle & Mongo", icon: <FaDatabase className="text-red-600" />, purpose_pt: "Bancos de Dados.", purpose_en: "Databases." },
            { name: "Redis", icon: <FaServer className="text-red-500" />, purpose_pt: "Cache rápido.", purpose_en: "Fast caching." }
        ]
    },
    {
        id: 3,
        title: "ApiAnime (.NET 9)",
        category: "personal",
        img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1000&auto=format&fit=crop",
        desc_pt: "API robusta com Clean Architecture e .NET 9.",
        desc_en: "Robust API featuring Clean Architecture and .NET 9.",
        long_desc_pt: "Projeto de backend avançado demonstrando domínio de Arquitetura Limpa (Clean Architecture). A API gerencia um catálogo completo de animes e personagens.",
        long_desc_en: "Advanced backend project demonstrating mastery of Clean Architecture. The API manages a complete catalog of anime and characters.",
        gitUrl: "https://github.com/lu1zedu/apianime",
        previewUrl: "#",
        tech_details: [
            { name: ".NET 9", icon: <FaWindows className="text-purple-600" />, purpose_pt: "Framework Moderno.", purpose_en: "Modern Framework." },
            { name: "PostgreSQL", icon: <FaDatabase className="text-blue-400" />, purpose_pt: "Banco Relacional.", purpose_en: "Relational Database." },
            { name: "Entity Framework", icon: <FaCode className="text-gray-400" />, purpose_pt: "ORM.", purpose_en: "ORM." },
            { name: "Swagger", icon: <FaFileCode className="text-green-600" />, purpose_pt: "Documentação.", purpose_en: "Documentation." }
        ]
    },
    {
        id: 4,
        title: "ApiSteam",
        category: "personal",
        // Imagem: Setup Gamer / Controle
        img: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1000&auto=format&fit=crop",
        desc_pt: "API simulando a plataforma Steam (Jogos/Conquistas).",
        desc_en: "API simulating Steam platform (Games/Achievements).",
        long_desc_pt: "Web API desenvolvida em C# para gerenciar biblioteca de jogos, DLCs e sistema de conquistas. Focada em performance e organização de código.",
        long_desc_en: "Web API developed in C# to manage game library, DLCs, and achievement systems. Focused on performance and code organization.",
        gitUrl: "https://github.com/lu1zedu/apisteam",
        previewUrl: "#",
        tech_details: [
            { name: "C# .NET", icon: <FaWindows className="text-purple-600" />, purpose_pt: "Lógica Backend.", purpose_en: "Backend Logic." },
            { name: "Steam Logic", icon: <FaSteam className="text-blue-800" />, purpose_pt: "Regras de Negócio.", purpose_en: "Business Rules." },
            { name: "API Rest", icon: <FaServer className="text-green-600" />, purpose_pt: "Endpoints.", purpose_en: "Endpoints." }
        ]
    },

    {
        id: 5,
        title: "CS Algorithms & Games",
        category: "personal",
        img: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=1000&auto=format&fit=crop",
        desc_pt: "Coleção de algoritmos clássicos: Tetris, Sudoku, Chat.",
        desc_en: "Collection of classic algorithms: Tetris, Sudoku, Chat.",
        long_desc_pt: "Um conjunto de projetos focados em lógica pura e estruturas de dados. Inclui um Chat funcional via Sockets (Java), Tetris e Sudoku (Python).",
        long_desc_en: "A set of projects focused on pure logic and data structures. Includes a functional Chat via Sockets (Java), Tetris and Sudoku (Python).",
        gitUrl: "https://github.com/Lu1zEdu/Projetinho",
        previewUrl: "#",
        tech_details: [
            { name: "Java Sockets", icon: <FaJava className="text-orange-600" />, purpose_pt: "Redes.", purpose_en: "Networking." },
            { name: "Python", icon: <FaPython className="text-yellow-400" />, purpose_pt: "Lógica de Jogos.", purpose_en: "Game Logic." },
            { name: "Game Logic", icon: <FaGamepad className="text-purple-400" />, purpose_pt: "RPG em Texto.", purpose_en: "Text-based RPG." }
        ]
    },
    {
        id: 6,
        title: "Legacy Systems",
        category: "personal",
        img: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1000&auto=format&fit=crop",
        desc_pt: "Sistemas bancários e científicos em Cobol & Fortran.",
        desc_en: "Banking and scientific systems in Cobol & Fortran.",
        long_desc_pt: "Exploração de linguagens fundamentais. Projetos incluem um Sistema Bancário Simples (Cobol) e Simulações Físicas (Fortran).",
        long_desc_en: "Exploration of fundamental languages. Projects include a Simple Banking System (Cobol) and Physics Simulations (Fortran).",
        gitUrl: "https://github.com/Lu1zEdu/Fortran.git",
        previewUrl: "https://github.com/Lu1zEdu/Cobol",
        tech_details: [
            { name: "COBOL", icon: <FaTerminal className="text-green-500" />, purpose_pt: "Sistemas Legados.", purpose_en: "Legacy Systems." },
            { name: "Fortran", icon: <FaCode className="text-blue-500" />, purpose_pt: "Cálculo Científico.", purpose_en: "Scientific." },
            { name: "Low Level", icon: <FaCogs className="text-gray-400" />, purpose_pt: "Processamento.", purpose_en: "Processing." }
        ]
    },
    {
        id: 7,
        title: "C Programming Studies",
        category: "personal",
        img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1000&auto=format&fit=crop",
        desc_pt: "Algoritmos fundamentais e manipulação de memória em C.",
        desc_en: "Fundamental algorithms and memory manipulation in C.",
        long_desc_pt: "Implementações em C puro para estudo de alocação de memória, ponteiros e estruturas de controle.",
        long_desc_en: "Pure C implementations to study memory allocation, pointers, and control structures.",
        gitUrl: "#",
        previewUrl: "#",
        tech_details: [
            { name: "C Language", icon: <FaCode className="text-gray-300" />, purpose_pt: "Algoritmos.", purpose_en: "Algorithms." },
            { name: "Pointers", icon: <FaLaptopCode className="text-gray-500" />, purpose_pt: "Memória.", purpose_en: "Memory." }
        ]
    }
];