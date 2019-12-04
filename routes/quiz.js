const { Router } = require('express');
const router = Router();
const { createCategories } = require('../controllers/categoriesController');


router.post('/create_categories', async (req, res) => {
    try {
        const categories = await createCategories(req)
        res.json(categories)
    }
    catch (e) {
        throw new Error(`Error while creating categories ${e}`)
    }
})



router.post('/create_quiz', async (req, res) => {
    try {
        const categories = await createCategories(req);
        const questions = await createQuestion(req);
        const options = await createOptions(req);

        res.json({
            categories,
            questions,
            options
        })
    }
    catch (e) {
        throw new Error(`Error while creating quiz ${e}`)
    }
})



module.exports = router