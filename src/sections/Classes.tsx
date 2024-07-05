import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const ClassesSection = () => (
  <section className="px-5 py-10 mb-3" id="classes">
    <SectionContainer>
      <SectionMainTitle label="Classes" />
      <SectionDescription>
        Classes are another way to extend types, but seemingly less used than
        interfaces for most web projects.
      </SectionDescription>
      <CodeBlock>
        {`
  interface CarModel {
    make: string;
    model: string;
  }

  class Car {
    make: string;
    model: string;

    constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
    }
  }

  // Usage
  const supraModel: CarModel = new Car('Toyota', 'Supra');
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
