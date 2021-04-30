const fruits =['Apple','banana','Cherry']
const toys1 =['hoe','sds','king']

const result1 = [...fruits, ...toys1]
console.log(result1)



console.log(fruits)
console.log(...fruits) /// 배열 데이터를 전개해서 문자로 반환 // 


function toObject (a,b,c){
    return {
        FruitA:a, 
        FruitB:b,
        FruitC:c
    }
}

console.log(toObject(...fruits))       // 전개한 테이터를 받아서 객체로 반환// 
console.log(toObject( fruits[0],fruits[1]) )   // 위와 같은 결과 // 


const arr1 =Object.keys(toObject(...fruits))
console.log(arr1)




const a = fruits.map( function (fruit){
    return {
        name:fruit
    } 
})
console.log(a)

///////////////////////////



const toys =['Apple','banana','Cherry','orange']
console.log(...toys) // 전개연산자//
 
function arr2 (a,b, ...c){     // rest parameter 나머지매개변수 // 
    return {
        toy1:a,
        toy2:b, 
        toy3:c
    }
}


console.log(arr2(...toys))   // ...c 에 있는 것은 따로 배열로 반환 // 

//나머지 매개 변수 //
function showName(...names){
    console.log(names)
}
showName('tom','bob','yes')

// 나머지 매개 변수를 활용해서 전달 받은 모든 수를 더해야함 //

function add (...numbers){
    let result = 0 
    numbers.forEach((num)=> result += num)
    console.log(result)
}

add(1,2,3,4,5,5,6,6,7,7)

// 나머지 매개 변수를 활용해서 user 객체 생성자 함수를 만들기 // 


function User(name,age,...skills){
    this.name = name
    this.age= age
    this.skills=skills 
}

const computerUser = new User ('mike',23,'html','css','js')
console.log(computerUser)


// 전개 구문 복제  // 


let arr3 = [1,2,3]
let arr4 = [4,5,6]

arr3= [...arr4,...arr3]
console.log(arr3)

// object.assign 대신 전개 구문 사용//
let yes1 ={name: 'mike'}
let yes2= {age:21}
let fe =["js","html"]
let lang =["English","Korean"]

user= { 
    ...yes1, 
    ...yes2, 
    skills: [
        ...fe,
        ...lang
    ]
}

