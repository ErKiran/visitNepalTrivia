const Validator = require("validator");
const isEmpty = require("./isEmpty");

function validateCreateCategories(data) {
    let errors = {};
    data.categories = !isEmpty(data.categories) ? data.categories : "";

    if (Validator.isEmpty(data.categories)) {
        errors.categories = "Category is required for Question";
    }

    if ((data.categories).length < 3) {
        errors.categoriesMeaningful = "Please create Relevant Categories";
    }

    return {
        errors,
        isValid: isEmpty(errors)
    };
}

function validateUpdateQuestion(id, data) {
    let errors = {};
    data.question = !isEmpty(data.question) ? data.question : "";
    data.categories = !isEmpty(data.categories) ? data.categories : "";
    id.question_id = !isEmpty(id.question_id) ? id.question_id : "";

    if (Validator.isEmpty(data.question)) {
        errors.question = "Question is required";
    }

    if (Validator.isEmpty(data.categories)) {
        errors.categories = "Category is required for Question";
    }

    if (Validator.isEmpty(id.question_id)) {
        errors.question_id = "Id is required to update the questions";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
}


module.exports = {
    validateCreateCategories,
    validateUpdateQuestion
};