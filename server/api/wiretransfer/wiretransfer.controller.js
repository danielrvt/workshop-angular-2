'use strict';

var _ = require('lodash');

// Get list of wiretransfers
exports.index = function(req, res, next) {

    if (["ds65f", "df12g"].indexOf(req.body.source_id) <= -1) {
        res.statusCode(400);
        res.json({
            msg: "La cuenta no existe"
        });
    }

    req.body.transact.forEach(function(e){
        if (!e.amount || !e.id) {
            res.statusCode(400);
            res.json({
                msg: "falta id y monto para alguna cuenta"
            });
        }
    });
  
    var reciepts = [];
    req.body.transact.forEach(function (e) {
        reciepts.push(Math.random().toString(36).substr(2, 10));
    });
    res.json(reciepts);
};
