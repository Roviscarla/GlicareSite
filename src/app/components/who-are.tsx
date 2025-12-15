"use client";
import React, { useState } from "react"; //

import Image from "next/image";
import ArrowNext from "@/app/components/ui/arrow-next";
import ArrowPrev from "@/app/components/ui/arrow-prev";
import IconLinkedin from "@/public/svg/icon-linkedin";
import Slider from "react-slick";
import IconGithub from "@/public/svg/icon-github";
import IconWeb from "@/public/svg/icon-web";
import ICollaborators from "@/app/models/collaborators.interface";
import FilterButton from "@/app/components/ui/filter-button";

const collaborators: ICollaborators[] = [
  {
    id: 1,
    name: "Carla Rovis",
    function: "Product Owner",
    job: "Product Owner",
    linkedin: "https://www.linkedin.com/in/carla-rovis",
    web: "portfólio",
    image: "/image/collaborators/Carla-Rovis.jpeg",
    development: false,
  },
  {
    id: 2,
    name: "Laelson Rodrigues",
    function: "Product Owner",
    job: "Product Owner",
    linkedin: "https://www.linkedin.com/in/laelson-rodrigues-qa",
    web: "portfólio",
    image: "/image/collaborators/Laelson-Rodrigues.jpeg",
    development: false,
  },
  {
    id: 3,
    name: "Breno Neves",
    function: "UX/UI Designer",
    job: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/brenneves",
    web: "https://brenoneves.com",
    image: "/image/collaborators/Breno-Neves.jpeg",
    development: false,
  },
  {
    id: 4,
    name: "Johnatan Gomes",
    job: "UX/UI Designer",
    function: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/johnatan-amaral-gomes-68ab47388/",
    web: "portfolio",
    image: "/image/collaborators/Johnatan-Gomes.jpeg",
    development: false,
  },
  {
    id: 5,
    name: "Beatriz Souza",
    function: "Desenvolvimento Front-end",
    job: "Desenvolvedora Front-end",
    linkedin: "https://www.linkedin.com/in/beatriz-souza-603379194",
    web: "https://portfolio-beatriz-ssantos.vercel.app",
    image: "/image/collaborators/Beatriz-Souza.jpeg",
    development: true,
  },
  {
    id: 6,
    name: "Daniel Santos",
    function: "Desenvolvimento Front-end",
    job: "Desenvolvedor Fullstack",
    linkedin: "https://www.linkedin.com/in/daniel-san8",
    web: "https://github.com/Daniel-san8",
    image: "/image/collaborators/Daniel-Santos.jpeg",
    development: true,
  },
  {
    id: 7,
    name: "Davi Dias",
    function: "Desenvolvimento Front-end",
    job: "Desenvolvedor Fullstack",
    linkedin: "https://www.linkedin.com/in/davifernandodias",
    web: "https://github.com/davifernandodias",
    image: "/image/collaborators/Davi-Dias.jpeg",
    development: true,
  },
  {
    id: 8,
    name: "Gabriel Souza",
    function: "Desenvolvimento Front-end",
    job: "Desenvolvedor Front-end",
    linkedin:
      "https://www.linkedin.com/in/gabriel-souza-%F0%9F%8F%B3%EF%B8%8F%E2%80%8D%F0%9F%8C%88-48b741139",
    web: "https://github.com/GSOUZA11",
    image: "/image/collaborators/Gabriel-Souza.jpeg",
    development: true,
  },
  {
    id: 9,
    name: "Kelvin Bonsin",
    function: "Quality Assurance",
    job: "Quality Assurance",
    linkedin: "https://www.linkedin.com/in/kelvin-bobsin/",
    web: "https://github.com/Kelvinbobsin",
    image: "/image/collaborators/Kelvin-Bonsin.jpeg",
    development: true,
  },
  {
    id: 10,
    name: "Thiago Ariça",
    function: "Quality Assurance",
    job: "Quality Assurance",
    linkedin: " https://www.linkedin.com/in/thiago-ari%C3%A7a/",
    web: "",
    image: "/image/collaborators/Thiago-Ariça.jpg",
    development: false,
  },
  {
    id: 11,
    name: "Thomaz Victor",
    function: "Quality Assurance",
    job: "Quality Assurance",
    linkedin: "https://www.linkedin.com/in/thomazvictorr/",
    web: "https://github.com/thomazvictorr",
    image: "/image/collaborators/Thomaz-Victor.jpg",
    development: true,
  },
  {
    id: 12,
    name: "Hendrick Menacho",
    function: "Desenvolvimento Front-end",
    job: "Desenvolvedor FullStack",
    linkedin: "https://www.linkedin.com/in/hendrickmenacho/",
    web: "https://github.com/hendrickm97",
    image: "/image/collaborators/hendrick-menacho.jpeg",
    development: true,
  },
  {
    id: 13,
    name: "Vanessa Santos",
    function: "Desenvolvimento Backend",
    job: "Desenvolvedora FullStack",
    linkedin: "https://www.linkedin.com/in/vanessa-santos-22475a302/",
    web: "https://github.com/",
    image: "/image/collaborators/Vanessa.enc",
    development: true,
  },
  {
    id: 14,
    name: "Jadson Rodrigues",
    function: "Desenvolvimento Mobile",
    job: "Desenvolvedor Android",
    linkedin: " https://www.linkedin.com/in/jadson-rodrigues-704845251/",
    web: "https://github.com/",
    image: "/image/collaborators/jadson.jpeg",
    development: true,
  },
  {
    id: 15,
    name: "Kauã Santos",
    function: "Desenvolvimento Mobile",
    job: "Desenvolvedor Mobile",
    linkedin: " https://www.linkedin.com/in/kau%C3%A3-santos-8931522ba/",
    web: "https://github.com/",
    image: "/image/collaborators/kaua.jpeg",
    development: true,
  },
  {
    id: 16,
    name: "Tiago Lopes",
    function: "Desenvolvimento Front-end",
    job: "Desenvolvedor Front-end",
    linkedin: "https://www.linkedin.com/in/tiago-lopes-340776230/ ",
    web: "https://github.com/",
    image: "/image/collaborators/tiago.jpeg",
    development: true,
  },
  {
    id: 17,
    name: "Gilberto Xavier",
    function: "Desenvolvimento Backend",
    job: "Desenvolvedor FullStack",
    linkedin: "https://www.linkedin.com/in/gilbertosx/",
    web: "https://github.com/gilbertosxavier",
    image: "/image/collaborators/gilberto.jpeg",
    development: true,
  },
  {
    id: 18,
    name: "Letícia Laham",
    function: "Desenvolvimento Mobile",
    job: "Desenvolvedor FullStack",
    linkedin: "https://www.linkedin.com/in/let%C3%ADcia-de-almeida-laham/",
    web: "https://github.com/",
    image: "/image/collaborators/Leticia.jpg",
    development: true,
  },
  {
    id: 19,
    name: "Evellyn Brito",
    function: "Desenvolvimento Mobile",
    job: "Desenvolvedora Backend",
    linkedin: "https://www.linkedin.com/in/evellyn-brito",
    web: "https://github.com/",
    image: "/image/collaborators/evellyn.jpg",
    development: true,
  },
  {
    id: 20,
    name: "Matheus Damásio",
    function: "Desenvolvimento Front-end",
    job: "Desenvolvedor Front-end",
    linkedin: "https://www.linkedin.com/in/",
    web: "https://github.com/",
    image: "/image/collaborators/matheus.jpeg",
    development: true,
  },
  {
    id: 21,
    name: "Claudio Roberto",
    function: "Desenvolvimento Mobile",
    job: "Desenvolvedor de software",
    linkedin: "https://www.linkedin.com/in/claudio-silva-93y/",
    web: "https://github.com/",
    image: "/image/collaborators/claudio.jpeg",
    development: true,
  },
  {
    id: 22,
    name: "Brena Silva",
    function: "UX/UI Designer",
    job: "UX/UI Designer",
    linkedin: "https://www.linkedin.com/in/brenasilva-/",
    web: "portfolio",
    image: "/image/collaborators/Brena.jpg",
    development: false,
  },
  {
    id: 23,
    name: "Gustavo Ferreira",
    function: "Analista de requisitos",
    job: "Desenvolvedor FullStack",
    linkedin: "https://www.linkedin.com/in/gustavo-ferreira-238348231/",
    web: "https://github.com/",
    image: "/image/collaborators/Gustavo-ferreira.jpg",
    development: true,
  },
  {
    id: 24,
    name: "Fabio Voigt",
    function: "Desenvolvimento Backend",
    job: "Desenvolvedor .NET",
    linkedin: "www.linkedin.com/in/fábio-colonese-31008425b",
    web: "https://www.linkedin.com/in/f%C3%A1bio-colonese-31008425b/",
    image: "/image/collaborators/fabio-voigt.jpg",
    development: true,
  },
];

export default function WhoAre() {
  const filters = ["Todos", ...new Set(collaborators.map((c) => c.function))];
  const [activeFilter, setActiveFilter] = useState("Todos");
  const filteredCollaborators = collaborators.filter((collaborator) => {
    if (activeFilter === "Todos") {
      return true;
    }
    return collaborator.function === activeFilter;
  });

  const settings = {
    infinite: filteredCollaborators.length > 4,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <ArrowNext />,
    prevArrow: <ArrowPrev />,
    dots: true,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          nextArrow: undefined,
          prevArrow: undefined,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: filteredCollaborators.length > 4,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          nextArrow: undefined,
          prevArrow: undefined,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: filteredCollaborators.length > 2,
        },
      },
    ],
  };

  return (
    <section
      id="quem-somos"
      className="mt-36 bg-primary-gray max-w-full pb-20 lg:px-16 overflow-x-hidden"
    >
      <div className="px-6">
        <h2 className="text-gray-dark pl-4 text-2xl md:text-28 lg:text-28 font-medium">
          Quem somos
        </h2>

        <p className="text-secondary-gray pl-4 text-xl font-normal max-w-80 md:max-w-534 lg:max-w-800 mt-6">
          Junte-se a nós nessa jornada!
          <span className="hidden md:inline"> 🚀</span> <br />
          <br />
          Somos o Time de Voluntários, criadores do Glicare! Uma plataforma que
          simplifica o monitoramento da glicemia, dando mais autonomia e
          qualidade de vida a quem convive com diabetes.
          <br />
          <br /> Com tecnologia intuitiva, registro fácil de dados e insights
          úteis, transformamos o autocuidado em uma rotina mais leve. <br />
          <br />
          Vamos juntos fazer a diferença?{" "}
          <span className="hidden md:inline"> 💙</span>
        </p>
      </div>

      <div className="flex flex-wrap gap-3 mt-12 px-6 lg:px-24 justify-center">
        {filters.map((filter) => (
          <FilterButton
            key={filter}
            label={filter}
            isActive={activeFilter === filter}
            onClick={() => setActiveFilter(filter)}
          />
        ))}
      </div>

      <div className="w-full mt-8 lg:mt-16 lg:px-20">
        <Slider {...settings} key={activeFilter}>
          {filteredCollaborators.map((collaborator) => (
            <div key={collaborator.id} className="mt-6">
              <div className="flex items-center justify-center">
                <div className="relative w-148 h-148">
                  <Image
                    src={collaborator.image}
                    alt={collaborator.name}
                    fill={true}
                    className="rounded-full object-cover"
                  />
                </div>
              </div>

              <h3 className="text-gray-dark text-center text-2xl font-medium leading-normal mt-6">
                <span className="inline-block lg:inline-block xl:hidden">
                  {collaborator.name.split(" ")[0]}
                </span>

                <br className="lg:inline-block xl:hidden" />

                <span className="inline-block xl:hidden">
                  {collaborator.name.split(" ").slice(1).join(" ")}
                </span>

                <span className="hidden xl:inline-block">
                  {collaborator.name}
                </span>
              </h3>

              <p className="text-secondary-gray text-center text-base font-medium leading-normal mt-3">
                <span className="inline-block xl:hidden">
                  {collaborator.job.split(" ")[0]}
                </span>

                <br className="lg:block xl:hidden" />

                <span className="inline-block xl:hidden">
                  {collaborator.job.split(" ").slice(1).join(" ")}
                </span>

                <span className="hidden xl:inline-block">
                  {collaborator.job}
                </span>
              </p>

              <div className="flex items-center justify-center space-x-3 mb-8 mt-35">
                <a
                  href={collaborator.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IconLinkedin />
                </a>

                <a
                  href={collaborator.web}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {collaborator.development ? <IconGithub /> : <IconWeb />}
                </a>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
