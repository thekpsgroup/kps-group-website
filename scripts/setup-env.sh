#!/bin/bash

# KPS Group Modern Suite - Environment Setup Script
# This script helps set up environment variables for the project

set -e

echo "🔧 KPS Group Modern Suite - Environment Setup"
echo "============================================="

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

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

# Check if Vercel CLI is available
if ! command -v vercel &> /dev/null; then
    print_error "Vercel CLI is not installed. Please install it first: npm i -g vercel"
    exit 1
fi

# Check if logged in
if ! vercel whoami &> /dev/null; then
    print_error "Not logged in to Vercel. Please run: vercel login"
    exit 1
fi

print_status "Current environment variables:"
vercel env ls

echo ""
print_status "Setting up environment variables..."

# Set PUBLIC_SITE_URL
print_status "Setting PUBLIC_SITE_URL..."
echo "thekpsgroup.com" | vercel env add PUBLIC_SITE_URL production

# Ask about Router.so API key
echo ""
print_warning "Router.so API Key Setup"
echo "The contact form currently logs leads to console as a fallback."
echo "To enable proper lead routing, you'll need a Router.so API key."
echo ""
read -p "Do you have a Router.so API key? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter your Router.so API key: " router_key
    echo "$router_key" | vercel env add ROUTER_API_KEY production
    print_success "Router.so API key added!"
else
    print_warning "No Router.so API key provided. Contact form will log leads to console."
    print_status "You can add it later with: npm run env:add ROUTER_API_KEY"
fi

# Ask about Google Analytics
echo ""
read -p "Do you want to add Google Analytics? (y/n): " -n 1 -r
echo ""

if [[ $REPLY =~ ^[Yy]$ ]]; then
    read -p "Enter your Google Analytics Measurement ID (G-XXXXXXXXXX): " ga_id
    echo "$ga_id" | vercel env add PUBLIC_GA_MEASUREMENT_ID production
    print_success "Google Analytics ID added!"
fi

echo ""
print_success "Environment setup completed!"
print_status "Current environment variables:"
vercel env ls

echo ""
print_status "Next steps:"
echo "1. Deploy the site: npm run deploy"
echo "2. Test the contact form"
echo "3. Check Vercel logs for lead submissions"
