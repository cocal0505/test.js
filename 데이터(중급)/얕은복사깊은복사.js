//-----------------------------------------------------------------------------------------
// |1:                    |2:                       |3                                  |4
//----------------------------------------------------------------------------------------

import _ from 'lodash'  // 깊은 복사를 위한 라이브러리 사용  // 

const user = {
    name:"Heropy", 
    age:85, 
    emails:['cocsl325@naver.com']
}

const copyUser= user 
console.log(copyUser=== user)


user.age= 22 

console.log('user', user)
console.log('copyUser',copyUser)  // user 와 copyUser 는 같은 메모리를 바라 보고 있다. 



// 복사 


const user1 = {
    name:"Heropy", 
    age:85, 
    emails:['cocsl325@naver.com']
}

const copyUser1= Object.assign( {},user1 )      // {} 빈 객체는 새로운 메모리 주소를 갖게 된다. 
console.log(copyUser1=== user1)


user1.age= 22 
copyUser1.age=32

console.log('user', user1)    
console.log('copyUser',copyUser1) 


// 전개연산자 복사 shalow copy// 
const user2 = {
    name:"Heropy", 
    age:85, 
    emails:['cocsl325@naver.com']
}


const copyUser2= {...user2}   
console.log(copyUser2=== user2)

user2.age = 233
console.log(user2)
console.log(copyUser2)



// 참조형 데이터인 emails는 // 

user2.emails.push('cocal23@gmail.com')
console.log(user2.emails === copyUser2.emails)

console.log(copyUser2)
console.log(user2)

// 깊은 복사 lodash // 



const user3 = {
    name:"Heropy", 
    age:85, 
    emails:['cocsl325@naver.com']
}


const copyUser3= _.cloneDeep(user3)
console.log(copyUser3=== user3)

user3.age = 233
console.log(user3)
console.log(copyUser3)

user3.emails.push('cocal23@gmail.com')   // 앝은 복사로는 객체 안에 있는 참조형 데이터를 깊은 복사를 해야지 안전하게 모든 데이터를 다른 메모리로 할당 할 수 있다.  // 
console.log(user3.emails === copyUser3.emails)
console.log(copyUser3)
console.log(user3)