"use client";

import Button from "@/app/components/ui/button";
import IconEmail from "@/public/svg/icon-email";
import IconPhone from "@/public/svg/icon-phone";
import IconWhatsApp from "@/public/svg/icon-whatsapp";
import ModalWarning from "./ui/modal-warning";
import { useState } from "react";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <ModalWarning
        message="No momento, nosso único canal de comunicação é o email:"
        isOpen={showModal}
        onClose={closeModal}
      />
      <section
        id="contatos"
        className="w-full flex-shrink-0 bg-primary-gray lg:px-20"
      >
        <div className="pb-16 px-6 text-center">
          <h2 className="text-2xl md:text-28 font-medium text-gray-dark">
            Entre em contato com o Glicare
          </h2>
          <p className="mt-4 md:mt-6  text-secondary-gray text-center text-lg md:text-xl font-normal">
            Caso ainda tenha dúvidas ou esteja com problema para utilizar o
            Glicare, você pode entrar em contato conosco abaixo:
          </p>

          <div className="hidden md:flex flex-col md:flex-row gap-6 mt-16 lg:justify-center">
            <div className="w-224 xl:w-336 h-310 flex-shrink-0 bg-background shadow-md rounded-2xl p-6 text-center hidden md:block">
              <IconPhone className="mx-auto mt-34 bg-white" />
              <h3 className="font-medium text-lg text-gray-dark mt-6 mb-68">
                Nos contate diretamente
              </h3>
              <a
                //href="tel:+5512345678901"
                onClick={openModal}
                className="text-blue-dark text-center text-md xl:text-xl font-semibold xl:ml-6 hover:text-blue-500 hover:underline"
              >
                +55 12 34567-8901
              </a>
            </div>

            <div className="w-224 xl:w-336 h-310 shadow-md flex-shrink-0 bg-background rounded-2xl p-6 text-center hidden md:block">
              <IconWhatsApp className="mx-auto mt-34 bg-white" />
              <h3 className="font-medium text-lg text-gray-dark mt-6 mb-16">
                Nos chame no WhatsApp
              </h3>
              <a
                //href="https://wa.me/5512345678901"
                target="_blank"
                rel="noopener noreferrer"
                onClick={openModal}
                className="gap-2 px-6 py-4 rounded-lg"
              >
                <Button classAttributes="md:bg-blue-500 hover:bg-blue-700 font-semibold text-base">
                  <span className="xl:hidden">Chamar</span>
                  <span className="xl:block md:hidden">Chamar no WhatsApp</span>
                </Button>
              </a>
            </div>

            <div className="w-224 xl:w-336 h-310 flex-shrink-0 shadow-md bg-background rounded-2xl p-6 text-center hidden md:block">
              <IconEmail className="mx-auto mt-34 bg-white" />
              <h3 className="font-medium text-lg text-gray-dark mt-6 mb-68">
                Entre em contato pelo e-mail
              </h3>
              <a
                href="mailto:contato@glicare.com"
                className="text-blue-dark text-md xl:text-xl font-semibold hover:text-blue-500 hover:underline"
              >
                contato@glicare.com
              </a>
            </div>
          </div>

          <div className="flex justify-center gap-5 mt-42  md:hidden">
            <div className="flex items-center justify-center w-24 h-74 px-35 py-19 rounded-lg bg-white">
              <a
                //href="tel:+5512345678901"
                onClick={openModal}
                className="text-blue-dark text-center text-md xl:text-xl font-semibold xl:ml-6 hover:text-blue-500 hover:underline"
              >
                <IconPhone className="w-36 h-36 mt-2 shrink-0" />
              </a>
            </div>
            <div className="flex items-center justify-center w-24 h-74 px-33 py-17 rounded-lg bg-white">
              <a
                //href="https://wa.me/5512345678901"
                target="_blank"
                rel="noopener noreferrer"
                onClick={openModal}
                className="gap-2 px-6 py-4 rounded-lg"
              >
                <IconWhatsApp className="shrink-0" />
              </a>
            </div>
            <div className="flex items-center justify-center w-24 h-74 px-33 py-17 rounded-lg bg-white">
              <a
                href="mailto:contato@glicare.com"
                className="text-blue-dark text-md xl:text-xl font-semibold hover:text-blue-500 hover:underline"
              >
                <IconEmail className="shrink-0" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
