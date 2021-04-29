// setTimeout(function (){}, 3000)



setTimeout(function(){
    console.log("juno!!")
},3000)

const h1El = document.querySelector('h1')

// setTimeout (3초 지나서 나옴)
const timer = setTimeout(()=>{
    console.log("juno!!")
},3000)




h1El.addEventListener('click',()=>{
    clearTimeout(timer)
});

// setInterval (3초 간격으로 나옴)




// 콜백 함수 // 

const timer1 = function(callback){
    setTimeout(()=>{
        console.log("hello"),
        callback()
    },3000)
 }

 timer1(()=>{
     console.log("-----------------------------------------")
 })


