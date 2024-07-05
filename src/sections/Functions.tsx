import { CodeBlock } from "@/components/CodeBlock";
import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";
import { SectionSubTitle } from "@/components/SectionSubTitle";

export const FunctionsSection = () => (
  <section className="px-5 py-10 mb-3" id="functions">
    <SectionContainer>
      <SectionMainTitle label="Functions" />
      <SectionSubTitle label="Basic Examples" />
      <CodeBlock>
        {`
  const checkIsCarSold = (id: listingId): boolean => {
    return soldListingIds.includes(id);
  }

  // Promise
  async function getSalesData(id: string): Promise<any> {
    return ebayApi.getData(id);
  }

  // Generic
  function getFirstSale<Sale>(sales: Sale[]) {
    return sales[0];
  }

  // Optional Parameters
  function getCarsData(make?: string, model?: string) {
    // ...
  }

  // With Union Type
  const listCarsForSaleById = (id: number | string) => {
    if (typeof id === 'number')
      return carsByNumberId(id);
    else
      return carsById(id);
  }
        `}
      </CodeBlock>
    </SectionContainer>
  </section>
);
