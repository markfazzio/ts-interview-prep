import { BackButton } from "./BackButton";

export const PageHeader = () => {
  return (
    <div className="sm:grid grid-cols-2 items-center mb-8">
      <div className="course-meta mb-6 sm:mb-0">
        <h1 className="text-4xl mb-2">TS Interview Prep</h1>
        <p>
          Quick refresher/guide to TypeScript for all experience levels. This is
          by no means a comprehensive guide to TypeScript. For that,{" "}
          <a
            className="hover:underline font-semibold"
            href="https://www.typescriptlang.org/docs/handbook"
            target="_blank"
          >
            View the TypeScript Handbook
          </a>
          . Make sure to also check out:{" "}
          <a
            className="hover:underline font-semibold"
            href="https://js-interview-prep.vercel.app"
            target="_blank"
          >
            JS Interview Prep
          </a>
        </p>
      </div>
      <div className="course-actions text-end">
        <BackButton />
      </div>
    </div>
  );
};
