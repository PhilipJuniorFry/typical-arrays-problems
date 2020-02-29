
exports.min = function min (array) {
  if(arguments.length === 0 || array.length === 0){
    return 0;
  }else{
    return Math.min.apply(Math, array);
  }
}

exports.max = function max (array) {
  if(arguments.length === 0 || array.length === 0){
    return 0;
  }else{
    return Math.max.apply(Math, array);
  }
}

exports.avg = function avg (array) {
  if(arguments.length === 0 || array.length === 0){
    return 0;
  }else{
    return (array.reduce( ( p, c ) => p + c, 0 )) / array.length;
  }
}
