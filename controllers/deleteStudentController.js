'use strict'

const firebase = require('../db');
const firestore = firebase.firestore();

const deleteStudent = async (req, res, next)=>{
    try{
        const id = req.params.id;
        await firestore.collection('student').doc(id).delete();
        res.status(200).send('Record deleted successfully!')
    }catch{
        res.status(400).send(error.message);
    }
}

module.exports = {
    deleteStudent
}
