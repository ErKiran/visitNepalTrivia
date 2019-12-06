const { Categories } = require('../orm');

async function createCategories(req) {
    try {
        if (!(req.body).hasOwnProperty('categories')) {
            throw new Error(`Categories is required while inserting into DB`);
        }

        if ((req.body.categories.length) === 0) {
            throw new Error(`Categories is required`);
        }

        const newCategories = await Categories.findOrCreate({
            where: {
                categories: req.body.categories
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

module.exports = {
    createCategories,
    findCategories,
    getAllCategories
}