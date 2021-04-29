const userAge ={
    name:"heropy",
    age: 94
}


const userEmail ={
    name:"heropy", 
    email:" cocal3250@naver.com"
}


const target = Object.assign ( userAge, userEmail,{
    isAudlt : userAge.age < 100
}, {
    sex: " male"
})
console.log (target)
console.log(userAge)
console.log(target === userAge ) // 새로운 메모리 주소로 객체가 저장되기 때문에 다르다.
console.log(target == userAge)

// const target = Object.assign ( userAge, userEmail)
// console.log (target)
// console.log(userAge)
// console.log(target === userAge ) // userAge 는 target 과 같은 메모리 주소로 복사되었기 때문에 같다  // 
// console.log(target == userAge)





console.log("-------------------------------")

// key  배열로 형태로 만들어줌  //

const user ={
    name:"heropy", 
    age: 88, 
    email:" cocal3250@naver.com"
}


const userKeys= Object.keys(user)
console.log(userKeys)

const userValue =Object.values(user)
console.log(userValue)



const array = userKeys.map((key)=>user[key])
console.log(array)



let yes1 ={name: 'mike'}
let yes2= {age:21}
let fe =["js","html"]
let lang =["English","Korean"]

const target1 =Object.assign({},yes1,yes2,fe,lang)
console.log(target1)


