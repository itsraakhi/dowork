const mongoose = require('mongoose');
const { Schema } = mongoose;

const OrderSchema = new Schema(
	{
		gigId: {
			type: String,
			required: true,
		},
		img: {
			type: String,
		},
		title: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		sellerId: {
			type: String,
			required: true,
		},
		buyerId: {
			type: String,
			required: true,
		},
		payment_intent: {
			type: String,
			required: true,
		},
		isCompleted: {
			type: Boolean,
			default: false,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.model('Order', OrderSchema);