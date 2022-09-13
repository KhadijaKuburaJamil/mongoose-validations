const User =require("./user.model");

exports.register = async(req, res) =>{
    const {email,password} = req.body;

    //checking to see if email already in use
    const emailExist =await User.findOne({email});
    if (emailExist) {
        return res.status(400).json({error: "Email already in use."});
    }

    const user = await User.create({...req.body});

    res.status(201).json({user});
};