var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/login', function(req, res, next) {
    var username = req.body.username;
    var pwd = req.body.password;
    setTimeout(() => {
        if(username === "admin" && pwd === "123456") {
            res.json({
                data: 123,
                code: 0,
                msg: ""
            });
        } else {
            res.json({
                msg: "用户名或密码错误",
                code: 1
            });
        }
    }, 2000);
});

module.exports = router;
