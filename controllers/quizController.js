const {
    Question,
    Categories,
    Options
} = require("../orm");


async function getQuizHiddenAnswer() {
    try {
        const allOptions = await Options.findAll({});
        const options = [];
        allOptions.map(element => {
            options.push({
                options: element.option,
                questions_id: element.questions_id
            });
        });

        const questionAndCategories = await getQuestionAndCategories(options);
        return questionAndCategories;

    }
    catch (e) {
        throw new Error(`Error while getting Hidden Answer Quiz Description ${e}`);
    }
}


async function getQuestionAndCategories(opts) {
    try {
        const questions = [];
        const questionWithCategories = await Question.findAll({
            include: [
                {
                    model: Categories
                }
            ]
        });
        questionWithCategories.map(element => {
            const optionOfQuestion = opts.filter(i => i.questions_id === element.id);
            questions.push({
                id: element.id,
                question: element.question,
                categories: element.category.categories,
                options: optionOfQuestion
            });
        });
        return questions;
    }
    catch (e) {
        throw new Error(`Error while getting question and categories ${e}`);
    }
}

module.exports = {
    getQuizHiddenAnswer
};