// import { AST } from "svelte-eslint-parser"
import { createRule } from "../utils"

export default createRule("no-export-load-in-svelte-module-in-kit-pages", {
  meta: {
    docs: {
      description:
        "disallow exporting load functions in *.svelte module in Svelte Kit page components",
      category: "Possible Errors",
      recommended: true,
    },
    schema: [],
    messages: {},
    type: "suggestion", // "problem", or "layout",
  },
  create(_context) {
    return {}
  },
})
