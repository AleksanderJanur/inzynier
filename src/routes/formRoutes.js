const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Forms = mongoose.model('Forms');

const router = express.Router();

router.use(requireAuth);

router.get('/forms', async (req, res) => {
    const forms = await Forms.find({ userId: req.user._id });

    res.send(forms);
});

router.post('/forms', async (req, res) => {
    const { form } = req.body;

    if (!form) {
        return res
            .status(422)
            .send({ error: 'You must provide a name and locations' });
    }

    try {
        const forms = new Forms({ form, userId: req.user._id });
        await forms.save();
        res.send(forms);
    } catch (err) {
        res.status(422).send({ error: err.message });
    }
});

module.exports = router;
