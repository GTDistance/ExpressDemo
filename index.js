const express = require('express')
const app = express()
app.get('/server', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin',request.headers.origin || '*')
  response.setHeader('Access-Control-Allow-Credentials',true)
  console.log('requestrequest',request)
  // response.send(`<img src='http://open.api.hrwork.bz:9001/docs/content/3'>`)
  response.send('hello')
})
app.get('/home', (request, response) => {
  // response.setHeader('Access-Control-Allow-Origin','*')
  response.sendFile(__dirname+'/index.html')
})
app.all('/allserver', (request, response) => {
  // response.setHeader('Access-Control-Allow-Origin','*')
  console.log('请求的资源是：',request.url)
  response.setHeader('Access-Control-Allow-Headers',req.headers.origin || '*')
  const data = {
    name:'thomas-2'
  }
  response.send(JSON.stringify(data))
})
app.all('/delay', (request, response) => {
  response.setHeader('Access-Control-Allow-Origin','*')
  response.setHeader('Access-Control-Allow-Headers','*')
  const data = {
    name:'thomas-2'
  }
  setTimeout(()=>{
    response.send(JSON.stringify(data))
  },3000)
})
app.listen(8000, () => {
  console.log('服务器已启动，8000端口舰艇中')
})
