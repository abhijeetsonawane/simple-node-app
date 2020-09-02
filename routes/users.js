const express = require('express');
const router = express.Router();
const user_repository = require('../repository/users');

router.post("/", function (req, res, next) {
    return user_repository.add(req.body.user)
        .then(user_id => {
            res.status(201).send({"user_id": user_id});
        })
});

/* GET users listing. */
router.get('/', function (req, res, next) {
    return user_repository.fetch_all_users()
        .then(db_users => {
            res.status(200)
                .send({"users": db_users || {}});
        })
});

module.exports = router;
