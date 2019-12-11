const { Categories } = require("../orm");
//const { validateCreateCategories } = require("../validators/categoriesController");

async function createCategories(cat) {
    try {
        const newCategories = await Categories.findOrCreate({
            where: {
                categories: cat
            }
        });
        return newCategories;
    } catch (e) {
        throw new Error(`Error while creating categories ${e}`);
    }
}


async function findCategories(cat) {
    try {
        if (!cat) {
            throw new Error("Categories is required");
        }
        const category = await Categories.findOne({
            where: { categories: cat }
        });
        return category;
    }
    catch (e) {
        throw new Error(`Error while finding categories for question ${e}`);
    }
}

async function getAllCategories() {
    try {
        const categories = await Categories.findAll({});
        let cats = [];
        categories.map(category => {
            cats.push(category.categories);
        });
        return categories;
    }
    catch (e) {
        throw new Error(`Error while getting all the categories ${e}`);
    }
}

async function updateCategories(req) {
    try {
        const { categories } = req.body;
        const { categories_id: id } = req.params;
        const categoriesObj = {
            categories
        };
        const updated = await Categories.update(categoriesObj, {
            where: {
                id
            }
        });

        if (updated[0] === 1) {
            return await getCategoriesById(id);
        }
        return {
            errors: `Can't update categories ${id}`,
            status: 400
        };
    }
    catch (e) {
        throw new Error(`Error while updating Categories ${e}`);
    }
}

async function deleteCategories(req) {
    try {
        const { categories_id: id } = req.params;
        if (!id) {
            return {
                info: "Id is required to delete Categories",
                status: 400
            };
        }
        const delCategories = await Categories.destroy({ where: { id: id } });
        if (delCategories === 1) {
            return {
                info: "Categories is deleted sucessfully",
                status: 200
            };
        }
        return {
            info: "Categories cann't be deleted",
            status: 204
        };
    }
    catch (e) {
        throw new Error(`Error while deleting Categoriess ${e}`);
    }
}

async function getCategoriesById(id) {
    try {
        const updated = await Categories.findOne({
            where: {
                id
            }
        });
        return updated;

    } catch (e) {
        throw new Error(`Error while getting categories By ID ${e}`);
    }
}


async function createCategoriesIfNotExist(categories) {
    try {
        const checkIfExistsCategories = await findCategories(categories);
        if (checkIfExistsCategories === null) {
            await createCategories(categories);
        }
        const category = await findCategories(categories);
        return category;
    }
    catch (e) {
        throw new Error(`Error while creating new Categories for the questions ${e}`);
    }
}

module.exports = {
    getAllCategories,
    createCategories,
    updateCategories,
    deleteCategories,
    createCategoriesIfNotExist
};