import DropDown from "@/app/components/ui/dropdown";
import Image from "next/image";
import IQuestions from "@/app/models/questions.interface";

const questionsToDoctor: IQuestions[] = [
  {
    question: "⏱ Monitoramento em Tempo Real",
    response:
      "Acompanhe a rotina de medições de glicose, medicamentos e hábitos dos seus pacientes diretamente pelo app.",
    id: 1,
  },
  {
    question: "🔔 Alertas Personalizados",
    response:
      "Personalize lembretes para seus pacientes sobre medicamentos, exames ou consultas.",
    id: 2,
  },
  {
    question: "📝 Questionário de Perfil Rápido",
    response:
      "Identifique o perfil de cada paciente com um questionário simples, mas completo, para orientar seu cuidado.",
    id: 3,
  },

  {
    question: "📤 Exportação de Dados Simplificada",
    response:
      "Gere relatórios em PDF com o historico completo do paciente para análises e consultas.",
    id: 4,
  },

  {
    question: "🆘 Botão de emergência",
    response:
      "Receba alertas imediatos se um paciente acionar o botão de emergência.",
    id: 6,
  },
];

export default function ToDoctors() {
  return (
    <section className="px-6 pt-6 lg:px-20 md:pt-32 lg:pt-16 xl:pb-4">
      <div className="mb-16">
        <h1 className="font-medium text-xl text-gray-dark pb-4 pl-4">
          Nosso aplicativo
        </h1>
        <p className="text-secondary-gray pl-4 text-lg pr-20 md:text-xl ">
          O Glicare é um aplicativo desenvolvido para simplificar o cuidado com
          o diabetes. Pacientes, médicos, nutricionistas e outros profissionais
          de saúde encontram aqui uma forma prática e acessível de acompanhar a
          evolução da doença, monitorar sintomas e promover mais qualidade de
          vida.
        </p>
      </div>
      <div className="bg-white rounded-3xl relative md:grid md:grid-cols-2">
        <span className="md:col-start-1"></span>
        <span className="hidden md:block md:absolute md:-top-8 md:left-16 md:mt-16 xl:mt-0">
          <Image
            src={"/image/smartphone-left.png"}
            width={365}
            height={692}
            alt="smartphone"
            className="md:w-[308px] md:h-[577px] lg:w-[308px] lg:h-[577px] xl:w-[365px] xl:h-[692px] xl:ml-16"
          />
        </span>

        <div className="lg:pr-2">
          <div className="pt-6 pl-6 pb-9 pr-14">
            <h2 className="font-medium text-2xl text-primary pb-4">
              Para profissionais da saúde
            </h2>
            <p className="text-secondary-gray pr-8 md:pr-4">
              O Glicare foi desenvolvido para{" "}
              <strong> ajudar médicos, nutricionistas</strong> e outros
              profissionais da saúde a monitorar seus pacientes de forma
              eficiente e personalizada.
            </p>
          </div>
          <div className="flex flex-col gap-4 px-6 pb-10">
            {questionsToDoctor.map(({ question, response, id }) => {
              return (
                <DropDown
                  key={id}
                  title={question}
                  description={response}
                  background="primary-gray"
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
