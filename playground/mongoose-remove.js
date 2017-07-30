const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');


// Todo.remove({}).then((res) => {

// }, (e) => {

// });

// Todo.findOneAndRemove({_id : 'sdsds'}).then((todo) => {

// }, (err) => {

// });

Todo.findByIdAndRemove('asdf').then((todo) => {
    console.log('Todo Removed', JSON.stringify(todo, undefined, 2));
}, (e) => {
    console.log('Unable to delete todo',e);
});