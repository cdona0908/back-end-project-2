const { Helpful } = require('../models');

// seeded data for posts marked as helpful

const helpfuldata = [
    {
        user_id: 1,
        post_id: 1
    },
    {
        user_id: 1,
        post_id: 2
    },
    {
        user_id: 1,
        post_id: 4
    },
    {
        user_id: 1,
        post_id: 5
    },
    {
        user_id: 1,
        post_id: 7
    },
    {
        user_id: 1,
        post_id: 8
    },
    {
        user_id: 2,
        post_id: 1
    },
    {
        user_id: 2,
        post_id: 2
    },
    {
        user_id: 2,
        post_id: 3
    },
    {
        user_id: 2,
        post_id: 5
    },
    {
        user_id: 2,
        post_id: 6
    },
    {
        user_id: 2,
        post_id: 7
    },
    {
        user_id: 2,
        post_id: 8
    },
    {
        user_id: 3,
        post_id: 1
    },
    {
        user_id: 3,
        post_id: 2
    },
    {
        user_id: 3,
        post_id: 3
    },
    {
        user_id: 3,
        post_id: 4
    },
    {
        user_id: 3,
        post_id: 5
    },
    {
        user_id: 3,
        post_id: 7
    },
    {
        user_id: 3,
        post_id: 8
    }

];


const seedHelpfuls = () => Helpful.bulkCreate(helpfuldata);

module.exports = seedHelpfuls;