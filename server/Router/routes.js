const routes = require('express').Router();
const activityController = require('../Controller/activitycontroller');

routes.post('/addActivity', activityController.addActivity);
routes.get('/getActivity', activityController.getActivity);
routes.put('/editActivity', activityController.editActivity);



module.exports = routes;