import mongoose from "mongoose"

const connectToDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/sunwayl2")
        console.log("application is connected to database successfully.")
    } catch (error) {
        console.log("unable to connect to database:", error.message)
    }
}

export default connectToDb
