import {ContainerModule} from 'inversify';
import mongoose = require('mongoose');

export class MongooseModule extends ContainerModule {
    constructor() {
        super(null);
        mongoose.connect('mongodb://localhost:27017/zetwerk', err => {
            if (err) {
                console.log(`Could not connect to the database. ${err}`);
                throw err;
            } else {
                console.log('Successfully connected to the database.');
            }
        });
    }
}
