import mongoose from 'mongoose';
import configs from './config';

const env = process.NODE_ENV || 'development';
const config = configs[env];

export default class Database {

	constructor(){

	}

	connect(){

	}

}