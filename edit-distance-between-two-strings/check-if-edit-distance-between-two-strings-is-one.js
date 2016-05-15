/*
Following problem is implemented from here.
http://www.geeksforgeeks.org/check-if-two-given-strings-are-at-edit-distance-one/
Author : NNSatyaKarthik
*/

var getEditDistance = function(str1, str2){
    var ls1 = str1.length;
    var ls2 = str2.length;
    var editDistanceCount = 0;
    if(Math.abs(ls1 - ls2) > 1){
        return false;
    }else{
        for(var i = 0; i < Math.max(ls1, ls2); i++){
            var s1c = str1.charAt(i);
            var s2c = str2.charAt(i);
            if(s1c != s2c){
                editDistanceCount++;
            }
        }
    }
    return editDistanceCount;
};

var startTime = new Date().getTime();
var s1 = "geeks";
var s2 = "geeks";
var output = getEditDistance(s1,s2);

if(output === 1){
    console.log("yes");
}else{
    console.log("no");
}
var endTime = new Date().getTime();
console.log("Found edit distance between these strings '"+s1+"' and '"+s2+"' in "+(endTime- startTime)+" milliseconds!");
