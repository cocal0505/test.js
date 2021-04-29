//indexof()


const result ='hello world'.indexOf("world")
console.log(result)

// 일치하는 문자가 없으면 -1 반환//



const _str = "hello world"
console.log (_str.indexOf("heropy")  !== -1)

// false 반환 // 


// length//

const str = '0123'
console.log(str.length)


//slice, replace//


const __str= 'hello world'
console.log(__str.slice(0,5))
console.log(__str.replace("world","juno"))
console.log( __str.replace(" world",""))
console.log (__str.substr(-5,5))   // 
console.log (__str.substr(0,7))  
console.log (__str.slice(6))  
//정규표현식//

const ___str = "cocal3250@naver.com"
console.log(___str.match(/.+(?=n)/)[0])



// trim 공백 문자 제거 //
 
const ____str ="  hello world   "
console.log(____str.trim())




const desc = "Hi Guys. nice to meet you"
if(desc.indexOf("meet")){
    console.log("meet is in the sentence")
}