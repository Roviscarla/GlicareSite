"use client";

import IconAppleStoreDarkDesktop from "@/public/svg/icon-apple-store-dark-desktop";
import IconAppleStoreDarkMobile from "@/public/svg/icon-apple-store-dark-mobile";
import IconPlayStoreDarkDesktop from "@/public/svg/icon-play-store-dark-desktop";
import IconPlayStoreDarkMobile from "@/public/svg/icon-play-store-dark-mobile";
import ModalWarning from "./modal-warning";
import { useState } from "react";

export default function StoreButtonsDark({
  className = "",
}: {
  className?: string;
}) {
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
      <div className={`flex gap-4 ${className}`}>
        <a
          target="_blank"
          className="lg:hidden"
          href="https://play.google.com/store/apps/details?id=com.projetoglicday.glicare"
          aria-label="Baixar na Play Store"
          rel="noopener noreferrer"
        >
          <IconPlayStoreDarkMobile />
        </a>
        <a
          target="_blank"
          className="lg:hidden"
          //href="https://apps.apple.com"
          onClick={openModal}
          aria-label="Baixar na Apple Store"
          rel="noopener noreferrer"
        >
          <IconAppleStoreDarkMobile />
        </a>

        <a
          target="_blank"
          className="hidden lg:block transition-transform duration-200 ease-out hover:scale-110"
          href="https://play.google.com/store/apps/details?id=com.projetoglicday.glicare"
          aria-label="Baixar na Play Store"
          rel="noopener noreferrer"
        >
          <IconPlayStoreDarkDesktop />
        </a>
        <a
          target="_blank"
          className="hidden lg:block transition-transform duration-200 ease-out hover:scale-110"
          //href="https://apps.apple.com"
          onClick={openModal}
          aria-label="Baixar na Apple Store"
          rel="noopener noreferrer"
        >
          <IconAppleStoreDarkDesktop />
        </a>
      </div>
    </>
  );
}
