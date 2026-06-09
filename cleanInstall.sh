#!/bin/bash
set -e

rm -rf node_modules
cd MapStore2
rm -rf node_modules
npm i
cd ../mapstore2-georchestra
rm -rf node_modules
npm i
cd ..
rm package-lock.json
npm i