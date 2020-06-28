let arrPythag = [];
for (var i = 1; i <= 1000; i++) {
  arrPythag.push(i);
}
let allTriplets = [];
for (var i = 0; i < arrPythag.length; i++) {
  for (var k = 0; k < arrPythag.length; k++) {
    for (var p = 0; p < arrPythag.length; p++) {
      let aSquared = Math.pow(arrPythag[i],2);
      let bSquared = Math.pow(arrPythag[k],2);
      let cSquared = Math.pow(arrPythag[p],2);
      if(aSquared + bSquared == cSquared && arrPythag[i] + arrPythag[k] + arrPythag[p] == 1000) {
        allTriplets.push([arrPythag[i],arrPythag[k],arrPythag[p]]);
      }
    }
  }
}
console.log(allTriplets);
let product1 = allTriplets[0][0] * allTriplets[0][1] * allTriplets[0][2];
console.log(product1);