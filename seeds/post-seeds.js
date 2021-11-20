const { Post } = require('../models');

const postData = [
    {
        title: 'Favorite color is blue',
        content: 'Because it is the color of the sky.',
        user_id: 1
    },
    {
        title: "I'm tall",
        content: "I'm 6'5",
        user_id: 1
    },
    {
        title: 'Favorite color is orange',
        content: 'Because it is the color of the sun.',
        user_id: 2
    },
    {
        title: "I'm skinny",
        content: "I'm 100 lbs",
        user_id: 2
    },
    {
        title: 'Favorite color is yellow',
        content: 'Because it is the color of the daisies.',
        user_id: 3
    },
    {
        title: "I'm short",
        content: "I'm 5'0",
        user_id: 3
    },
    {
        title: 'Favorite color is green',
        content: 'Because it is the color of the trees.',
        user_id: 4
    },
    {
        title: "I'm fat",
        content: 'I weigh 300 lbs',
        user_id: 4
    },
];

const postSeed = () => Post.bulkCreate(postData);

module.exports = postSeed;
