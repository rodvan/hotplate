#!/bin/bash

echo Copying the guide over...
cat _includes/top_page.txt ../hotplate/GUIDE.md  > guide.md

echo Copying README.md onto index.md...
cat _includes/top_page.txt ../hotplate/README.md  > index.md

echo Building side with Jekyll...
jekyll build

echo Submitting site
git add *;
git commit -m "Automatic build done"
git push