const express = require('express');
const app = express();
const multer = require('multer');
const bodyParser= require('body-parser')

//Setting multer's storage location
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/images')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})
var upload = multer({ storage: storage })


app.use(bodyParser.urlencoded({extended: true}))

//rendering the html in the app
app.get('/',function(req,res){
  res.sendFile(__dirname + '/form.html');
});


app.post('/myupload', upload.array('myFiles', 12), (req, res, next) => {

  const files = req.files
  if (!files) {
    var error = new Error('Please choose files')
    error.httpStatusCode = 400
    return next(error)
  } 
  if (files[0].size > 3000000) {
    var error = new Error('File is too big')
    error.httpStatusCode = 400
    return next(error)
  }
 
    res.send(files)
  
})

app.listen(3000, () => console.log('Server started on port 3000'));
