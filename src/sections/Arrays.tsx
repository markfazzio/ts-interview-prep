import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const ArraysSection = () => (
  <section className="px-5 py-10 mb-3" id="arrays">
    <SectionContainer>
      <SectionMainTitle label="Arrays" />
      <SectionSubTitle label="Basic Usage" />
      <CodeBlock>
        {`
  const numbersArray: Array<number> = [1,2,3];
  // OR
  const numbersArray: number[] = [1,2,3];
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
