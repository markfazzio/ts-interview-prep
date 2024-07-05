import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";

export const ModulesSection = () => (
  <section className="px-5 py-10 mb-3" id="modules">
    <SectionContainer>
      <SectionMainTitle label="Modules" />
      <SectionDescription>
        TypeScript extends ES6 modules by adding <code>type</code> to{" "}
        <code>import</code> and <code>export</code>.
      </SectionDescription>
      <CodeBlock>
        {`
  // filename: ModificationTypes.ts
  export type EngineMods = { exhaustType: string, intakeType: string };
  export type ExteriorMods = { aeroLevel: number, wheelType: string };

  // Usage
  import type { EngineMods, ExteriorMods } from './ModificationTypes.ts';
  export type VehicleModifications = EngineMods | ExteriorMods;
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
