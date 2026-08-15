import Icon from "./Icon";
import Reveal from "./Reveal";

const PHARMACIE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDXOdm0udLCQi_HwX4MxhvuqtKkZKeC9BWDG465KFydg5f0mus15yvDlEY5Ka61PLgtBoVYaBCKgU5AvDnmR6AvGDBLV55H7qbOAPOZbQT0BcaaRZq5VP3riQJFBKucDkuzhFOcJA6tV-lX3YC_N2f6JDq4KX_4LOUZujKdgVe9hSFuP7ti-ODFavg77tlEdXC2SbmBPx_PWs3UtB9JEjVhg3SB-c-hBcCOs5IuSDsWxvxzma7ceTop";

const INNOVATION_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA6cF4xhREiZsxVsimM77vNumsI5VBn47gjnK3hNpp4wW408ibMt1jSN_mn7qpin4p3o6BBUp8ar_nAoVw-BwLcycD0TTNd51zwsV9Y6cZtfRwremU2JVKA2VmU1RORH3Dg2pQ3pw6pw37Gj7rmEiajuEeHTdmLQC5cQcnVm2vdz5eoDF6Fntamf7WWxF-rfRR_Y2dU8BHxLzx6h4-UHb5Tt_gMxUXsW9q-cr1m5t9F7BJ-y9aK_KNw";

export default function PolesSection() {
  return (
    <section
      id="poles"
      className="py-section-padding bg-background dark:bg-on-surface relative z-10 scroll-mt-20"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface mb-4">
              Nos Pôles d'Excellence
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant max-w-2xl mx-auto">
              Une approche globale et intégrée pour répondre à tous vos besoins
              de santé, avec la rigueur des standards internationaux.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-gutter">
          {/* Card 1: Pharmacie du 24 (large spanning) */}
          <div
            id="pharmacie"
            className="lg:col-span-8 bg-surface dark:bg-inverse-surface rounded-[24px] overflow-hidden depth-1 transition-all duration-300 group relative border border-outline-variant/30 dark:border-outline/20 flex flex-col md:flex-row h-full min-h-[300px] scroll-mt-24"
          >
            <div className="absolute inset-0 kuba-pattern opacity-[0.03] pointer-events-none"></div>
            <div className="md:w-1/2 p-8 flex flex-col justify-center relative z-10">
              <div className="w-12 h-12 rounded-full bg-munganga-crimson/10 flex items-center justify-center mb-6">
                <Icon
                  name="local_pharmacy"
                  size={24}
                  filled
                  className="text-munganga-crimson"
                />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface mb-3 group-hover:text-primary dark:group-hover:text-inverse-primary transition-colors">
                Pharmacie du 24
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mb-6">
                Située au cœur de la Gombe, nous offrons une disponibilité
                24h/24 et 7j/7 avec des produits pharmaceutiques certifiés de la
                plus haute qualité.
              </p>
              <a
                href="#"
                className="inline-flex items-center text-munganga-crimson font-label-md text-label-md uppercase hover:underline underline-offset-4 mt-auto"
              >
                Voir nos sites{" "}
                <Icon name="arrow_forward" size={16} className="ml-1" />
              </a>
            </div>
            <div className="md:w-1/2 relative h-48 md:h-auto overflow-hidden">
              <img
                src={PHARMACIE_IMG}
                alt="Intérieur moderne d'une pharmacie à Kinshasa, un pharmacien assiste un client"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-surface dark:from-inverse-surface to-transparent md:block hidden"></div>
            </div>
          </div>

          {/* Card 2: Soins de proximité */}
          <div className="lg:col-span-4 bg-primary text-white rounded-[24px] p-8 overflow-hidden depth-1 transition-all duration-300 group relative flex flex-col h-full min-h-[300px]">
            <div className="absolute top-0 right-0 p-4 opacity-20 group-hover:scale-110 transition-transform duration-500">
              <Icon name="stethoscope" size={80} filled />
            </div>
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6 relative z-10 backdrop-blur-sm">
              <Icon name="personal_injury" size={24} />
            </div>
            <h3 className="font-headline-md text-headline-md mb-3 relative z-10">
              Soins de proximité
            </h3>
            <p className="font-body-md text-body-md text-primary-fixed mb-6 relative z-10">
              Amener les médecins et les soins directement dans vos foyers, pour
              un confort et un suivi optimal.
            </p>
            <a
              href="#"
              className="inline-flex items-center text-white font-label-md text-label-md uppercase hover:underline underline-offset-4 mt-auto relative z-10"
            >
              En savoir plus{" "}
              <Icon name="arrow_forward" size={16} className="ml-1" />
            </a>
          </div>

          {/* Card 3: Santé numérique */}
          <div className="lg:col-span-5 bg-surface dark:bg-inverse-surface rounded-[24px] p-8 overflow-hidden depth-1 transition-all duration-300 group border border-outline-variant/30 dark:border-outline/20 flex flex-col h-full">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
              <Icon name="devices" size={24} filled className="text-primary" />
            </div>
            <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface mb-3 group-hover:text-primary dark:group-hover:text-inverse-primary transition-colors">
              Santé numérique
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant mb-6">
              Transformation digitale des soins : dossiers patients
              électroniques, téléconsultation et suivi en temps réel.
            </p>
          </div>

          {/* Card 4: Innovation */}
          <div className="lg:col-span-7 bg-surface dark:bg-inverse-surface rounded-[24px] overflow-hidden depth-1 transition-all duration-300 group relative border border-outline-variant/30 dark:border-outline/20 flex flex-col md:flex-row h-full">
            <div className="md:w-5/12 relative h-48 md:h-auto overflow-hidden">
              <img
                src={INNOVATION_IMG}
                alt="Technicienne de laboratoire utilisant un équipement de diagnostic numérique"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="md:w-7/12 p-8 flex flex-col justify-center bg-surface dark:bg-inverse-surface relative z-10">
              <div className="absolute inset-0 kuba-pattern opacity-[0.03] pointer-events-none"></div>
              <div className="w-12 h-12 rounded-full bg-munganga-crimson/10 flex items-center justify-center mb-6">
                <Icon name="biotech" size={24} filled className="text-munganga-crimson" />
              </div>
              <h3 className="font-headline-md text-headline-md text-on-surface dark:text-inverse-on-surface mb-3 group-hover:text-munganga-crimson transition-colors">
                Innovation
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant dark:text-surface-variant">
                Le développement continu de solutions de santé spécifiquement
                adaptées aux défis et réalités de la RDC.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
