

var input = [1,2,3,4,3,4,53,3,2,3,3223,34,2,32,645,34,368,99,5,46,7,8,7,9,8,67];
var startTime = new Date().getTime();
var output = insertionSort(input);
var endTime = new Date().getTime();
console.log(output, 'insertionSorted in : '+(endTime-startTime)+' milli seconds');