const Options = require('../orm');
const { createQuestion, findQuestion } = require('./questionController');

async function createOptions(req) {
    try {
        const checkIfQuestionExists = await findQuestion(req)
        if (checkIfQuestionExists === null) {
            await createQuestion(req)
        }
        const question = await findQuestion(req);
        console.log(question)

    }
    catch (e) {
        throw new Error(`Error while Creating Options ${e}`)
    }
}

module.exports = {
    createOptions
}