// let express = require('express')
// let app = express();
// //需要先下载ws 模块   npm install ws
// let WebSocket = require('ws')
// //建立一个websoket服务器
// let wss = new WebSocket.Server({port:3000})
// //建立连接和发送消息
// wss.on('connection',function(ws){
//     ws.on('message',function(data){
//         console.log(data)
//         ws.send('你也好')
//     })
// })
let express  = require('express');
let app = express()
let Websocket = require('ws')
// 建立一个Websocket的服务器 
let wss = new Websocket.Server({port:3000})
wss.on('connection',function(ws){
     ws.on('message',function(data){
        console.log(data)
        //打印的结果：是index.html里面的你好
        ws.send('你也好')
     
     })
})
