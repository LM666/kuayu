//与a.html和b.html页面有关系,当页面都在同一个文件夹下

let express = require("express");
let app = express();
//静态文件中间件：可以让端口与html联系
app.use(express.static(__dirname))


//当js 文件与a.html/b.html文件在static文件夹下的时候(有问题)

//静态文件中间件：可以让端口与html联系
// let path=require('path') ///引入路径模块
// app.use(express.static(path.join(__dirname,'../static')))//静态返回
// console.log(path.join(__dirname,'../static'))



app.listen(5000,()=>{
    console.log('5000启动成功')
})