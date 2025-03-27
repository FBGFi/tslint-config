import { ESLintUtils } from "@typescript-eslint/utils";

const createRule = ESLintUtils.RuleCreator((name) => `@fbgfi/${name}`);

export const requireDescribedGenerics = createRule({
  name: "require-described-generics",
  meta: {
    docs: {
      description:
        "This rule prevents using short-hand generics of one letter and requires generics to end with uppercase letter",
    },
    messages: {
      oneLetterGeneric:
        "Generics should describe passed variables more precisely.",
      missingUpperCaseEnd:
        "Generics should end with upper-case letter to avoid mixups with types.",
    },
    type: "suggestion",
    schema: [],
  },
  defaultOptions: [],
  create() {
    return {
      Program() {
        // console.log(context, node);
      },
    };
  },
});
