import nextJest from "next/jest.js";


const createJestConfig = nextJest({
  dir: "./",
});

const jestConfig = {
  testEnvironment: "jest-environment-jsdom",
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",
    "!src/**/*.d.ts",
    "!src/pages/_app.tsx",
  ],
  moduleNameMapper: {
    "^next/image$": "<rootDir>/__mocks__/next/image.tsx",
    "^@components/(.*)$": "<rootDir>/src/components/$1",
    "^@public/(.*)$": "<rootDir>/public/$1",
    "^@contexts/(.*)$": "<rootDir>/src/contexts/$1",
  },
  testPathIgnorePatterns: [
    "/node_modules/",
    "/build/",
    "src/pages/_app.tsx",
    "/.next/",
    "./tests",
  ],
  collectCoverage: true,
  modulePaths: ["<rootDir>/src/"],
  globals: {
    "ts-jest": {
      tsconfig: "<rootDir>/tsconfig.json",
    },
  },
};

export default createJestConfig(jestConfig);