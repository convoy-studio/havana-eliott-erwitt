Elliott Erwitt Havana Club 7 Fellowship
=========================

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
gulp webpack --watch
npm run dev
```
This will start differents gulp commands watching for changes in /src folder.

### Production

Just run 

```
ssh admin@167.114.252.143 -t "cd /var/www/www.havana-fellowship.com/; bash --login"
npm run prod
gulp webpack
pm2 restart server

```

### MongoDB

```
$mongo
>show dbs
>use havana
>show collections

```

**Be sure to run `npm run stop ` when you stop working on it, because if you don't, MongoDB will still be running in the background.**