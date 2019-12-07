const { Categories } = require('../orm');
const { validateCreateCategories } = require('../validators/categoriesController');

async function createCategories(cat) {
    try {
        const newCategories = await Categories.findOrCreate({
            where: {
                categories: cat
            }
        })
        return newCategories;
    } catch (e) {
        throw new Error(`Error while creating categories ${e}`);
    }
}


async function findCategories(cat) {
    try {
        if (!cat) {
            throw new Error(`Categories is required`)
        }
        const category = await Categories.findOne({
            where: { categories: cat }
        })
        return category;
    }
    catch (e) {
        throw new Error(`Error while finding categories for question ${e}`)
    }
}

async function getAllCategories() {
    try {
        const categories = await Categories.findAll({});
        let cats = []
        categories.map(category => {
            cats.push(category.categories)
        })
        return cats;
    }
    catch (e) {
        throw new Error(`Error while getting all the categories ${e}`)
    }
}

async function updateCategories() {
    try {

    }
    catch (e) {
        throw new Error(`Error while updating Categories ${e}`)
    }
}


async function createCategoriesIfNotExist(categories) {
    try {
        const checkIfExistsCategories = await findCategories(categories);
        if (checkIfExistsCategories === null) {
            await createCategories(categories);
        }
        const category = await findCategories(categories);
        return category
    }
    catch (e) {
        throw new Error(`Error while creating new Categories for the questions ${e}`)
    }
}

module.exports = {
    getAllCategories,
    createCategories,
    updateCategories,
    createCategoriesIfNotExist
}