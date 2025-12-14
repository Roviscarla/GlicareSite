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
    title: "Os tipos de diabetes",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "lNiiaU6XL4k",
    title: "Qual foi a primeira pessoa com diabetes no mundo?",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "D9wblEiP3f0",
    title: "Os tipos de INSULINA",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "uIJ3FQEhl8I",
    title: "A FRUTA que cura DIABETES",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "PxUijh1-oIY",
    title: "Os avanços no tratamento do diabetes tipo 1",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "6XF9ifr5k18",
    title: "A nova promessa de cura para diabetes",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "lNiiaU6XL4k",
    title: "Qual foi a primeira pessoa com diabetes no mundo?",
    channelName: "Nunca Vi 1 Cientista",
  },
  {
    id: "TxaJvSw7NDs",
    title: "DIABETES: sintomas que você não sabia que existiam",
    channelName: "Nunca Vi 1 Cientista",
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
  ];

  return (
    <section className=" bg-primary-gray py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto ">
        <h2 className="text-3xl font-bold text-dark-blue mb-6">
          Conheça os tipos de diabetes:
        </h2>

        <div className="flex flex-wrap gap-3 mb-12">
          {diabetesTypes.map((type) => {
            const slug = createSlug(type);
            return (
              <Link key={type} href={`/sobre-diabetes/${slug}`} passHref>
                <FilterButton label={type} />
              </Link>
            );
          })}
        </div>
        <div className="mt-8 mb-8">
          <h3 className="text-3xl font-bold text-dark-blue mb-4 max-w-[1024px] mx-auto">
            O que é diabetes?
          </h3>
          <div className="bg-header-background rounded-xl p-6 sm:p-8  shadow-lg max-w-[1024px] mx-auto">
            <div className="flex-1 text-center md:text-left">
              <p className="text-text-gray mb-4 text-base">
                O<span className="font-bold"> diabetes</span> é uma{" "}
                <span className="font-bold"> condição crônica</span> que ocorre
                quando o nível de{" "}
                <span className="font-bold"> glicose (açúcar) no sangue</span>{" "}
                está mais alto do que o normal. Isso acontece porque o corpo não
                consegue
                <span className="font-bold">
                  {" "}
                  produzir insulina suficiente ou não consegue usar a insulina
                  de forma adequada
                </span>{" "}
                . A insulina é um hormônio produzido pelo pâncreas, que ajuda a
                glicose a entrar nas células para ser usada como energia.
              </p>
              <p className="text-text-gray mb-4 text-base">
                Sem insulina suficiente ou se ela não funcionar bem, a glicose
                se acumula no sangue, causando o que chamamos de hiperglicemia.
              </p>
              <p className="text-text-gray mb-4 text-base">
                Hiperglicemia é o resultado do acúmulo de glicose no sangue
                devido à deficiência ou mau funcionamento da insulina. Sem o
                controle adequado, esta condição crônica pode desencadear
                complicações de saúde a longo prazo.
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-dark-blue mb-4 max-w-[1024px] mx-auto">
          Pré-diabetes
        </h3>

        <div className="bg-header-background rounded-xl p-6 sm:p-8  shadow-lg max-w-[1024px] mx-auto">
          <div className="flex-1 text-center md:text-left">
            <p className="text-text-gray mb-4 text-base">
              É quando os níveis de glicose no sangue estão mais altos do que o
              normal, mas ainda não estão elevados o suficiente para
              caracterizar um Diabetes Tipo 1 ou Tipo 2. É um sinal de alerta do
              corpo, que normalmente aparece em obesos, hipertensos e/ou pessoas
              com alterações nos lipídios.
            </p>
          </div>
        </div>

        <div className="mt-8">
          <div className="bg-header-background rounded-xl p-6 sm:p-8 flex flex-col-reverse md:flex-row items-center gap-6 md:gap-12 shadow-lg">
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl font-bold text-dark-blue mb-2">
                Conhece o canal Nunca Vi 1 Cientista?
              </h3>
              <p className="text-lg font-semibold text-text-gray mb-4">
                Inspirando Ciência e Combatendo a Desinformação
              </p>

              <p className="text-text-gray mb-4 text-base">
                As cientistas <span className="font-bold">Laura Marise</span> e
                <span className="font-bold"> Ana Bonassa</span> são as criadoras
                do projeto{" "}
                <span className="font-bold">Nunca Vi 1 Cientista</span>, uma
                iniciativa que leva informação científica de forma acessível,
                divertida e confiável.
              </p>
              <p className="text-text-gray mb-4 text-base">
                O canal nasceu em <span className="font-bold">2018</span>, após
                as duas se conhecerem em uma competição de comunicação
                científica, e desde então vem se destacando por{" "}
                <span className="font-bold">
                  combater a desinformação na internet
                </span>
                , especialmente sobre temas ligados à{" "}
                <span className="font-bold">saúde e biologia</span>.
              </p>
            </div>

            <div className="flex flex-col items-center flex-shrink-0 mb-6 md:mb-0">
              <div className="w-48 h-48 relative rounded-full overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition duration-300">
                <Image
                  src="/image/nunca-vi-1-cientista.jpg"
                  alt="Canal Nunca Vi 1 Cientista"
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <Button classAttributes="font-semibold text-md mt-6 rounded-lg w-48 bg-dark-blue text-white hover:bg-blue-700 transition duration-200">
                <span>Visitar Canal</span>
              </Button>
            </div>
          </div>
        </div>

        <div className="max-w-5xl mx-auto px-4 mt-12">
          <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">
            Quem são as cientistas
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-header-background rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <Image
                src="/image/ana-bonassa.jpg"
                alt="Ana"
                width={200}
                height={200}
                className="w-28 h-28 object-cover rounded-full mb-4 shadow-md"
              />

              <h3 className="text-xl font-bold text-dark-blue mb-2">
                Ana Bonassa
              </h3>
              <p className="text-text-gray text-sm">
                Bióloga, com mestrado e doutorado em Fisiologia Humana pela USP.
              </p>
            </div>

            <div className="bg-header-background rounded-xl shadow-md p-6 flex flex-col items-center text-center">
              <Image
                src="/image/laura.jpg"
                alt="Laura"
                width={200}
                height={200}
                className="w-28 h-28 object-cover rounded-full mb-4 shadow-md"
              />

              <h3 className="text-xl font-bold text-dark-blue mb-2">
                Laura Marise
              </h3>
              <p className="text-text-gray text-sm">
                Farmacêutica-bioquímica, com mestrado e doutorado em Biociências
                e Biotecnologia Aplicadas à Farmácia pela Unesp.
              </p>
            </div>
          </div>
        </div>
        <h3 className="text-3xl font-bold text-center text-dark-blue mb-4 max-w-[1024px] mx-auto mt-8">
          De onde vem a parceria?
        </h3>

        <div className="bg-header-background rounded-xl p-6 sm:p-8  shadow-lg max-w-[1024px] mx-auto mt-4">
          <div className="flex-1 text-center md:text-left">
            <p className="text-text-gray mb-4 text-base">
              Durante nossas pesquisas com usuários,{" "}
              <span className="font-bold">
                percebemos que muitas pessoas relatam dificuldade em encontrar
                informações reais e seguras sobre diabetes.
              </span>
            </p>
            <p className="text-text-gray mb-4 text-base">
              Por isso, convidamos Laura e Ana para disponibilizarem{" "}
              <span className="font-bold">
                vídeos do Canal Nunca Vi 1 Cientista aqui no Glicare
              </span>
              , na área{" "}
              <span className="font-bold">de Conteúdo Confiável.</span>
            </p>
            <p className="text-text-gray mb-4 text-base">
              Essa parceria tem como objetivo levar informação de qualidade,
              baseada em ciência, para ajudar quem vive com diabetes a se
              informar de forma clara, confiável e segura.
            </p>
          </div>
        </div>

        <YouTubeVideoCarousel
          videos={videosData}
          title="Confira abaixo a playlist especial com vídeos sobre diabetes:"
        />

        <div className="text-center mt-6">
          <p className="text-gray-800 font-semibold text-base mb-2">
            Quer ver a playlist completa?
          </p>
          <Link
            href="https://www.youtube.com/channel/UCdKJlY5eAoSumIlcOcYxIGg/join"
            target="_blank"
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
