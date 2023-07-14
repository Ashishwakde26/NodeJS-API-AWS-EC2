const user = require('../modal/user.modal');


exports.registerUser = async (req, res) => {
    const { name, email, password} = req.body

    let checkUser = await user.find({ email: email }).lean();

    if (checkUser.length > 0) {
        res.status(403).json({
            status: false,
            message: "user with Email id already registered."
        })
    } else {
        let NewUser = await new user({
            email: email,
            password: password,
            name: name,
            });

            await NewUser.save();

            res.status(200).json({
                status: true,
                message: "User creation successfull."
            })
    }
}


exports.getAllUser = async (req, res) => {

    let allusers = await user.find({});

    if(allusers.length == 0) {
        res.status(400).json({
            status: false,
            message: "No users found."
        })
    } else {
        res.status(402).json({
            status: true,
            message: allusers
        })
    }

}