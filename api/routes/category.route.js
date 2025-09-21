const { createCategory, getAllCategories, getListingsInCategory } = require("../controllers/category.controller");

module.exports = function (router) {
	router.post("/api/v1/categories", createCategory);
	router.get("/api/v1/categories", getAllCategories);
	router.get("/api/v1/categories/:id", getListingsInCategory);
};
