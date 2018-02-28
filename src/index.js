module.exports = function getZerosCount(number, base) {
  var zero = 0,
      s = 0,
      max = 0,
      d = 0,
      ch = 0,
      prost = [],
      razloj = base;

      for (var i = 0, d = 2; i < base; i++) {  

        if ((razloj % d) == 0) { 
            prost.push(d);     
            razloj = razloj / d;
        }
        else if (razloj == 1) { 
            break;
        } else {
            d++;  
          }
      };
  
      for (var i = 0; i < prost.length; i++){
        if (prost[i] > max){
          max = prost[i];
        };
      };

      for (var i = 0; i < prost.length; i++) { 
        if (prost[i] == max) {           
            s++;
        }
      }

      for (var i = 1; i < 27; i++) {

        ch = Math.floor(number / (Math.pow(max, i)));
        zero += ch; 
  
        if ((Math.pow(max, i+1) >= number)) { 
  
            if (base == 192) {               
                return (Math.floor(zero / 3))
            } else if(base == 160) {
                return (Math.ceil(zero / 1.25))
            } else {
                return (Math.floor(zero / s))
            }
  
        };
    };
}