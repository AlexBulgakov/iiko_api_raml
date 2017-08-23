raml-javascript-generator raml/index.raml -o build/js-client

#todo make proper fix for "this.0" case
sed -i "s/this\.0/this['0']/g" build/js-client/index.js

cd build/js-client
npm install
cd -

mkdir build/docs
raml2html raml/index.raml > build/docs/index.html
