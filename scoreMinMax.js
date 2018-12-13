function breakingRecords(scores) {
  
  if (!Array.isArray(scores))
    scores = scores.split(' ').map(Number)

  let min = scores[0]
  let max = scores[0]
  let contMin = 0
  let contMax = 0

  for (let i = 1; i < scores.length; i++) {
    if (scores[i] > max) {
      contMax++
      max = scores[i]
    }
    if (scores[i] < min) {
      contMin++
      min = scores[i]
    }
  }

  return [contMax, contMin]
}

console.log(breakingRecords([10,5,20,20,4,5,2,25,1])) // [ 2, 4 ]
console.log(breakingRecords("10 5 20 20 4 5 2 25 1")) // [ 2, 4 ]