const a = 7
function double(){
    console.log(a*2)
}
double();



function test(x){
    console.log(x*2)
}
test(2);



(function (){
    console.log(a*2)
}());


(function(){
    console.log(a*3)
}());

console.log ("------------------------------")

// 호이스팅//

const b = 7 
const example  = function(){
    console.log(b*2)
}
example()
////////////////////////////////////


double1()  // 함수 표현문 || 함수 선언 || 기명함수 는 어디든지 호출가능

function double1(){
    console.log(b*8)
}