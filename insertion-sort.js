var insertionSort = function(arr){
    for(var i = 1; i < arr.length; i++){
        var element = arr[i];
        
        for(var j = 0; j < arr.length ; j++){
            if(arr[j]>element){
                if(i > j){
                    var before = arr;
                    var front = arr.slice(0,j);
                    front.push(element);
                    var middle = arr.slice(j,i);
                    var tail = arr.slice(i+1);
                    if( middle.length> 0 ) front = front.concat(middle);
                    if(tail.length > 0) front = front.concat(tail);
                    // console.log("before : ", before, "after " , arr, middle, tail, front);
                    arr = front;
                }else{
                    var front = arr.slice(0,i);
                    var middle = arr.slice(i+1,j);
                    if( middle.length>0 ) front = front.concat(middle);
                    front.push(element);
                    var tail = arr.slice(j);
                    if(tail.length > 0 ) front = front.concat(tail);
                    arr = front;
                }
                // console.log(arr, "-i " ,i ," -j : ", j, "-element : ",element);
                break;
            }
        }
    }
    return arr;
};

var input = [1,2,3,4,3,4,53,3,2,3,3223,34,2,32,645,34,368,99,5,46,7,8,7,9,8,67];
// var input = [12, 11, 13, 5, 6];
var startTime = new Date().getTime();
var output = insertionSort(input);
var endTime = new Date().getTime();
console.log(output, 'insertionSorted in : '+(endTime-startTime)+' milli seconds');