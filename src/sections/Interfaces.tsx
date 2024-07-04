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
        Interfaces should be used to describe objects - unless needing to
        specify types outside of the 3 primitives.
      </SectionDescription>
      <SectionSubTitle label="Primitive Types" />
      <CodeBlock>
        {`
  type EngineConfig = string;
  type Horsepower = number;
  type IsForSale = boolean;
        `}
      </CodeBlock>
      <SectionSubTitle label="Common Type Examples" />
      <SectionDescription>
        The below <code>Car</code> object has properties with common type
        examples.
      </SectionDescription>
      <CodeBlock>
        {`
  type Car {
    engineConfig?: string; // ? = optional, could be EV
    horsepower: number, // required, all cars have this measurement
    isForSale?: boolean,
    listForSale?: (price: number) => void;
    [key: string]: string; // accepts any index
    readonly isDiscontinued: boolean; // readonly
  }
        `}
      </CodeBlock>
      <SectionSubTitle label="Union Types" />
      <CodeBlock>
        {`
  type EngineConfig = 'I3' | 'I4' | 'I5' | 'I6' | 'V6' | 'V8' | 'V10' | 'V12';
        `}
      </CodeBlock>
      <SectionSubTitle label="Object Literal Type" />
      <CodeBlock>
        {`
  type Location = {
    x: number;
    y: number;
  };
        `}
      </CodeBlock>
      <SectionSubTitle label="Function Types" />
      <CodeBlock>
        {`
  type AddFn = (num1: number, num2: number) => number;
        `}
      </CodeBlock>
      <SectionSubTitle label="Declarations" />
      <CodeBlock>
        {`
  interface Car {
    engineConfig: string;
    horsepower: number;
    manufacturer: string;
    model: string;
  }

  const modelSupra: Car = {
    engingConfig: 'I6',
    horsepower: 320,
    manufacturer: 'Toyota',
    model: 'Supra'
  }
        `}
      </CodeBlock>
      <SectionSubTitle label="Intersection Types" />
      <SectionDescription>
        A different way to merge and extend types.
      </SectionDescription>
      <CodeBlock>
        {`
  type Location = { x: number } & { y: number }; // { x: number, y: number }
        `}
      </CodeBlock>
      <SectionSubTitle label="Tuple Types" />
      <SectionDescription>
        Special-cased array with known types at specific indexes.
      </SectionDescription>
      <CodeBlock>
        {`
  type CarTuple = [manufacturer: string, model: string, horsepower: number, engineConfig: string];
  const supraModel: CarTuple = ['Toyota', 'Supra', 320, 'I6'];
  const supraModel: CarTuple = ['Toyota', 320, 'Supra', 'I6']; // ERROR
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
