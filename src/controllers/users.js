const { route } = require("../routes/users");
const userModel = require("../models/users");

// CREATE - POST
const createUser = (req, res) => {
    console.log(req.body);
    res.json({
        message: "Create new user",
        data: req.body
    })
}

// READ - GET
const getUser = async (req, res) => {

    try {
        //simpen data dalam array untuk mengambil rows saja
        const [data] = await userModel.getAllUser();
        
        res.json({
            message: "Get user succes",
            data: data
        })
    } catch (error){
        res.status(500).json({
            message: "Server Error!!",
            serverMessage: error, 
        })
    }
    
    
    /* dummy data
    const data = {
        idUser: "1",
        name: "arvyn",
        age: 25,
        email: 'arvyn@gmail.com',
        address: '12345 street'
    }
    */ 
}

const updateUser = (req, res) => {
    const {idUser} = req.params;
    console.log("idUser:", idUser);
    res.json({
        message: "Update user succes",
        data: req.body
    })
}

const deleteUser = (req, res) => {
    const {idUser} = req.params;
    res.json ({
        message: "Delete user succes",
        /*dummy data
         idUser: idUser,
         name: "Budi",
         age: 28,
         address: "jln kokas"
        */ 
    })
}


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}
