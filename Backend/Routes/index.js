const express = require('express');
const Category = require('../Models/categories');
const Product = require('../Models/products');

const router = express.Router();

router.get('/categories', async (request, response, next) => {
	try {
		const categories = await Category.find().sort({ name: 1 });
		response.json(categories);
	} catch (error) {
		next(error);
	}
});

router.post('/categories', async (request, response, next) => {
	try {
		const category = await Category.create(request.body);
		response.status(201).json(category);
	} catch (error) {
		next(error);
	}
});

router.get('/products', async (request, response, next) => {
	try {
		const products = await Product.find()
			.populate('category', 'name')
			.sort({ name: 1 });
		response.json(products);
	} catch (error) {
		next(error);
	}
});

router.post('/products', async (request, response, next) => {
	try {
		const product = await Product.create(request.body);
		response.status(201).json(product);
	} catch (error) {
		next(error);
	}
});

module.exports = router;
