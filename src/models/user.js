import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  local:{
    type: String
  },
  date:{
    type: Date,
    default: Date.now()
  },
  validateSize:{
    type: Number,
    default: 0
},
});

export default mongoose.model('user', UserSchema);
