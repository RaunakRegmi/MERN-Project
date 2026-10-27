import jwt from "jsonwebtoken"



let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNzkwMDUyNTc2LCJleHAiOjE3OTAwNTQ5NzZ9.LjVAn5KN15VZ7wamFW2xsOxot2cAwQBNdCURN1GQee8"

let value = jwt.verify(token,"Sunway@1234")
console.log(value)
