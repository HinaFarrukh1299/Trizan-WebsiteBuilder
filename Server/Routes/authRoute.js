/*const express = require(`express`);
const router = express.Router();
const cors = require ('cors');
const { test } = require ('../Controllers/authController.js')

//middleware
router.use(
    cors(
        {
            credentials : true ,
            origin : ` http://localhost:5174/`
        }       
        )
)

router.get('/',test);
module.exports=router */

const express = require('express');
const router = express.Router();
const cors = require('cors');
const { test,registerUser,loginUser,getProfile } = require('../Controllers/authController.js');


// Middleware
router.use(cors({
    credentials: true,
    origin: 'http://localhost:5173'  // ✅ Fixed the space and removed the trailing "/"
}));

router.get('/', test);
router.post('/register', registerUser);
router.post('/login',loginUser)
router.get('/profile',getProfile)
module.exports = router;

