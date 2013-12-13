/**
 * Created by Basel on 12/13/13.
 */
// mongoose API
var mongoose = require('mongoose');

// Define db Schema and Model
var Priority = mongoose.model('priority', {
    priority: String
});

module.exports.Priority = Priority;



