import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const InterfacesSection = () => (
  <section className="px-5 py-10 mb-3" id="interfaces">
    <SectionContainer>
      <SectionMainTitle label="Interfaces" />
      <SectionDescription>
        Used to define the shape of objects. Can be extended as a way to share
        similar chunks of properties.
      </SectionDescription>
      <CodeBlock>
        {`
  type EngineConfig = 'I3' | 'I4' | 'I5' | 'I6' | 'V6' | 'V8' | 'V10' | 'V12';

  interface ManufacturerInfo {
    make: string;
    model: string;
  }

  interface Car extends ManufacturerInfo {
    engineConfig: EngineConfig;
    horsepower: number;
    isForSale?: boolean;
    listForSale?: (price: number) => void;
  }

  // Usage
  const modelSupra: Car = {
    engineConfig: 'I6',
    horsepower: 320,
    manufacturer: 'Toyota',
    model: 'Supra'
  }
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
