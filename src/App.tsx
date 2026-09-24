import "./App.css";

import CardTech from "./components/Card-Tech";

import jsIcon from "./assets/js-logo.svg";
import tsIcon from "./assets/ts-logo.svg";
import reactIcon from "./assets/react-logo.svg";
import nodeIcon from "./assets/node-logo.svg";
import htmlIcon from "./assets/html-logo.svg";
import cssIcon from "./assets/css-logo.svg";
import gitIcon from "./assets/git-logo.svg";
import pythonIcon from "./assets/python-logo.svg";
import flutterIcon from "./assets/flutter-logo.svg";
import CardProject from "./components/Card-Project";
import linkedinIcon from "./assets/linkedin-logo.svg";
import instagramIcon from "./assets/instagram-logo.svg";
import gitHubIcon from "./assets/github-logo.svg";
import emailIcon from "./assets/envelope-logo.svg";
import CardContact from "./components/Card-Contact";

export default function App() {
  const projects = [
    {
      name: "MentisAI",
      description:
        "Plataforma inteligente para análise preditiva utilizando modelos de Machine Learning e processamento de dados em tempo real.",
      tags: ["Python", "PyTorch", "React", "TypeScript"],
      githubUrl: "https://github.com/willianfurtado/mentisAI",
      image: "/src/assets/projects/mentis.png", // opcional
    },
    {
      name: "Portfolio Dev",
      description:
        "Portfólio interativo construído com React, Tailwind CSS e TypeScript para apresentar projetos e competências de software.",
      tags: ["React", "TypeScript", "Tailwind"],
      githubUrl: "https://github.com/seu-usuario/portfolio",
    },
  ];

  const skillsCategories = [
    // Linha 1
    {
      title: "IA & Machine Learning",
      skills: [
        { nameTech: "Python", icon: pythonIcon },
        { nameTech: "Pytorch", icon: tsIcon },
        { nameTech: "Scikit-Learn", icon: reactIcon },
        { nameTech: "Pandas", icon: nodeIcon },
      ],
    },
    {
      title: "Desenvolvimento Web & Mobile",
      skills: [
        { nameTech: "Javascript", icon: jsIcon },
        { nameTech: "Typescript", icon: tsIcon },
        { nameTech: "React", icon: reactIcon },
        { nameTech: "NodeJS", icon: nodeIcon },
        { nameTech: "Flutter", icon: flutterIcon },
      ],
    },
    {
      title: "Ferramentas & Outros",
      skills: [
        { nameTech: "HTML", icon: htmlIcon },
        { nameTech: "CSS", icon: cssIcon },
        { nameTech: "GIT", icon: gitIcon },
      ],
    },
  ];

  const cardsContacts = [
    {
      icon: linkedinIcon,
      name: "Linkedin",
    },
    {
      icon: instagramIcon,
      name: "Instagram",
    },
    {
      icon: gitHubIcon,
      name: "GitHub",
    },
    {
      icon: emailIcon,
      name: "E-mail",
    },
  ];

  return (
    <div className="p-8 bg-[#16181d]">
      <nav className="flex justify-center items-center w-full">
        <ul className="flex items-center gap-8 font-bold text-gray-100">
          <li>
            <a href="#">Sobre</a>
          </li>
          <li>
            <a href="#">Skills</a>
          </li>
          <li>
            <a href="#">Projetos</a>
          </li>
          <li>
            <a href="#">Contatos</a>
          </li>
        </ul>
      </nav>

      {/* Seção principal de apresentação */}
      <main className="flex items-center justify-center min-h-[85vh] py-12 px-6 max-w-6xl mx-auto w-full">
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center w-full">
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
          <div className="relative flex justify-center md:justify-end items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-zinc-800 shadow-2xl">
              <img
                src="src/assets/my-photo.png"
                alt="Willian Jorge"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>

      {/* Seção de skills */}
      <section className="flex flex-col items-center py-16 px-4">
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
      <section className="">
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
                // url={card.url}
              />
            );
          })}
        </div>
      </section>
    </div>
  );
}
