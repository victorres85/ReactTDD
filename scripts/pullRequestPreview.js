import { execSync } from "child_process";
import fetch from "node-fetch";

console.log("[DEPLOY_PREVIEW]: STARTED");
const command = "node run deploy:staging";
const output = execSync(command, { encoding: "utf8" });
const lines = output.split("\n");
const DEPLOY_URL = lines[lines.length - 1];
console.log(`[DEPLOY_PREVIEW]: DEPLOYED TO: ${DEPLOY_URL}`);

// ===================================
// ===================================

console.log("[GITHUB_COMMENT]: START");
const { GITHUB_TOKEN, GITHUB_REPOSITORY, GITHUB_PR_NUMBER } = process.env;
const GH_COMMENT = `- Deploy URL: [${DEPLOY_URL}](${DEPLOY_URL})`;

const defaultHeaders = {};
defaultHeaders["authorization"] = `token ${GITHUB_TOKEN}`;
defaultHeaders["accept"] =
  "application/vnd.github.v3+json; application/vnd.github.antiope-preview+json";
defaultHeaders["content-type"] = "application/json";

// console.log("GITHUB_REPOSITORY", GITHUB_REPOSITORY);
// console.log("GITHUB_PR_NUMBER", GITHUB_PR_NUMBER);

// fetch(
//   `https://api.github.com/repos/${GITHUB_REPOSITORY}/issues/${GITHUB_PR_NUMBER}/comments`,
//   {
//     headers: defaultHeaders,
//     method: "POST",
//     body: JSON.stringify({
//       body: GH_COMMENT,
//     }),
//   }
// )
//   .then((response) => {
//     if (response.ok) return response.json();
//     throw new Error(response.statusText);
//   })
//   .catch((err) => {
//     console.log("[COMMENT_ON_GITHUB: ERROR]");
//     throw new Error(err);
//   })
//   .finally(() => {
//     console.log("[COMMENT_ON_GITHUB: END]");
//   });
