const db = require("../models");

module.exports = {
    findAll: function(req,res){
        db.Book.find(req.query)
            .then(dbBook =>res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    findOne: function(req,res){
        db.Book.findById(req.params.id)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    update: function(req,res){
        db.Book.findOneAndUpdate({_id: req.params.id},req.body)
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    },
    delete: function(req, res){
        db.Book.findById({_id: req.params.id})
            .then(dbBook => dbBook.remove())
            .then(dbBook => res.json(dbBook))
            .catch(err => res.status(422).json(err));
    }
};