const { Question } = require('../orm');
const { findCategories, createCategories } = require('./categoriesController')

async function createQuestion(req) {
    try {
        const checkIfExistsCategories = await findCategories(req.body.categories);
        if (checkIfExistsCategories === null) {
            await createCategories(req);
        }
        const categories = await findCategories(req.body.categories)
        const categoriesId = categories.dataValues.id;
        const { question } = req.body;
        const questionObj = {
            question: question,
            categories_id: categoriesId
        }
        const questionCreated = await Question.findOrCreate({
            where: {
                question: question,
                categories_id: categoriesId
            },
            defaults: questionObj
        });
        return questionCreated;
    }
    catch (e) {
        throw new Error(`Error while creating Question ${e}`)
    }
}

async function findQuestion(req) {
    try {
        const fetchQuestion = await Question.findOne({
            question: req.body.question
        })
        return fetchQuestion;
    }
    catch (e) {
        throw new Error(`Error while fetching question ${e}`)
    }
}

module.exports = {
    createQuestion,
    findQuestion
}