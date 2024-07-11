import {
  CodeBlock,
  SectionContainer,
  SectionDescription,
  SectionMain,
  SectionMainTitle,
} from "@markfazzio/docs-ui-components";

export const ClassesSection = () => (
  <SectionMain id="classes">
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
  </SectionMain>
);
