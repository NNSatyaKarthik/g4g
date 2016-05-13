/*
The problem statement is available at the following link : 
http://www.geeksforgeeks.org/print-concatenation-of-zig-zag-string-form-in-n-rows/
Author : NNSatyaKarthik
*/


var getContactenatedString = function(str, n){
    var arrays = [];
    for(var i = 0 ; i < n ; i++){
	arrays.push([]);
    }
    var strArray = str.split('');
    var idx = 0;
    var count = 1;
//    console.log(arrays,strArray);
    for(var c in strArray){
	    arrays[idx].push(strArray[c]);
	    idx = idx + count;
	if(idx === n){
	    (count === 1)? count = -1 : count = 1;
	    idx = idx + 2* count;
	}else if(idx === -1){
		(count === 1)? count = -1 : count = 1;
	    idx = idx + 2* count;
	}
//	console.log("character : "+ strArray[c] + " arrays : "+ arrays);
    }
    return arrays.map(function(x){
	return x.join('');
    }).reduce(function(prev, curr){
	return prev + curr;
    });
};


var startTime = new Date().getTime();
var input = "ABCDEFGH";
var n = 2;
var output = getContactenatedString(input,n);
var endTime = new Date().getTime();
console.log("After concatenating the given string '"+input+"' in "+n+" rows, the output obtained '"+output +"' is obtained in "+(endTime - startTime)+" milliseconds!"); 


var startTime = new Date().getTime();
var input = "GEEKSFORGEEKS";
var n = 3;
var output = getContactenatedString(input,n);
var endTime = new Date().getTime();
console.log("After concatenating the given string '"+input+"' in "+n+" rows, the output obtained '"+output +"' is obtained in "+(endTime - startTime)+" milliseconds!"); 
