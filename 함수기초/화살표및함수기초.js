function sum(x,y){
    console.log(x+y)
}
sum(1,3)


const a = function (x,y){
    return x+y
}
console.log(a(1,2))

// 함수를 종료한다는 의미의 return//

function sum(x,y){
    if(x<2){
        return 
    }else{
        return x+y
    }
}
console.log(sum(1,9))//undefined// 



const doubleArrow = x=> x*2
console.log(doubleArrow(7))






