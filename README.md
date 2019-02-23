# starter-snake-node(js)

A simple [Battlesnake AI](https://battlesnake.io) written in Javascript for NodeJS.

To get started you'll need a working NodeJS development environment, and at least read the Heroku docs on [deploying a NodeJS app](https://devcenter.heroku.com/articles/getting-started-with-nodejs).

If you haven't setup a NodeJS development environment before, read [how to get started with NodeJS](http://nodejs.org/documentation/tutorials/). You'll also need [npm](https://www.npmjs.com/) for easy JS dependency management.

This client uses [Express4](http://expressjs.com/en/4x/api.html) for easy route management, read up on the docs to learn more about reading incoming JSON params, writing responses, etc.

[![Deploy](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Running the AI locally

Fork and clone this repo:

```shell
git clone git@github.com:OlafurTorfi/battleSnake.git
cd battlesnake-node
```

Install the client dependencies:

```shell
npm install
```

Create an `.env` file in the root of the project and add your environment variables (optional).

Compile the typescript code into javascript using the provided build script

- Troubleshoot: build script expects ./node_modules/.bin to be in your PATH so that it can run installed npm binaries like tsc

```shell
npm run build
```

Run the server with auto-reloading on file change:

```shell
npm start
```

Test the client in your browser at <http://localhost:5000>

## Developing the snake

Run unit tests with the test-driven-development script

```shell
npm run tdd
```

Play with the code and see if it breaks the tests or if you want to add some functionality, write a test for what you want to achieve and then try to implement it in code :)

## Deploying to Heroku

Click the Deploy to Heroku button at the top or use the command line commands below.

Create a new NodeJS Heroku app:

```shell
heroku create [APP_NAME]
```

Push code to Heroku servers:

```shell
git push heroku master
```

Open Heroku app in browser:

```shell
heroku open
```

Or go directly via <http://APP_NAME.herokuapp.com>

View/stream server logs:

```shell
heroku logs --tail
```

## Deploying to [Zeit](https://zeit.co/)

Install the now cli and sign up for a [zeit account](https://zeit.co/docs/v1/getting-started/introduction-to-now/).

Deploying is simply:

```shell
now
```
