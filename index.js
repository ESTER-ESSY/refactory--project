const express = require('express');
const app = express();


//4. middleware
app.use(express.urlencoded({extended: true}));


//route
app.get('/' ,(req, res)=> {
    res.send('indexpage');
});

//serving html files
app.get("/index", (req, res) => {
    res.sendFile(__dirname + '/index.html')
  });
  
  app.get("/login", (req, res) => {
    res.sendFile(__dirname + '/login.html')
  });
  
  app.post("/login", (req, res) => {
    console.log(req.body)
  });
  
  
  //non-existing rout
    app.get('*', (req, res) => { // new
      res.send('Error! page doesnot exist.');
    });
    


//server
app.listen(3500, () => console.log('listening on port 3500'));