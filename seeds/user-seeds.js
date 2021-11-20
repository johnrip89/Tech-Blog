const { User } = require('../models');

const userData = [
    {
        username: 'john',
        email: 'john@gmail.com',
        password: '12345'
    },
    {
        username: 'jeff',
        email: 'jeff@gmail.com',
        password: '12345'
    },
    {
        username: 'bill',
        email: 'bill@gmail.com',
        password: '12345'
    },
    {
        username: 'bob',
        email: 'bob@gmail.com',
        password: '12345'
    },   
];

const userSeed = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = userSeed;