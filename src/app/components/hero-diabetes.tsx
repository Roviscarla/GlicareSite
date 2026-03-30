"use client";

import { useState } from "react";
import Image from "next/image";
import ModalWarning from "./ui/modal-warning";
import DiabetesCard from "./ui/card-diabetes";

const createSlug = (text: string) => {
  return text
    .toLowerCase()
    .replace(/ /g, "-")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
};

export default function HeroDiabetes() {
  const [showModal, setShowModal] = useState(false);

  const cards = [
    {
      title: "Diabetes Tipo 1",
      description: "Doença autoimune onde o corpo não produz insulina.",
    },
    {
      title: "Diabetes Tipo 2",
      description: "O organismo não usa a insulina corretamente.",
    },
    {
      title: "Diabetes gestacional",
      description: "Surge durante a gravidez e exige acompanhamento médico.",
    },
  ];

  return (
    <>
      <ModalWarning
        message="Ainda estamos trabalhando no nosso aplicativo."
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      />

      <section className="relative w-full  overflow-visible pb-20">
        <div className="relative w-full h-[600px]">
          <Image
            src="/image/sobre-diabetes-hero.jpg"
            alt="Profissional de saúde medindo glicemia"
            fill
            priority
            className="object-cover"
          />

          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.8)_35%,rgba(255,255,255,0.3)_60%,transparent_100%)]" />

          <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center">
            <div className="max-w-xl flex flex-col gap-6 mt-8">
              <h1 className="text-5xl font-bold text-dark-blue leading-tight">
                Um Furo Salva Vidas
                <span className="text-3xl mt-4 block text-blue-500 italic">
                  Significa Coragem, Cuidado e Força!
                </span>
              </h1>

              <p className="text-lg text-gray">
                O Glicare ajuda você a acompanhar sua saúde com praticidade,
                organização e informações confiáveis baseadas em ciência.
              </p>

              {/* <button
                onClick={() => setShowModal(true)}
                className="bg-blue-600 text-white px-6 py-3 rounded-xl w-fit hover:bg-blue-700 transition"
              >
                Baixar aplicativo
              </button> */}
            </div>
          </div>
        </div>

        <div className="relative z-20 -mt-24 max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {cards.map((type) => (
              <DiabetesCard
                key={type.title}
                title={type.title}
                description={type.description}
                href={`/sobre-diabetes/${createSlug(type.title)}`}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
