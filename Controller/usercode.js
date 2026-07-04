const Modeluser = require("../Models/user")
//post method //
const createrUser = async (req, res) => {
    try {
        const { name, email, age, password, phone, address, gender, isActive, dob, profileImage, skills, marks } = req.body

        if (!name || !email || !password || !age || !phone || !isActive || !gender || !isActive || !profileImage || !skills || !marks) {
            return res.json({ success: false, message: "All filed are required" })
        }

        const isExiting = await Modeluser.findOne({ email })
        if (isExiting) {
            return res.json({ success: false, message: "Already account exits please try again later" })
        }

        const phoneExixtig = await Modeluser.findOne({ phone })
        if (phoneExixtig) {
            return res.json({ success: false, message: "Already number exists plese try again later" })
        }

        const newUser = new Modeluser({
            name, email, age, password, phone, address, gender, isActive, dob, profileImage, skills, marks
        })

        const save = await newUser.save()

        if (!save) {
            return res.json({ success: false, message: "Failed to create please try again later" })
        }

        return res.json({ success: true, message: "Account cretaed successfully", save })

    } catch (err) {
        console.log("Error in create user", err.message)
    }
};

//get method//
const fetchUser = async (req, res) => {
    try {

        const user = await Modeluser.find({})

        if (!user) {
            return res.json({ success: false, message: "user notfound " })
        }
        return res.json({ success: true, message: "user featch successfully", data: user })
    } catch {

    }
}

const fetchUserEmail = async (req, res) => {
    try {
        const email = req.params

        const user = await Modeluser.findOne(email)

        if (!user) {
            return res.json({ success: false, message: "user not found" })
        }
        return res.json({
            success: true, message: "user fethch mail successfully", data: user

        })
    } catch (err) {
        console.log("Error in fetch user")
        return res.json({ success: false, message: "Error in fetch user" })
    }
}
const deleteuserEmail = async (req, res) => {
    try {
        const { email } = req.params

        const user = await Modeluser.findOneAndDelete({ email })

        if (!user) {
            return res.json({ success: false, message: "candidate not found email" })
        }
        return res.json({ success: true, message: "candidate deleted email successfully" })

    } catch (err) {
        console.log("Error in delete user")
        return res.json({ success: false, message: "Error in the delete user email" })
    }
}

const deleteuser = async (req, res) => {
    try {

        const user = await Modeluser.deleteMany({})

        if (!user) {
            return res.json({ success: false, message: "candidate not found" })

        } return res.json({ success: true, message: "candidate deleted email successfully" })
    } catch {
        console.log("Error in delete user")
        return res.json({ success: false, message: "Error in the delete user" })
    }
}

const updateuser = async (req, res) => {
    try {
        const {email} = req.params;

       const user = await Modeluser.findOneAndUpdate( { email: email }, req.body,{ new: true }
);

        if(!user){
            return res.json({ success : false, message :"user not found"})
        }
        return res.json({success: true , message : "user update successfully " , data :user})

    } catch(err) {
        {
            console.log(err);
            return res.json({
                success: false,
                message: "Error in update candidate"
            });
        }
    }
}




    module.exports = {
        createrUser,
        fetchUser,
        fetchUserEmail,
        deleteuserEmail,
        deleteuser,
        updateuser


    };  