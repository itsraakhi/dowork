const jwt = require('jsonwebtoken');
const createError = require('./createError');

module.exports.verifyToken = (req, res, next) => {
	const token = req.cookies.accessToken;
	if (!token) return next(createError(401, 'You are not authenticated!'));

	jwt.verify(token, process.env.JWT_SECRET_KEY, async (err, payload) => {
		if (err) return next(createError(403, 'Token is not valid!'));
		req.userId = payload.id;
		req.isSeller = payload.isSeller;
		next();
	});
};
