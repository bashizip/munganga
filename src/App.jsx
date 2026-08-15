import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import PolesSection from "./components/PolesSection";
import DoktaSection from "./components/DoktaSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

function getInitialDark() {
  try {
    return localStorage.getItem("theme") === "dark";
  } catch {
    return false;
  }
}

export default function App() {
  const [dark, setDark] = useState(getInitialDark);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
    document.documentElement.classList.toggle("light", !dark);
    try {
      localStorage.setItem("theme", dark ? "dark" : "light");
    } catch {
      /* localStorage unavailable (private mode) — theme just won't persist */
    }
  }, [dark]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header dark={dark} onToggleDark={() => setDark((d) => !d)} />
      <main className="pt-[80px]">
        <Hero />
        <PolesSection />
        <DoktaSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
