const { signUp } = require("../controllers/newsletter.controller");

module.exports = function (router) {
	router.post("/api/v1/newsletter", signUp);
};
