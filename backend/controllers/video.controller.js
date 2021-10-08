const models = require('../models');

// inserting video in table 
const video = (req, res) => {
    const video = {
        title: req.body.title,
        channel_id: req.body.channel_id
    }

    models.video.create(video)
        .then(result => {
            res.status(201).json({
                message: "video inserted successfully"
            })
        })
        .catch(error => {
            res.status(500).json({
                error: "video insertion failed!"
            })
        })
}

// get videos by channel_id
function view(req, res) {
    const channel_id = req.params.channel_id;

    models.video.findAll({
        where: {
            channel_id: channel_id
        }
    })
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({
            error: "getting videos failed!"
        })
    });
}

// deleting video by video id
const destroy = (req, res) => {
    const id = req.params.id;
    models.video.destroy({
        where: {
            id: id
        }
    })
    .then(res.json({message: "video deleted successfully!"}))
    .catch(err => res.status(500).json(err.message))
}

module.exports = {
    video,
    view,
    destroy,
}