import {
  CodeBlock,
  SectionContainer,
  SectionDescription,
  SectionMain,
  SectionMainTitle,
} from "@markfazzio/docs-ui-components";

export const ModulesSection = () => (
  <SectionMain id="modules">
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
  </SectionMain>
);
