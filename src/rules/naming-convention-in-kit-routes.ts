// import { AST } from "svelte-eslint-parser"
import { createRule } from "../utils"

export default createRule("naming-convention-in-kit-routes", {
  meta: {
    docs: {
      description: "",
      category: "Best Practices",
      recommended: false,
    },
    schema: [],
    messages: {},
    type: "suggestion", // "problem", or "layout",
  },
  create(_context) {
    return {}
  },
})
