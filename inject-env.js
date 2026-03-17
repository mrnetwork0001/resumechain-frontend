// inject-env.js
// Runs as Vercel buildCommand to inject BACKEND_URL into index.html
const fs = require("fs");

const html = fs.readFileSync("index.html", "utf8");
const apiUrl = process.env.BACKEND_URL || "http://localhost:5000";

const injected = html.replace(
  "window.__API_URL__ || \"http://localhost:5000\"",
  `"${apiUrl}"`
);

fs.writeFileSync("index.html", injected);
console.log(`✅ Injected BACKEND_URL: ${apiUrl}`);
