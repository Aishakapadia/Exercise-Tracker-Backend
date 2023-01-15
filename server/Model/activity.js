const mongoose = require('mongoose');
const Schema = mongoose.Schema;


var activitySchema = new Schema(
    {
        name:{
            type:String,
            required:[true,'Activity Name is required']
        },
        description:{
            type:String,
            required:[true, 'Activity Description is required']
       },
        activitytype: {
            type:String,
            enum:['run', 'bicycle', 'swim', 'walk', 'hike'],
            required:[false, 'Please select one Activity type']
        },
        duration:{
            type:String,
            required:[true, 'Activity Description is required']
        },
        date:{
            type:Date,
            required:[true, 'Activity Description is required']
        }

    }
);

module.exports = mongoose.model('Activity',activitySchema);