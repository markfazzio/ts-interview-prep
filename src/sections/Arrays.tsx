import {
  CodeBlock,
  SectionContainer,
  SectionMain,
  SectionMainTitle,
  SectionSubTitle,
} from "@markfazzio/docs-ui-components";

export const ArraysSection = () => (
  <SectionMain id="arrays">
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
  </SectionMain>
);
