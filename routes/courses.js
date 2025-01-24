const {Router} = require("express")
const { courseModel } = require("../db");
const courseRouter = Router();





courseRouter.get('/preview', function(req, res){
    res.json({
        message: "Priview endpoint!",
    });

})
courseRouter.get("/courses", function (req, res) {
    res.json({
        message: "Pourses endpoint!",
    });
});

module.exports = {
    courseRouter: courseRouter
}