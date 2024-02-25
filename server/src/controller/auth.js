import { db } from "../connect.js"
import bcrypt from "bcryptjs"

export const register=(req,res)=>{
    //CHECK USER IF EXISTS
    const q="SELECT * FROM users WHERE username=?"
    db.query(q,[req.body.username],(err,data)=>{
        if(err){
            return res.status(500).json(err)
        }
        if(data.length){
            return res.status(409).json("User already exits")
        }
        //CREAT A NEW USER
            //HASH TEH PASSWORD

            const salt=bcrypt.genSaltSync(10)
            const hashedPassword=bcrypt.hashSync(req.body.password,salt)
        
        const q= "INSER INTO users('username','email','password','name') VALUE (?)"
        const values=[req.body.username,req.body.email,hashedPassword,req.body.name];
        db.query(q,[values],(err,data)=>{
            if(err){
                return res.status(200).json("User has been created")
            }
        })   
    })
}

export const login=(req,res)=>{

}

export const logout=(req,res)=>{
    
}

