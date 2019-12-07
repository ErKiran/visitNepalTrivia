const { Options } = require('../orm');
const {
    createQuestion,
    findQuestion,
    findQuestionById
} = require('./questionController');

async function createOptions(req) {
    try {
        const checkIfQuestionExists = await findQuestion(req);
        if (checkIfQuestionExists === null) {
            await createQuestion(req)
        }
        const question = await findQuestion(req);
        const { option, is_correct } = req.body;
        const check = await checkIfCorrectOptionAlreadyExists(question.dataValues.id);
        if (check) {
            return {
                errors: `This question can't have multiple correct question`,
                status: 404
            }
        }
        const optionObj = {
            question_id: question.dataValues.id,
            option: option,
            is_correct: is_correct
        }

        const optionCreated = await Options.findOrCreate({
            where: {
                question_id: question.dataValues.id,
                option: option
            },
            defaults: optionObj
        });
        return optionCreated;
    }
    catch (e) {
        throw new Error(`Error while Creating Options ${e}`)
    }
}


async function getOptions() {
    try {
        const allOptions = await Options.findAll({});
        return allOptions;
    }
    catch (e) {
        throw new Error(`Error while getting Options ${e}`)
    }
}

async function checkIfCorrectOptionAlreadyExists(id) {
    try {
        const question = await findQuestionById(id);
        const checkIfMultipleCorrectPossible = question.dataValues.multiple_correct_options;
        if (!checkIfMultipleCorrectPossible) {
            const check = await Options.findAll({
                where: {
                    question_id: id,
                    is_correct: true
                }
            })

            if (check.length === 1) {
                return true
            }
            return false
        }
        return false

    }
    catch (e) {
        throw new Error(`Error while checking correct options ${e}`)
    }
}

module.exports = {
    createOptions,
    getOptions
}