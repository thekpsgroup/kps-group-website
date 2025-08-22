# KPS Group Modern Suite - Environment Setup Script (PowerShell)
# This script helps set up environment variables for the project

Write-Host "🔧 KPS Group Modern Suite - Environment Setup" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan

# Function to print colored output
function Write-Status {
    param([string]$Message)
    Write-Host "[INFO] $Message" -ForegroundColor Blue
}

function Write-Success {
    param([string]$Message)
    Write-Host "[SUCCESS] $Message" -ForegroundColor Green
}

function Write-Warning {
    param([string]$Message)
    Write-Host "[WARNING] $Message" -ForegroundColor Yellow
}

function Write-Error {
    param([string]$Message)
    Write-Host "[ERROR] $Message" -ForegroundColor Red
}

# Check if Vercel CLI is available
try {
    $null = Get-Command vercel -ErrorAction Stop
} catch {
    Write-Error "Vercel CLI is not installed. Please install it first: npm i -g vercel"
    exit 1
}

# Check if logged in
try {
    $null = vercel whoami 2>$null
} catch {
    Write-Error "Not logged in to Vercel. Please run: vercel login"
    exit 1
}

Write-Status "Current environment variables:"
vercel env ls

Write-Host ""
Write-Status "Setting up environment variables..."

# Set PUBLIC_SITE_URL
Write-Status "Setting PUBLIC_SITE_URL..."
"thekpsgroup.com" | vercel env add PUBLIC_SITE_URL production

# Ask about Router.so API key
Write-Host ""
Write-Warning "Router.so API Key Setup"
Write-Host "The contact form currently logs leads to console as a fallback."
Write-Host "To enable proper lead routing, you'll need a Router.so API key."
Write-Host ""

$hasRouterKey = Read-Host "Do you have a Router.so API key? (y/n)"
if ($hasRouterKey -eq "y" -or $hasRouterKey -eq "Y") {
    $routerKey = Read-Host "Enter your Router.so API key"
    "$routerKey" | vercel env add ROUTER_API_KEY production
    Write-Success "Router.so API key added!"
} else {
    Write-Warning "No Router.so API key provided. Contact form will log leads to console."
    Write-Status "You can add it later with: npm run env:add ROUTER_API_KEY"
}

# Ask about Google Analytics
Write-Host ""
$hasGA = Read-Host "Do you want to add Google Analytics? (y/n)"
if ($hasGA -eq "y" -or $hasGA -eq "Y") {
    $gaId = Read-Host "Enter your Google Analytics Measurement ID (G-XXXXXXXXXX)"
    "$gaId" | vercel env add PUBLIC_GA_MEASUREMENT_ID production
    Write-Success "Google Analytics ID added!"
}

Write-Host ""
Write-Success "Environment setup completed!"
Write-Status "Current environment variables:"
vercel env ls

Write-Host ""
Write-Status "Next steps:"
Write-Host "1. Deploy the site: npm run deploy"
Write-Host "2. Test the contact form"
Write-Host "3. Check Vercel logs for lead submissions"
