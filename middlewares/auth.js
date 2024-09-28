import jwt from 'jsonwebtoken'

const JWT_SECRET = process.env.JWT_SECRET

const auth = (req, res, next)=>{
    const token = req.headers.authorization
    if(!token){
        return res.status(401).json({message: "Acesso negado"})
    }
    try {
        const decoded = jwt.verify(token.replace('Bearer ',''),JWT_SECRET)
        req.userID = decoded.id
        console.log(decoded)
    } catch (error) {
        return res.status(404).json({message: "Token invalido"})   
    }
    next()
}

export default auth