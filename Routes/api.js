// Grab 'Todo' model so CRUD API can manipulate it
var Todo = require('../app/models/todos').Todo;

// Create

exports.create = function(req, res) {

    Todo.create({text: req.body.text},
        function(err, todos) {
            if (!err) {
                res.send(todos);
            } else if (err) {
                res.send(err);
            }
        }
    );
}

// Read	
exports.read = function(req, res) {

    Todo.find(function(err, todos) {
        if (!err) {
            res.send(todos);
        } else if (err) {
            res.send(err);
        }
    });
}

// Update
exports.update = function(req, res) {

    Todo.findById(req.params._id, function(err, todos) {
        todos.text = req.body.text;
        console.log(todos);
        todos.save(function() {
            if (!err) {
                res.send(todos);
            } else if (err) {
                res.send(err);
            }
        });
    });
}

// Delete
exports.delete = function(req, res) {

    Todo.remove({_id: req.params._id}, function(err, todos) {
        if (!err) {
            res.send(todos);
        } else if (err) {
            res.send(err);
        }
    });
}
