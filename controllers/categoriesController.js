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

module.exports = {
    createCategories,
    findCategories
}