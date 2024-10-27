const admin = require("./conexion");

async function registerUser(email, password){
    try{
        const userRegister = await admin.auth().createUser({
            email,
            password
        });
        return {success: true, user: userRegister};
    } catch (error){
        return {success: false, message: error.message};
    }
}

module.exports = registerUser;