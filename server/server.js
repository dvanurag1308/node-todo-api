var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
var {ObjectID} = require('mongodb');

var app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        task : req.body.task
    });

    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos});
    }, (err) => {
        res.status(400).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(404).send("Invalid Id is passed");
    }
    Todo.findById(req.params.id).then((todo) => {
        if(!todo){
            return res.status(404).send(`No Todos found for id ${req.params.id}`);
        }
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.delete('/todos/:id', (req,res) => {
    if(!ObjectID.isValid(req.params.id)){
        return res.status(404).send('Invalid id is passed');
    }
    Todo.findByIdAndRemove(req.params.id).then((todo) => {
        if(!todo){
            return res.status(404).send('No todos found for the id');
        }
        res.send({todo});
    }, (e) => {
        res.status(400).send(e);
    });
});

app.listen(port, () => {
    console.log(`Server Started on port: ${port}`);
});

module.exports = {app};