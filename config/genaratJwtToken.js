const jwt = require('jsonwebtoken');
const generateToken=(id,emil,phon , roll )=>{
    const paylod={
        userID:id,
        emil:emil,
        phon:phon,
        roll
    }
    const token = jwt.sign(paylod, process.env.JWT_SEC, { expiresIn: '60s' });
    return token
}
module.exports={generateToken}