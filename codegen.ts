import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
    schema: "./src/graphql/schema/schema.graphql",
    documents: ["./src/**/*.{ts,tsx}"],
    generates: {
        "./src/generated/": {
            preset: "client",
        },
    },
}

export default config;
