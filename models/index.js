const User = require('./User');
const Blog = require('./Blog');

//user has many blogs
User.hasMany(Blog, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

//blog belongs to user
Blog.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = { User, Blog };
