const { Options } = require('../orm');
const { createQuestion, findQuestion } = require('./questionController');

async function createOptions(req) {
    try {
        const checkIfQuestionExists = await findQuestion(req)
        if (checkIfQuestionExists === null) {
            await createQuestion(req)
        }
        const question = await findQuestion(req);
        const { option } = req.body;
        const optionObj = {
            question_id: question.dataValues.id,
            option: option
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

module.exports = {
    createOptions
}