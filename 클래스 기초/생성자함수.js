// const heropy ={
//     firstName: "Juno",
//     lastName:"Yang", 
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(heropy.getFullName())



// const amy ={
//     firstName: "amy",
//     lastName:"clarck", 
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(amy.getFullName())



// const neo ={
//     firstName: "neo",
//     lastName:"smith", 
//     getFullName: function(){
//         return `${this.firstName} ${this.lastName}`
//     }
// }
// console.log(neo.getFullName())


function User ( first, last){
     this.firstName= first
     this.lastName= last
}

User.prototype.getFullName = function()
{
    return `${this.firstName} ${this.lastName}`
}
const heropy = new User ('heropy','park') // 인스턴스 const heropy  // 
const amy =new User ('amy','clack')
const neo = new User('neo','smith')

console.log(heropy.getFullName())
console.log(amy)
console.log(neo)


