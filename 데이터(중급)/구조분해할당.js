const user ={
    name:"heropy", 
    age: 88, 
    email:" cocal3250@naver.com"
}

const {name:juno, age , email, address ="koera"} = user // 구조를 분해 , 그리고  name 의 이름을 원하는 변수로 변경이 가능// 




console.log(`당신의 이름은 ${juno}입니다. 그리고 나이는 ${age} 이고, 이메일 주소는 ${email} 입니다.`)
console.log(address) // 기본값을 지정할 수 있다 객체에는 값이 없다.//


console.log(user['email'])  

console.log(user.age)



// 배열의 구조분해할당 // 






const fruits =[' apple', 'banana','cherry']

// const [a,b,c] = fruits
// console.log(a,b,c)

// const [,b] = fruits
// console.log(b)  바나나만 뽑는 방법 


// const [,,c] =fruits
// console.log(c) 체리만 뽑는 방법 


const [fruit1, fruit2,fruit3] =fruits
console.log(fruit1)

