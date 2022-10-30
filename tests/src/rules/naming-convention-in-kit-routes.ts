import { RuleTester } from "eslint"
import rule from "../../../src/rules/naming-convention-in-kit-routes"
import { loadTestCases } from "../../utils/utils"

const tester = new RuleTester({
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
})

tester.run(
  "naming-convention-in-kit-routes",
  rule as any,
  loadTestCases("naming-convention-in-kit-routes"),
)
