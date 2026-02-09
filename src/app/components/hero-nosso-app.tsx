"use client";

import Image from "next/image";
import { useState } from "react";

import appMockup from "@/public/image/Home-glico.png";
import ModalWarning from "./ui/modal-warning";
import Button from "./ui/button";
import StoreButtonsDark from "./ui/store-buttons";
import { BsFillPeopleFill } from "react-icons/bs";
import { MdNotificationsActive } from "react-icons/md";
import { FaStethoscope } from "react-icons/fa";
import Link from "next/link";
import IconAppleStore from "@/public/svg/icon-apple-store";
import IconPlayStore from "@/public/svg/icon-play-store";

export default function HeroNossoApp() {
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

      <section className="bg-gradient-to-b from-gray-50 to-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative flex flex-col items-center">
            <div className="absolute -top-6 -left-6 w-[520px] h-[520px] bg-blue-200/40 rounded-full blur-2xl -z-10" />

            <Image
              src={appMockup}
              alt="Aplicativo Glicare em um celular"
              width={340}
              priority
              className="drop-shadow-2xl hover:scale-105 transition duration-300"
            />

            <div className="mt-8 flex flex-col items-center gap-4 bg-white/80 backdrop-blur-md p-6 rounded-3xl shadow-xl">
              <p className="text-gray-800 font-semibold text-md">
                Baixar Agora
              </p>

              <div className="flex gap-4">
                <StoreButtonsDark />
              </div>
            </div>
          </div>

          <div className="space-y-10 mt-10">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-4xl font-bold text-secondary-gray leading-tight">
                Sua saúde na{" "}
                <strong className="text-dark-blue">palma da mão</strong>
              </h1>

              <p className="text-lg text-gray-600 max-w-xl">
                Controle sua glicose com praticidade, receba alertas
                inteligentes e tenha acompanhamento diário com o{" "}
                <strong>Dr. Glico</strong>.
              </p>
            </div>

            <div className="grid gap-4 ">
              <div className="bg-white p-5 rounded-2xl shadow-md  ">
                <div className="flex">
                  <BsFillPeopleFill size={30} className="text-primary" />
                  <strong className="text-lg ml-2">
                    Gerencie facilmente seus dependentes
                  </strong>
                </div>

                <p className="text-sm text-gray-600 ml-10">
                  Gerencie o cuidado da sua família com facilidade.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md">
                <div className="flex">
                  <MdNotificationsActive size={30} className="text-primary" />{" "}
                  <strong className="text-lg ml-2">
                    Lembretes automáticos
                  </strong>
                </div>

                <p className="text-sm text-gray-600 ml-10">
                  Nunca mais esqueça de medir sua glicose.
                </p>
              </div>

              <div className="bg-white p-5 rounded-2xl shadow-md">
                <div className="flex">
                  <FaStethoscope size={30} className="text-primary" />{" "}
                  <strong className="text-lg ml-2">
                    Receba dicas do Dr. Glico
                  </strong>
                </div>

                <p className="text-sm text-gray-600 ml-10">
                  Sugestões baseadas nos seus dados de saúde.
                </p>
              </div>
            </div>
            <div className="text-center">
              <p className="text-gray-800 font-semibold text-md">
                Quer mais informações?
              </p>
              <Link
                href="https://www.linkedin.com/groups/14722317/"
                target="_blank"
                rel="noopener
                     noreferrer"
                className="text-dark-blue font-bold uppercase text-sm hover:underline inline-block"
              >
                SAIBA MAIS
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
