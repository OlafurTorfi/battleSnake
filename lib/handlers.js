"use strict";
/**
 * Don't worry about anything in this file,
 * focus on writing your snake logic in index.js endpoints.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.poweredByHandler = function (req, res, next) {
    res.setHeader('X-Powered-By', 'Battlesnake');
    next();
};
exports.fallbackHandler = function (req, res, next) {
    console.dir(req.baseUrl);
    // Root URL path
    if (req.baseUrl === '') {
        res.status(200);
        return res.send("\n      Battlesnake documentation can be found at\n       <a href=\"https://docs.battlesnake.io\">https://docs.battlesnake.io</a>.\n    ");
    }
    // Short-circuit favicon requests
    if (req.baseUrl === '/favicon.ico') {
        res.set({ 'Content-Type': 'image/x-icon' });
        res.status(200);
        res.end();
        return next();
    }
    // Reroute all 404 routes to the 404 handler
    var err = new Error();
    err.status = 404;
    return next(err);
};
exports.notFoundHandler = function (err, req, res, next) {
    if (err.status !== 404) {
        return next(err);
    }
    res.status(404);
    return res.send({
        status: 404,
        error: err.message || "These are not the snakes you're looking for",
    });
};
exports.genericErrorHandler = function (err, req, res, next) {
    var statusCode = err.status || 500;
    res.status(statusCode);
    return res.send({
        status: statusCode,
        error: err,
    });
};
