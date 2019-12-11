const { Question } = require("../orm");
const { createCategoriesIfNotExist } = require("./categoriesController");
const {
    validateCreateQuestion,
    validateUpdateQuestion
} = require("../validators/questionValidator");

async function createQuestion(req) {
    try {
        const { errors, isValid } = validateCreateQuestion(req.body);
        if (!isValid) {
            return {
                errors,
                status: 400
            };
        }
        const categories = await createCategoriesIfNotExist(req.body.categories);
        const categoriesId = categories.dataValues.id;
        const { question } = req.body;
        const questionObj = {
            question: question,
            categories_id: categoriesId
        };
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
        throw new Error(`Error while creating Question ${e}`);
    }
}

async function findQuestionById(id) {
    try {
        const question = await Question.findOne({
            where: {
                id: id
            }
        });
        return question;
    }
    catch (e) {
        throw new Error(`Error while getting Question By Id ${e}`);
    }
}

async function findQuestion(req) {
    try {
        const { question } = req.body;
        if (!question) {
            throw new Error("Can find the Question Details for the null question");
        }
        const fetchQuestion = await Question.findOne({
            where: {
                question: question
            }
        });
        return fetchQuestion;
    }
    catch (e) {
        throw new Error(`Error while fetching question ${e}`);
    }
}

async function getQuestions() {
    try {
        const allQuestions = await Question.findAll({});
        return allQuestions;
    }
    catch (e) {
        throw new Error(`Error while getting all the questions ${e}`);
    }
}

async function updateQuestion(req) {
    try {
        const { errors, isValid } = validateUpdateQuestion(req.params, req.body);
        if (!isValid) {
            return {
                errors,
                status: 400
            };
        }
        const getCategoriesId = await createCategoriesIfNotExist(req.body.categories);
        const catId = getCategoriesId.id;
        const questionObject = {
            question: req.body.question,
            categories_id: catId
        };
        const updated = await Question.update(questionObject, { where: { id: req.params.question_id } });

        if (updated[0] === 1) {
            return getUpdatedQuestion(req.params.question_id);
        }

        if (updated[0] === 0) {
            return {
                errors: `Can't update the Question Id: ${req.params.question_id}`,
                status: 400
            };
        }
        return updated;

    } catch (e) {
        throw new Error(`Error while updating questions ${e}`);
    }
}

async function getUpdatedQuestion(id) {
    try {
        const updatedQuestion = await Question.findOne({ id: id });
        return updatedQuestion;
    }
    catch (e) {
        throw new Error(`Error while getting updated question ${e}`);
    }
}

async function deleteQuestion(id) {
    try {
        if (!id) {
            return {
                info: "Id is required to delete Question",
                status: 400
            };
        }
        const delQuestion = await Question.destroy({ where: { id: id } });
        if (delQuestion === 1) {
            return {
                info: "Question is deleted sucessfully",
                status: 200
            };
        }
        return {
            info: "Question cann't be deleted",
            status: 204
        };
    }
    catch (e) {
        throw new Error(`Error while deleting Questions ${e}`);
    }
}

module.exports = {
    createQuestion,
    findQuestion,
    updateQuestion,
    deleteQuestion,
    findQuestionById,
    getQuestions
};