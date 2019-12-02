const { Router } = require('express');
const router = Router();
const { createCategories } = require('../controllers/categoriesController');
const { createQuestion } = require('../controllers/questionController');
const { createOptions } = require('../controllers/optionController')

router.post('/create_categories', async (req, res) => {
    try {
        const categories = await createCategories(req)
        res.json(categories)
    }
    catch (e) {
        throw new Error(`Error while creating categories ${e}`)
    }
})


router.post('/create_question', async (req, res) => {
    try {
        const questions = await createQuestion(req)
        res.json(questions)
    }
    catch (e) {
        throw new Error(`Error while creating question ${e}`)
    }
})

router.post('/create_options', async (req, res) => {
    try {
        const options = await createOptions(req)
    }
    catch (e) {
        throw new Error(`Error while creating options ${e}`)
    }
})

module.exports = router