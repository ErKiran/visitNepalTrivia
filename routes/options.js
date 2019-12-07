const { Router } = require('express');
const router = Router();
const { createOptions, getOptions } = require('../controllers/optionController');

router.post('/create_options', async (req, res) => {
    try {
        const options = await createOptions(req);
        if (options.status === 404) {
            return res.status(options.status).json(options)
        }
        res.json(options[0].dataValues);
    }
    catch (e) {
        throw new Error(`Error while creating options ${e}`)
    }
})

router.get('/get_options', async (req, res) => {
    try {
        const options = await getOptions();
        res.json(options)
    }
    catch (e) {
        throw new Error(`Error while getting options ${e}`)
    }
})

module.exports = router