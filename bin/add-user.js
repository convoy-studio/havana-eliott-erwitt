#!./node_modules/.bin/babel-node

import mongoose from 'mongoose';
import configs from '../server/config';
import User from '../server/models/user';

const env = process.NODE_ENV || 'development';
const config = configs[env];
const userType = process.argv[2] === 'admin' ? 'admin' : 'delivery';

//Database setup
mongoose.connect('mongodb://' + config.database.host + '/' + config.database.name);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection with database failed.'));
db.once('open', function(){
   User.create({
      identifiant: userType,
      password: userType,
      type: userType
   }, (error, user) => {
      if (error) {
         console.error('Error during user creation', error);
      } else {
         console.log(userType + ' user created');
      }
      db.close();
   });
});
