var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    task : {
        type: String,
        required : [true, 'task required'],
        minlength : 1,
        trim : true
    },
    completed : {
        type: Boolean,
        default: false
    },
    completedAt : {
        type: Number,
        default : null
    }
});

module. exports = {Todo};