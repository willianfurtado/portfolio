import "./App.css";

import CardTech from "./components/Card-Tech";
import CardContact from "./components/Card-Contact";
import CardProject from "./components/Card-Project";

// import pythonIcon from "/arrow-up-logo.svg";
// import pyTorchIcon from "./pytorch-logo.svg";
// import scikitLearnIcon from "/scikit-learn-logo.svg";
// import pandasIcon from "/pandas-logo.svg";
// import jsIcon from "/js-logo.svg";
// import tsIcon from "/ts-logo.svg";
// import reactIcon from "/react-logo.svg";
// import nodeIcon from "/node-logo.svg";
// import flutterIcon from "/flutter-logo.svg";
// import htmlIcon from "/html-logo.svg";
// import cssIcon from "/css-logo.svg";
// import gitIcon from "/git-logo.svg";
// import linkedinIcon from "/linkedin-logo.svg";
// import instagramIcon from "/instagram-logo.svg";
// import gitHubIcon from "/github-logo.svg";
// import emailIcon from "/envelope-logo.svg";

export default function App() {
  const projects = [
    {
      name: "MentisAI",
      description:
        "Plataforma inteligente para análise preditiva utilizando modelos de Machine Learning e processamento de dados em tempo real.",
      tags: ["Flutter", "Python", "Sklearn", "Pandas"],
      githubUrl: "https://github.com/willianfurtado/mentisAI",
      image: "/mentis.png",
    },
    {
      name: "Site do Jifma",
      description:
        "Aplicação web para cobertura do JIFMA, oferecendo consulta simplificada de equipes participantes, tabela de partidas e resultados dos jogos.",
      tags: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/willianfurtado/jifma-website",
      image: "/jifma.png",
    },
    // {
    //   name: "Preditor de cotações",
    //   description:
    //     "Modelo que analisa dados históricos e séries temporais para prever a cotação da arroba do boi gordo, auxiliando na tomada de decisões financeiras.",
    //   tags: ["Python", "TensorFlow", "Pandas"],
    //   githubUrl: "https://github.com/willianfurtado/preditor-cota-es-machine-learning-",
    //   image: "/pred-cot.png"
    // },
    {
      name: "Detecção de Emoção com YOLO",
      description:
        "Projeto de Visão Computacional voltado para a detecção de emoções faciais usando modelos YOLO e a biblioteca OpenCV",
      tags: ["Python", "YOLO", "OpenCV"],
      githubUrl:
        "https://github.com/willianfurtado/emotion-detection-with-yolo",
      image: "/emotion-detection.png",
    },
    {
      name: "Scraper de Commodities",
      description:
        "Sistema móvel para consulta de cotações de commodities em tempo real, combinando automação de coleta de dados de mercado e sincronização contínua de informações",
      tags: ["React Native", "Google Apps Script"],
      githubUrl: "https://github.com/willianfurtado/scraping",
      image: "/scraper.png",
    },
    {
      name: "Rede Convolucional com CIFAR-100",
      description:
        "Implementação de uma rede CNN para classificação de imagens usando o dataset CIFAR-100",
      tags: ["Python", "Pytorch", "Google Colab"],
      githubUrl: "https://github.com/willianfurtado/cnn-cifar100",
      image: "/cifar100.png",
    },
    {
      name: "Clusterização para Saúde Mental",
      description:
        "Modelo de Clusterização Difusa (Fuzzy C-Means) na tarefa de segmentação de perfis de risco de Depressão",
      tags: ["Python", "Sklearn", "Google Colab"],
      githubUrl:
        "https://github.com/willianfurtado/fuzzy-clustering-to-depression",
      image: "/clustering.png",
    },
  ];

  const skillsCategories = [
    // Linha 1
    {
      title: "IA & Machine Learning",
      skills: [
        { nameTech: "Python", icon: "/python-logo.svg" },
        { nameTech: "Pytorch", icon: "/pytorch-logo.svg" },
        { nameTech: "Scikit-Learn", icon: "/scikit-learn-logo.svg" },
        { nameTech: "Pandas", icon: "/pandas-logo.svg" },
      ],
    },
    {
      title: "Desenvolvimento Web & Mobile",
      skills: [
        { nameTech: "Javascript", icon: "/js-logo.svg" },
        { nameTech: "Typescript", icon: "/ts-logo.svg" },
        { nameTech: "React", icon: "/react-logo.svg" },
        { nameTech: "NodeJS", icon: "/node-logo.svg" },
        { nameTech: "Flutter", icon: "/flutter-logo.svg" },
      ],
    },
    {
      title: "Ferramentas & Outros",
      skills: [
        { nameTech: "HTML", icon: "/html-logo.svg" },
        { nameTech: "CSS", icon: "/css-logo.svg" },
        { nameTech: "GIT", icon: "/git-logo.svg" },
      ],
    },
  ];

  const cardsContacts = [
    {
      icon: "/linkedin-logo.svg",
      name: "Linkedin",
      url: "https://www.linkedin.com/in/willian-furtado-dev/",
    },
    {
      icon: "/instagram-logo.svg",
      name: "Instagram",
      url: "https://www.instagram.com/j.souza11_",
    },
    {
      icon: "/github-logo.svg",
      name: "GitHub",
      url: "https://github.com/willianfurtado",
    },
    {
      icon: "/envelope-logo.svg",
      name: "E-mail",
      url: "mailto:willianjfurtado19@gmail.com?subject=Contato%20via%20Portfolio",
    },
  ];

  const navItems = [
    { name: "Sobre", href: "#sobre" },
    { name: "Skills", href: "#skills" },
    { name: "Projetos", href: "#projetos" },
    { name: "Contato", href: "#contato" },
  ];

  return (
    <div className="p-8 bg-[#16181d]">
      <nav className="flex justify-center items-center w-full">
        <ul className="flex items-center gap-8 font-bold text-gray-100">
          {navItems.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="relative py-1 hover:text-white transition-colors duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Seção principal de apresentação */}
      <main className="flex items-center justify-center min-h-[85vh] py-12 px-6 max-w-6xl mx-auto w-full">
        <section
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full"
          id="sobre"
        >
          {/* Lado Esquerdo: Conteúdo */}
          <div className="flex flex-col gap-5 items-start">
            {/* Título e Cargo */}
            <div>
              <h1 className="text-4xl md:text-6xl font-light tracking-wide text-gray-200 leading-tight">
                Olá, sou <br />
                <span className="font-bold text-white">Willian Jorge</span>
              </h1>
              <p className="text-lg md:text-xl text-cyan-400 font-medium mt-2">
                Software Developer | AI & Machine Learning
              </p>
            </div>

            {/* Descrição Real */}
            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-lg">
              Desenvolvo soluções de software completas e inteligentes,
              combinando a criação de aplicações web modernas com a aplicação de
              Inteligência Artificial e Machine Learning para resolver problemas
              complexos.
            </p>

            {/* Botões de Ação */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#projetos"
                className="bg-white text-zinc-950 hover:bg-zinc-200 px-6 py-3 rounded-xl font-medium text-sm transition-all shadow-md"
              >
                Ver Projetos
              </a>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-zinc-700 text-zinc-300 hover:bg-zinc-800/60 px-6 py-3 rounded-xl font-medium text-sm transition-all"
              >
                Download Currículo
              </a>
            </div>
          </div>

          {/* Lado Direito: Foto */}
          <div className="relative flex justify-center md:justify-end items-center shrink-0">
            <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-2 border-zinc-800/80 shadow-2xl shrink-0">
              <img
                src="/my-photo.png"
                alt="Willian Jorge"
                className="w-full h-full object-cover object-[center_20%] scale-110"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Seção de skills */}
      <section className="flex flex-col items-center py-16 px-4" id="skills">
        <h2 className="font-bold text-3xl md:text-4xl text-center mb-10 text-white">
          Skills
        </h2>

        <div className="flex flex-col items-center gap-8 w-full max-w-4xl">
          {skillsCategories.map((category) => (
            <div
              key={category.title}
              className="flex flex-col items-center gap-4"
            >
              <h3 className="text-zinc-400 text-sm font-medium uppercase tracking-wider">
                {category.title}
              </h3>

              <div className="flex flex-wrap justify-center items-center gap-3">
                {category.skills.map((skill) => (
                  <CardTech
                    key={skill.nameTech}
                    icon={skill.icon}
                    nameTech={skill.nameTech}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Seção de projetos */}
      <section
        className="flex flex-col items-center py-16 w-full"
        id="projetos"
      >
        <h2 className="font-bold text-3xl text-center text-gray-100 mb-12">
          Projetos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl px-4 justify-items-center">
          {projects.map((project) => (
            <CardProject
              key={project.name}
              name={project.name}
              description={project.description}
              tags={project.tags}
              githubUrl={project.githubUrl}
              image={project.image}
            />
          ))}
        </div>
      </section>

      {/* Seção de contato */}
      <section className="" id="contato">
        <h2 className="font-bold text-gray-100 text-3xl text-center mb-4">
          Gostou do meu trabalho?
        </h2>
        <p className="text-zinc-200 text-sm mx-auto md:text-base max-w-lg mb-8 text-center">
          Estou sempre disponível a novas oportunidades e projetos! Mande uma
          mensagem em uma das redes abaixo.
        </p>
        <div className="flex flex-col gap-4 w-full max-w-md mx-auto">
          {cardsContacts.map((card) => {
            return (
              <CardContact
                key={card.name}
                icon={card.icon}
                name={card.name}
                url={card.url}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
