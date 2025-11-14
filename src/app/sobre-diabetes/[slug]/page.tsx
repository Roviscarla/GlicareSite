import React from "react";
import Link from "next/link";

type DiabetesContent = {
  title: string;
  whatIsIt: string;
  treatment: string;
  symptoms: {
    title: string;
    items: string[];
  };
  hasCure: {
    title: string;
    text: string;
  };
  diagnosis: {
    title: string;
    text: string;
  };
};

const diabetesContent: { [key: string]: DiabetesContent } = {
  "diabetes-tipo-1": {
    title: "Diabetes tipo 1",
    whatIsIt:
      "O diabetes tipo 1 é uma doença autoimune em que o sistema imunológico ataca as células do pâncreas responsáveis pela produção de insulina, fazendo com que ele pare de produzi-la.",
    treatment:
      "O controle da doença é feito por meio da aplicação diária de insulina e monitoramento constante da glicose, sempre seguindo as orientações médicas.",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: [
        "Sede excessiva",
        "Fome frequente",
        "Vontade de urinar várias vezes ao dia",
        "Perda de peso sem motivo aparente",
        "Cansaço e irritabilidade",
        "Fome e sede",
    
      ],
    },
    hasCure: {
      title: "O diabetes tipo 1 tem cura?",
      text: "O diagnóstico costuma acontecer ainda na infância ou adolescência. Atualmente, não existe cura, mas há tratamento eficaz. O uso de insulina diariamente é essencial para repor o hormônio que o corpo deixou de produzir, garantindo uma vida saudável e ativa.",
    },
    diagnosis: {
      title:
        "O diagnóstico é feito por meio de exames de sangue que medem a glicose, como:",
      text: "Glicemia de jejum, teste oral de tolerância à glicose e hemoglobina glicada são alguns dos exames utilizados.",
    },
  },
  "diabetes-tipo-2": {
    title: "Diabetes tipo 2",
    whatIsIt: "Texto sobre o que é Diabetes Tipo 2...",
    treatment:
      "O controle da doença é feito por meio da aplicação diária de insulina e monitoramento constante da glicose, sempre seguindo as orientações médicas.",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: [
        "Sede excessiva",
        "Fome frequente",
        "Vontade de urinar várias vezes ao dia",
        "Perda de peso sem motivo aparente",
        "Cansaço e irritabilidade",
      ],
    },
    hasCure: {
      title: "O diabetes tipo 1 tem cura?",
      text: "O diagnóstico costuma acontecer ainda na infância ou adolescência. Atualmente, não existe cura, mas há tratamento eficaz. O uso de insulina diariamente é essencial para repor o hormônio que o corpo deixou de produzir, garantindo uma vida saudável e ativa.",
    },
    diagnosis: {
      title:
        "O diagnóstico é feito por meio de exames de sangue que medem a glicose, como:",
      text: "Glicemia de jejum, teste oral de tolerância à glicose e hemoglobina glicada são alguns dos exames utilizados.",
    },
  },
  "diabetes-gestacional": {
    title: "Diabetes gestacional",
    whatIsIt: "Texto sobre o que é Diabetes gestacional...",
    treatment:
      "O controle da doença é feito por meio da aplicação diária de insulina e monitoramento constante da glicose, sempre seguindo as orientações médicas.",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: [
        "Sede excessiva",
        "Fome frequente",
        "Vontade de urinar várias vezes ao dia",
        "Perda de peso sem motivo aparente",
        "Cansaço e irritabilidade",
      ],
    },
    hasCure: {
      title: "O diabetes tipo 1 tem cura?",
      text: "O diagnóstico costuma acontecer ainda na infância ou adolescência. Atualmente, não existe cura, mas há tratamento eficaz. O uso de insulina diariamente é essencial para repor o hormônio que o corpo deixou de produzir, garantindo uma vida saudável e ativa.",
    },
    diagnosis: {
      title:
        "O diagnóstico é feito por meio de exames de sangue que medem a glicose, como:",
      text: "Glicemia de jejum, teste oral de tolerância à glicose e hemoglobina glicada são alguns dos exames utilizados.",
    },
  },
  "pre-diabetes": {
    title: "Pré-diabetes",
    whatIsIt: "Texto sobre o que é Pré-diabetes...",
    treatment:
      "O controle da doença é feito por meio da aplicação diária de insulina e monitoramento constante da glicose, sempre seguindo as orientações médicas.",
    symptoms: {
      title: "Sintomas mais comuns:",
      items: [
        "Sede excessiva",
        "Fome frequente",
        "Vontade de urinar várias vezes ao dia",
        "Perda de peso sem motivo aparente",
        "Cansaço e irritabilidade",
      ],
    },
    hasCure: {
      title: "O diabetes tipo 1 tem cura?",
      text: "O diagnóstico costuma acontecer ainda na infância ou adolescência. Atualmente, não existe cura, mas há tratamento eficaz. O uso de insulina diariamente é essencial para repor o hormônio que o corpo deixou de produzir, garantindo uma vida saudável e ativa.",
    },
    diagnosis: {
      title:
        "O diagnóstico é feito por meio de exames de sangue que medem a glicose, como:",
      text: "Glicemia de jejum, teste oral de tolerância à glicose e hemoglobina glicada são alguns dos exames utilizados.",
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
      <div className="max-w-4xl mx-auto">
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
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
