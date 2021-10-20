// function displayValue(num){
//     let res=document.querySelector("#txt")
//     res.value+=num
// }
//      OR
var displayValue=(num)=>txt.value+=num


// function clearBox(){
//     txt.value=""
// }
var clearBox=()=>txt.value=""


// function evaluateExpression(){
//     let expr=txt.value;
//     let out=eval(expr)
//     txt.value=out;
// }
var evaluateExpression=()=>txt.value=eval(txt.value)

var deleteNum=(num)=>txt.value-=num
