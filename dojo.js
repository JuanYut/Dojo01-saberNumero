const fs = require('fs')
fs.readFile('./numerosJon.txt', 'utf-8', (err, data) => {
  if(!err){

    var arrayOfLines = data.split('\n')
    var array
    var myArray = ['', '', '', '', '', '', '', '', '']
    let cont = 0

    for(let line of arrayOfLines) {
      if(cont < 3) { // no hay problema.
        array = line.match(/.{1,3}/g) // [' _ ' ... ' _ ']
        for(let i=0; i<array.length; i++) {
          myArray[i] += array[i]
        }
        cont++
      } else { 
         cont = 0
         var myArray = ['', '', '', '', '', '', '', '', '']
      }

      if(cont === 3) {
        let cadenaNum = ''
        for(let num of myArray) {
          cadenaNum += saberNumero(num)
        }
        console.log(cadenaNum) // 000000000
      }
    }

  }
})

function saberNumero(cadenaNum) {
  let num = 666
  switch(cadenaNum) {
    case ' _ | ||_|' :
      num = 0
      break
    case '     |  |':
      num = 1
      break
    case ' _  _||_ ':
      num = 2
      break
    case ' _  _| _|':
      num = 3
      break
    case '   |_|  |':
      num = 4
      break
    case ' _ |_  _|':
      num = 5
      break
    case ' _ |_ |_|':
      num = 6
      break
    case ' _   |  |':
      num = 7
      break
    case ' _ |_||_|':
      num = 8
      break
    case ' _ |_| _|':
      num = 9
      break
    default:
      console.log('Ocurrio algo raro')
      break
  }
  return num
}