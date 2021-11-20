const { Comment } = require('../models');

const commentData = [
    {
        comment_text: 'Nice post!',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Nice post!',
        user_id: 1,
        post_id: 2
    },
    {
        comment_text: 'Nice post!',
        user_id: 2,
        post_id: 3
    },
    {
        comment_text: 'Nice post!',
        user_id: 2,
        post_id: 4
    },
    {
        comment_text: 'Nice post!',
        user_id: 3,
        post_id: 5
    },
    {
        comment_text: 'Nice post!',
        user_id: 3,
        post_id: 6
    },
    {
        comment_text: 'Nice post!',
        user_id: 4,
        post_id: 7
    },
    {
        comment_text: 'Nice post!',
        user_id: 4,
        post_id: 8
    }    
];

const commentSeed = () => Comment.bulkCreate(commentData);

module.exports = commentSeed;