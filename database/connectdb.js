import mongoose from "mongoose"

const connectDB = async (DATABASE_URL) => {
    try {
        const DB_OPRTIONS = {
            // Database Name
            dbName: "school"
        };

        await mongoose.connect(DATABASE_URL , DB_OPRTIONS);
        console.log("Connect Successfully...!")
    } catch (error) {
        console.log(error)
    }
}

export default connectDB