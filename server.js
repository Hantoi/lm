const http=require('http')

const server= http.createServer((req,res)=>{
 if (req.url=='/Home'){
     res.statusCode=200
     res.write("Wellcome My Dear")

 }
 else if (req=='/Contact'){
    res.statusCode=200
     res.write("Wellcome To Contact")
 }
 else{
    res.statusCode=404
     res.write('Not Found')
 }
 res.end()

})
server.listen(5000,()=>{console.log('server runnig')} )