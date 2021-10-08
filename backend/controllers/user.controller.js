const models = require('../models');

const user = (req, res) => {
    const user = {
        name: req.body.name,
        email: req.body.email
    }

    models.user.create(user)
        .then(result => {
            res.status(201).json({
                message: "user inserted successfully"
            })
        })
        .catch(error => {
            res.status(500).json({
                error: "user insertion failed!"
            })
        });
}

function login(req, res) {
    const email = req.body.email;
    console.log(email);

    models.user.findAll({
        where: {
            email: email
        }
    })
    .then(result => {
        res.status(200).json(result)
    })
    .catch(error => {
        res.status(500).json({
            error: "getting users failed!"
        })
    });
}

module.exports = {
    save: user,
    login: login
}