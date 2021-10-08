const models = require('../models');

const channel = (req, res) => {
    const channel = {
        name: req.body.name,
        user_id: req.body.user_id
    }

    models.channel.create(channel)
        .then(result => {
            res.status(201).json({
                message: "channel created successfully"
            })
        })
        .catch(error => {
            res.status(500).json({
                error: "channel creation failed!"
            })
        })
}

// get channels by user_id
function view(req, res) {
    const user_id = req.params.user_id;
    // console.log(email);

    models.channel.findAll({
        where: {
            user_id: user_id
        }
    })
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({
            error: "getting channels failed!"
        })
    });
}

// deleting channel by channel id
const destroy = (req, res) => {
    const id = req.params.id; // channel id
    models.channel.destroy({
        where: {
            id: id
        }
    })
    .then(res.json({message: "channel deleted successfully!"}))
    .catch(err => res.status(500).json(err.message))
}

module.exports = {
    create: channel,
    destroy: destroy,
    channels: view
}