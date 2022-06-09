// import and congrigate all models
const User = require('./User');
const Post = require('./Post');

// create assoctiations
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id',
});

// export all models for project use
module.exports = { User, Post };