const Modeluser = require("../Models/user")

const createrUser = async (req, res) => {
    try{
        const{ name, email, age, password, phone, address, gender,isActive,dob,profileImage,skills,marks}=req.body

        if(!name || !email || !password || !age || !phone || !isActive || !gender || !isActive || !profileImage || !skills || !marks){
            return res.json({success : false , message :  "All filed are required"})
        }

        const isExiting = await Modeluser.findOne({email})
        if(isExiting) {
            return res.json({success : false , message : "Already account exits please try again later"})
        }

        const phoneExixtig = await Modeluser.findOne({phone})
        if(phoneExixtig) {
            return res.json({success : false , message : "Already number exists plese try again later"})
        }

        const newUser = new Modeluser({
            name, email, age, password, phone, address, gender,isActive,dob,profileImage,skills,marks
        })

        const save = await newUser.save()

        if(!save){
            return res.json({success :false, message :"Failed to create please try again later" })
        }

        return res.json({success : true , message : "Account cretaed successfully" })

    }catch(err){
        console.log("Error in create user",err.message)
    }
}


const fecthUser 

module.exports = createrUser;