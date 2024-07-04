import { SectionContainer } from "@/components/SectionContainer";
import { SectionDescription } from "@/components/SectionDescription";
import { SectionMainTitle } from "@/components/SectionMainTitle";

import glossaryData from "../json/glossary-data.json";

interface GlossaryDataItem {
  term: string;
  definition: string;
}

export const GlossarySection = () => (
  <section className="px-5 py-10 mb-3" id="glossary">
    <SectionContainer>
      <SectionMainTitle label="Glossary" />
      <SectionDescription>A glossary of terms.</SectionDescription>

      <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
            >
              Term
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
            >
              Definition
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
          {glossaryData.map((item: GlossaryDataItem, index: number) => (
            <tr key={`term-${index}-${item.term}`}>
              <td className="px-6 py-4 text-sm font-bold">{item.term}</td>
              <td className="px-6 py-4 text-sm">{item.definition}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </SectionContainer>
  </section>
);
