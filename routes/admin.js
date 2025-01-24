const {Router} = require("express");

const adminRouter = Router();
const { adminModel } = require("../db");
adminRouter.post('/signup',function (req,res){
    res.json({
        message: "Signup endpoint",
    });
})

adminRouter.post('/signin', function(req,res){

    res.json({
        message: "Signin endpoint",
    });

})

adminRouter.put('/course', function(req,res){
    res.json({
        message: "Course endpoint",
    });

})
adminRouter.get('/course/bulk',function(req,res){

})

module.exports = {
    adminRouter: adminRouter
}