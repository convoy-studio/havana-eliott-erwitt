#!./node_modules/.bin/babel-node

import mongoose from 'mongoose';
import configs from '../server/config';
import User from '../server/models/user';

const env = process.NODE_ENV || 'development';
const config = configs[env];

//Database setup
mongoose.connect('mongodb://' + config.database.host + '/' + config.database.name);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection with database failed.'));
db.once('open', function(){
   User.create({
      identifiant: 'admin',
      password: 'admin',
      type: 'admin'
   }, (error, user) => {
      if (error) {
         console.error('Error during user creation', error);
      } else {
         console.log('Admin user created');
      }
      db.close();
   });
});
