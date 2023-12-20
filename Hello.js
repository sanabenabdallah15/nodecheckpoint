const fs=require('fs')

fs.appendFile('welcome.txt', 'Hello node!', function (err) {
    if (err) throw err;
    console.log('Saved!');
  });
  fs.readFile('welcome.txt',"utf8",(err,file)=>{
    if(err){
        console.log(err)
    }else {
        console.log(file)
    }
  })