const logRequest = (req, res, next) => {
    console.log(`Request PATH   : ${req.path}`);
    console.log(`Request METHOD : ${req.method}`)
    next();
}

module.exports = logRequest;


