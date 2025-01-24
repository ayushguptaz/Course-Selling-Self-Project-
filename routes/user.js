const {Router} = require("express");

const userRouter = Router();

userRouter.post("/signup", function (req, res) {
    res.json({
        message: "Signup endpoint!",
    });
});

// Define the user routes for signin 
userRouter.post("/signin", function (req, res) {
    res.json({
        message: "Signin endpoint!",
    });
});

// Define the user routes for purchases made by the user
userRouter.get("/purchases", function (req, res) {
    res.json({
        message: "Purchases endpoint!",
    });
});

// Export the userRouter so that it can be used in other files
module.exports = {
    userRouter: userRouter,
};