// === 일치 연산자 //


function isEqual(x,y){
    return {
        일치연산자:x===y,
        부정일치연산자: x !== y, 
        비교연산자: x>y,
        크거나작거나: x <= y
    }
} 
console.log(isEqual(1,1))


// 논리 연산자 //

// && 그리고 || or ! 부정 //


