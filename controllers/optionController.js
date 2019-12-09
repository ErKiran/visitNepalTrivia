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
        const check = await checkIfCorrectOptionAlreadyExists(question.dataValues.id, is_correct);
        if (check) {
            return {
                errors: `This question can't have multiple correct question`,
                status: 404
            }
        }
        const optionObj = {
            questions_id: question.dataValues.id,
            option: option,
            is_correct: is_correct
        }

        const optionCreated = await Options.findOrCreate({
            where: {
                questions_id: question.dataValues.id,
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

async function updateOptions(opts) {
    try {
        const { option, is_correct } = opts.body;
        const { option_id: id } = opts.params;
        const optionObj = {
            option,
            is_correct
        }
        const updatedOptions = await Options.update(optionObj, {
            where: {
                id
            }
        })

        if (updatedOptions[0] === 1) {
            return await getUpdatedOptions(id)
        }

        if (updatedOptions[0] === 0) {
            return {
                errors: `Can't update the Question Id: ${id}`,
                status: 400
            }
        }
    }
    catch (e) {
        throw new Error(`Error while updating Options ${e}`)
    }
}

async function getUpdatedOptions(id) {
    try {
        const updateOptions = await Options.findOne({
            id: id
        })
        return updateOptions
    }
    catch (e) {
        throw new Error(`Error while getting updated Options ${e}`)
    }
}

async function checkIfCorrectOptionAlreadyExists(id, check) {
    try {
        const question = await findQuestionById(id);
        const checkIfMultipleCorrectPossible = question.dataValues.multiple_correct_options;
        const convertedToBoolean = ((check).toLowerCase() === 'true') ? true : false;
        if (!checkIfMultipleCorrectPossible) {
            if (!(checkIfMultipleCorrectPossible === convertedToBoolean)) {
                const check = await Options.findAll({
                    where: {
                        questions_id: id,
                        is_correct: true
                    }
                })

                if (check.length === 1) {
                    return true
                }
                return false
            }
        }
        return false

    }
    catch (e) {
        throw new Error(`Error while checking correct options ${e}`)
    }
}

module.exports = {
    createOptions,
    getOptions,
    updateOptions
}