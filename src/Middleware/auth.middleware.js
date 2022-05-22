const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || 'todoSecret';

const isAuthenticated = (req, res, next) => {
    const authToken = req.headers['authorization'];
    if (authToken === undefined) {
        res.status(401).json({
            statusCode: 401,
            message: 'please login again to continue'
        })
        return;
    }
    else if (!authToken.includes('Bearer')){
        res.status(401).json({
            statusCode: 401,
            message: 'please login again to continue'
        })
        return;
    }
    else {
        let authorization = authToken.split(' ')[1];
        jwt.verify(authorization, JWT_SECRET, (err, decoded) => {
            if (err) {
                res.status(401).json({
                    statusCode: 401,
                    message: 'session expired'
                })
                return;
            }
            else {
                res.locals.email = decoded.email;
                res.locals.userId = decoded.id;
                next();
            }
        })
    }
}

module.exports = isAuthenticated;