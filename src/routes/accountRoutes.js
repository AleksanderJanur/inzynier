const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const router = express.Router();
const User = mongoose.model('User');
router.use(requireAuth);

router.get('/getUser', async (req, res) => {
    const user = await User.findOne({ _id: req.user._id });
    console.log(user)
    res.send(user);
});
router.post('/updateUser', async (req, res) => {
    const user = await User.updateOne(
        { _id: req.user._id },
        {$set: req.body});
    console.log(user)
    res.send(user,"To update?");
});


module.exports = router;
