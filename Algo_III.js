//1) Analyze an array’s values and return the average of each respective array.
function printAverage(x){
    var sum = 0;
    for(var i = 0; i < x.length; i++){
        sum += x[i];
    }
    var average = sum / x.length;
    return average;
 }
 y = printAverage([1,2,3]);
 console.log(y); // should log 2
   
 y = printAverage([5,2,8]);
 console.log(y); // should log 5

// 2) Create an array with all the odd integers between 1 and 255 (inclusive)
function returnOddArray(){
    var array = [];
    for( var i = 1; i <= 255; i++){
        if(i%2 ===1){
            array.push(i);
        }
    }
    return array;
 }
 y = returnOddArray();
 console.log(y); // should log [1,3,5,...,253,255]

 //3) Square each value in a given array, returning that same array with changed values.
 function squareValue(x){
    for(var i = 0; i < x.length; i++){
        var square = x[i]*x[i];
        x[i] = square;
    }
    return x;
 }
 y = squareValue([1,2,3]);
 console.log(y); // should log [1,4,9]
   
 y = squareValue([2,5,8]);
 console.log(y); // should log [4,25,64]