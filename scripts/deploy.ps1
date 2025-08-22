# KPS Group Modern Suite - Deployment Script (PowerShell)
# This script handles the complete deployment workflow

param(
    [switch]$SkipBuild,
    [switch]$SkipEnvCheck
)

Write-Host "🚀 KPS Group Modern Suite - Deployment Script" -ForegroundColor Cyan
Write-Host "==============================================" -ForegroundColor Cyan

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

# Check if we're in the right directory
if (-not (Test-Path "package.json") -or -not (Test-Path "src/app.html")) {
    Write-Error "Not in the KPS Group project directory. Please run this from the project root."
    exit 1
}

# Check if Vercel CLI is installed
try {
    $null = Get-Command vercel -ErrorAction Stop
} catch {
    Write-Error "Vercel CLI is not installed. Please install it first: npm i -g vercel"
    exit 1
}

# Check if logged in to Vercel
try {
    $null = vercel whoami 2>$null
} catch {
    Write-Error "Not logged in to Vercel. Please run: vercel login"
    exit 1
}

Write-Status "Starting deployment process..."

# Step 1: Build the project (unless skipped)
if (-not $SkipBuild) {
    Write-Status "Building project..."
    npm run build
    
    if ($LASTEXITCODE -eq 0) {
        Write-Success "Build completed successfully"
    } else {
        Write-Error "Build failed"
        exit 1
    }
}

# Step 2: Check environment variables (unless skipped)
if (-not $SkipEnvCheck) {
    Write-Status "Checking environment variables..."
    vercel env ls
}

# Step 3: Deploy to production
Write-Status "Deploying to production..."
vercel --prod

if ($LASTEXITCODE -eq 0) {
    Write-Success "Deployment completed successfully!"
    Write-Status "Your site should be live at: https://thekpsgroup.com"
} else {
    Write-Error "Deployment failed"
    exit 1
}

# Step 4: Post-deployment checks
Write-Status "Running post-deployment checks..."

# Check if the site is responding
Start-Sleep -Seconds 5
try {
    $response = Invoke-WebRequest -Uri "https://thekpsgroup.com" -UseBasicParsing -TimeoutSec 10
    if ($response.StatusCode -eq 200) {
        Write-Success "Site is responding correctly"
    } else {
        Write-Warning "Site returned status code: $($response.StatusCode)"
    }
} catch {
    Write-Warning "Site might not be fully deployed yet. Check in a few minutes."
}

Write-Host ""
Write-Success "Deployment workflow completed!"
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Test the contact form at https://thekpsgroup.com/contact"
Write-Host "2. Check that leads are being logged (check Vercel logs)"
Write-Host "3. Set up ROUTER_API_KEY when ready: npm run env:add ROUTER_API_KEY"
Write-Host ""
Write-Host "Useful commands:" -ForegroundColor Cyan
Write-Host "- npm run deploy     # Deploy to production"
Write-Host "- npm run env:ls     # List environment variables"
Write-Host "- npm run env:add    # Add environment variable"
Write-Host "- vercel logs        # View deployment logs"
