import Joi from "joi";
const joiOptions = {abortEarly: false, errors: {label: 'key', wrap: {label: false}}}

const newMemberEmailSchema = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'global']}}).label("Email")


function validateNewTeamMemberEmail(obj) {
    return newMemberEmailSchema.validate(obj, joiOptions)
}



export {
    validateNewTeamMemberEmail
}