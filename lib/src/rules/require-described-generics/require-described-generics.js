import { ESLintUtils } from "@typescript-eslint/utils";
export const requireDescribedGenerics = ESLintUtils.RuleCreator((name) => `@fbgfi/${name}`)({
    name: "require-described-generics",
    meta: {
        docs: {
            description: "This rule prevents using short-hand generics of one letter and requires generics to end with uppercase letter",
        },
        messages: {
            oneLetterGeneric: "Generics should describe passed variables more precisely.",
            missingUpperCaseEnd: "Generics should end with upper-case letter to avoid mixups with types.",
        },
        type: "suggestion",
        schema: [],
    },
    defaultOptions: [],
    create(context) {
        return {
            TSTypeParameter(node) {
                const parent = node.parent;
                if (parent.type === "TSTypeParameterDeclaration") {
                    const name = node.name.name;
                    if (parent.params.length > 1 && name.length === 1) {
                        context.report({
                            messageId: "oneLetterGeneric",
                            node,
                        });
                    }
                    else if (name[name.length - 1].match(/[a-z]/)) {
                        context.report({
                            messageId: "missingUpperCaseEnd",
                            node,
                        });
                    }
                }
            },
        };
    },
});
