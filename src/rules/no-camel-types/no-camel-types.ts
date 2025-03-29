import { ESLintUtils } from "@typescript-eslint/utils";

export const noCamelTypes = ESLintUtils.RuleCreator((name) => `@fbgfi/${name}`)(
  {
    name: "no-camel-types",
    meta: {
      docs: {
        description:
          "This rule prevents naming types or interfaces with starting lower-case letter.",
      },
      messages: {
        lowerCaseStart:
          "Naming types with camelcase is considered bad practise.",
      },
      type: "suggestion",
      schema: [],
    },
    defaultOptions: [],
    create(context) {
      return {
        TSInterfaceDeclaration(node) {
          if (node.id.name.match(/^[a-z]/)) {
            context.report({
              messageId: "lowerCaseStart",
              node,
            });
          }
        },
        TSTypeAliasDeclaration(node) {
          if (node.id.name.match(/^[a-z]/)) {
            context.report({
              messageId: "lowerCaseStart",
              node,
            });
          }
        },
      };
    },
  },
);
