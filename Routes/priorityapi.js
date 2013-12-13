var Priority = require('../app/models/priority').Priority;

// Create
exports.create = function(req, res) {

    Priority.create({priority: req.body.priority     ,
            id: req.body.id},
        function(err, placeholder) {
            if (!err) {
                console.log(placeholder);
                res.send(placeholder);
            } else if (err) {
                res.send(err);
            }
        }
    );
}

// Read
exports.read = function(req, res) {

    Priority.find(function(err, Priority) {
        if (!err) {
            res.send(Priority);
        } else if (err) {
            res.send(err);
        }
    });
};

// Delete
exports.delete = function(req, res) {

    Priority.remove({id: req.params.id}, function(err, todos) {
        if (!err) {
            res.send(todos);
        } else if (err) {
            res.send(err);
        }
    });
}/**
 * Created by Basel on 12/13/13.
 */
