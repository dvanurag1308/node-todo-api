const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '597d6e4bacb5872c581a47a011';

// if(!ObjectID.isValid(id)){
//     console.log('Id not valid');
// }

var userId = '597d465f62dbb71558bc0b7c';
if(!ObjectID.isValid(userId)){
    return console.log('Id is invalid');
}

// Todo.find({
//     _id : id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by Id', todo);
// }).catch((e) => {
//     console.log(e);
// });

User.findById(userId).then((user) => {
    if(!user){
        return console.log('UserId not found');
    }
    console.log('User', user);
}).catch((e) => {
    console.log(e);
});