"use client";

import { useContext } from "react";
import {
  MainPage,
  Navbar,
  PageHeader,
  SwitchTheme,
  useScrollSpy,
} from "@markfazzio/docs-ui-components";

import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { GlossarySection } from "@/sections/Glossary";
import { TypesSection } from "@/sections/Types";
import { ArraysSection } from "@/sections/Arrays";
import { getSectionIdsArray } from "@/utils/section-utils";
import { InterfacesSection } from "@/sections/Interfaces";
import { ClassesSection } from "@/sections/Classes";
import { FunctionsSection } from "@/sections/Functions";
import { ModulesSection } from "@/sections/Modules";
import { SECTIONS } from "@/constants";

export default function Home() {
  const { theme, setTheme } = useContext(ThemeContext) as ThemeContextType;

  const handleOnThemeChange = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const ids = getSectionIdsArray();
  const activeId = useScrollSpy(ids, 54); //
  const appTitle = "TS Interview Prep";

  return (
    <div className={`theme-${theme}`}>
      <MainPage>
        <Navbar activeId={activeId} navItems={SECTIONS} theme={theme} />
        <SwitchTheme
          checked={theme === "light" ? true : false}
          onChange={handleOnThemeChange}
        />
        <PageHeader title={appTitle}>
          <p>
            Quick refresher/guide to TypeScript for all experience levels. This
            is by no means a comprehensive guide to TypeScript. For that,{" "}
            <a
              className="hover:underline font-semibold"
              href="https://www.typescriptlang.org/docs/handbook"
              target="_blank"
            >
              View the TypeScript Handbook
            </a>
            . Make sure to also check out:{" "}
            <a
              className="hover:underline font-semibold"
              href="https://js-interview-prep.vercel.app"
              target="_blank"
            >
              JS Interview Prep
            </a>
          </p>
        </PageHeader>
        {/* sections */}
        <TypesSection />
        <InterfacesSection />
        <ArraysSection />
        <FunctionsSection />
        <ModulesSection />
        <ClassesSection />
        <GlossarySection />
      </MainPage>
    </div>
  );
}
