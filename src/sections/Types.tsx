import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const TypesSection = () => (
  <section className="px-5 py-10 mb-3" id="types">
    <SectionContainer>
      <SectionMainTitle label="Types" />
      <SectionDescription>
        <strong>
          Note: Interfaces should be used to describe objects in most cases, but
          occasionally using types may be needed.
        </strong>
      </SectionDescription>
      <SectionSubTitle label="Basic Usage" />
      <CodeBlock>
        {`
  const engineConfig: string = 'I6';
  const horsepower: number = 320;
  const isForSale: boolean = false;
  const salesData: any = null;
        `}
      </CodeBlock>
      <SectionSubTitle label="Primitive Types" />
      <CodeBlock>
        {`
  type EngineConfig = string;
  type Horsepower = number;
  type IsForSale = boolean;
  type SalesData = any; // try to avoid using this as it is loose typing
  type ListForSaleFn = (price: number) => void; // void does not return a value
  type ThrowSaleError = (msg: string): never { // never represents a function terminating type
    throw new Error(msg);
  }
        `}
      </CodeBlock>
      <SectionSubTitle label="Generic Types" />
      <CodeBlock>
        {`
  type PaintColors = Array<string>;
  type ModelYears = Array<number>;
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
    horsepower: number; // required, all cars have this measurement
    isForSale?: boolean;
    listForSale?: (price: number) => void;
    [key: string]: string; // accepts any index
    readonly id: string; // readonly
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
  type ManufacturerInfo = {
    make: string;
    model: string;
  };
        `}
      </CodeBlock>
      <SectionSubTitle label="Intersection Types" />
      <SectionDescription>
        Similar to how an interface extends another, this will merge the types.
      </SectionDescription>
      <CodeBlock>
        {`
  type CarWithMakeModel = Car & ManufacturerInfo;

  // Usage
  const modelSupra: CarWithMakeModel = {
    engineConfig: 'I6',
    horsepower: 320,
    make: 'Toyota',
    model: 'Supra'
  }
        `}
      </CodeBlock>
      <SectionSubTitle label="Tuple Types" />
      <SectionDescription>
        Special-cased array with known types at specific indexes.
      </SectionDescription>
      <CodeBlock>
        {`
  type CarTuple = [make: string, model: string, horsepower: number, engineConfig: string];
  const supraModel: CarTuple = ['Toyota', 'Supra', 320, 'I6'];
  const supraModel: CarTuple = ['Toyota', 320, 'Supra', 'I6']; // ERROR
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
