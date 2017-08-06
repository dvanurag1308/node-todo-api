const {SHA256} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


var password = '123abc!';

// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// });

bcrypt.compare(password, '$2a$10$FsUcow9WDBNj.r00/P9Ey.9be0E8jdzwecxJW0v7PUcR254NPLOhS', (err, result) => {
    console.log(result);
});

// var data = {
//     id: 10
// };

// var token = jwt.sign(data, '123abc');
// console.log(token);

// var decoded = jwt.verify(token, '123ab');

// console.log(decoded);

// var message = 'i am user number 2';

// var hash = SHA256(message).toString();

// console.log(`Message: ${message}`);

// console.log(`Hash: ${hash}`);

// var data = {
//     id: 4
// };

// var token ={
//     data,
//     hash: SHA256(JSON.stringify(data) + 'someSecret').toString()
// }

// // token.data.id = 5;
// // token.hash = SHA256(JSON.stringify(data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'someSecret').toString();

// if(token.hash === resultHash){
//     console.log('Data was not changed');
// } else {
//     console.log('Data was changed. Do not trust');
// }