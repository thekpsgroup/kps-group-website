const fs = require("fs");
const path = require("path");

// Fix get-started page
const getStartedPath = path.join(
  __dirname,
  "src",
  "routes",
  "get-started",
  "+page.svelte",
);
let getStartedContent = fs.readFileSync(getStartedPath, "utf8");

// Add role="button" to divs with mouseenter/mouseleave handlers
getStartedContent = getStartedContent.replace(
  /(<div[^>]*on:mouseenter[^>]*>)/g,
  '$1 role="button" tabindex="0"',
);

fs.writeFileSync(getStartedPath, getStartedContent, "utf8");

// Fix services page
const servicesPath = path.join(
  __dirname,
  "src",
  "routes",
  "services",
  "+page.svelte",
);
let servicesContent = fs.readFileSync(servicesPath, "utf8");

// Add role="button" to divs with mouseenter/mouseleave handlers
servicesContent = servicesContent.replace(
  /(<div[^>]*on:mouseenter[^>]*>)/g,
  '$1 role="button" tabindex="0"',
);

fs.writeFileSync(servicesPath, servicesContent, "utf8");

console.log("Added ARIA roles to interactive divs");
