import { useState } from "react";
import Icon from "./Icon";
import Reveal from "./Reveal";

const CONTACT_ITEMS = [
  {
    icon: "location_on",
    title: "Adresse",
    lines: ["Gombe, Kinshasa", "République Démocratique du Congo"],
  },
  {
    icon: "call",
    title: "Téléphone",
    lines: ["+243 000 000 000"],
    href: "tel:+243000000000",
  },
  {
    icon: "mail",
    title: "Email",
    lines: ["contact@munganga.cd"],
    href: "mailto:contact@munganga.cd",
  },
  {
    icon: "schedule",
    title: "Horaires",
    lines: ["Pharmacie du 24 : ouverte 24h/24, 7j/7"],
  },
];

const INITIAL_FORM = { name: "", email: "", phone: "", message: "" };

const inputClass =
  "w-full rounded-xl border border-outline-variant dark:border-outline/30 bg-surface dark:bg-inverse-surface px-4 py-3 text-body-md text-on-surface dark:text-inverse-on-surface placeholder:text-on-surface-variant/50 dark:placeholder:text-surface-variant/50 focus:border-primary focus:ring-2 focus:ring-primary/30 focus:outline-none transition-colors";

const labelClass =
  "block font-label-md text-label-md uppercase text-on-surface-variant dark:text-surface-variant mb-2";

export default function ContactSection() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [sent, setSent] = useState(false);

  const update =
    (field) =>
    (event) =>
      setForm((f) => ({ ...f, [field]: event.target.value }));

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
    setForm(INITIAL_FORM);
  };

  return (
    <section
      id="contact"
      className="py-section-padding bg-background dark:bg-on-surface relative z-10 scroll-mt-20"
    >
      <div className="max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="font-headline-lg text-headline-lg text-on-surface dark:text-inverse-on-surface mb-4">
              Contactez-nous
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant dark:text-surface-variant max-w-2xl mx-auto">
              Prenez rendez-vous ou posez-nous vos questions — notre équipe vous
              répond rapidement.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-gutter">
          {/* Contact info */}
          <div className="space-y-4">
            {CONTACT_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-surface dark:bg-inverse-surface rounded-2xl p-5 border border-outline-variant/30 dark:border-outline/20 depth-1"
              >
                <div className="w-12 h-12 rounded-full bg-munganga-crimson/10 flex items-center justify-center shrink-0">
                  <Icon
                    name={item.icon}
                    size={24}
                    filled
                    className="text-munganga-crimson"
                  />
                </div>
                <div>
                  <h3 className="font-label-md text-label-md uppercase text-on-surface-variant dark:text-surface-variant mb-1">
                    {item.title}
                  </h3>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a
                        key={line}
                        href={item.href}
                        className="block font-body-md text-body-md text-on-surface dark:text-inverse-on-surface hover:text-primary dark:hover:text-inverse-primary transition-colors"
                      >
                        {line}
                      </a>
                    ) : (
                      <p
                        key={line}
                        className="font-body-md text-body-md text-on-surface dark:text-inverse-on-surface"
                      >
                        {line}
                      </p>
                    )
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Contact form */}
          <div className="bg-surface dark:bg-inverse-surface rounded-[24px] p-8 border border-outline-variant/30 dark:border-outline/20 depth-1 h-fit">
            {sent ? (
              <div className="flex items-start gap-4 rounded-2xl border border-green-600/30 bg-green-50 dark:bg-green-900/20 p-5">
                <Icon
                  name="check_circle"
                  size={24}
                  filled
                  className="text-green-600 dark:text-green-400 shrink-0"
                />
                <div>
                  <p className="font-headline-sm text-[15px] text-on-surface dark:text-inverse-on-surface">
                    Merci ! Votre message a bien été envoyé.
                  </p>
                  <p className="font-body-sm text-on-surface-variant dark:text-surface-variant mt-1">
                    Notre équipe vous répondra dans les plus brefs délais.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className={labelClass}>
                      Nom complet
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={update("name")}
                      placeholder="Votre nom"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className={labelClass}>
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={update("email")}
                      placeholder="vous@exemple.cd"
                      className={inputClass}
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={form.phone}
                    onChange={update("phone")}
                    placeholder="+243 ..."
                    className={inputClass}
                  />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Décrivez votre besoin ou votre demande de rendez-vous..."
                    className={`${inputClass} resize-y`}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center justify-center bg-munganga-crimson text-white font-headline-sm text-[16px] px-8 py-4 rounded-xl hover:bg-secondary transition-all duration-300 depth-2 hover:-translate-y-1 w-full sm:w-auto"
                >
                  <Icon name="send" size={20} className="mr-2" />
                  Envoyer le message
                </button>
                <p className="font-body-sm text-body-sm text-on-surface-variant dark:text-surface-variant">
                  Formulaire de démonstration : reliez-le à votre backend ou à
                  un service d'envoi d'emails pour la production.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
