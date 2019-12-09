const {
    Question,
    Categories,
    Options,
    Description
} = require('../orm');


async function getQuizHiddenAnswer() {
    try {
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
        const hiddenQuiz = {};
        const Quiz = [];
        allOptions.map(i=>{
            Quiz.push({
                id: i.question.id,
                question: i.question.question,
                categories: i.question.category.categories,
            })
             hiddenQuiz.question = Quiz;
        })
        return hiddenQuiz

    }
    catch (e) {
        throw new Error(`Error while getting Hidden Answer Quiz Description ${e}`)
    }
}

function checkIfElementExistsInArray(){
try{

}
catch(e){
    throw new Error(`Error while checking if element exists in array ${e}`)
}
}

module.exports = {
    getQuizHiddenAnswer
}