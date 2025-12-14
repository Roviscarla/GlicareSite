import React from "react";
import Image from "next/image";
import drglico from "@/public/image/Dr Glico.png";

const HeroDiabetes = () => {
  return (
    <section
      className="
        relative
        w-full
        min-h-[calc(100vh-64px)]    
        overflow-hidden
        font-inter
        flex
        items-center
        justify-center
      "
    >
      <div className="absolute inset-0 bg-gradient-background"></div>

      <div
        className="
          relative z-10
          flex flex-col lg:flex-row     
          items-center lg:items-center
          justify-center
          text-center lg:text-left
          px-4 sm:px-8
          gap-10 lg:gap-16
        "
      >
        <div className="w-28 sm:w-48 md:w-60 lg:w-60 flex-shrink-0">
          <Image
            src={drglico}
            alt="Dr Glico - Mascote da Prevenção de Diabetes"
            width={288}
            height={400}
            className="drop-shadow-lg w-full h-auto"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight drop-shadow-md">
            Um Furo Salva Vidas
          </h1>

          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl italic text-dark-blue leading-tight drop-shadow-md mt-2">
            Significa Coragem, Cuidado e Força!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default HeroDiabetes;
