const { Category, Listing, Asset, User } = require("../models/models");

async function createCategory(req, res, next) {
	try {
		let categoryData = await Category.create({
			name: req.fields.name
		});
		res.json(categoryData);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function getAllCategories(req, res, next) {
	try {
		let categoryData = await Category.findAll();
		res.json(categoryData);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

async function getListingsInCategory(req, res, next) {
	try {
		let categoryData = await Listing.findAll({
			where: {
				categoryId: req.params.id
			},
			include: [Asset, User]
		});
		res.json(categoryData);
	} catch (error) {
		console.error(error);
		res.status(500).end();
	}
}

module.exports = {
	createCategory,
	getAllCategories,
	getListingsInCategory,
};