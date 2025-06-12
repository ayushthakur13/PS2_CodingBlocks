const fs = require('fs')

// 1. Read the file
const file = fs.readFileSync(
    'img.jpg'
)
// console.log(file) // This will give raw data (Buffer)


// 2. Convert the file into string format so that we van store it in a text file
// we will convert this buffer into base64 data 
let convertedFile = file.toString('base64')


// 3. Write the file
fs.writeFileSync(
    'convertedImg.txt',
    convertedFile,
)


// 4. Restore the image from text (Reverse Engineer)
// read the converted file
let restoredStr = fs.readFileSync('convertedImg.txt',{encoding: 'utf-8'})

// convert the string back to buffer again using base64
let buffer = Buffer.from(restoredStr,'base64')

fs.writeFileSync(
    'newImg.jpg',
    buffer,
)


// 5. Reduce the size of image (using Jimp)
// Jimp is a Node.js library for simple image processing and manipulation.
const Jimp = require('jimp');

Jimp.read('newImg.jpg')
  .then(image => {
    return image
      .quality(60)
      .writeAsync('reducedNewImg.jpg');
  })
  .catch(err => {
    console.error('Error processing image:', err);
  });
