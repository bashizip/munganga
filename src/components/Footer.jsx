import Icon from "./Icon";

const FOOTER_LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD9POQwj8SNIKgwJFj04qiSdwHr1ygfwJg6zj6Gv2mWvi4o9SkTwS7HSVann4GmrwXeybrHYW9CtIQo8a6NjFgRGWaY4sxMoVJjFBCvK2Cv06pS6SD8uSvzEpyaMWxDdWvHo0AQGOSeoglWUGF1ntWoC9f_IjT1ctK6zrDlt8poPcjBpwoGjA2WphRyNdWDdSSC2LH0LrTM0CrLio7NTyL4nO1IAi-ni1S1ZQ3qFFG3etHn6Oz0tK_AwXiiu2jW_1jmig";

const LEGAL_LINKS = [
  "Mentions Légales",
  "Politique de Confidentialité",
  "Conditions d'Utilisation",
];

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-surface-container-highest dark:bg-inverse-surface w-full rounded-t-xl border-t border-outline-variant dark:border-outline/20 mt-section-padding">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-stack-lg px-margin-mobile md:px-margin-desktop py-section-padding max-w-container-max mx-auto">
        {/* Brand column */}
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-2">
            <img
              src={FOOTER_LOGO_URL}
              alt="Logo Groupe Munganga"
              className="h-10 object-contain"
            />
          </div>
          <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">
            La santé moderne, accessible et proche de vous en RDC.
          </p>
        </div>

        {/* Legal links */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface uppercase font-bold mb-2">
            Légal
          </h4>
          {LEGAL_LINKS.map((label) => (
            <a
              key={label}
              href="#"
              className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-all underline-offset-4 hover:underline focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm outline-none"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Contact */}
        <div className="flex flex-col gap-3">
          <h4 className="font-label-md text-label-md text-on-surface dark:text-inverse-on-surface uppercase font-bold mb-2">
            Contact
          </h4>
          <span className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant flex items-center gap-2">
            <Icon name="location_on" size={16} />
            Gombe, Kinshasa
          </span>
          <a
            href="tel:+243000000000"
            className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-all underline-offset-4 hover:underline flex items-center gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm outline-none"
          >
            <Icon name="call" size={16} />
            +243 000 000 000
          </a>
          <a
            href="mailto:contact@munganga.cd"
            className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant hover:text-primary dark:hover:text-inverse-primary transition-all underline-offset-4 hover:underline flex items-center gap-2 focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-sm outline-none"
          >
            <Icon name="mail" size={16} />
            contact@munganga.cd
          </a>
        </div>

        {/* Trust badge / social */}
        <div className="flex flex-col gap-3 md:items-end justify-start">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-surface dark:bg-white/10 rounded-lg border border-outline-variant/30 dark:border-outline/20 mb-2">
            <Icon
              name="security"
              size={20}
              filled
              className="text-munganga-crimson"
            />
            <span className="font-label-md text-[10px] uppercase text-on-surface dark:text-inverse-on-surface">
              Données Sécurisées
            </span>
          </div>
          <div className="flex gap-4 mt-2">
            <a
              href="#"
              aria-label="Partager"
              className="w-8 h-8 rounded-full bg-surface-variant dark:bg-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors text-on-surface-variant dark:text-surface-variant"
            >
              <Icon name="share" size={18} />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright banner */}
      <div className="border-t border-outline-variant/30 dark:border-outline/20 py-4 px-margin-mobile md:px-margin-desktop text-center">
        <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant text-[12px]">
          © {year} Groupe Munganga S.A.R.L. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
