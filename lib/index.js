import { plugins } from "@fbgfi/eslint-config";
import { noCamelTypes, requireDescribedGenerics } from "./src/index.js";
export const extendedPlugins = {
    "@fbgfi": {
        rules: {
            ...plugins["@fbgfi"].rules,
            "require-described-generics": requireDescribedGenerics,
            "no-camel-types": noCamelTypes,
        },
    },
};
