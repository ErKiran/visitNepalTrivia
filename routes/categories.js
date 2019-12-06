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

module.exports = router