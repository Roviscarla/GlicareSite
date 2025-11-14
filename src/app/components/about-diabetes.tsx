"use client";

import React from "react";
import Image from "next/image";
import FilterButton from "@/app/components/ui/filter-button";
import Button from "./ui/button";
import YouTubeVideoCarousel from "@/app/components/ui/youtube-carousel";
import { IYouTubeVideo } from "@/app/models/youtube.interface";
import Link from "next/link";

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

const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

const AboutDiabetes = () => {
  const diabetesTypes = [
    "Diabetes Tipo 1",
    "Diabetes Tipo 2",
    "Diabetes gestacional",
    "Pré-diabetes",
  ];

  return (
    <section className="mt-32 bg-primary-gray py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-lg font-semibold text-dark-blue mb-4">
          Conheça os tipo de diabetes:
        </h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {diabetesTypes.map((type) => {
            const slug = createSlug(type); // Cria o slug para a URL
            return (
              <Link key={type} href={`/sobre-diabetes/${slug}`} passHref>
                <FilterButton label={type} />
              </Link>
            );
          })}
        </div>

        <div className="mt-8">
          <div className="bg-header-background rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-sm">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-dark-blue mb-2">
                Conhece o canal Nunca Vi 1 Cientista?
              </h3>
              <p className="text-lg font-semibold text-text-gray mb-4">
                                Inspirando Ciência e Combatendo a Desinformação
              </p>
              <p className="text-text-gray md:w-3/4">
                As cientistas Laura Marise e Ana Bonassa são as criadoras do projeto Nunca Vi 1 Cientista, uma iniciativa que leva informação científica de forma acessível, divertida e confiável.
                
              </p>
              <p className="text-text-gray md:w-3/4">
                O canal nasceu em 2018, após as duas se conhecerem em uma competição de comunicação científica, e desde então vem se destacando por combater a desinformação na internet, especialmente sobre temas ligados à saúde e biologia.

              </p>
              <p className="text-text-gray md:w-3/4">
                Laura Marise é farmacêutica-bioquímica, com mestrado e doutorado em Biociências e Biotecnologia Aplicadas à Farmácia pela Unesp.
                Ana Bonassa é bióloga, com mestrado e doutorado em Fisiologia Humana pela USP.
                De onde surgiu a Parceria?
                Durante nossas pesquisas com usuários, percebemos que muitas pessoas relatam dificuldade em encontrar informações reais e seguras sobre diabetes.
                Por isso, convidamos Laura e Ana para disponibilizarem vídeos do Canal Nunca Vi 1 Cientista aqui no Glicare, na área de Conteúdo Confiável.
                Essa parceria tem como objetivo levar informação de qualidade, baseada em ciência, para ajudar quem vive com diabetes a se informar de forma clara, confiável e segura.


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
        </div>

        <YouTubeVideoCarousel
          videos={videosData}
          title="Confira abaixo a playlist especial com vídeos sobre diabetes:"
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
