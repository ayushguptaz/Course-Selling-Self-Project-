const {Router} = require("express");

const adminRouter = Router();

adminRouter.post('/signup',function (req,res){
    console.log("helloo");
})

adminRouter.post('/signin', function(req,res){

})

adminRouter.put('/course', function(req,res){

})
adminRouter.get('/course/bulk',function(req,res){

})

module.exports = {
    adminRouter: adminRouter
}