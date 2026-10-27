/* 
token 
    detail
    secretKey
    expiryinfo
eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTIzNCwiaWF0IjoxNzkwMDUxOTE1LCJleHAiOjE3OTAwNTQzMTV9.BHiClm1RJEC2UvnSKC3k2oelLZwihi5Tl8hhCXsYiVM
*/

import jwt from "jsonwebtoken"

let details = {
    id :1234
}
let secretKey = "Sunway@1234"
let expiryInfo = {
    expiresIn: "40m"
}



let token = jwt.sign(details, secretKey, expiryInfo)
console.log(token)