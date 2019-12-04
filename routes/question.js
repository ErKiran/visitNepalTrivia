const { Router } = require('express')
const { createQuestion, updateQuestion } = require('../controllers/questionController');
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

router.patch('/:question_id', async (req, res) => {
    const updated = await updateQuestion(req);
    res.json(updated)
})

module.exports = router