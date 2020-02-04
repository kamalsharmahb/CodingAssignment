var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PostSchema = new Schema(
    {
        id: { type: Number },
        title: { type: String },
        userId: { type: Schema.Types.ObjectId, ref: 'Users' },
        body: { type: String }
    },
    { collection: 'posts' }
);

// Export the model
module.exports = mongoose.model('posts', PostSchema);
