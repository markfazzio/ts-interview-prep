"use client";

import { useContext } from "react";

import { Navbar } from "@/components/Navbar";
import { PageHeader } from "@/components/PageHeader";
import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { GlossarySection } from "@/sections/Glossary";
import SwitchTheme from "@/components/SwitchTheme";
import { useScrollSpy } from "@/hooks/use-scroll-spy";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleOnThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const ids = ["glossary"];
  const activeId = useScrollSpy(ids, 54); //

  return (
    <div className={`theme-${theme}`}>
      <main className="min-h-screen py-20 px-10">
        <Navbar
          activeId={activeId}
          className={theme === "light" ? "bg-gray-100" : "bg-green-900"}
        />
        <SwitchTheme
          checked={theme === "light" ? true : false}
          onChange={handleOnThemeChange}
        />
        <PageHeader />
        {/* sections */}
        <GlossarySection />
      </main>
    </div>
  );
}
