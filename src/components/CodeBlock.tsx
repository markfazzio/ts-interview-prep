import { ThemeContext, ThemeContextType } from "@/context/ThemeContext";
import { useContext } from "react";
import SyntaxHighlighter, {
  SyntaxHighlighterProps,
} from "react-syntax-highlighter";
import {
  a11yLight,
  agate,
} from "react-syntax-highlighter/dist/cjs/styles/hljs";

export const CodeBlock = (props: SyntaxHighlighterProps) => {
  const { children } = props;
  const { theme } = useContext(ThemeContext) as ThemeContextType;
  const highlighterTheme = theme === "light" ? a11yLight : agate;

  return (
    <SyntaxHighlighter
      language="javascript"
      className="mb-3"
      style={highlighterTheme}
    >
      {children}
    </SyntaxHighlighter>
  );
};
