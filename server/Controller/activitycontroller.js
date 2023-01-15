const activities = require('../Model/activity');

exports.addActivity = (req, res) => {

    const activity = new activities({
        name: req.body.name,
        description: req.body.description,
        activity_type: req.body.activity_type,
        duration: req.body.duration,
        date: req.body.date
    })

    activity.save((err, activityData) => {
        if (err) {
            res.status(500).json({ message: err })
        } else {
            res.status(200).json({ message: activityData })
        }
    })
}

exports.getActivity = (req, res) => {
    activities.find({}, function (err, activityData) {
        if (err) {
            res.status(500).json({ message: err })
        }
        else {
            res.status(200).json({ message: activityData })
        }
    })
}

exports.editActivity = async (req, res) => {
    try {
        const result = await activities.findByIdAndUpdate({ _id: req.body._id },
            {
                $set: {
                    name: req.body.name
                }

            },
            {
                new: true
            }

        )
        console.log("before query execution", result);
        res.status(200).json({ message: result })
    }
    catch (err) {
        res.status(500).json({ message: err })
        console.log(err)
    }
}


