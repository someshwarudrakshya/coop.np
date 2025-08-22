// update.js
const { execSync } = require("child_process");

const msg = process.argv[2] || "update"; // default commit message

try {
    execSync("git add .", { stdio: "inherit" });
    execSync(`git commit -m "${msg}"`, { stdio: "inherit" });
    execSync("git push origin main", { stdio: "inherit" });
    execSync("npm run publish", { stdio: "inherit" });
} catch (err) {
    console.error("❌ Something went wrong:", err.message);
    process.exit(1);
}
