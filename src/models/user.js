import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  local:{
    type: String
  },
});

export default mongoose.model('user', UserSchema);
