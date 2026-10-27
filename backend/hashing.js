import bcrypt from "bcrypt"

// let password =  "Suraj@123"
// let hashedPassword = await bcrypt.hash(password,10)
// console.log(hashedPassword)


// $2b$10$lhhCWSJGifuXj.vYTtsJ1Oq9U6YQMh92AMnS8XZJTtb0XqlkvjWn.

let hashedPassword = "$2b$10$lhhCWSJGifuXj.vYTtsJ1Oq9U6YQMh92AMnS8XZJTtb0XqlkvjWn."
let loginPassword = "Suraj@123"

let isValidPassword = await bcrypt.compare(loginPassword, hashedPassword)
console.log(isValidPassword)