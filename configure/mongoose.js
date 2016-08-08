var data = require('../data/data.js');


module.exports = (mongoose) => {
  //Get Schema
  var Schema = mongoose.Schema;

  //Connect to host
  mongoose.Promise = global.Promise;
  mongoose.connect('mongodb://localhost:27017/voting-app');

  //==========================
  //SET UP MODEL
  //==========================
    //user
    var user_schema = new Schema({
      facebook_id: String,
      username: String,
      photo: String,
      email: String,
      num_polls: {type:Number, default: 0}
    });

    data.user = mongoose.model('user', user_schema);

    //polls
    var poll_schema = new Schema({
      owner_id: Schema.Types.ObjectId,
      name: String,
      options: [{value: String, num_votes: Number}]
    });

    data.poll = mongoose.model('poll', poll_schema);
}
