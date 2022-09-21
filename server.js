const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname+'/dist/ng-matero'));
app.get('/*',function(req,res ) {
  res.sendFile(path.join(__dirname+'/dist/ng-matero/index.html'))
});

app.listen(process.env.PORT || 3000);

// let express = require('express');
// let app = express();
// app.use(express.static(__dirname+'/dist/resto-admin'));
// app.get('/*',(req,res)=>{
//   res.sendFile(__dirname+'/src/index.html');
// });
// app.listen(
//   process.env.PORT || 8080
// );
