import { useState } from 'react';

const content = {
  fr: {
    name: 'Ndeye Mbar Coulibaly',
    title: 'Développeuse Fullstack Web & Data',
    intro: `Je suis une développeuse fullstack passionnée, spécialisée dans la création d’applications web modernes et performantes. Mon expertise couvre React, Next.js, Node.js, Django, Tailwind CSS, PostgreSQL et AWS.`,
    projectsTitle: 'Projets sélectionnés',
    skillsTitle: 'Compétences clés',
    contact: 'Me contacter',
    language: 'Langue',
    switchLang: 'English'
  },
  en: {
    name: 'Ndeye Mbar Coulibaly',
    title: 'Fullstack Web & Data Developer',
    intro: `I’m a passionate fullstack developer specialized in building modern, performant web applications. My stack includes React, Next.js, Node.js, Django, Tailwind CSS, PostgreSQL and AWS.`,
    projectsTitle: 'Selected Projects',
    skillsTitle: 'Key Skills',
    contact: 'Contact Me',
    language: 'Language',
    switchLang: 'Français'
  }
};

export default function Portfolio() {
  const [lang, setLang] = useState('fr');
  const t = content[lang];

  return (
    <main className="p-6 max-w-4xl mx-auto font-sans">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">{t.name}</h1>
        <button
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          className="text-sm text-blue-600 hover:underline"
        >
          {t.switchLang}
        </button>
      </div>

      <h2 className="text-lg text-gray-600 mb-4">{t.title}</h2>
      <p className="mb-6 text-justify text-gray-800 leading-relaxed">{t.intro}</p>

      <section>
        <h3 className="text-xl font-semibold mb-2">{t.projectsTitle}</h3>
        <ul className="list-disc list-inside space-y-1">
          <li>EMB Services: Gestion de stock (Next.js, Node.js, Prisma, AWS)</li>
          <li>Dashboard Bitcoin temps réel (React, FastAPI, Kafka)</li>
          <li>Reconnaissance faciale (Python, CNN, TensorFlow)</li>
          <li>Outils internes LiveOps – Ubisoft (React, Node, Grafana)</li>
        </ul>
      </section>

      <section className="mt-6">
        <h3 className="text-xl font-semibold mb-2">{t.skillsTitle}</h3>
        <p className="text-gray-700">
          React.js, Next.js, TypeScript, Node.js, Django, FastAPI, PostgreSQL, MongoDB, AWS (EC2, S3, RDS), Git, CI/CD, Tailwind, Docker
        </p>
      </section>

      <footer className="mt-10 border-t pt-4">
        <p className="text-sm text-gray-600">{t.contact}: ndeyembarcoulibaly@gmail.com</p>
      </footer>
    </main>
  );
}
