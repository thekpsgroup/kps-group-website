const fs = require("fs");
const path = require("path");

// Read the services page
const filePath = path.join(
  __dirname,
  "src",
  "routes",
  "services",
  "+page.svelte",
);
let content = fs.readFileSync(filePath, "utf8");

// Fix all inline event handlers
content = content.replace(/onmouseenter="([^"]*)"/g, (match, handler) => {
  return `on:mouseenter={(e) => { ${handler.replace(/this\./g, "e.target.")} }}`;
});

content = content.replace(/onmouseleave="([^"]*)"/g, (match, handler) => {
  return `on:mouseleave={(e) => { ${handler.replace(/this\./g, "e.target.")} }}`;
});

content = content.replace(/onclick="([^"]*)"/g, (match, handler) => {
  return `on:click={() => ${handler}}`;
});

// Write the fixed content back
fs.writeFileSync(filePath, content, "utf8");

console.log("Fixed all inline event handlers in services page");
