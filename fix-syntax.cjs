const fs = require('fs');
const path = require('path');

// Read the get-started page
const filePath = path.join(__dirname, 'src', 'routes', 'get-started', '+page.svelte');
let content = fs.readFileSync(filePath, 'utf8');

// Fix the malformed event handlers by removing the incorrectly placed role attributes
content = content.replace(
    /on:mouseenter=\{\(e\) => role="button" tabindex="0" \{/g,
    'on:mouseenter={(e) => {'
);

content = content.replace(
    /on:mouseenter=\{\(e\) => \{ role="button" tabindex="0"/g,
    'on:mouseenter={(e) => {'
);

// Add proper role attributes to the div tags
content = content.replace(
    /(<div[^>]*on:mouseenter[^>]*>)/g,
    (match) => {
        if (!match.includes('role=')) {
            return match.replace('>', ' role="button" tabindex="0">');
        }
        return match;
    }
);

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');

console.log('Fixed malformed HTML syntax in get-started page');
