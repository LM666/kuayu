//a b页面是同域名，c 页面是单独的
//a给c传一个hash值，c动态创建iframe
// c把hsah值，传给b,b将结果放在a的hash值当中
let express=require('express')
let app = express();
app.use(express.static(__dirname))
app.listen(3000,()=>{
    console.log('3000启动成功')
})