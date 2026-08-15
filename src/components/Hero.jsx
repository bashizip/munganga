import Icon from "./Icon";
import Reveal from "./Reveal";

const HERO_BG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDDDPCbu5tUsQQp6YVnvcs99jA1C24fYa0u2ELHhR-k79y_moTjDnOt0dcwYZRyAOXYX6RXl4qaq3Ee_A9MjS_2sIYeaMxDa8tNgKN4R4P5HwwXz-3TeHQ-AMXghqQK3cAsYzGdJ4F2bJpn-bvW5S9hMKQOb-tLHyiUV6V7hgpboYfQv7TxSO1eVOhgPvmWr-yD2In0v95mqLHdyRLRNCniFL5-ixjSCz9F4QzllmnfBNNu0VyOP951";

export default function Hero() {
  return (
    <section
      id="accueil"
      className="relative w-full min-h-[90vh] flex items-center bg-surface-container-lowest dark:bg-[#1b2126] overflow-hidden"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={HERO_BG}
          alt="Clinique moderne et lumineuse à Kinshasa, avec une médecin congolaise qui consulte une tablette"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-surface/95 via-surface/80 to-surface/20 dark:from-on-surface/95 dark:via-on-surface/80 dark:to-on-surface/20"></div>
        <div className="absolute inset-0 kuba-pattern opacity-40"></div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding">
        <div className="max-w-2xl">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <Icon name="verified" size={16} filled className="text-primary" />
              <span className="font-label-md text-label-md text-primary uppercase">
                Excellence Médicale en RDC
              </span>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display-lg text-display-lg text-on-surface dark:text-inverse-on-surface mb-6">
              La santé moderne,{" "}
              <span className="text-primary dark:text-inverse-primary block mt-2">
                accessible et proche de vous en RDC.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant mb-10 leading-relaxed">
              Du cœur de Gombe à toute la communauté congolaise, Groupe Munganga
              révolutionne votre parcours de soins grâce à l'innovation et
              l'expertise humaine.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#dokta"
                className="inline-flex items-center justify-center bg-munganga-crimson text-white font-headline-sm text-[16px] px-8 py-4 rounded-xl hover:bg-secondary transition-all duration-300 depth-2 hover:-translate-y-1 group"
              >
                <Icon name="home_health" size={20} filled className="mr-2" />
                Dokta na Ndaku
                <Icon
                  name="arrow_forward"
                  size={20}
                  className="ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                />
              </a>
              <a
                href="#poles"
                className="inline-flex items-center justify-center bg-transparent border-2 border-primary text-primary dark:text-inverse-primary font-headline-sm text-[16px] px-8 py-4 rounded-xl hover:bg-primary/5 transition-all duration-300"
              >
                Découvrir nos services
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Decorative medical cross */}
      <div className="absolute right-10 bottom-10 hidden lg:block opacity-10 pointer-events-none text-primary">
        <Icon name="medical_services" size={300} filled />
      </div>
    </section>
  );
}
