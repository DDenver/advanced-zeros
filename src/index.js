module.exports = function getZerosCount(number, base) {
  var zero = 0,
      r = 0,
      m = 0,
      d = 0,
      ch = 0,
      inf = true,
      prost = [],
      razloj = base;

      for (var i = 2; i <= base; i++) {

        for (var j = 2; j < i; j++) {
          if (i % j == 0) {
            inf = false;
            break;
          } else{inf = true;};
        }
        if (inf){
          prost.push([i,0]);
        }; // простое
      }
      b = prost.length - 1;

  do{
    for (var i = 0; i <= b; i++){
      p = razloj % prost[i][0];
      if (p == 0){
        razloj = razloj / prost[i][0];
        prost[i][1]++; 
        break;
      };
    };
  }while (razloj > 1);

  for (var i = b; i >= 0; i--){
    if (prost[i][1] >= 1){
      m = prost[i][0];
      d = prost[i][1];
      break;
    };
  };

  for (var i = 1; i <= number; i++){
    ch = i;
    do{
      r = ch % m;
      if (r == 0){
        zero++;
        ch = ch / m;
      }
    } while( r == 0);
  };

  zero = Math.floor(zero / d);
  return zero;
}