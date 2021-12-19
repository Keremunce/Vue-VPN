#!/usr/bin/env sh

set -e

npm run build

cd dist

git init
git add -A
git commit -m 'New Deployment'
git push -f https://github.com/Keremunce/redesigned-spoon.git master:gh-pages

cd -