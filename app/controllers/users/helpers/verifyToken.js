const jwt = require('jsonwebtoken');
const secretKey = process.env.SECRET_KEY;

const verifyToken = async (req, res, next) => {
    try {
        let token = null;

        if (req.headers.authorization) {
            token = req.headers.authorization.replace('Bearer ', '').trim();
        } else if (req.body.token) {
            token = req.body.token.trim();
        } else if (req.query.token) {
            token = req.query.token.trim();
        }

        if (!token) {
            res.status(401).json({ message: 'Unauthorized' });

        }
        else {
            const decoded = jwt.verify(token, secretKey);
            req.user = decoded;
            next();
        }
    } catch (error) {
        // res.status(401).json({ message: error.message });
        console.log(error, 'err');
    }
};

module.exports = { verifyToken };
