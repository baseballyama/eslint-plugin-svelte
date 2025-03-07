import ghpagesAdapter from "svelte-adapter-ghpages"
import path from "path"
import fs from "fs"
import { fileURLToPath } from "url"

// eslint-disable-next-line no-undef -- There seems to be a package that uses `self`.
if (typeof self === "undefined") {
  globalThis.self = globalThis
}

const dirname = path.dirname(fileURLToPath(import.meta.url))

// This project can't be ESM yet, so hack it to get svelte-kit to work.
// A hack that treats files in the `.svelte-kit` directory as ESM.
if (!fs.existsSync(path.join(dirname, ".svelte-kit"))) {
  fs.mkdirSync(path.join(dirname, ".svelte-kit"))
}
fs.writeFileSync(
  path.join(dirname, ".svelte-kit/package.json"),
  JSON.stringify({ type: "module" }),
)

const outDir = path.join(dirname, "build/eslint-plugin-svelte")

/** @type {import('@sveltejs/kit').Config} */
const config = {
  compilerOptions: {
    preserveWhitespace: true,
  },
  extensions: [".svelte", ".md"],
  kit: {
    paths: {
      base: "/eslint-plugin-svelte",
    },
    adapter: ghpagesAdapter({
      // default options are shown
      pages: outDir,
      assets: outDir,
    }),
    files: {
      routes: path.join(dirname, "./docs-svelte-kit/src/routes"),
      appTemplate: path.join(dirname, "./docs-svelte-kit/src/app.html"),
      hooks: {
        server: path.join(dirname, "./docs-svelte-kit/src/hooks/server"),
        client: path.join(dirname, "./docs-svelte-kit/src/hooks/client"),
      },
      lib: path.join(dirname, "./docs-svelte-kit/src/lib"),
      assets: path.join(dirname, "./docs-svelte-kit/statics"),
    },
  },
}
export default config
