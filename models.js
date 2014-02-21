
var Mongoose = require('mongoose');

var ProjectSchema = new Mongoose.Schema({
  // fields are defined here
//my stuff
"title": String,
"date": Date,
"summary": String,
"image": String
//end of my stuff
});

exports.Project = Mongoose.model('Project', ProjectSchema);


