//与a.html和b.html页面有关系

let express = require("express");
let app = express();
//静态文件中间件：可以让端口与html联系
app.use(express.static(__dirname))

app.listen(4000,()=>{
    console.log('4000启动成功')
})