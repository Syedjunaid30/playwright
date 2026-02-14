import { execSync } from "child_process";

const tag = process.argv[2];

execSync(`npx playwright test --grep "${tag}"`, { stdio: "inherit" });
