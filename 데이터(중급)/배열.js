const numbers =[1,2,3,4,5]
const fruits = ['Apple','Banana','Cherry']

console.log(numbers.length)
console.log(fruits.length)

console.log(numbers)

//concat//

console.log(numbers.concat(fruits))

//forEach //


fruits.forEach((fruit,i)=>{
    console.log(fruit,i)
})


console.log("-----------------------------")


//filter//
const c= numbers.map(number=>{
    return number <3 
}) 
console.log(c)

const d=numbers.filter(number=>{
    return number<3
})
console.log(d)


//find & find index 둘다 function 을 반환 // 


const e = fruits.find(fruit =>{
    return/^B/.test(fruit)
})

console.log(e)

const f = fruits.findIndex(fruit =>{
    return/^B/.test(fruit)
})

console.log(f);

const z = numbers.find(number=>{
    return number % 2 === 0 
})
console.log(z)

const y = numbers.findIndex(number=>{
    return number % 2 === 0 
})
console.log(y)


const u = numbers.filter((number)=>{
    return number%2 === 0
})
console.log(u)


//includes 들어 있는지 없는지 확인// 

const g = numbers.includes(3)
console.log(g)


const h = fruits.includes("heropy")
console.log(h)


console.log("----------------------------------")


//push & unshift pop & shift 원본이 수정이 됌//

numbers.push(5,6,6)
console.log(numbers)


numbers.unshift(1,2,3,4)
console.log(numbers)


console.log("-------------------------------------")

//splice //


numbers.splice(0, 4)
console.log(numbers)


numbers.splice(5,3)
console.log(numbers)

numbers.splice(1,1)
console.log(numbers)


//indexof (), lastindexof()
const arr =[1,2,3,4,5,5,6,6,7]
console.log(arr.indexOf(5))

console.log(arr.indexOf(5,5)) // 중복되는 숫자 찻기 // 
console.log(arr.lastIndexOf(7)) // 뒤에서부터 첫번째 찾기 // 



console.log ("----------------------------")



//find
const names =[
    {name:"juno", age:33},
    {name:"heropy", age:34},
    {name:"neo", age:23}
]

const result = names.find(function(name){
    if(name.age <30){
        return true;
    } 
    return false;
});
console.log(result)


// map // 

const newUesrList=names.map((user)=>{
    return user
    
})
console.log(newUesrList)


const newUserlist1= names.map((user)=>{
    return{
        user,
        isAdult:user.age > 20
    }
})
console.log(newUserlist1)

const newUesrList2 =names.map((user)=>{
    return Object.assign({},user,{
        isAudlt: user.age > 19,
    })  
})
console.log(newUesrList2)



const a = fruits.map((fruit,i)=>{
    return `${fruit}-${i+1}`
})
console.log(a)



const b = fruits.map((fruit,i)=>({
    id:i+1,
    name:`${fruit}-${i+1}`
}))

console.log(b)

console.log("--------------------")

