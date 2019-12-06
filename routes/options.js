const { Router } = require('express');
const router = Router();
const { createOptions } = require('../controllers/optionController');

router.post('/create_options', async (req, res) => {
    try {
        const options = await createOptions(req);
        res.json(options[0].dataValues);
    }
    catch (e) {
        throw new Error(`Error while creating options ${e}`)
    }
})

module.exports = router