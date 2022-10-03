const Joi = require('@hapi/joi');

const studentSchema = Joi.object({
        id : Joi.string(),
        firstName : Joi.string().required(),
        lastName : Joi.string().required(),
        fatherName : Joi.string().required(),
        classEnrolled : Joi.string().required(),
        age : Joi.number().required(),
        phoneNumber : Joi.number().min(10).required(),
        subject : Joi.string().required(),
        year : Joi.number().required(),
        semester : Joi.string().required(),
        status : Joi.string().required()
})

module.exports = {
    studentSchema
}