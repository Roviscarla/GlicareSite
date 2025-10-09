"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Button from "@/app/components/ui/button";
import NavigationMenu from "@/public/svg/navigation-menu";
import LogoGlicare from "@/public/svg/icon-glicare-dark";
import ModalWarning from "./ui/modal-warning";
import Link from "next/link";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const pathname = usePathname();

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  const navItems = [
    { href: "/nosso-aplicativo", label: "Nosso aplicativo" },
    { href: "/sobre-diabetes", label: "Sobre diabetes" },
    { href: "/quem-somos", label: "Quem somos" },
    { href: "/contatos", label: "Entre na Comunidade" },
  ];

  return (
    <>
      <ModalWarning
        message="Ainda estamos trabalhando no nosso aplicativo para trazer a melhor experiência possível."
        isOpen={showModal}
        onClose={closeModal}
      />
      <header>
        <nav className="fixed top-0 left-0 w-full z-50 bg-header-background h-24 flex justify-between items-center p-4 lg:h-28 lg:p-10">
          <div className="flex gap-4 ml-14 items-center text-black">
            <LogoGlicare />
            <Link href="/" className="font-roboto font-semibold text-2xl">
              Glicare
            </Link>
          </div>
          <Button
            classAttributes="xl:hidden bg-transparent"
            onClick={() => setMenuOpen((prev) => !prev)}
          >
            <NavigationMenu />
          </Button>
          <ul className="hidden xl:flex justify-around text-gray gap-12 font-inter font-medium text-base list-none px-18">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href} className="hover:text-blue-500">
                  <Link
                    href={item.href}
                    className={`transition-colors duration-200 ${
                      isActive
                        ? "text-dark-blue font-bold"
                        : "text-gray font-medium"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden xl:flex gap-4">
            <Button
              onClick={openModal}
              classAttributes="w-40 h-12 bg-dark-blue font-semibold text-white font-inter rounded-lg mr-14"
            >
              Baixe o Glicare
            </Button>
          </div>

          <div
            aria-hidden={!menuOpen}
            className={`absolute top-24 left-0 w-full bg-white shadow-md py-6 px-4 z-50 
              flex flex-col gap-6 text-black font-inter text-lg items-center text-center 
              xl:hidden transition-all duration-300 ease-in-out 
              ${
                menuOpen
                  ? "opacity-100 scale-100"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
          >
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={`${
                    isActive ? "text-primary font-bold" : "font-medium"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
        </nav>
      </header>
    </>
  );
}
