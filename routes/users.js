const express = require('express');
const router = express.Router();

const Gender = {
    Male: "M",
    Female: "F"
};

const users = [{
    "name": "Alice",
    "age": 23,
    "gender": Gender.Male
}];

/* GET users listing. */
router.get('/', function (req, res, next) {
    res.status(200).send({"users": users});
});

module.exports = router;
