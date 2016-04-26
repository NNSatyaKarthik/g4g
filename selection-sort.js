var getMinimum = function(inputArr, start,end){
    var temparr = inputArr.slice(start,end);
    return temparr.reduce(function(prev, curr){
        return (prev < curr)? prev: curr;
    });
};

var selectionSort = function(arr){
    for(var i =0; i < arr.length; i++){
        var min = getMinimum(arr,i,arr.length);
        var tempArr = arr.slice(i,arr.length);
        var idx = i+tempArr.indexOf(min);
        arr[idx] = arr[i];
        arr[i]= min;
        // console.log(arr);
    }
    return arr;
};
var input = [1,2,3,4,3,4,53,3,2,3,3223,34,2,32,645,34,368,99,5,46,7,8,7,9,8,67];
console.log(selectionSort(input));