const User = require("../models/user-models");
const bcrypt = require("bcryptjs");

//home logic
const home = async (req, res) => {
    try{
        res
        .status(200)
        .send('Welcome to world best mern series by xDcoder using router');

    } catch(error){
        console.log(error);
    }
};

//Registration Logic

const register = async (req, res) => {
    try{
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userExist = await User.findOne({ email});

        if(userExist){
            return res.status(400).json({msg:"email already exists"});
        }

        //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password, saltRound);

        const userCreated = 
        await User.create({username, email, phone,password });

        res
        .status(201)
        .json({msg: userCreated });

    } catch(error){
        res.status(500).json("internal server error");
    }
};

module.exports = { home, register };