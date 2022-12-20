'use strict'

let Conversiones = require('../models/conversiones')
let controller = {
    
    saveConversion: function(req, res) {
        let conversiones = Conversiones();

        let params = req.body;
        conversiones.input_unit = params.input_unit;
        conversiones.input_type = params.input_type;
        conversiones.output_unit = params.output_unit;
        conversiones.output_type = params.output_type;

        conversiones.save((err, conversionesSave) => {
            if(err) return res.status(500).send(err);
            if(!conversionesSave) return res.status(404).send({message: 'Failed to save conversion'});
        
            return res.status(200).send({conversiones: conversionesSave}) 
        });
    },

    getConversion: function(req, res) {
        Conversiones.find({}, (err, conversiones) => {
            if(err) return res.status(500).send(err);
            if(!conversiones) return res.status(404).send({message: 'Failed to get conversions'});
        
            return res.status(200).send({conversiones: conversiones})
        });
    },

    deleteConversion: function(req, res) {
        let conversionId = req.params.id;

        Conversiones.findByIdAndRemove(conversionId, (err, conversionDelete) => {
            if(err) return res.status(500).send(err);
            if(!conversionDelete) return res.status(404).send({message: 'Failed to delete conversion'});
        
            return res.status(200).send({conversiones: conversionDelete})

        });
    }
};

module.exports = controller;