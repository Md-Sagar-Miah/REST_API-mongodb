const {v4:uuidv4}=require("uuid");
const user =require("../models/user.model");

const getAllUser=async(req,res)=>{
    try{
        const allUser=await user.find();
        res.status(200).json(allUser);
    }
    catch(error){
        res.status(500).send(error.message);
    }
};
const getOneUser=async(req,res)=>{
    try {
        const oneUser=await user.findOne({id:req.params.id})
        res.status(200).json(oneUser);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
const createUser=async (req,res)=>{
    try{  
        const newUser= new user({
        id:uuidv4(),
        name:req.body.name,
        age:Number(req.body.age),
    })
    await newUser.save();
    res.status(201).json(newUser);
}catch(error){
    res.status(500).send(error.message);
}
};


const updateUser=async(req,res)=>{
    
    try{  
        const updateUser = await user.findOne({id:req.params.id});
        
        updateUser.name=req.body.name,
        updateUser.age=Number(req.body.age),
   
    await updateUser.save();
    res.status(200).json(updateUser);
}catch(error){
    res.status(500).send(error.message);
}
};
const deleteUser=async(req,res)=>{
    try {
        await user.deleteOne({id:req.params.id})
        res.status(200).json({
            message:"User Is Deleted",
        })
    } catch (error) {
        res.status(500).send(error.message);
    }
    
};

module.exports={getAllUser,getOneUser,createUser,updateUser,deleteUser};