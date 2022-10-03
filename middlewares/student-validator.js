const { studentSchema } = require("../helpers/validation_student_schema")

const validateStudentSchema = async (req,res,next)=>{
    try{
        const result = await studentSchema.validateAsync(req.body);
        req.body = result;
        next();
    }catch(err){
        res.status(400).send(err.message);
    }
}

module.exports = {
    validateStudentSchema
}