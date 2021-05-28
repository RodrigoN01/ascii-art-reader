const path = require('path')
const fs = require('fs')

// function to display the file names

function getAsciiList (filePath){
  fs.readdir(filePath, 'utf8', (err, files) => {
    if (err) {
      console.error(err.message)
      return
    }
    manipulateArr(files)
    console.log(files[0])
  })
}

const dataPath = path.join(__dirname, './data')
getAsciiList(dataPath)


function manipulateArr (filesArr) {
  const asciObj = Object.assign({}, filesArr)

  console.log(asciObj)
  console.log("Choose which number artwork you would like to view:")
}

// function to get user to input number

var readline = require('readline');

readline.emitKeypressEvents(process.stdin);

if (process.stdin.isTTY)
    process.stdin.setRawMode(true);

process.stdin.on('keypress', (_, key) => {
  if (key.name === '0'){
    const dataPath = path.join(__dirname, './data/kea.txt')
    getAsciiImg(dataPath)
  }
  if (key.name === '1'){
    const dataPath = path.join(__dirname, './data/kiwi.txt')
    getAsciiImg(dataPath)
  }
  if (key.name === '2'){
    const dataPath = path.join(__dirname, './data/manaia.txt')
    getAsciiImg(dataPath)
  }
  if (key.name === '3'){
    const dataPath = path.join(__dirname, './data/nikau.txt')
    getAsciiImg(dataPath)
  }
  if (key.name === '4'){
    const dataPath = path.join(__dirname, './data/pohutukawa.txt')
    getAsciiImg(dataPath)
  }
})


function getAsciiImg(filePath) {

  fs.readFile(filePath, 'utf8', (err, contents) => {

    if (err) {
      console.error(err.message)
      return
    }
    console.log(contents)
    process.exit()
  })
}