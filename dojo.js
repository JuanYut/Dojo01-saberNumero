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
        let arrayNums = []
        for(let num of myArray) {
          //cadenaNum += saberNumero(num)
          arrayNums.push(saberNumero(num))
        }
        console.log(arrayNums + ' ' + calcularCode(arrayNums)) // 000000000 0
      }
    }

  }
})

function calcularCode(array) {
  if(array.some(num => num === '?') == false) {
    let multi = 9,
      sum = 0
    for(let num of array) {
      sum += multi * num
      multi--
    }
    
    if(sum % 11 === 0) {
      return 0
    } else {
      return 'ERR'
    }
    
  } else {
    return 'ILL'
  }
}

function saberNumero(cadenaNum) {
  let num
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
      num = '?'
      break
  }
  return num
}