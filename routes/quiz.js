const { Router } = require('express');
const router = Router();
const { createCategories } = require('../controllers/categoriesController');
const { createOptions } = require('../controllers/optionController');
const { createQuestion } = require('../controllers/questionController');

const { getQuizHiddenAnswer } = require('../controllers/quizController');


router.post('/create_quiz', async (req, res) => {
    try {
        const categories = await createCategories(req);
        const questions = await createQuestion(req);
        const options = await createOptions(req);
        res.json({
            categories,
            questions,
            options
        })
    }
    catch (e) {
        throw new Error(`Error while creating quiz ${e}`)
    }
})

router.get('/get_quiz', async (req, res) => {
    try {
        const hiddenQuiz = await getQuizHiddenAnswer();
        res.json(hiddenQuiz)
    }
    catch (e) {
        throw new Error(`Error while getting quiz details`)
    }
})



module.exports = router