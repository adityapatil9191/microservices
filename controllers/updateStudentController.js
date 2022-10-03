'use strict'

const firebase = require('../db');
const firestore = firebase.firestore();

const updateStudent = async (req, res, next)=>{
    try{
        const id = req.params.id;
        const data = req.body;
        const student = await firestore.collection('student').doc(id);
        await student.update(data);
        res.send('Record updated successfully!')
    }catch{
        res.status(400).send(error.message);
    }
}

module.exports = {
    updateStudent
}
