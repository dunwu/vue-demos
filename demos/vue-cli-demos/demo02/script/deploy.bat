rem abort on errors
remset -e

rem build
cd ..
rd /s /q dist
call npm run build

rem navigate into the build output directory
cd dist

rem if you are deploying to a custom domain
rem echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

rem if you are deploying to https://<USERNAME>.github.io
rem git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

rem if you are deploying to https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:dunwu/vue-tutorial.git master:gh-pages

cd ..
