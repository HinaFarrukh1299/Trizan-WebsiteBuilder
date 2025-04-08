const User = require('../Models/user');
const {hashPassword,comparePassword} = require('../helpers/auth')
const jwt = require ('jsonwebtoken');// we will have the json web token only in the login api not the register


const test = (req,res) => {

    res.json('test is working ALHAMDOLILLAH')

}

// Register-Endpoint

const registerUser = async (req,res) => { // it is an asynchronus function to request data from database
   // res.json('ALHAMDOLILLAH register is working')
    try {
        const {name,email,password} = req.body ; // here we are saying this information will come in the requested body
        // check if name was entered
        if(!name) {
          return  res.json({
            error:'name is required'
          })
        }
        // check if password was entered
        if(!password || password.length < 6) {
            return res.json({
                error:'password is required and should be atleast 6 characters long '
            })
        };
        // check if email was entered

        const exist = await User.findOne({email}); // we are telling find the email in the user collection
        if (exist) {
            return res.json({
                error:'email is taken already'
            })
        };
        const hashedPassword = await hashPassword(password)
        // create a user in the User collection in your database
        //mongodb gives us a property called create which we can tag on to the User collection

        const user = await User.create({
            name,
            email,
            password : hashedPassword,
        })
        return res.json(user)

     } catch (error) {
        console.log(error)
        
    }
}

// Login-Endpoint
const loginUser = async (req,res) => {
 //res.json('ALHAMDOLILLAH loginUser is working')   
 try {
const {email,password} = req.body ;// so we are taking the email and password they login with in the requested body

 // check if user exists
 const user = await User.findOne({email}) ; 
if(!user) {
    return res.json({ 
        error :'There is no account registered with this email'
})
}
// check if passwords match

const match = await comparePassword(password,user.password)
if(match){
 //res.json('AH passwords match')
 // now assign a function / parameter called sign to jwt
 jwt.sign({email:user.email , id:user._id , name:user.name},process.env.JWT_SECRET,{/*empty object*/},(err,token) => {
    if(err) throw err ;
    res.cookie('token',token).json(user);
 } ) // now we will create a secret for this sign
}
else{
    res.json({error:'passwords don\'t match'}) // Its working AH :)
}

 } catch (error) {
    console.log(error)
 }
}

// Endpoint for userContext/jwt
const getProfile = (req,res) => {

    const{token} = req.cookies // here token is going to be require.cookies
    if(token) {
        jwt.verify(token, process.env.JWT_SECRET,{},(err,user) => {
            if(err) throw err;
            res.json(user)
        })
    }
    else{
        res.json(null)
    }
}

module.exports = {
    test,
    registerUser,
    loginUser,
    getProfile
}