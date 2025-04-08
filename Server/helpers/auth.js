const bcrypt = require ('bcrypt'); // we will import bcrypt as the first line in this file

// At the top we will create a function called hashPassword

const hashPassword = (password) => {

    return new Promise((resolve, reject) => {
        bcrypt.genSalt(12,(err, salt) => {
            if(err) {
                reject(err)
            }
            bcrypt.hash(password,salt,(err,hash) => {
                if(err){
                    reject(err)
                }
                resolve(hash)
            })
        })
    })
}

const comparePassword = (password,hashed) => {
    return bcrypt.compare(password,hashed) 
};

module.exports ={
    hashPassword,
    comparePassword
}