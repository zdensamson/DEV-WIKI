const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reactions');
const dateFormat = require('../utils/dateFormat');

const postSchema = new Schema(
    {
        postType: {
            type: Boolean,
            // true = PUSH false = PULL
            required: true
        },
        // FE BE or Full-Stack
        skillTag: {
            type: String,
            required: true
        },
        blurb: {
            type: String,
            required: true,
            maxlength: 300
        },
        username: {
            type: String, 
            required: true
        },
        // is this push/pull complete? true = YES false = NO
        resolved: {
            type: Boolean,
            default: false
        },
        reactions: [reactionSchema],
        budget: {
            type: Number
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: timestamp => dateFormat(timestamp)
        }

    }
);

postSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Post = model('Post', postSchema);

module.exports = Post;