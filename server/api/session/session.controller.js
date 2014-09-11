'use strict';

var _ = require('lodash');

// Get list of sessions
exports.get = function(req, res) {
  res.json([{
    cid: "2g3f4fg24gfhhgf234ghfgh324",
    active: true    
  }]);
};

// Post a new session
exports.post = function(req, res) {

   if (req.body.email == "user@synergy-gb.com" && req.body.password == "123" ) {
    res.json({
        cid: "2g3f4fg24gfhhgf234ghfgh324",
        active: true    
    }); 
   } else {
    res.statusCode = 401
    res.json({
        msg: "Unauthorized"    
    });    
   }
};
