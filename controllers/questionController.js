const { Question, Categories, Options } = require('../orm');
const { createCategoriesIfNotExist } = require('./categoriesController');
const {
    validateCreateQuestion,
    validateUpdateQuestion
} = require('../validators/questionValidator');

async function createQuestion(req) {
    try {
        const { errors, isValid } = validateCreateQuestion(req.body);
        if (!isValid) {
            return {
                errors,
                status: 400
            }
        }
        const categories = await createCategoriesIfNotExist(req.body.categories)
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

async function getAllQuestion() {
    try {
        const allQuestions = await Question.findAll({
            include: [
                {
                    model: Categories
                },
                {
                    model: Options
                }
            ]
        });
        const questionsAndCategories = [];
        const optionsAndAnswer = []
        allQuestions.map(questions => {
            questions.options.map(i => {
                optionsAndAnswer.push({
                    option: i.option
                })
            })
            try {
                questionsAndCategories.push({
                    id: questions.id,
                    question: questions.question,
                    categories: questions.category.categories,
                    options: optionsAndAnswer
                })
            }
            catch (e) {
                throw new Error(`Error while creating return Object ${e}`)
            }
        })
        return questionsAndCategories;
    } catch (e) {
        throw new Error(`Error while fetching all questions ${e}`)
    }
}

async function updateQuestion(req) {
    try {
        const { errors, isValid } = validateUpdateQuestion(req.params, req.body);
        if (!isValid) {
            return {
                errors,
                status: 400
            }
        }
        const getCategoriesId = await createCategoriesIfNotExist(req.body.categories);
        const catId = getCategoriesId.id
        const questionObject = {
            question: req.body.question,
            categories_id: catId
        }
        const updated = await Question.update(questionObject, { where: { id: req.params.question_id } });

        if (updated[0] === 1) {
            return getUpdatedQuestion(req.params.question_id)
        }

        return updated

    } catch (e) {
        throw new Error(`Error while updating questions ${e}`)
    }
}

async function getUpdatedQuestion(id) {
    try {
        const updatedQuestion = await Question.findOne({ id: id });
        console.log('UpdatedQuestion', updatedQuestion)
        return updatedQuestion
    }
    catch (e) {
        throw new Error(`Error while getting updated question ${e}`)
    }
}

async function deleteQuestion(id) {
    try {
        if (!id) {
            return {
                info: 'Id is required to delete Question',
                status: 400
            }
        }
        const delQuestion = await Question.destroy({ where: { id: id } });
        if (delQuestion === 1) {
            return {
                info: `Question is deleted sucessfully`,
                status: 200
            }
        }
        return {
            info: `Question cann't be deleted`,
            status: 204
        }
    }
    catch (e) {
        throw new Error(`Error while deleting Questions ${e}`)
    }
}

module.exports = {
    createQuestion,
    findQuestion,
    updateQuestion,
    getAllQuestion,
    deleteQuestion
}