"use client";

import React, { useState } from "react";
import Image from "next/image";
import FilterButton from "@/app/components/ui/filter-button";
import Button from "./ui/button";
import YouTubeVideoCarousel from "@/app/components/ui/youtube-carousel";
import { IYouTubeVideo } from "@/app/models/youtube.interface";
import Link from "next/link";

type DiabetesContent = {
  title: string;
  whatIsIt: string;
  treatment: string;
  symptoms: {
    title: string;
    items: string[];
  };
  hasCure: {
    title: string;
    text: string;
  };
  diagnosis: {
    title: string;
    text: string;
  };
};

const videosData: IYouTubeVideo[] = [
  {
    id: "mlyqICh87Gc",
    title: "A HISTÓRIA DO DIABETES",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "lNiiaU6XL4k",
    title: "ADULTOS PODEM DESENVOLVER DIABETES TIPO 1?",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "D9wblEiP3f0",
    title: "Outro Vídeo Relevante",
    channelName: "Nome do Canal",
  },
];

const diabetesContent: { [key: string]: DiabetesContent } = {
  "Diabetes Tipo 1": {
    title: "Diabetes tipo 1",
    whatIsIt:
      "O diabetes tipo 1 é uma doença autoimune em que o sistema imunológico ataca as células do pâncreas responsáveis pela produção de insulina, fazendo com que ele pare de produzi-la.",
    treatment:
      "O controle da doença é feito por meio da aplicação diária de insulina e monitoramento constante da glicose, sempre seguindo as orientações médicas.",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: [
        "Sede excessiva",
        "Fome frequente",
        "Vontade de urinar várias vezes ao dia",
        "Perda de peso sem motivo aparente",
        "Cansaço e irritabilidade",
      ],
    },
    hasCure: {
      title: "O diabetes tipo 1 tem cura?",
      text: "O diagnóstico costuma acontecer ainda na infância ou adolescência. Atualmente, não existe cura, mas há tratamento eficaz. O uso de insulina diariamente é essencial para repor o hormônio que o corpo deixou de produzir, garantindo uma vida saudável e ativa.",
    },
    diagnosis: {
      title:
        "O diagnóstico é feito por meio de exames de sangue que medem a glicose, como:",
      text: "Glicemia de jejum, teste oral de tolerância à glicose e hemoglobina glicada são alguns dos exames utilizados.", // Exemplo de texto
    },
  },
  "Diabetes Tipo 2": {
    title: "Diabetes tipo 2",
    whatIsIt: "Texto sobre o que é Diabetes Tipo 2...",
    treatment: "Texto sobre o tratamento para Diabetes Tipo 2...",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: [
        "Formigamento nos pés e mãos",
        "Visão embaçada",
        "Infecções frequentes",
      ],
    },
    hasCure: {
      title: "O diabetes tipo 2 tem cura?",
      text: "Texto sobre a cura e controle do Diabetes Tipo 2...",
    },
    diagnosis: {
      title: "Como é feito o diagnóstico?",
      text: "Texto sobre o diagnóstico do Diabetes Tipo 2...",
    },
  },
  "Diabetes gestacional": {
    title: "Diabetes gestacional",
    whatIsIt: "Texto sobre o que é Diabetes gestacional...",
    treatment: "Texto sobre o tratamento para Diabetes gestacional...",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: [
        "Geralmente não apresenta sintomas claros, o diagnóstico é feito em exames pré-natais.",
      ],
    },
    hasCure: {
      title: "O diabetes gestacional tem cura?",
      text: "Texto sobre a cura e controle do Diabetes gestacional...",
    },
    diagnosis: {
      title: "Como é feito o diagnóstico?",
      text: "Texto sobre o diagnóstico do Diabetes gestacional...",
    },
  },
  "Pré-diabetes": {
    title: "Pré-diabetes",
    whatIsIt: "Texto sobre o que é Pré-diabetes...",
    treatment: "Texto sobre o tratamento para Pré-diabetes...",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: ["Geralmente não apresenta sintomas."],
    },
    hasCure: {
      title: "Pré-diabetes tem cura?",
      text: "Texto sobre a cura e controle do Pré-diabetes...",
    },
    diagnosis: {
      title: "Como é feito o diagnóstico?",
      text: "Texto sobre o diagnóstico do Pré-diabetes...",
    },
  },
};

const AboutDiabetes = () => {
  const diabetesTypes = [
    "Diabetes Tipo 1",
    "Diabetes Tipo 2",
    "Diabetes gestacional",
    "Pré-diabetes",
  ];

  const [activeType, setActiveType] = useState<string | null>(null);

  const currentContent = activeType ? diabetesContent[activeType] : null;

  return (
    <section className="mt-32 bg-primary-gray py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold text-dark-blue mb-4">
          Conheça os tipo de diabetes:
        </h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {diabetesTypes.map((type) => (
            <FilterButton
              key={type}
              label={type}
              isActive={activeType === type}
              onClick={() => setActiveType(type)}
            />
          ))}
        </div>

        <div className="mt-8">
          {!currentContent && (
            <div className="bg-header-background rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-xl font-bold text-dark-blue mb-2">
                  Quer Saber mais de forma simples e rápida?
                </h3>
                <p className="text-lg font-semibold text-text-gray mb-4">
                  Confira o Canal Nunca Vi 1 Cientista
                </p>
                <p className="text-text-gray md:w-3/4">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae sint ab nobis vitae earum necessitatibus commodi
                  obcaecati. Veniam inventore illum enim maxime culpa? Autem
                  officiis mollitia debitis perspiciatis nihil facilis.
                </p>
              </div>
              <div className="flex flex-col items-center flex-shrink-0">
                <div className="w-32 h-32 relative rounded-full overflow-hidden shadow-lg">
                  <Image
                    src="/image/nunca-vi-1-cientista.jpg"
                    alt="Canal Nunca Vi 1 Cientista"
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <Button classAttributes="font-semibold text-md mt-4 rounded-lg w-44 bg-dark-blue hover:bg-blue-500">
                  <span>Visitar Canal</span>
                </Button>
              </div>
            </div>
          )}

          {currentContent && (
            <article>
              <button
                onClick={() => setActiveType(null)}
                className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
              >
                &lt; Voltar
              </button>

              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                {currentContent.title}
              </h2>

              <div className="space-y-6 text-gray-700">
                <div>
                  <h3 className="text-xl font-semibold mb-2">O que é?</h3>
                  <p>{currentContent.whatIsIt}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Tratamento:</h3>
                  <p>{currentContent.treatment}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {currentContent.symptoms.title}
                  </h3>
                  <ul className="list-disc list-inside space-y-1">
                    {currentContent.symptoms.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {currentContent.hasCure.title}
                  </h3>
                  <p>{currentContent.hasCure.text}</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    {currentContent.diagnosis.title}
                  </h3>
                  <p>{currentContent.diagnosis.text}</p>
                </div>
              </div>
            </article>
          )}
        </div>
        <YouTubeVideoCarousel
          videos={videosData}
          title="Confira abaixo a playlist especial com vídeos sobre diabetes:"
          //linkText="Clique Aqui"
          //playlistUrl="https://www.youtube.com/playlist?list=SUA_PLAYLIST_ID_AQUI"
        />
        <div className="text-center mt-4">
          <p className="text-gray-800 font-semibold text-sm mb-2">
            Quer ver a playlist completa?
          </p>
          <Link
            href="#"
            className="text-dark-blue font-bold uppercase text-sm hover:underline inline-block"
          >
            Clique Aqui
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutDiabetes;
