const { Schema, Types, model } = require('mongoose');


const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      default: () => new Types.ObjectId(),
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/,
    },
    thoughts: [
        {
          type: Schema.Types.ObjectId,
          ref: 'Thought',
        }],
    friends: [{
      type: Schema.Types.ObjectId,
      ref: 'User',
    }],
  },

 
);

 userSchema.virtual('6').get(function() {
    return this.friends.length;
  })

const User = model('user', userSchema);
module.exports = User;

