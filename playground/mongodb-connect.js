// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB Server');

    // db.collection('Todos').insertOne({
    //     text : 'Something to do',
    //     completed : false
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to Insert Todo collection', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name : 'Anurag',
    //     age : 23
    // }, (err, result) => {
    //     if(err){
    //         return console.log('Unable to Insert Users collection', err);
    //     }
    //     //console.log(JSON.stringify(result.ops, undefined, 2));
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});