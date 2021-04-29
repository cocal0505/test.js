
// tostring()//

let num =10
console.log (num.toString(2))
let num2 = 1123
console.log (num2.toString(16))



// toFixed //

const pi = 3.14159265359879
console.log(pi)


const str = pi.toFixed(2)
console.log(str)

//typeof// 
console.log(typeof str)


//parseInt //

const integer = parseInt(str)
console.log(integer)


let number1 ="f3"
console.log(parseInt(number1, 16))

//paeseFloat //

const float = parseFloat(str)
console.log(float)

console.log(typeof integer)



console.log("----------------------------------")



// math //


console.log('abs:', Math.abs(-12))

console.log('min:', Math.min(2,8))

console.log('max:', Math.max(2,8))

console.log('ceil:', Math.ceil(8.1))

console.log('floor:', Math.floor(8.1))

console.log('round:', Math.round(8.4))

console.log('random:', Math.random())

console.log (Math.random()*10)



// 소수점 줄째자리 까지 표현 (셋째 자리에서 반올림)//

let userRate = 30.12782

console.log (Math.round(userRate*100)/100)


console.log (userRate.toFixed(2))



// isNaN

let x = Number("x")
console.log(isNaN(x))



// 1에서 100까지 임의에 숫자를 만들고 싶으면 //


const returnRandom = function(){
    return Math.floor(Math.random()*100)+1
}

console.log (returnRandom());


//콜라는 금칙어 그 이외에는 통과 //

 const hasCollar = function (str){
    
    if(str.indexOf("콜라") > -1){
        console.log ("금칙어가 존재합니다")
    }else{ 
        console.log("통과")
    }
}

hasCollar("와 사이다가 최고여")

