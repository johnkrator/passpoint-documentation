import "@testing-library/jest-dom";

/** @type {import("jest").Config} */
export default {
    testEnvironment: "jsdom",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.ts"],
    moduleNameMapping: {
        "^@/(.*)$": "<rootDir>/src/$1",
    },
    testMatch: [
        "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{test,spec}.{js,jsx,ts,tsx}",
    ],
    transform: {
        "^.+\\.(ts|tsx)$": ["ts-jest", {useESM: true}],
    },
    extensionsToTreatAsEsm: [".ts", ".tsx"],
};
