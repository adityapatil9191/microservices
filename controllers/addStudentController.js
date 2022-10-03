'use strict'

const firebase = require('../db');
const firestore = firebase.firestore();

const addStudent = async (req, res, next)=>{
    try{
        const data = req.body;
        await firestore.collection('student').doc().set(data);
        res.send('Record saved successfully!')
    }catch{
        res.status(422).send(error.message);
    }
}

module.exports = {
    addStudent
}
