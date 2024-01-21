const mongoose = require("mongoose");

const { Schema } = mongoose;

const serviceSchema = new Schema({
		name: {
			type: String,
			requerid: true,
		},
		description: {
			type: String,
			requerid: true,
		},
		price: {
			type: Number,
			requerid: true,
		},
		image: {
			type: String,
			requerid: true,
		},
	}, 
	{timestamps: true}
);

const Service = mongoose.model("Service", serviceSchema);

module.exports = {
	Service,
	serviceSchema,
};