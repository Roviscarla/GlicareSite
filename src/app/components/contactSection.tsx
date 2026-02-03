"use client";

import { FiMail, FiAlertCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { useState } from "react";
import ModalWarning from "./ui/modal-warning";

const ContactSection = () => {
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
      <div className="text-center  pb-12 ">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          Ainda com dúvidas ou problemas?
        </h3>
        <p className="text-gray-600 mb-8">
          Fale conosco através de um dos nossos canais:
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 sm:gap-12 text-lg">
          <a
            href="mailto:contato@glicareapp.com.br?subject=Contato Glicare&body=Olá equipe Glicare,%0D%0A%0D%0ADescreva seu problema:"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors hover:cursor-pointer"
          >
            <FiMail size={20} />
            <span className="font-medium">Fale conosco</span>
          </a>

          <a
            //href="https://wa.me/5512345678901"
            onClick={openModal}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-gray-700 hover:text-green-500 transition-colors hover:cursor-pointer"
          >
            <FaWhatsapp size={22} />
            <span className="font-medium">Nos chame no WhatsApp</span>
          </a>

          <a
            href="mailto:suporte@glicareapp.com.br?subject=Suporte Glicare&body=Olá equipe Glicare,%0D%0A%0D%0ADescreva seu problema:"
            className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition-colors"
          >
            <FiAlertCircle size={20} />
            <span className="font-medium">FAQ/Central de ajuda</span>
          </a>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
