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
