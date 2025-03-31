#!/bin/bash
# Ensure Node.js 18 is used for this project

# Unset the npm_config_prefix that's causing issues with nvm
unset npm_config_prefix

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
  echo "Already using Node.js 18: $CURRENT_NODE"
fi

# Don't clean by default - this removes node_modules which takes time to reinstall
if [[ "$1" == "--clean" ]]; then
  # Cleanup any npm issues
  echo "Cleaning npm cache..."
  npm cache clean --force

  # Clean up the build
  echo "Cleaning build files..."
  rm -rf .next
  
  # Only remove node_modules if explicitly requested
  if [[ "$2" == "--full" ]]; then
    echo "Removing node_modules..."
    rm -rf node_modules
  fi
fi 