const readline = require('readline')

// just to run bird file
const path = require('path')
const fs = require('fs')

const keaPath = path.join(__dirname + '/data', 'kea.txt')
const kiwiPath = path.join(__dirname + '/data', 'kiwi.txt')
const manaiaPath = path.join(__dirname + '/data', 'manaia.txt')
const nikauPath = path.join(__dirname + '/data', 'nikau.txt')
const pohutukawaPath = path.join(__dirname + '/data', 'pohutukawa.txt')

const asciiArr = [keaPath, kiwiPath, manaiaPath, nikauPath, pohutukawaPath]

function pressEnter() {
  const resultLine = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  })

  resultLine.question(
    'Choose the Ascii art you would like to see and press enter: \n Press 0 for Kea \n Press 1 for Kiwi \n Press 2 for Manaia \n Press 3 for Nikau \n Press 4 for Pohutukawa \n',
    function (input) {
      resultLine.close()

      if (input >= 0 && input < 5) {
        showBird(asciiArr[input])
      } else {
        console.log("Oops!! This doesn't exist")
      }
    }
  )
}

pressEnter(asciiArr, (err, contents) => {
  if (err) {
    console.log(err.message)
  } else {
    console.log(contents)
  }
})

// Show ascii art on the console
function showBird(filepath) {
  fs.readFile(filepath, 'utf8', (err, contents) => {
    if (err) {
      console.error(err.message)
      return
    }
    console.log(contents)
  })
}
