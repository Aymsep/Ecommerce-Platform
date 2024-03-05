const jwt = require("jsonwebtoken");
const server = require("../Config/config");

class JwtManager {
    sign(payload, expiresIn = "1d") {
        try {
            const token = jwt.sign(payload, server.jwtSecretKey, { expiresIn });
            return token;
        } catch (error) {
            throw error;
        }
    }

    verify(token) {
        try {
            const decoded = jwt.verify(token, server.jwtSecretKey);
            return decoded;
        } catch (error) {
            throw new Error(error);
            // const errorMessage = error.message || "Invalid token";
            // const statusCode = error.name === "JsonWebTokenError" ? 401 : 500;

            // return {
            //     status: statusCode,
            //     error: errorMessage,
            // };
        }
    }
}

module.exports = new JwtManager();
