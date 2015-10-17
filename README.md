React-Node-Starter
=========================

Build web apps with node.js on the backend, react on the frontend.

## Installation

Clone the repo or download the archive.
In the root folder, run
```
npm install
npm start
```
This will start an instance of MongoDB (basically what the `mongod` command do but in the background) then start and hapi.js server running on [http://localhost:3000](http://localhost:3000)

## Development
```
npm run dev
```
This will start differents gulp commands watching for changes in /src folder.

### Server
Everything is ready to setup an API. Every routes declares in /src/server/routes will be prefixed by /api.

### CSS
Use [stylus](https://github.com/stylus/stylus).
Livereload is available and running, just be sure to install the [Chrome extension](https://chrome.google.com/webstore/detail/livereload/jnihajbhpnppcggbcgedagnkighmdlei)

### JS
I just set a HelloWorld component as an example.
Hot reloading is available thanks to [webpack](https://github.com/webpack/webpack) and [react-hot-loader](https://github.com/gaearon/react-hot-loader). Written in ES6 thanks to [babel-loader](https://github.com/babel/babel-loader)

### Production

Just run 
```
npm run prod
```

**Be sure to run `npm run stop ` when you stop working on it, because if you don't, MongoDB will still be running in the background.**

## Inspiration

* [Firestarter by NK](https://github.com/NorthKingdom/firestarter) for useful gulp tasks
* [Remindme by Julien Da Costa](https://github.com/jdacosta/remindme) for useful gulp tasks too