const fs = require('fs');
const path = require('path');

// Read the get-started page
const filePath = path.join(__dirname, 'src', 'routes', 'get-started', '+page.svelte');
let content = fs.readFileSync(filePath, 'utf8');

// Fix all remaining inline event handlers
content = content.replace(/onfocus="([^"]*)"/g, (match, handler) => {
    return `on:focus={(e) => { ${handler.replace(/this\./g, 'e.target.')} }}`;
});

content = content.replace(/onblur="([^"]*)"/g, (match, handler) => {
    return `on:blur={(e) => { ${handler.replace(/this\./g, 'e.target.')} }}`;
});

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Fixed all remaining inline event handlers in get-started page');
