const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const serverName = db.split('@')[1].split('/')[0];

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
			// useCreateIndex: true,
			// useFindAndModify: false,
		});

		process.stdout.write(`MongoDB connected to: ${serverName}\n`);
	} catch (err) {
		process.stdout.write('err.message');
		process.exit(1);
	}
};

module.exports = connectDB;
