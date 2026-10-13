const mongoose = require('mongoose');

const productSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
			trim: true,
		},
		description: {
			type: String,
			trim: true,
			default: '',
		},
		price: {
			type: Number,
			required: true,
			min: 0,
		},
		unit: {
			type: String,
			trim: true,
			default: '1 item',
		},
		imageUrl: {
			type: String,
			trim: true,
			default: '',
		},
		category: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'Category',
			required: true,
		},
		inStock: {
			type: Boolean,
			default: true,
		},
	},
	{ timestamps: true }
);

module.exports = mongoose.models.Product || mongoose.model('Product', productSchema);
