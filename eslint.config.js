
import js from "@eslint/js";

export default [
    js.configs.recommended,
    {
        files: ["src/**/*.js", "tests/**/*.js"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            globals: {
                // Browser globals
                window: "readonly",
                document: "readonly",
                alert: "readonly",
                fetch: "readonly",
                console: "readonly",
                crypto: "readonly",

                // Jest globals
                describe: "readonly",
                test: "readonly",
                expect: "readonly"
            }
        }
    }
];
