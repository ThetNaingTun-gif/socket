let express=require('express');

// app setup

let app = express();

// server initialization
let server = app.listen(3000, () => {
  console.log('project is listening on localhost:3000');
});


//route setup
app.get('/', (req, res) => {
  req.sendFile(__dirname + '/public/index.html');
})
