var models = require('../models');

exports.projectInfo = function(req, res) { 
  var projectID = req.params.id;
  models.project
  .find({"_id": projectID})
  .sort('date')

  .exec(afterQuery);

  // query for the specific project and
  // call the following callback

  function afterQuery(err, projects) {
    if(err) console.log(err);
    res.json(projects[0]);
  }
}

exports.addProject = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // make a new Project and save it to the DB
  // YOU MUST send an OK response w/ res.send();

  var newPost = new models.project ({ 
    "title": form_data['project_title'],
    "date": Date.parse(form_data['data']),
    "image": form_data['image_url']

  })

  newPost.save(addCallback);

  function addCallback(err) {
    if(err) {console.log(err); res.send(500);}
    res.send(200);
  }
  
}

exports.deleteProject = function(req, res) {
  var projectID = req.params.id;

  models.Project
  .find({"_id": projectID})
  .remove()
  .exec(deleteCallback);

  function deleteCallback(err, deleteBlogs) {
    if(err) {console.log(err); res.send(500);}
    res.send(200);
  }

  // find the project and remove it
  // YOU MUST send an OK response w/ res.send();
}