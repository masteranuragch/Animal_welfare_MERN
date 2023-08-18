const express =require('express');
const adoptionController=require('../controllers/adoptioncontroller');

const router=express.Router();

//create
router.post('/create',adoptionController.create);
//get all
router.get('/all',adoptionController.getAll);
//get one
router.get('/get/:id',adoptionController.getOne);
//update
router.put('/update/:id',adoptionController.update);
//delete
router.delete('/delete/:id',adoptionController.delete);



module.exports=router;