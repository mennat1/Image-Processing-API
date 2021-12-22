"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function validateparameters(req, res, next) {
    var query = req.query;
    var requiredParameters = ['filename', 'height', 'width'];
    for (var i = 0; i < requiredParameters.length; i++) {
        var parameter = requiredParameters[i];
        if (query[parameter] === undefined) {
            res.status(400).send('Error: Parameter(s) missing..');
            return;
        }
        var parameterValue = query[parameter];
        if (parameter == 'filename' && typeof parameterValue !== 'string') {
            res.status(400).send('Filename should be a string');
            return;
        }
        if (parameter == 'height' || parameter == 'width') {
            var numberValue = Number(parameterValue);
            if (!numberValue) {
                res.status(400).send('height and width should be numbers');
                return;
            }
        }
    }
    next();
}
exports.default = validateparameters;
