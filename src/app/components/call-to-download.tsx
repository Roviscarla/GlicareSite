"use client";

import IconPlayStore from "@/public/svg/icon-play-store-new-white";
import Button from "@/app/components/ui/button";
import IconAppleStore from "@/public/svg/icon-apple-store-new-white";
import Image from "next/image";
import ModalWarning from "./ui/modal-warning";
import { useState } from "react";

export default function CallToDownload() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const handleMobileDownload = () => {
    const isApple = /iPhone|iPad|iPod/i.test(navigator.userAgent);

    if (isApple) {
      openModal();
    } else {
      window.open(
        "https://play.google.com/store/apps/details?id=com.projetoglicday.glicare",
        "_blank",
        "noopener,noreferrer",
      );
    }
  };

  return (
    <>
      <ModalWarning
        message="Ainda estamos trabalhando no nosso aplicativo para trazer a melhor experiência possível."
        isOpen={showModal}
        onClose={closeModal}
      />
      <section className="pt-28 lg:px-8">
        <div className="flex items-end mx-8 rounded-3xl bg-gradient-background h-full lg:pt-20 lg:mx-16">
          <div className="flex flex-col justify-between px-4 pt-10 gap-16 text-center h-full md:pl-16 md:pr-16 lg:pl-4 lg:items-center lg:flex-row lg:text-start">
            <div className="flex flex-col lg:gap-6 font-inter lg:px-10">
              <div className="flex flex-col gap-4">
                <a
                  href="#junte-se"
                  className="font-medium py-2 text-4xl text-blue-dark md:text-6xl lg:text-6xl/tight lg:text-center xl:text-start xl:w-480"
                >
                  Seu controle da diabetes muito mais simples!
                </a>
                <p className="font-normal text-gray-dark text-xl md:ml-16 xl:ml-0 md:w-568 lg:w-480 lg:text-center xl:text-start">
                  Se alimente nos horários certos, registre o histórico da sua
                  glicemia e configure lembretes para medir a glicose.
                </p>
              </div>
              <div className="relative flex items-center justify-center mt-6 lg:flex xl:hidden">
                <Image
                  src="/image/Dr-Glico-hero-page.png"
                  alt="Dr. Glico"
                  width={569}
                  height={665}
                />
              </div>
              <div className="hidden lg:flex flex-col md:mt-6 gap-6 lg:items-center xl:items-start">
                <p className="font-medium text-xl lg:text-center xl:text-center">
                  Baixe o Glicare agora e transforme sua saúde!
                </p>
                <div className="flex gap-2 lg:justify-center xl:justify-start">
                  <a
                    className="pb-8 xl:pb-0 transition-transform duration-200 ease-out hover:scale-110"
                    href="https://play.google.com/store/apps/details?id=com.projetoglicday.glicare"
                    aria-label="Baixar na Play Store"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <IconPlayStore />
                  </a>
                  <button
                    className="pb-8 transition-transform duration-200 ease-out hover:scale-110"
                    onClick={openModal}
                    aria-label="Baixar na Apple Store"
                  >
                    <IconAppleStore />
                  </button>
                </div>
              </div>
            </div>

            {/* Botão para Mobile */}
            <div className="lg:hidden pb-10">
              <Button
                onClick={handleMobileDownload}
                classAttributes="bg-primary w-full hover:bg-blue-700"
              >
                Baixe o Glicare
              </Button>
            </div>

            <div className="hidden xl:flex justify-center mr-12 -mt-4">
              <Image
                src="/image/Dr-Glico-hero-page.png"
                alt="Dr. Glico"
                width={569}
                height={665}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
