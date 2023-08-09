const express = require('express');
const router = express.Router();
const user = require('../models/user_models');
const { ObjectId } = require('mongodb');
const objectId = require('mongoose').Types.ObjectId
const {validateDbId,raise404error} = require('../middleware')
const {crudMethods} = require('../services')
const userCrud = crudMethods(user)



// Get all records
router.get('/',(req,resp,next)=>{
    userCrud.getAll()
    .then(data=>resp.send(data))
    .catch(err=>next(err))
})

// fetch user data by id a particular row
router.get('/:id',validateDbId,(req,res,next)=>{
    userCrud.getById(req.params.id)
    .then(data=>{
        if(data) {
            res.send(data)
        }
        else{
            raise404error(req,res);
        }
    }) 
    .catch(err=>next(err))
})


// create new user api 
router.post('/',(req,resp,next)=>{
    userCrud.create(req.body)
    .then(data=>resp.send(data))
    .catch(err=>next(err))
})

// update user by id
router.put('/:id',validateDbId,(req,res)=>{
    userCrud.update(req.params.id,req.body)
    .then(data=>{
        if(data) {
            res.send(data)
        }
        else{
            raise404error(req,res);
        }
    }) 
    .catch(err=>next(err))
})

// delete user by id
router.delete('/:id',validateDbId,(req,res)=>{
    userCrud.delete(req.params.id)
    .then(data=>{
        if(data) {
            res.send(data)
        }
        else{
            raise404error(req,res);
        }
    }) 
    .catch(err=>next(err))
})

module.exports = router;
