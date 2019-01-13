let express = require("express");
let app = express();
//配置跨域白名单
let whitelist = ["http://localhost:4000"]
//   * 星号不支持cookie跨域
app.use(function(req,res,next){
    // console.log(req.headers.origin)
    let origin = req.headers.origin;
    if(whitelist.includes(origin)){
        //允许哪个域名进行跨域
        res.header('Access-Control-Allow-Origin',origin)
    //  允许携带哪个请求头跨域，多个用逗号隔开  'name,a'
        res.header('Access-Control-Allow-Headers','name')
    //允许哪种方法进行跨域 方法要大写
    // res.header("Access-Control-Allow-Methods",'POST，GET,PUT,DELETE,OPITIONS')
    //允许携带cookie跨域
    res.header('Access-Control-Allow-Credentials',true)
    //预检的存活时间 单位是s
     res.header('Access-Control-Max-Age',6) 
     //允许前端获取响应头(Expose:暴露)
     res.header('Access-Control-Expose-Headers','name')
    //处理OPTIONS 直接返回
    if(req.method==='OPITIONS'){
        Response.end()
    }
        next()
    }
})


app.get("/data",function(req,res){
    res.json({
        code:200,
        msg:"成功"
    })
    res.send('200')
})
app.listen(3000,()=>{
    console.log('3000启动成功')
})
//localhost:3000/data