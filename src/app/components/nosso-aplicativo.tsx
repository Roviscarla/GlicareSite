"use client";

import Image from "next/image";
import Link from "next/link";

import appMockup from "@/public/image/glico-home-section.png";
import IconPlayStore from "@/public/svg/icon-play-store-silver";
import IconAppleStore from "@/public/svg/icon-apple-store-silver";
import { useState } from "react";
import ModalWarning from "./ui/modal-warning";

export default function NossoApp() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <ModalWarning
        message="Ainda estamos trabalhando no nosso aplicativo para trazer a melhor experiência possível."
        isOpen={showModal}
        onClose={closeModal}
      />
      <section className="bg-gray-100 pt-16 ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <div className="flex flex-col items-center lg:items-center">
              <div className="mb-8 mt-16">
                <Image
                  src={appMockup}
                  alt="Aplicativo Glicare em um celular"
                  width={400}
                  height={400}
                  className="h-auto"
                />
              </div>

              <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
                Baixe o nosso App
              </h3>

              <div className="flex gap-4">
                <button
                  className="transition-transform duration-200 ease-out hover:scale-105"
                  onClick={openModal}
                  aria-label="Baixar na Play Store"
                >
                  <IconPlayStore />
                </button>
                <button
                  className="transition-transform duration-200 ease-out hover:scale-105"
                  onClick={openModal}
                  aria-label="Baixar na Apple Store"
                >
                  <IconAppleStore />
                </button>
              </div>
            </div>

            <div className="max-w-2xl">
              <h2 className="text-lg font-bold text-dark-blue mb-4">
                Nosso Aplicativo
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Com o nosso app você tem na palma da sua mão uma forma de
                controlar a sua glicose e com o doutor Glico fazendo o auxílio
                necessário.
              </p>

              <h3 className="text-lg font-bold text-dark-blue mb-4">
                Precisa fazer o controle de dependentes?
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                No app você também pode cadastrar dependentes tendo o total
                controle, com alertas personalizados.
              </p>

              <h3 className="text-lg font-bold text-dark-blue mb-4">
                Leve de forma fácil suas medições a médicos responsáveis
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                No app suas anotações ficam ajustadas de forma simples podendo
                ser exportadas para monitoramento médico.
              </p>

              <div className="text-center mt-8">
                <p className="text-gray-800 font-semibold text-sm mb-2">
                  Quer mais informações?
                </p>
                <Link
                  href="#"
                  className="text-dark-blue font-bold uppercase text-sm hover:underline inline-block"
                >
                  SAIBA MAIS
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
