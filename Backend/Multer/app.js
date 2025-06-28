require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const PORT = 4444;

const multer = require('multer');
const cloudinary = require('cloudinary').v2
const DatauriParser = require('datauri/parser');
const parser = new DatauriParser();

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});


app.set('view engine','hbs');
app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));

const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, 'images')
    },
    filename: (req, file, cb)=>{
        // const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, file.fieldname + '-' + file.originalname);
    }
})

fileFilter = (req, file, cb)=> {
    if(file.mimetype === 'image/jpeg' || file.mimetype === 'image/jpeg' || file.mimetype === 'image/png')
        cb(null, true)
    else cb(null, false)
}

// app.use(multer({storage, fileFilter}).single('image'));
app.use(multer({}).single('image'));

app.get('/',(req,res)=>{
    res.render('index');
})

app.post('/',(req,res)=>{
    // console.log(req.file);
    const extension = path.extname(req.file.originalname);
    const fileURI = parser.format(extension, req.file.buffer);
    // console.log(fileURI); 

    cloudinary.uploader.upload(`${fileURI.content}`, (error, result)=>{
        console.log(result, error);
    });

    res.send('File is uploaded on Cloudinary Server');
})

app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}`);
})
