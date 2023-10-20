const express = require('express') 
const app = express()  
const fs = require('fs') 
 
app.get('/stream',function(req,res){ 
 
	const videoPath = 'Darshini.mp4'

	 
	res.writeHead(200, {'Content-Type': 'video/mp4'})  
	fs.createReadStream(videoPath).pipe(res) 
}) 
app.get('/',function(req,res){ 

	 
	res.sendFile(__dirname+'/index.html') 
}) 

 
app.listen(3000,function(req,res){ 
	console.log('Server started at 3000') 
})
