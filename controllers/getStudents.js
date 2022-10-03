const firebase = require('../db');
const Student = require('../models/student');
const firestore = firebase.firestore();

const getAllStudents = async(req, res, next)=>{
    try{
        const students = await firestore.collection('student');
        const data = await students.get();
        const studentsArray = [];
        if(data.empty){
            res.status(404).send('No Student record found');
        } else {
            data.forEach(doc=>{
                const student = new Student(
                    doc.id,
                    doc.data().firstName,
                    doc.data().lastName,
                    doc.data().fatherName,
                    doc.data().class,
                    doc.data().age,
                    doc.data().phoneNumber,
                    doc.data().subject,
                    doc.data().year,
                    doc.data().semester,
                    doc.data().status
                );
                studentsArray.push(student);
            })
            res.send(studentsArray);
        }
    }catch(error){
        res.status(400).send(error.message);
    }
}

const getStudent = async(req, res, next) => {
    try {
        const id = req.params.id;
        const student = await firestore.collection('student').doc(id);
        const data = await student.get();
        if(!data.exists) {
             res.status(404).send('Student with the given ID not found');
        } else {
            res.send(data.data());
        }
    } catch(error){
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllStudents,
    getStudent
}