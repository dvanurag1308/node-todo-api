var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect(process.env.PORT?'mongodb://anurag:chicken65@ds129023.mlab.com:29023/node-todoapp':'mongodb://localhost:27017/TodoApp', {
    useMongoClient: true
});

module.exports = {mongoose};