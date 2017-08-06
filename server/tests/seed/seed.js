const {ObjectID} = require('mongodb');
const jwt = require('jsonwebtoken');

const {Todo} = require('../../models/todo');
const {User} = require('../../models/user');


const todos = [{
    _id : new ObjectID(),
    task : 'first test todo 1'
}, {
    _id : new ObjectID(),
    task: 'second test todo 2',
    completedAt: 333
}];


const userOneId = new ObjectID();
const userTwoId = new ObjectID();
const users = [{
    _id : userOneId,
    email: 'anurag1@example.com',
    password: 'test123',
    tokens: [{
        access: 'auth',
        token: jwt.sign({_id: userOneId, access: 'auth'}, 'abc123').toString()
    }]
}, {
    _id: userTwoId,
    email: 'anurag2@example.com',
    password: 'test123'
}];

const populateTodos = (done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
};

const populateUsers = (done) => {
    User.remove({}).then(() => {
        var userOne = new User(users[0]).save();
        var userTwo = new User(users[1]).save();
        return Promise.all([userOne, userTwo])
    }).then(() => done());
};


module.exports = {
    populateTodos,
    todos,
    populateUsers,
    users
};