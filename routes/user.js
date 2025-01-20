const {Router} = require("express");

const userRouter = Router();

userRouter.get('/signup',function (req,res){
    console.log("helloo");
})

userRouter.get('/signin', function(req,res){

})

userRouter.get('/purchases', function(req,res){

})

module.exports = {
    userRouter: userRouter
}