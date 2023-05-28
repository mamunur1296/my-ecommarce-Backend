const jwt = require('jsonwebtoken');
const generateToken=(id,emil,phon )=>{
    const paylod={
        userID:id,
        emil:emil,
        phon:phon
    }
    const token = jwt.sign(paylod, process.env.JWT_SEC, { expiresIn: '1d' });
    return token
}
module.exports={generateToken}