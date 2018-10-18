const mongoose = require('mongoose');

const connectionString = '//:localhost/gamers'

mongoose.connect(`Mongoose connected to ${connectionString}`);

mongoose.connection.on('connected', )
