module.exports = function getZerosCount(number, base) {
  var zero = 0,
      r = 0,
      posMin = 0,
      m = 0,
      d = 0,
      Prost = [[2,0],[3,0],[5,0],[7,0],[11,0],[13,0],[17,0],[19,0],[23,0],
                [29,0],[31,0],[37,0],[41,0],[43,0],[47,0],[53,0],[59,0],[61,0],
                [67,0],[71,0],[73,0],[79,0],[83,0],[89,0],[97,0],[101,0],[103,0],
                [107,0],[109,0],[113,0],[127,0],[131,0],[137,0],[139,0],[149,0],
                [151,0],[163,0],[167,0],[173,0],[179,0],[181,0],[191,0],[193,0],
                [197,0],[211,0],[223,0],[227,0],[229,0],[233,0],[239,0],[241,0],[251,0]],
      razloj = base;

  do{
    for (var i = 0; i < 51; i++){
      p = razloj % Prost[i][0];
      if (p == 0){
        razloj = razloj / Prost[i][0];
        Prost[i][1]++; 
        break;
      };
    };
  }while (razloj > 1);

  for (i = 51; i >= 0; i--){
    if (Prost[i][1] >= 1){
      m = Prost[i][0];
      d = Prost[i][1];
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

  zero = Math.floor(zero/d);
  return zero;
}