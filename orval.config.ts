import { defineConfig } from "orval";

export default defineConfig({
  mpos: {
    output: {
      mode: "tags-split",
      target: "src/api/mpos",
      schemas: "src/api/model",
      client: "react-query",
      httpClient: "axios",
      override: {
        mutator: {
          path: "./src/api/custom-client.ts",
          name: "useCustomClient",
        },
      },
    },
    input: {
      target: "./openapi.json",
    },
    hooks: {
      afterAllFilesWrite: "echo Generation complete!",
    },
  },
});

