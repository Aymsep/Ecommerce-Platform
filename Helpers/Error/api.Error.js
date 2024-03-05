class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'UnauthorizedError';
    this.statusCode = 401;
  }
}

class AccessDeniedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AccessDeniedError';
        this.statusCode = 403;
    }
}



module.exports = {
    UnauthorizedError
}