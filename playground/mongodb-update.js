const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if(err){
        return console.log('Unable to connect to MongoDB Server');
    };
    console.log('Connected to MongoDB');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID('59715a446844e1adb3883df3')
    // }, {
    //     $set : {
    //         completed : true
    //     }
    // }, {
    //     returnOriginal : false
    // }).then((result) => {
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID('597156cb6844e1adb3883c94')
    }, {
        $set : {
            name : 'Anurag'
        },
        $inc : {age : 1}
    }, {
        returnOriginal : false
    }).then((result) => {
        console.log(result);
    });
});