const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

const Form = mongoose.model('Form');

const router = express.Router();

router.use(requireAuth);

router.get('/forms', async (req, res) => {
    const forms = await Form.find();

    res.send(forms);
});

router.post('/forms', async (req, res) => {
    const { form } = req.body;
    console.log(form)
    //dodac tutaj kilka rzeczy
    if (form.name === undefined) {
        return res
            .status(422)
            .send({ error: 'You must provide a name and locations' });
    }

    try {
        console.log(req.user)
        const formSchema = new Form({ form, userId: req.user._id });
        await formSchema.save();
        res.status(200).send(form);
    } catch (err) {
        res.status(422).send({ error: err.message+"Drugi B" });
    }
});

module.exports = router;
