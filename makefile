install:
	npm install

start:
	npm run babel-node -- src/index.js

publish:
	npm publish

lint:
	npm run eslint
