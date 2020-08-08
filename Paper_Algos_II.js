//print 1 to X. Have the function print all the integers from 1 to x.  If x is negative, have it print/log "negative number' and have the function return false.
function printUpTo(x){
    if (x >= 0){
        for (var i = 1; i <= x; i++){
        console.log(i);
        }
    }
    else {
    console.log('negative number');
    return false;
    }
}

printUpTo(100);// should print all the integers from 1 to 1000000
var y = printUpTo(-10);//should return false
console.log(y);//should print false

//printSum. Have the function print integers from 0 to 255 and with each integer print the sum so far.  Have the function return the final sum

function printSum(x){
    var sum = 0;
    for( var i = 0; i <= 255; i++){
        sum += i;
        console.log ('i:',i,'sum:',sum);
    }
    return sum;
  }
  var y = printSum(255) // should print all the integers from 0 to 255 and with each integer print the sum so far.
  console.log(y) // should print 32640

// PrintSumArray
// Please complete the code below to have the function return the sum of all the values in a given array

function printSumArray(x){
    var sum = 0;
    for(var i=0; i<x.length; i++) {
      sum += x[i];
    }
    return sum;
  }
  console.log( printSumArray([1,2,3]) ); // should log 6

 //Create a function that returns the largest element in a given array.  For example largestElement( [1,30,5,7] ) should return 30

 function largestElement(arr){
    var max = arr[0]; 
    for (var i = 1; i < arr.length; i++){
        if (max < arr[i]){
            max = arr[i]
        }
        return max;
     }
 }
 var x = largestElement( [1,30,5,7]);
 console.log( "The largest element in the array is", x);


