const { Router } = require('express');
const router = Router();
const {
    createCategories,
    getAllCategories,
    updateCategories,
    deleteCategories
} = require('../controllers/categoriesController');


router.post('/create_categories', async (req, res) => {
    try {
        const categories = await createCategories(req.body.categories)
        res.json(categories)
    }
    catch (e) {
        throw new Error(`Error while creating categories ${e}`)
    }
})


router.get('/all_categories', async (req, res) => {
    try {
        const allCategories = await getAllCategories();
        res.json(allCategories)
    }
    catch (e) {
        throw new Error(`Error while getting all the categories ${e}`)
    }
})

router.patch('/categories/:categories_id', async (req, res) => {
    try {
        const updated = await updateCategories(req);
        res.json(updated)
    }
    catch (e) {
        throw new Error(`Error while updating categories ${e}`)
    }
})

router.delete('/categories/:categories_id', async (req, res) => {
    try {
        const updated = await deleteCategories(req);
        res.json(updated)
    }
    catch (e) {
        throw new Error(`Error while updating categories ${e}`)
    }
})


module.exports = router