 function User (first,last){
    this.firstName= first
    this.lastName= last
}


User.prototype.getFullName = function(){
    return `${this.firstName} ${this.lastName}`
}

const heropy = new User ('heropy','park')
console.log(heropy.getFullName())