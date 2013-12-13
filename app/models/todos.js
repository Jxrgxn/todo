var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/');

var Todo = mongoose.model('todos',
    {
	text : String
});


module.exports.Todo = Todo;

