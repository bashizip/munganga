import Icon from "./Icon";
import Reveal from "./Reveal";

const MOCKUP_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD2-pphihYxDs_aFVEcynTG-471kMHPN4KsyzSzqVnfzmeYcIypsF6SAiEERkiV8Y79bF7yrVa-LEXHKZfzHDRIYwdoO4jqCFiJdLACci4WY8YkkK38WJvzgEYVt6lVXuuARMMZ2peEk4njIu53pTkB1COR3lf5N8w9UQP8HLtUVLY6MWPvp3a4MejtT7YAaNxBxaZYIKGAYPhIXpwzNywpABrVO4Xx3XC8bMuokks89bDn4Wf2dIVe";

const FEATURES = [
  {
    icon: "video_camera_front",
    title: "Téléconsultation",
    text: "Consultez nos spécialistes en ligne.",
  },
  {
    icon: "home",
    title: "Visites à domicile",
    text: "Des médecins chez vous, rapidement.",
    filled: true,
  },
  {
    icon: "medication",
    title: "Lien Pharmacie",
    text: "Ordonnances et livraison directe.",
  },
  {
    icon: "science",
    title: "Résultats Labo",
    text: "Accès sécurisé à vos analyses.",
  },
  {
    icon: "payments",
    title: "Paiements Mobile Money",
    text: "Transactions simples, rapides et sécurisées via M-Pesa, Airtel Money et Orange Money.",
    wide: true,
  },
];

export default function DoktaSection() {
  return (
    <section
      id="dokta"
      className="py-section-padding bg-inverse-surface relative overflow-hidden scroll-mt-20"
    >
      {/* Background effects */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>

      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-stack-lg lg:gap-20">
          {/* Content side */}
          <div className="lg:w-1/2">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface/10 border border-surface/20 mb-6 backdrop-blur-md">
                <Icon
                  name="star"
                  size={16}
                  filled
                  className="text-munganga-crimson"
                />
                <span className="font-label-md text-label-md text-inverse-on-surface uppercase tracking-wider">
                  Service Signature
                </span>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <h2 className="font-display-lg text-display-lg text-inverse-on-surface mb-6">
                Dokta na Ndaku - <br />
                <span className="text-munganga-crimson">
                  Votre santé à portée de main.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="font-body-lg text-body-lg text-surface-variant mb-10 leading-relaxed">
                Découvrez la plateforme de santé numérique tout-en-un du Groupe
                Munganga. Prenez le contrôle de votre parcours de soins sans
                quitter le confort de votre domicile.
              </p>
            </Reveal>

            {/* Icon features list */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
              {FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className={`flex items-start gap-4 ${
                    feature.wide ? "sm:col-span-2" : ""
                  }`}
                >
                  <div className="mt-1 w-10 h-10 rounded-full bg-munganga-crimson/30 flex items-center justify-center shrink-0">
                    <Icon
                      name={feature.icon}
                      size={20}
                      filled={feature.filled}
                      className="text-munganga-crimson"
                    />
                  </div>
                  <div>
                    <h4 className="font-headline-sm text-[16px] text-inverse-on-surface mb-1">
                      {feature.title}
                    </h4>
                    <p className="font-body-sm text-surface-variant">
                      {feature.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Big CTA */}
            <a
              href="https://doktanandaku.org"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center bg-munganga-crimson text-white font-headline-sm text-[18px] px-10 py-5 rounded-xl hover:bg-secondary transition-all duration-300 depth-2 hover:-translate-y-1 group"
            >
              <Icon name="calendar_month" size={24} className="mr-3" />
              Prendre rendez-vous
            </a>
          </div>

          {/* Visual side (app mockup) */}
          <div className="lg:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden depth-2 border-4 border-surface/10 aspect-[4/3] w-full">
              <img
                src={MOCKUP_IMG}
                alt="Mère congolaise souriante utilisant l'application Dokta na Ndaku sur son smartphone"
                className="w-full h-full object-cover"
              />
              {/* Floating UI element */}
              <div className="absolute bottom-6 left-6 right-6 bg-surface/90 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between shadow-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-munganga-crimson/20 flex items-center justify-center">
                    <Icon
                      name="check_circle"
                      size={24}
                      filled
                      className="text-munganga-crimson"
                    />
                  </div>
                  <div>
                    <p className="font-headline-sm text-[14px] text-on-surface m-0 leading-tight">
                      Rendez-vous confirmé
                    </p>
                    <p className="font-body-sm text-[12px] text-on-surface-variant m-0">
                      Dr. Kalala arrive dans 15 min
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
