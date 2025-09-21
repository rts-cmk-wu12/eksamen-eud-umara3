var { Newsletter } = require("../models/models");

async function signUp(req, res, next) {
	try {
		await Newsletter.create({
			email: req.fields.email
		});
		res.status(204).end();
	} catch (error) {
		console.log(error);
		res.status(500).end();
	}
}

module.exports = {
	signUp
};
