const expect = require('expect');
const request = require('supertest');
const {ObjectID} = require('mongodb');

const {app} = require('./../server');
const {Todo} = require('./../models/todo');

const todos = [{
    _id : new ObjectID(),
    task : 'first test todo'
}, {
    _id : new ObjectID(),
    task: 'second test todo'
}];

beforeEach((done) => {
    Todo.remove({}).then(() => {
        return Todo.insertMany(todos);
    }).then(() => done());
});

describe('POST /todos', () => {
    it('should create a new todo', (done) => {
        var task = 'Test todo task';

        request(app)
            .post('/todos')
            .send({task})
            .expect(200)
            .expect((res) => {
                expect(res.body.task).toBe(task);
            })
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                Todo.find({task}).then((todos) => {
                    expect(todos.length).toBe(1);
                    expect(todos[0].task).toBe(task);
                    done();
                }).catch((e) => {
                    done(e);
                });
            });
    });

    it('should not create todo with invalid body data', (done) => {

        request(app)
            .post('/todos')
            .send()
            .expect(400)
            .end((err, res) => {
                if(err){
                    return done(err);
                }
                Todo.find().then((todos) => {
                    expect(todos.length).toBe(2);
                    done();
                }).catch((e) => {
                    done(e);
                });
            });
    });
});

describe('GET /todos', () => {
    it('should get all Todos', (done) => {
        request(app)
            .get('/todos')
            .expect(200)
            .expect((res) => {
                expect(res.body.todos.length).toBe(2);
            })
            .end(done);
    });

describe('GET /todos/:id', () => {
    it('should get todo for id', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.task).toBe(todos[0].task);
            })
            .end(done);
    });

    it('should get 404 status for invalid id', (done) => {
        request(app)
            .get(`/todos/${todos[0]._id.toHexString()+'we34'}`)
            .expect(404)
            .end(done);
    });

    it('should get 404 status for no results matching', (done) => {
        request(app)
            .get('/todos/597e21e3dfcba24468f9a26c')
            .expect(404)
            .end(done);
    });
});

describe('Delete /todos/:id', () => {
    it('should delete todo for id', (done) => {
        request(app)
            .delete(`/todos/${todos[0]._id.toHexString()}`)
            .expect(200)
            .expect((res) => {
                expect(res.body.todo.task).toBe(todos[0].task)
            })
            .end(done);
    });

    it('should get 404 for invalid id', (done) => {
        request(app)
            .delete('/todos/1234')
            .expect(404)
            .end(done);
    });

    it('should get 404 status for no results matching the id', (done) => {
        request(app)
            .delete('/todos/597e6f70b306543254ba11be')
            .expect(404)
            .end(done);
    });
});

});