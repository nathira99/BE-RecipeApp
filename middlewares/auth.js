const jwt = require('jsonwebtoken');

const isAuthenticated = async ( req, res, next ) => {

    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
     
    if (!token) {
        return res.status(401).json({ message: 'No token provided' });
    }

    try {
        // verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.userId = decoded.userId;

        // proceed to the next middleware or route handler
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' });
    }

}

module.exports = {
    isAuthenticated
}