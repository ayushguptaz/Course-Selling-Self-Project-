const express = require("express")
const {userRouter} = require("./routes/user")
const {courseRouter} = require("./routes/courses")
const {adminRouter} = require("./routes/admin")

const { userRouter } = require("./routes/user");  
const { courseRouter } = require("./routes/course"); 
const { adminRouter } = require("./routes/admin");  
const app = express();
app.use("api/v1/user", userRouter);
app.use("api/v1/courses", courseRouter);
app.use("api/v1/admin",adminRouter);

async function main() {
    try {
        // Attempt to connect to the MongoDB database using the connection string from the .env file
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to the database successfully");

        // Get the port from the .env file or use the default port 3000
        const port = process.env.PORT || 3000;  
        
        // Listen on the specified port
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        // Log any errors that occur during the connection or server setup
        console.error("Failed to connect to the database or start the server", error);
    }
}

main()