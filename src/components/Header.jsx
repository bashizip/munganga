import { useEffect, useState } from "react";
import Icon from "./Icon";

const LOGO_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCH4TH6b0txufupGvo2l74t-7RvzkD4fftcYNTW76K1QoW8bN8DbS4Y0IANrSv6Ro1WNgbA2BhecNBATuIeZ78UhT9hm2obwTe8j_TMBHoq3SGJjLp4iPsCCqAyNiMjwieLPF-OodALc_0mrGW9577atMtNDpZQCcttnPfq0ufNA0qolOZqDBmv2ZZ3_aCSsFPFiT4SGnNHXrZE2Z2lZldJPavF8DAA5ftc210RmYitrOAcHJzvZo-B-MIfFz4VyPdxiw";

const NAV_LINKS = [
  { href: "#accueil", label: "Accueil" },
  { href: "#poles", label: "Nos Pôles" },
  { href: "#pharmacie", label: "Pharmacie du 24" },
  { href: "#dokta", label: "Dokta na Ndaku" },
  { href: "#contact", label: "Contact" },
];

export default function Header({ dark, onToggleDark }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("accueil");

  // Scroll-spy: highlight the nav link of the section currently in view.
  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    const onScroll = () => {
      const pos = window.scrollY + 140;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= pos) current = id;
      }
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 80
      ) {
        current = "contact";
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href) => active === href.slice(1);

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/95 dark:bg-on-surface/95 backdrop-blur-md shadow-sm premium-gold-line">
      <div className="flex justify-between items-center w-full px-margin-mobile md:px-margin-desktop py-4 max-w-container-max mx-auto">
        {/* Brand Logo */}
        <a href="#accueil" className="flex items-center gap-2 group" aria-label="Groupe Munganga — Accueil">
          <img
            src={LOGO_URL}
            alt="Logo Groupe Munganga"
            className="h-10 object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Navigation principale">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={
                isActive(link.href)
                  ? "text-primary dark:text-inverse-primary font-bold border-b-2 border-primary pb-1 font-label-md text-label-md uppercase hover:opacity-80 transition-opacity"
                  : "text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md uppercase hover:text-primary dark:hover:text-inverse-primary transition-colors duration-200"
              }
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Trailing actions (desktop) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
            className="p-2 rounded-full text-on-surface-variant dark:text-surface-variant hover:bg-surface-variant/60 dark:hover:bg-white/10 transition-colors"
          >
            <Icon name={dark ? "light_mode" : "dark_mode"} size={22} />
          </button>
          <a
            href="#dokta"
            className="inline-flex items-center justify-center bg-munganga-crimson text-white font-label-md text-label-md px-6 py-3 rounded-full hover:bg-secondary-container hover:text-white transition-all duration-300 depth-2 hover:scale-105 group"
          >
            <Icon
              name="medical_services"
              size={18}
              filled
              className="mr-2 group-hover:animate-pulse"
            />
            Accéder à Dokta na Ndaku
          </a>
        </div>

        {/* Mobile actions + menu toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={onToggleDark}
            aria-label={dark ? "Activer le mode clair" : "Activer le mode sombre"}
            className="p-2 rounded-full text-primary dark:text-inverse-primary hover:bg-surface-variant dark:hover:bg-white/10 transition-colors"
          >
            <Icon name={dark ? "light_mode" : "dark_mode"} size={24} />
          </button>
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden text-primary dark:text-inverse-primary p-2 hover:bg-surface-variant dark:hover:bg-white/10 rounded-lg transition-colors"
          >
            <Icon name={menuOpen ? "close" : "menu"} size={28} />
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-surface dark:bg-on-surface border-t border-outline-variant dark:border-outline/20 shadow-lg">
          <nav className="flex flex-col p-4 gap-4" aria-label="Navigation mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={
                  isActive(link.href)
                    ? "text-primary dark:text-inverse-primary font-bold font-label-md text-label-md uppercase border-l-4 border-primary pl-4 py-2 bg-primary/5 rounded-r-lg"
                    : "text-on-surface-variant dark:text-surface-variant font-medium font-label-md text-label-md uppercase pl-4 py-2 hover:bg-surface-variant dark:hover:bg-white/10 rounded-lg transition-colors"
                }
              >
                {link.label}
              </a>
            ))}
            <a
              href="#dokta"
              onClick={() => setMenuOpen(false)}
              className="mt-4 inline-flex items-center justify-center bg-munganga-crimson text-white font-label-md text-label-md px-6 py-3 rounded-full depth-2"
            >
              Accéder à Dokta na Ndaku
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
