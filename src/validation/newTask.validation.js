import Joi from "joi";
const joiOptions = {abortEarly: false, errors: {label: 'key', wrap: {label: false}}}

function stringValidationMessages(variable, minLength, maxLength) {
    return {
        "string.empty": `Give your task a ${variable}!`,
        "string.min": `${variable} must be at least ${minLength} characters long.`,
        "string.max": `${variable} must be under ${maxLength} characters long.`,
        "string.string": `${variable} must be a string.`,
    }
}

const titleSchema = Joi.string().min(3).max(30).required().label("Title").messages(stringValidationMessages('Title', 3, 30))

function validateTitle(title) {
    return titleSchema.validate(title, joiOptions)
}

function validateTime(time) {
    const due = new Date(time).getTime()
    const now = new Date().getTime()
    if(due <= now) {
        return 'Give your task a due date in the future.'
    }
    else return 
}

export { validateTitle, validateTime }