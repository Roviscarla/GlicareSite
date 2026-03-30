"use client";

import { useState, FormEvent } from "react";
import { IoMdArrowDropdown } from "react-icons/io";
import ModalWarning from "./ui/modal-warning";

const FormularioPreCadastro = () => {
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [areaInteresse, setAreaInteresse] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    if (!nome || !email || !areaInteresse) {
      alert("Por favor, preencha todos os campos.");
      setIsLoading(false);
      return;
    }

    try {
      const response = await fetch("/api/cadastro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, areaInteresse }),
      });

      if (!response.ok) {
        throw new Error("Houve um problema ao enviar seu cadastro.");
      }
      setModalMessage(
        `Obrigado por se cadastrar, ${nome}! Seus dados foram enviados com sucesso.`
      );
      setIsModalOpen(true);

      setNome("");
      setEmail("");
      setAreaInteresse("");
    } catch (error) {
      console.error(error);
      alert(`Erro: ${(error as Error).message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section
      id="junte-se"
      className="bg-gray-100 py-12 md:py-20 flex items-center justify-center mt-16"
    >
      <div className="w-full max-w-2xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Junte-se à comunidade
          </h2>
          <p className="text-gray-600 mt-2">
            Faça seu pré-cadastro e seja um dos primeiros a usar a plataforma
          </p>
        </div>

        <div className="bg-white p-8 rounded-xl shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="nome"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Nome completo
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome completo"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="seu@email.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out"
                required
              />
            </div>

            <div className="mb-8">
              <label
                htmlFor="areaInteresse"
                className="block text-gray-700 text-sm font-medium mb-2"
              >
                Área de interesse
              </label>
              <div className="relative">
                <select
                  id="areaInteresse"
                  value={areaInteresse}
                  onChange={(e) => setAreaInteresse(e.target.value)}
                  className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 transition duration-150 ease-in-out appearance-none"
                  required
                >
                  <option value="" disabled>
                    Selecione uma área
                  </option>
                  <option value="paciente">Sou paciente</option>
                  <option value="medico">Sou profissional da saúde</option>
                  <option value="cuidador">Sou cuidador / familiar</option>
                  <option value="outro">Outro</option>
                </select>
                <IoMdArrowDropdown className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none text-2xl" />
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
            >
              {isLoading ? "Enviando..." : "Fazer pré-cadastro"}
            </button>
          </form>
        </div>
      </div>

      <ModalWarning
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        message={modalMessage}
      />
    </section>
  );
};

export default FormularioPreCadastro;
