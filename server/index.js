const express=require("express")

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.listen(9500,() =>{
   console.log("He he he") 
})
