const { Router } = require('express')
const {
    createQuestion,
    updateQuestion,
    getAllQuestion,
    deleteQuestion,
    getQuestions
} = require('../controllers/questionController');
const router = Router();

router.post('/create_question', async (req, res) => {
    try {
        const questions = await createQuestion(req);
        if (questions.status === 400) {
            return res.status(400).json(questions.errors)
        }
        res.json(questions)
    }
    catch (e) {
        throw new Error(`Error while creating question ${e}`)
    }
})

router.get('/get_all_question_details', async (req, res) => {
    try {
        const allQuestion = await getAllQuestion();
        res.json(allQuestion)
    } catch (e) {
        throw new Error(`Error while getting all question ${e}`)
    }
})

router.get('/get_all_question', async (req, res) => {
    try {
        const allQuestion = await getQuestions()
        res.json(allQuestion)
    } catch (e) {
        throw new Error(`Error while getting all question ${e}`)
    }
})

router.patch('/update/:question_id', async (req, res) => {
    try {
        const updated = await updateQuestion(req);
        if (updated.status === 400) {
            return res.status(updated.status).json(updated)
        }
        res.json(updated);
    }
    catch (e) {
        throw new Error(`Error while updating Question ${e}`)
    }
})

router.delete('/delete/:question_id', async (req, res) => {
    try {
        const { question_id } = req.params;
        const deleted = await deleteQuestion(question_id);
        res.status(deleted.status).json(deleted);
    }
    catch (e) {
        throw new Error(`Error while deleting Question ${e}`)
    }
})

module.exports = router