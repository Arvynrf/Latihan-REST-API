const logRequest = (req, res, next) => {
    console.log("Terdapat request kedalam PATH:",req.path);
    next();
}

module.exports = logRequest;
