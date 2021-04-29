import getRandom from './getRandom함수'


const a = getRandom()

if (a===0){
    console.log('a is 0')
}else if (a===2){
    console.log('a is 2')
}else{
    console.log("...rest")
}


//switch//


switch(a){
    case 0:
        console.log('a is 0')
    break;
    case 2: 
        console.log('a is 2')
    break;
    default:
        console.log("else")
}