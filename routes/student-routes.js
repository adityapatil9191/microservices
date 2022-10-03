const express = require('express');
const {addStudent} = require('../controllers/addStudentController');
const {validateStudentSchema} = require('../middlewares/student-validator')
const {getAllStudents, getStudent} = require('../controllers/getStudents');
const {updateStudent} = require('../controllers/updateStudentController');
const {deleteStudent} = require('../controllers/deleteStudentController');

const router = express.Router();

router.post('/student',validateStudentSchema,addStudent);
router.get('/students', getAllStudents);
router.get('/student/:id', getStudent);
router.put('/student/:id',updateStudent);
router.delete('/student/:id',deleteStudent)

module.exports = {
    routes: router
}