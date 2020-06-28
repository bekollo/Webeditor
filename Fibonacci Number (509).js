var fib = function(N) {
    var fibArr = [0,1];  
     
     for(var i=2;i<=N;i++) {                              
         fibArr[i] = fibArr[i-1] + fibArr[i-2];
     }
     
     return fibArr[N];                                     
 };