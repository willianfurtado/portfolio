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
import linkedinIcon from "./assets/linkedin-logo.svg"
import instagramIcon from "./assets/instagram-logo.svg"
import gitHubIcon from "./assets/github-logo.svg";
import emailIcon from "./assets/envelope-logo.svg";
import CardContact from "./components/Card-Contact";

export default function App() {
  const projects = [
    {
      name: "MentisAI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quis perspiciatis iusto, fugit sit deserunt velit quia consequatur, quam voluptate inventore ex ab voluptas libero sint id atque nihil quos?",
      url: ''
    },
    {
      name: "MentisAI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quis perspiciatis iusto, fugit sit deserunt velit quia consequatur, quam voluptate inventore ex ab voluptas libero sint id atque nihil quos?",
      url: ''
    },
    {
      name: "MentisAI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quis perspiciatis iusto, fugit sit deserunt velit quia consequatur, quam voluptate inventore ex ab voluptas libero sint id atque nihil quos?",
      url: ''
    },
    {
      name: "MentisAI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quis perspiciatis iusto, fugit sit deserunt velit quia consequatur, quam voluptate inventore ex ab voluptas libero sint id atque nihil quos?",
      url: ''
    },
    {
      name: "MentisAI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quis perspiciatis iusto, fugit sit deserunt velit quia consequatur, quam voluptate inventore ex ab voluptas libero sint id atque nihil quos?",
      url: ''
    },
    {
      name: "MentisAI",
      description:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium quis perspiciatis iusto, fugit sit deserunt velit quia consequatur, quam voluptate inventore ex ab voluptas libero sint id atque nihil quos?",
      url: ''
    },
    
  ];

  const skillsRows = [
    // Linha 1
    [
      { nameTech: "Javascript", icon: jsIcon },
      { nameTech: "Typescript", icon: tsIcon },
      { nameTech: "React", icon: reactIcon },
      { nameTech: "NodeJS", icon: nodeIcon },
    ],
    // Linha 2
    [
      { nameTech: "HTML", icon: htmlIcon },
      { nameTech: "CSS", icon: cssIcon },
      { nameTech: "GIT", icon: gitIcon },
    ],
    // Linha 3
    [
      { nameTech: "Python", icon: pythonIcon },
      { nameTech: "Flutter", icon: flutterIcon },
    ],
  ];

  const cardsContacts = [
    {
      icon: linkedinIcon,
      name: "Linkedin"
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
  ]

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
      <main className="flex-1 flex items-center justify-center max-w-6xl mx-auto w-full py-12">
        <section className="grid grid-cols-1 md: grid-cols-2 gap-12 items-center w-full">
          <div className="flex flex-col gap-6">
            <h1 className="text-5xl md:text-7xl font-light tracking-wide text-gray-200">
              Olá, sou <br /> Willian Jorge
            </h1>
            <p className="text-gray-200 text-sm leading-relaxed max-w-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit,
              harum! Soluta, est similique? Rem sit maiores non, quod nemo iure
              architecto, sunt dolores corrupti consequuntur, perferendis
              distinctio cumque modi deleniti!{" "}
            </p>
          </div>

          <div className="relative flex justify-center md:justify-end items-center">
            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border border-zinc-800">
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
      <section className="flex flex-col items-center py-12">
        <h2 className="font-bold text-3xl text-center mb-8 text-white">
          Skills
        </h2>

        <div className="flex flex-col items-center gap-4 w-full px-4">
          {skillsRows.map((row, rowIndex) => {
            return (
              <div
                key={rowIndex}
                className="flex flex-wrap justify-center items-center gap-4"
              >
                {row.map((skill) => {
                  return (
                    <CardTech
                      key={skill.nameTech}
                      icon={skill.icon}
                      nameTech={skill.nameTech}
                    />
                  );
                })}
              </div>
            );
          })}
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
          {projects.map((project) => {
            return (
              <CardProject
                key={project.name}
                name={project.name}
                description={project.description}
              />
            );
          })}
        </div>
      </section>

      {/* Seção de contato */}
      <section className="">
        <h2 className="font-bold text-gray-100 text-3xl text-center mb-4">Gostou do meu trabalho?</h2>
        <p className='text-gray-100 m-auto max-w-md mb-8'>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur
          perferendis neque, tempora impedit eum perspiciatis praesentium,
          reiciendis error magni obcaecati fugiat non, consectetur delectus
          labore itaque quos adipisci corporis maiores?
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
            )
          })}
        </div>
      </section>
    </div>
  );
}
