import Joi from "joi";
import { joiPasswordExtendCore } from "joi-password";
const joiPassword = Joi.extend(joiPasswordExtendCore)
const joiOptions = {abortEarly: false, errors: {label: 'key', wrap: {label: false}}}


/*
=============== Setting Messages ===============
*/
function nameValidationMessages(variable) {
    return {
        "string.min": `${variable} must be at least 3 characters long.`,
        "string.max": `${variable} must be under 50 characters long.`,
        "string.required": `${variable} is required.`,
        "string.string": `${variable} must be a string.`,
    }
}

/*
=============== Setting Schemas ===============
*/
const nameSchema = Joi.object({
    firstName: Joi.string().min(3).max(30).required().label("First Name").messages(nameValidationMessages('First Name')),
    lastName: Joi.string().min(3).max(30).required().label("Last Name").messages(nameValidationMessages('Last Name'))
})

const jobSchema = Joi.object({
    jobTitle: Joi.string().min(3).max(30).required().label("Job Title").messages(nameValidationMessages('Job Title')),
    company: Joi.string().min(3).max(30).required().label("Company").messages(nameValidationMessages('Company'))
})

const loginInfoSchema = Joi.object({
    password: joiPassword.string().minOfSpecialCharacters(1).minOfLowercase(1).minOfUppercase(1).minOfNumeric(1).noWhiteSpaces().required().label("Password"),
    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'global']}}).label("Email"),
})

/*
=============== Setting Functions ===============
*/
function validateName(obj) {
    return nameSchema.validate(obj, joiOptions)
}

function validateJob(obj) {
    return jobSchema.validate(obj, joiOptions)
}

function validateLoginInfo(obj) {
    return loginInfoSchema.validate(obj, joiOptions)
}



export { validateName, validateJob, validateLoginInfo }