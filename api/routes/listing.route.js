var { createSingleListing, getSingleListing, getAllListings, updateSingleListing, deleteSingleListing } = require("../controllers/listing.controller");
var { isAuthorized } = require("../middleware/auth");

module.exports = function (router) {
	router.post("/api/v1/listings", isAuthorized, createSingleListing);
	router.get("/api/v1/listings/:id", getSingleListing);
	router.get("/api/v1/listings", getAllListings);
	router.put("/api/v1/listings/:id", isAuthorized, updateSingleListing);
	router.delete("/api/v1/listings/:id", isAuthorized, deleteSingleListing);
};
