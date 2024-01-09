var num = [3,7,9,5,8,3,4,9,2,1,5,3];
var answer = num.filter((value, index)=> {
    return num.indexOf(value)===index;
});
console.log(answer);
 
