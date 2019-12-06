const { Options } = require('../orm');
const { createQuestion, findQuestion } = require('./questionController');

async function createOptions(req) {
    try {
        const checkIfQuestionExists = await findQuestion(req)
        if (checkIfQuestionExists === null) {
            await createQuestion(req)
        }
        const question = await findQuestion(req);
        const { option, is_correct } = req.body;
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

module.exports = {
    createOptions,
    getOptions
}