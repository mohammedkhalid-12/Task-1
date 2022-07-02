const express = require('express')
const  route = express.Router()
const multer=require('multer')

// inti to upload product images
const storage = multer.diskStorage({
    destination:function (req,file,next){
next(null, './uploads/')
    },
    filename:function(req,file,next){

next(null,new Date().toISOString()+file.originalname)
    }
 })
 const filefilter = function (req,file ,next){
  if(file.mimetype==='image/jpeg'||file.mimetype==='image/png'){
    next(null,true)

  }else{
    next(null, false)

  }
 } 
 const upload = multer({storage:storage,limits:{fileSize:1024*1024 *5},fileFilter:filefilter})


const user_controller = require('../user_controller/user_controllers')
//create new user
route.post('/createUser',upload.single("personal_image"),user_controller.addUser)
//get all user
route.get('/allUser',user_controller.getAllUser)
//upate user by ID
route.post('/update/:id',upload.single("personal_image"),user_controller.updateUser)
//get one userDetails by id
route.post('/getuser/:id',user_controller.getOneUser)
//delete user Id
route.post('/deleteuser/:id',user_controller.deleteUser)
//export route
module.exports= route