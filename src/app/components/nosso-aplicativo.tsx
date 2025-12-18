"use client";

import Image from "next/image";
import Link from "next/link";

import appMockup from "@/public/image/Home-glico.png";
import IconPlayStore from "@/public/svg/icon-play-store-silver";
import IconAppleStore from "@/public/svg/icon-apple-store-silver";
import { useState } from "react";
import ModalWarning from "./ui/modal-warning";
import Button from "./ui/button";
import StoreButtonsDark from "./ui/store-buttons";

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

      <section className="bg-gray-100 pt-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-20">
            <div className="flex flex-col items-center">
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

              <div className="hidden lg:flex gap-4">
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

              <div className="lg:hidden pb-10 w-full">
                <Button
                  onClick={openModal}
                  classAttributes="bg-primary w-full hover:bg-blue-700"
                >
                  Baixe o Glicare
                </Button>
              </div>
            </div>

            <div className="max-w-2xl">
              <h2 className="text-lg font-bold text-dark-blue mb-4">
                Nossa Jornada
              </h2>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Com o nosso app você tem na palma da sua mão uma forma de
                controlar a sua glicose e com o Dr. Glico fazendo o auxílio
                necessário.
              </p>

              <h3 className="text-lg font-bold text-dark-blue mb-4">
                Gerencie facilmente seus dependentes!
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Em nosso app você realizar o cadastro de seus dependentes de
                forma simples
              </p>

              <h3 className="text-lg font-bold text-dark-blue mb-4">
                Receba dicas do Dr. Glico
              </h3>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Primeiro tirar a parte de depoimentos, e colocar uma parte do
                que os médicos consultores estão dizendo, e fazer uma wishlist
                para pessoa colocar e-mail para quando for lançado o app
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

          <div className="mt-16 bg-header-background rounded-xl p-6 sm:p-8  shadow-lg max-w-[1024px] mx-auto mb-8">
            <div className="flex-1 text-center md:text-left">
              <h3 className=" text-3xl font-bold text-center text-dark-blue mb-4 max-w-[1024px] mx-auto">
                Criado por Quem Entende, Para Quem Precisa
              </h3>
              <p className="mt-8 text-text-gray mb-4 text-lg">
                O Glicare nasceu da união de um time ágil, o Time Eclipse, e a
                missão de transformar o controle do diabetes. Não criamos apenas
                um app, criamos uma comunidade baseada em empatia e dados reais.
              </p>
              <p className="text-text-gray mb-4 text-lg">
                Nossos times de Produto e UX ouviram ativamente pessoas com
                diabetes e profissionais de saúde para mapear as funcionalidades
                essenciais. A Lean Inception garantiu que o produto resolvesse
                os problemas mais urgentes da sua rotina.
              </p>
              <p className="text-text-gray mb-4 text-lg">
                Com o Glicare, você tem o controle na palma da mão, pronto para
                exportar e levar ao seu médico. Alertas personalizados que
                combatem o esquecimento das medições. Controle total de
                dependentes para garantir tranquilidade a quem cuida.
              </p>
              {/* <h3 className="text-lg font-semibold text-center text-text-gray mb-4">
                Nossa Jornada: A Comunidade Glicare
              </h3> */}
              <p className="text-text-gray mb-4 text-lg">
                O Glicare nasceu da união de um time ágil, o Time Eclipse, e a
                missão de transformar o controle do diabetes em uma jornada mais
                leve, segura e eficiente. Não criamos apenas um app; criamos uma
                comunidade baseada em empatia e dados reais.
              </p>
              <p className="text-text-gray mb-4 text-lg">
                Do Conceito ao MVP: Para garantir que o Glicare entregasse valor
                real desde o início, Nosso time realizou a Lean Inception. na
                descoberta, definimos a Visão do Produto e o que ele é, não é,
                faz e não faz.
              </p>
              <p className="text-text-gray mb-4 text-lg">
                Esse processo não apenas alinhou a equipe, mas nos permitiu
                criar um MVP (Produto Mínimo Viável) focado na essência da sua
                necessidade.
              </p>
            </div>
          </div>

          {/* <div className="mt-16 bg-header-background rounded-xl p-6 sm:p-8  shadow-lg max-w-[1024px] mx-auto mb-8">
            <div className="flex-1 text-center md:text-left"></div>
          </div> */}

          <div className="max-w-5xl mx-auto px-4 mt-12">
            <h2 className="text-3xl font-bold text-dark-blue text-center mb-8">
              Pesquisa com Usuários e Profissionais
            </h2>
            <p className="text-lg font-semibold text-center text-text-gray mb-4">
              Criamos o Glicare e nossos times de Produto e UX foram a campo
              para ouvir:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-header-background rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-dark-blue mb-2">
                  Pessoas com Diabetes
                </h3>
                <p className="text-text-gray text-lg">
                  Para entender a rotina, as dores diárias e o que realmente
                  faria a diferença no controle glicêmico.
                </p>
              </div>

              <div className="bg-header-background rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <h3 className="text-xl font-bold text-dark-blue mb-2">
                  Profissionais de Saúde
                </h3>
                <p className="text-text-gray text-lg">
                  Para garantir que as funcionalidades tivessem embasamento
                  clínico e atendessem às necessidades de monitoramento médico.
                </p>
              </div>
            </div>
            <div className="bg-header-background rounded-xl p-6 sm:p-8 shadow-lg max-w-[1024px] mx-auto mb-8">
              <div className="grid grid-cols-1 md:grid-cols-[3fr_3fr] gap-8">
                <div>
                  <h3 className="text-xl text-dark-blue font-bold mb-4">
                    O Desafio Identificado na Pesquisa
                  </h3>

                  <ol className="list-disc list-inside text-text-gray space-y-3">
                    <li className="text-xl">
                      <strong>Consultas Ineficientes:</strong> 85% sofrem para
                      organizar o histórico glicêmico.
                    </li>
                    <li className="text-xl">
                      <strong>Insegurança Familiar:</strong> O medo de não saber
                      como está um dependente.
                    </li>
                    <li className="text-xl">
                      <strong>Esquecimento:</strong> A rotina atribulada faz
                      medições serem puladas.
                    </li>
                  </ol>
                </div>

                <div>
                  <h3 className="text-xl text-dark-blue font-bold mb-4">
                    Como o Glicare Resolve
                  </h3>

                  <div className="space-y-4 text-text-gray">
                    <ul className="list-disc list-inside text-text-gray space-y-3">
                      <li className="text-xl">
                        <strong>Relatórios de 1 Clique:</strong> Exportação
                        imediata de gráficos claros para seu médico.
                      </li>
                      <li className="text-xl">
                        <strong>Rede de Cuidado:</strong> Alertas em tempo real
                        para cuidadores e familiares.
                      </li>
                      <li className="text-xl">
                        <strong>Alertas Inteligentes:</strong> Lembretes que se
                        adaptam ao seu estilo de vida.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center px-9 text-center">
            <Image
              src={"/image/Glicare-Logotipo.png"}
              alt="Glicare Logotipo"
              width={330}
              height={330}
              className="aspect-circle pt-10 object-contain"
              priority
            />
            <p className="font-inter text-2xl font-medium text-primary py-8 lg:pt-10">
              Baixe o Glicare agora e transforme sua saúde!
            </p>
          </div>
          <div className="flex gap-6 justify-center px-6 pb-6  ">
            <StoreButtonsDark className="justify-center px-6 pb-6 " />
          </div>
        </div>
      </section>
    </>
  );
}
