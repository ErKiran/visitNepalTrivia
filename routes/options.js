const { Router } = require('express');
const router = Router();
const {
    createOptions,
    getOptions,
    updateOptions
} = require('../controllers/optionController');

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

router.patch('/options/:option_id', async (req, res) => {
    try {
        const updatedOptions = await updateOptions(req);
        if (updatedOptions.status === 400) {
            return res.status(400).json(updatedOptions)
        }
        res.json(updatedOptions)
    }
    catch (e) {
        throw new Error(`Error while updating option_id: ${req.params.option_id} ${e}`)
    }
})

module.exports = router