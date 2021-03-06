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
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    }
});

module. exports = {Todo};