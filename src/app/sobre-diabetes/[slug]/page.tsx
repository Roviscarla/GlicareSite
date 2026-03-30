import React from "react";
import Link from "next/link";

type DiabetesContent = {
  title: string;
  whatIsIt: string;
  treatment: string;
  symptoms: {
    title: string;
    items: string[];
    text?: string;
  };
  hasCure: {
    title: string;
    text: string;
  };
  diagnosis: {
    title: string;
    text: string;
    items?: string[];
  };
};

const diabetesContent: { [key: string]: DiabetesContent } = {
  "diabetes-tipo-1": {
    title: "Diabetes tipo 1",
    whatIsIt:
      "Diabetes é uma doença crônica causada por um defeito da produção ou má utilização da insulina pelo corpo, o que causa aumento dos níveis de glicose (açúcar) no sangue. Para gerar energia para o corpo, a glicose precisa 'entrar'; nas células (músculos, coração, olhos, etc), e a insulina 'abre a porta' da célula, permitindo a entrada da glicose para gerar energia. Se não há insulina ou esta não funciona adequadamente, não há entrada de glicose nas células e os níveis no sangue ficam altos, é o que chamamos de hiperglicemia.",
    treatment:
      "É sempre tratado com insulina, planejamento alimentar e atividades físicas para ajudar a controlar o nível de glicose no sangue. Alguns médicos também podem solicitar medicamentos via oral, dependendo da necessidade de cada caso.",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: [
        "Sede constante",
        "Fome frequente",
        "Vontade de urinar diversas vezes ao dia",
        "Perda de peso",
        "Cansaço e irritabilidade",
        "Náusea e vômito",
        "Mudanças de humor",
        "Fraqueza",
        "Fadiga",
      ],
    },
    hasCure: {
      title: "O diabetes tipo 1 tem cura ?",
      text: "O diagnóstico do diabetes tipo 1 é feito geralmente na infância ou adolescência. Não existe ainda cura para o diabetes tipo 1, porém existe tratamento, e ele é feito por meio de aplicação de insulina diariamente, a fim de repor a insulina que o corpo não produz mais, conforme a orientação do médico.",
    },
    diagnosis: {
      title: "Quem está sujeito ao Diabetes Tipo 1 ?",
      text: "O fator de risco é basicamente genético. Se você tem um parente próximo com essa doença, as chances de você ter também são consideravelmente maiores.",
    },
  },
  "diabetes-tipo-2": {
    title: "Diabetes tipo 2",
    whatIsIt:
      "Acontece quando o organismo não consegue utilizar a insulina que produz adequadamente ou não produz insulina suficiente para controlar a taxa de glicemia. Cerca de 90% das pessoas com diabetes apresentam o tipo 2, que se manifesta mais frequentemente em adultos.",
    treatment:
      "O tratamento pode envolver: Mudanças no estilo de vida, como atividade física e dieta equilibrada, medicamentos por via oral e insulina, em alguns casos.",
    symptoms: {
      title: "Sintomas mais comuns:",
      text: "Na maioria dos casos, o diabetes tipo 2 não apresenta sintomas. Quando a glicose está muito alta, podem surgir:",
      items: [
        "Sede constante",
        "Fome frequente",
        "Formigamento nos pés e mãos",
        "Vontade de urinar diversas vezes",
        "Infecções frequentes na bexiga, rins e pele",
        "Feridas que demoram para cicatrizar",
        "Visão embaçada",
      ],
    },
    hasCure: {
      title: "O diabetes tipo 2 tem cura ?",
      text: "O diabetes tipo 2 não tem cura, mas pode ser controlado e em alguns casos é possível alcançar remissão, quando a glicose se mantém em níveis normais sem medicação. Isso geralmente acontece com mudanças no estilo de vida, como alimentação adequada, atividade física e perda de peso.",
    },
    diagnosis: {
      title: "Quem está sujeito ao Diabetes Tipo 2 ?",
      text: "Fatores de risco incluem:",
      items: [
        "Diagnóstico de pré-diabetes",
        "Pressão alta",
        "Colesterol alto ou triglicérides alterados",
        "Estar acima do peso, especialmente gordura abdominal",
        "Pai ou irmão com diabetes",
        "Doença renal crônica",
        "Mãe de bebê com mais de 4 kg ou que teve diabetes gestacional",
      ],
    },
  },
  "diabetes-gestacional": {
    title: "Diabetes gestacional",
    whatIsIt:
      "O diabetes gestacional é uma condição temporária que acontece durante a gravidez. Afeta aproximadamente 15% das gestantes e implica risco aumentado de desenvolvimento posterior de diabetes para a mãe e o bebê.",
    treatment:
      "O controle da doença é feito por meio da aplicação diária de insulina e monitoramento constante da glicose, sempre seguindo as orientações médicas.",
    symptoms: {
      title: "Sintomas mais comuns:",
      text: "O diabetes gestacional, em muitos casos, pode ser assintomático, sendo identificado nos exames pré-natais. Os sintomas gerais do diabetes incluem:",
      items: [
        "Sede excessiva",
        "Fome frequente",
        "Vontade de urinar várias vezes ao dia",
      ],
    },
    hasCure: {
      title: "O diabetes tipo 1 tem cura?",
      text: "O diagnóstico costuma acontecer ainda na infância ou adolescência. Atualmente, não existe cura, mas há tratamento eficaz. O uso de insulina diariamente é essencial para repor o hormônio que o corpo deixou de produzir, garantindo uma vida saudável e ativa.",
    },
    diagnosis: {
      title: "Quem está sujeito ao Diabetes Gestacional",
      text: "Qualquer gestante pode desenvolver diabetes gestacional, mas alguns fatores aumentam significativamente o risco, como:",
      items: [
        "Histórico familiar de diabetes",
        "Excesso de peso antes da gravidez",
        "Gestação anterior com diabetes gestacional",
        "Ter tido bebê com mais de 4 kg",
      ],
    },
  },
};

export default async function DiabetesTypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = diabetesContent[slug];

  if (!content) {
    return (
      <div className="max-w-4xl mx-auto py-12 px-4 ">
        <h1 className="text-3xl font-bold text-center">
          Tipo de Diabetes não encontrado
        </h1>
        <Link
          href="/sobre-diabetes"
          className="block text-center text-blue-600 hover:underline mt-4"
        >
          &lt; Voltar para a lista
        </Link>
      </div>
    );
  }

  return (
    <section className="bg-primary-gray mt-24 py-12 px-4 md:px-8 lg:px-16">
      <div className="max-w-4xl bg-header-background rounded-xl p-6 sm:p-8  shadow-lg max-w-[1024px] mx-auto mt-8">
        <article>
          <Link
            href="/sobre-diabetes"
            className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-4"
          >
            &lt; Voltar
          </Link>

          <h1 className="text-3xl font-bold text-gray-800 mb-6">
            {content.title}
          </h1>

          <div className="space-y-6 text-gray-700">
            <div>
              <h3 className="text-xl font-semibold mb-2">O que é?</h3>
              <p>{content.whatIsIt}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tratamento:</h3>
              <p>{content.treatment}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {content.symptoms.title}
              </h3>
              <p className="mb-4">{content.symptoms.text}</p>
              <ul className="list-disc list-inside space-y-1">
                {content.symptoms.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {content.hasCure.title}
              </h3>
              <p>{content.hasCure.text}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                {content.diagnosis.title}
              </h3>
              <p>{content.diagnosis.text}</p>
              {content.diagnosis.items && (
                <ul className="list-disc list-inside space-y-1 mt-4">
                  {content.diagnosis.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
