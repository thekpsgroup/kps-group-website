#!/bin/bash

# KPS Group Modern Suite - Deployment Script
# This script handles the complete deployment workflow

set -e

echo "🚀 KPS Group Modern Suite - Deployment Script"
echo "=============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${BLUE}[INFO]${NC} $1"
}

print_success() {
    echo -e "${GREEN}[SUCCESS]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -f "package.json" ] || [ ! -f "src/app.html" ]; then
    print_error "Not in the KPS Group project directory. Please run this from the project root."
    exit 1
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI is not installed. Please install it first: npm i -g vercel"
    exit 1
fi

# Check if logged in to Vercel
if ! vercel whoami &> /dev/null; then
    print_error "Not logged in to Vercel. Please run: vercel login"
    exit 1
fi

print_status "Starting deployment process..."

# Step 1: Build the project
print_status "Building project..."
npm run build

if [ $? -eq 0 ]; then
    print_success "Build completed successfully"
else
    print_error "Build failed"
    exit 1
fi

# Step 2: Check environment variables
print_status "Checking environment variables..."
vercel env ls

# Step 3: Deploy to production
print_status "Deploying to production..."
vercel --prod

if [ $? -eq 0 ]; then
    print_success "Deployment completed successfully!"
    print_status "Your site should be live at: https://thekpsgroup.com"
else
    print_error "Deployment failed"
    exit 1
fi

# Step 4: Post-deployment checks
print_status "Running post-deployment checks..."

# Check if the site is responding
sleep 5
if curl -s -o /dev/null -w "%{http_code}" https://thekpsgroup.com | grep -q "200"; then
    print_success "Site is responding correctly"
else
    print_warning "Site might not be fully deployed yet. Check in a few minutes."
fi

echo ""
print_success "Deployment workflow completed!"
echo ""
echo "Next steps:"
echo "1. Test the contact form at https://thekpsgroup.com/contact"
echo "2. Check that leads are being logged (check Vercel logs)"
echo "3. Set up ROUTER_API_KEY when ready: npm run env:add ROUTER_API_KEY"
echo ""
echo "Useful commands:"
echo "- npm run deploy     # Deploy to production"
echo "- npm run env:ls     # List environment variables"
echo "- npm run env:add    # Add environment variable"
echo "- vercel logs        # View deployment logs"
