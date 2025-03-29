#!/bin/bash
# Ensure Node.js 18 is used for this project

# Source NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

# Check current Node version
CURRENT_NODE=$(node -v)
echo "Current Node.js version: $CURRENT_NODE"

# If not Node 18, install and use it
if [[ $CURRENT_NODE != v18* ]]; then
  echo "Switching to Node.js 18..."
  nvm install 18
  nvm use 18
  NEW_NODE=$(node -v)
  echo "Now using Node.js version: $NEW_NODE"
else
  echo "Already using Node.js 18"
fi

# Cleanup any npm issues
echo "Cleaning npm cache..."
npm cache clean --force

# Clean up the build
echo "Cleaning build files..."
rm -rf .next node_modules 