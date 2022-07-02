
const db = require ('../../common/index')

//1- create main model

const User = db.USER


//2-  create user

const addUser =async(req,res,next)=>{
    let request={
fullname:req.body.fullname,
email:req.body.email,
address:req.body.address,
gender:req.body.gender==1 ? 'male' : req.body.gender==2 ? 'female':'other' ,
personal_image:req.file.path,
mobile:req.body.mobile,


    }
    console.log(request)

    const user = await User.create(request)
    res.status(200).send(user);
    
   console.log(user)
}
// 3- get all  user 


const getAllUser =async(req,res,next)=>{
   
    const users = await User.findAll({})
    res.status(200).send(users)
    console.log(users)
}
// 4- get  user  details


const getOneUser =async(req,res,next)=>{
   const id = req.params.id
    const UserDetails = await User.findAll({
        where :{id:id}
    })
    res.status(200).send(UserDetails)
    console.log(UserDetails)
}

// 4- update  user details


const updateUser =async(req,res,next)=>{
    const id = req.params.id
     const user = await User.update(req.body,{where:{ id :id }})
if(user.length>0){


     res.status(200).send("update was successfully");
}else{
    res.status(409).send("error"
 )
 } console.log(user)
 }
 
// 5- delete   user 


const deleteUser =async(req,res,next)=>{
    const id = req.params.id
     const user = await User.destroy({
         where :{id:id}
     })
     res.status(200).send("user was deleted Successfully")
     console.log(user)
 }

  
// 6- export  resource 

 module.exports={
   getAllUser, updateUser,deleteUser,addUser,getOneUser
 }