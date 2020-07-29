import mongoose from 'mongoose';

mongoose.connect('mongodb://mongo:27017', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
