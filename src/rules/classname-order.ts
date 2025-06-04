import type { Rule } from "eslint";
import type { JSXAttribute } from "estree-jsx";

const classNamesOrder = {
  meta: {
    type: "suggestion",
    docs: {
      category: "Stylistic Issues",
      description: "Enforce consistent order of the TailwindCSS classes.",
      recommended: true,
    },
    messages: {
      invalidOrder: "TailwindCSS classes should be sorted by category",
    },
    fixable: "code",
  },
  create(context) {
    return {
      JSXAttribute(node: JSXAttribute) {
        // Check if this is a className attribute
        if (
          node.name.name === "className" &&
          node.value &&
          node.value.type === "Literal" &&
          typeof node.value.value === "string"
        ) {
          context.report({
            node,
            message: "TailwindCSS classes should be sorted by category",
          });
        }
      },
    };
  },
} satisfies Rule.RuleModule;

export default classNamesOrder;
