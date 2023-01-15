const routes = require('express').Router();
const activityController = require('../Controller/activitycontroller');

routes.post('/addActivity', activityController.addActivity);
routes.get('/getActivity', activityController.getActivity);
routes.put('/editActivity', activityController.editActivity);
routes.delete('/deleteActivity', activityController.deleteActivity);



module.exports = routes;