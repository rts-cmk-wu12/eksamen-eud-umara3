var { createSingleUser, getSingleUser, updateSingleUser } = require("../controllers/user.controller");
var { isAuthorized, isRelevantUser } = require("../middleware/auth");

module.exports = function (router) {
	router.post("/api/v1/users", createSingleUser);
	router.get("/api/v1/users/:id", isAuthorized, isRelevantUser, getSingleUser);
	router.put("/api/v1/users/:id", isAuthorized, isRelevantUser, updateSingleUser);
};
