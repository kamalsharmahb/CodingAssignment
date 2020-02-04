var Post = require('../models/post');
var mongoose = require('mongoose');
var seq = require('seq');

//Simple version, without validation or sanitation
exports.test = function(req, res, next) {
    res.send('Greetings from the Post controller!');
};

exports.post_all = function(req, res, next) {
    Post.aggregate([
        { $match: {} },
        {
            $lookup: {
                from: 'users',
                localField: 'userId',
                foreignField: '_id',
                as: 'dataObject'
            }
        },
        { $unwind: '$dataObject' },
        {
            $project: {
                id: 1,
                title: 1,
                body: 1,
                'dataObject.name': 1,
                'dataObject.username': 1,
                'dataObject.email': 1,
                'dataObject.phone': 1
            }
        }
    ]).exec(function(err, posts) {
        if (err) return next(err);
        // console.log(posts);
        res.render('post', { page_title: 'List of Posts', data: posts });
    });
};
