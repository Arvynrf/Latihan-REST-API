const {route} = require("../routes/users");
const userModel = require("../models/users");

// CREATE - POST
const createUser = async (req, res) => {

    const {body} = req;

    if(!body.name||!body.email||!body.address){
        return res.status(400).json({
            message: "Failed,Wrong Input!!",
            data: null,
        })
    }

    try{
        await userModel.createNewUser(body)
        res.status(201).json({
            message: "Create new user succes",
            data: body
        })
    }catch(error){
        res.status(500).json({
            message: "Server Error!!",
            serverMessage: error, 
        })
    }
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

const updateUser = async (req, res) => {

    const {idUser} = req.params;
    const {body} = req;
    try {
        await userModel.updateExUser(body, idUser)
        res.json({
            message: "Update User Succes!!",
            data:{
                id: idUser,
                ...body
            },
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error!!",
            serverMessage: error, 
        })
    }
}

const deleteUser = async (req, res) => {
    const {idUser} = req.params;

    try {
        await userModel.deleteExUser(idUser)
        res.json({
            message: "Delete User Succes!!",
            data: null
        })
    } catch (error) {
        res.status(500).json({
            message: "Server Error!!",
            serverMessage: error, 
        })
    }
}


module.exports = {
    getUser,
    createUser,
    updateUser,
    deleteUser
}
