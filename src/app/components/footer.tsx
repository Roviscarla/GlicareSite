import IconGlicare from "@/public/svg/icon-glicare-light";
import { FiMail, FiAlertCircle } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-primary-gray px-6 py-8 md:px-16 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8 items-start">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <IconGlicare />
              <h2 className="font-roboto font-bold text-3xl md:text-4xl">
                Glicare
              </h2>
            </div>

            <p className="text-sm md:text-base leading-relaxed max-w-2xl">
              O Glicare é um aplicativo dedicado a pacientes de diabetes,
              médicos, nutricionistas e demais profissionais da saúde que
              desejam maior simplicidade, praticidade e facilidade no
              acompanhamento, controle e evolução da doença e sintomas.
            </p>
            <p className="text-sm md:text-base leading-relaxed max-w-2xl">
              Informações baseadas nas diretrizes do{" "}
              <a
                href="https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/diabetes"
                target="_blank"
                rel="noopener
                     noreferrer"
                className="hover:underline"
              >
                Ministério da Saúde
              </a>
            </p>

            <p className="text-sm pt-4">© 2026 Glicare • v2.0</p>
          </div>

          <div className="space-y-6 md:text-left">
            <nav>
              <ul className="flex flex-col gap-3 text-sm md:text-base">
                <li>
                  <a href="#app" className="hover:underline transition-all">
                    Nosso aplicativo
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:underline transition-all">
                    Sobre diabetes
                  </a>
                </li>
                <li>
                  <a
                    href="#quem-somos"
                    className="hover:underline transition-all"
                  >
                    Quem somos
                  </a>
                </li>
                <li>
                  <a
                    href="#contatos"
                    className="hover:underline transition-all"
                  >
                    Contatos
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex gap-4 md:justify-start">
              <a
                href="mailto:contato@glicareapp.com.br?subject=Contato Glicare&body=Olá equipe Glicare,%0D%0A%0D%0ADescreva seu problema:"
                className="hover:opacity-80 transition-opacity"
                aria-label="Telefone"
              >
                <FiMail className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                aria-label="WhatsApp"
              >
                <FaWhatsapp className="w-5 h-5" />
              </a>
              <a
                href="mailto:suporte@glicareapp.com.br?subject=Suporte Glicare&body=Olá equipe Glicare,%0D%0A%0D%0ADescreva seu problema:"
                className="hover:opacity-80 transition-opacity"
                aria-label="Email"
              >
                <FiAlertCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
