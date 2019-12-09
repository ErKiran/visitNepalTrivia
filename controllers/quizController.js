const {
    Question,
    Categories,
    Options,
    Description
} = require('../orm');


async function getQuizHiddenAnswer() {
    try {
        const allQuestions = await Question.findAll({
            include: [
                {
                    model: Categories
                }
            ]
        });
        const allOptions = await Options.findAll({
            include: [
                {
                    model: Question,
                    include: [
                        {
                            model: Categories
                        }
                    ]
                }
            ]
        })
        const questionsAndCategories = [];
        //const optionsAndAnswer = []
        allQuestions.map(questions => {
            /*questions.options.map(i => {
                optionsAndAnswer.push({
                    option: i.option
                })
            })*/
            try {
                questionsAndCategories.push({
                    id: questions.id,
                    question: questions.question,
                    categories: questions.category.categories,
                    //options: optionsAndAnswer
                })
            }
            catch (e) {
                throw new Error(`Error while creating return Object ${e}`)
            }
        })
        //return questionsAndCategories;
        return allOptions

    }
    catch (e) {
        throw new Error(`Error while getting Hidden Answer Quiz Description ${e}`)
    }
}

module.exports = {
    getQuizHiddenAnswer
}