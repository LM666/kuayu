let express=require('express')
let app = express();
app.use(express.static(__dirname))
app.listen(3500,()=>{
    console.log('3500启动成功')
})