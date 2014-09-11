'use strict';

var _ = require('lodash');
var url = require('url');

// Get list of products
exports.index = function(req, res) {

    var url_parts = url.parse(req.url, true);
    var query = url_parts.query;

  if (query.cid != "2g3f4fg24gfhhgf234ghfgh324") { 
     res.statusCode= 401;
     res.json({
        msg: "Unauthorized"   
     }); 
  } else {
      res.json({
          "cuentas-propias":[{id: "ds65f", label: "Cuenta Corriente"}, {id:"df12g", label:"Cuenta de Ahorros"}], 
          "tarjetas-propias": [{id: "kjh324", label: "Tarjeta Dorada", saldo_actual: 123.21, pago_total: 32.2234, disponible: 400.34}], 
          "cuentas-terceros": [{id: "ds65f", label: "Cuenta Corriente"}, {id:"df12g", label:"Cuenta de Ahorros"}, {id:"df12g", label:"Cuenta de Ahorros"}]
      });
    }
};
