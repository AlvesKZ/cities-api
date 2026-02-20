import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import json from '@eslint/json';
import markdown from '@eslint/markdown';
import css from '@eslint/css';
import { defineConfig } from 'eslint/config';

export default defineConfig([
    {
        ignores: [
            '**/node_modules/**',
            '**/dist/**',
            '**/package-lock.json',
        ],
    },

    {
        files: ['**/*.{js,mjs,cjs}'],
        extends: [js.configs.recommended],
        languageOptions: {
            globals: globals.node,
        },
    },

    ...tseslint.configs.recommended,

    {
        files: ['**/*.json'],
        extends: [json.configs.recommended],
    },

    {
        files: ['**/*.jsonc'],
        extends: [json.configs.recommended],
    },

    {
        files: ['**/*.md'],
        extends: [markdown.configs.recommended],
    },

    {
        files: ['**/*.css'],
        extends: [css.configs.recommended],
    },

    {
        rules: {
            semi: ['error', 'always'],
            indent: ['error', 4],
            quotes: ['error', 'single'],
            'comma-dangle': ['error', 'always-multiline'],
            '@typescript-eslint/no-empty-object-type': 'off',
        },
    },
]);
