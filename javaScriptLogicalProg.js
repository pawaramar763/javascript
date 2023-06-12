const array = [10 ,5, 'a', 'b', 'h', 11];
console.log(`Given Array:`);
console.log(array);
console.log(`=============================================================`);
const newArrayNum=[];
const newArrayAlpha=[]
array.forEach((element)=>{
    if(element==10 || element==5 || element==11){
        newArrayNum.push(element);
    }
    else{
        newArrayAlpha.push(element)
    }
})
const sortedNum=newArrayNum.sort((n1,n2)=>{
    return n1>n2 ? 1 : -1

})
console.log(`Array after sorting numbers and alphabets separately:`);
console.log(sortedNum);
const sortedAlpha=newArrayAlpha.sort();
console.log(sortedAlpha);
