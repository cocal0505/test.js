// function User ( first, last){
//     this.firstName= first
//     this.lastName= last
// }

// User.prototype.getFullName = function()
// {
//    return `${this.firstName} ${this.lastName}`
// }

// classes 문법으로 생성자 함수 작성  // 
class User {
    constructor (first, last){
        this.firstName= first
        this.lastName= last
    }   
    getFullName(){
            return ` his name is ${this.firstName} ${this.lastName}`
    }
}



const heropy = new User ('heropy','park') // 인스턴스 const heropy  // 
const amy =new User ('amy','clack')
const neo = new User('neo','smith')

console.log(heropy.getFullName())
console.log(amy)
console.log(neo)



// classes 속성 확장 //


class Book {
    constructor (title,writer){
        this.bookTitle = title
        this.bookWriter = writer
    }
}
const myBook = new Book ("JUNO'S LIFE", 'JUNO YANG ')
console.log(myBook.bookTitle)



class Years extends Book {
    constructor(title,writer,date){
        super(title,writer)
        this.bookDate = date 
    }
    bookDate1(){
        return `this book was published in ${this.bookDate}`;
    }
}
const myYears = new Years ("JUNO'S LIFE", 'JUNO YANG ', "2021.4.5");
console.log(myYears.bookDate1())

// getter & setter //



