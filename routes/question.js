const { Router } = require('express')
const { createQuestion, updateQuestion, getAllQuestion } = require('../controllers/questionController');
const router = Router();

router.post('/create_question', async (req, res) => {
    try {
        const questions = await createQuestion(req)
        res.json(questions)
    }
    catch (e) {
        throw new Error(`Error while creating question ${e}`)
    }
})

router.get('/get_all_questions', async (req, res) => {
    try {
        const allQuestion = await getAllQuestion();
        res.json(allQuestion)
    } catch (e) {
        throw new Error(`Error while getting all question ${e}`)
    }
})

router.patch('/:question_id', async (req, res) => {
    const updated = await updateQuestion(req);
    res.json(updated)
})

module.exports = router