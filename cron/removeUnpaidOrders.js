import mongoose from 'mongoose';
import configs from '../server/config';
import Order from '../server/models/order';

const env = process.NODE_ENV || 'development';
const config = configs[env];

//Database setup
mongoose.connect('mongodb://' + config.database.host + '/' + config.database.name);
const db = mongoose.connection;
db.on('error', console.error.bind(console,'Connection with database failed.'));
db.once('open', function() {
    const criteria = {
        date: { $lt: (new Date(Date.now() - 0.5 * 60 * 60 * 1000)) },  // 30 min max pour payer la commande
        transactionId: { $exists: false }
    };
    Order.remove(criteria, function (err, res) {
        if (err) {
            console.error(err);
        } else {
            console.info(res.result.n + ' order(s) deleted');
        }

        db.close();
    });
});
