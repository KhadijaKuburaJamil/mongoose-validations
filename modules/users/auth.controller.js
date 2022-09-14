const User =require("./user.model");
const bcrypt = require("bcryptjs");
const jwt = require ("jsonwebtoken");

const generateToken =(user)=>{
    const token =jwt.sign({id: user._id, email: user.email},
        "f2bbfb2fd2ad8872cbd1b2f4b54cd7611c45bed447d594653e149010724dda2e",
        {
            expiresIn: "1h"
        } 
     );

     return {
        token,
        user,

     };
}

exports.register = async(req, res) =>{
    const {email,password} = req.body;

    //checking to see if email already in use
    const emailExist =await User.findOne({email});
    if (emailExist) {
        return res.status(400).json({error: "Email already in use."});
    }

    const hashedPassword = await bcrypt.hash(password, 12)

    const user = await User.create({...req.body, password: hashedPassword});

    //generate token
    
  const token = generateToken(user)
  res.status(201).json({token});

};

exports.login = async (req, res) =>{
    const {email, password} = req.body;

    let user = await User.findOne({email});
    if(!user) {
        return res.status(400).json({msg:"Invalid credentials"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch) {
        return res.status(400).json({msg: "Invalid credentials"});
    }


 const token = generateToken(user)

  res.status(201).json({token});
    


};