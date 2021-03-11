exports.min = function min (array) {
  if((array || []).length == 0){
    return array = new Array()
  }
  return Math.min(...array);
}

exports.max = function max (array) {
  if((array || []).length == 0){
    return array = new Array()
  }
  return Math.max(...array);
}

exports.avg = function avg (array) {
  if((array || []) == 0){
    return array = new Array()
  }

  let avg = 0

  for(let i = 0; i < array.length; i++) {
      avg += array[i]
    }
  
    return avg / array.length
}

