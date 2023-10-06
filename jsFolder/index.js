'use strict'
//const , ``백틱 활용하기 
const char = 'c';
console.log(`value: ${char}, type: ${typeof char}`);

//function 파라미터로 넘기기
function out(message){
    console.log(message);
};
out('hello!!')//->파라미터로 값을 함수에 넘겼따!

//값 변경
const me = {name:'Kim'};
function change(obj){
    obj.name = 'Lee';
};
change(me);
console.log(me);

//배열형태를 파라미터로 보네기 
function outary(...areys){
    for(let i = 0; i < areys.length; i++){
        console.log(areys[i]);
    }
    //간단한 방법
    for(const arey of areys){
        console.log(arey);
    }
}
outary('asd','fff','zxcc'); 

//밖에서 안에 있는 내역을 볼수 없다.
function outside(){
    let parent = 'parent';
    function outIn(){
        let child = 'in';
        console.log(parent);
    }
    outIn();
    //console.log(child); //자식의 child를 볼수 없다.
}
outside();

//return
function sum(a, b){
    return a + b;
}
const result = sum(1, 2);
console.log(result); //3
console.log(`sum : ${sum(10,5)}`);

//function expression
const print1 = function () {
    console.log('print');
};
print1();
const print2 = print1;
print2();
const sum1 = sum(2, 3);
console.log(sum1);

//callback
function randomQuiz(answer, printYes, printNo){
    if(answer == 'love you'){
        printYes();
    }else{
        printNo();
    }
}
const Yes = function () {
    console.log('Yes~~~~');
}
const No = function noOut () {
    console.log('no..');
}
randomQuiz('wrong',Yes,No);
randomQuiz('love you',Yes,No);

//Arrow function
const arrow = ()=>console.log('this arrow power!');
arrow();
const add = (a,b)=>console.log(a+b);
add(1,3);

//arrey
let ary = ['apple','banana'];
//arrey 간단한 호출
ary.forEach( (aryOut) => console.log(aryOut) );
//배열추가
ary.push('melon','peach');
console.log(ary);
//배열삭제
ary.pop();
console.log(ary);
//앞에서 넣기 : unshift , 앞에서 빼기 : shift 
// splice(1,1)->1부터 1개만 지움 
console.log(ary.indexOf('melon'));//indexOf스트링 은 몇번째인지 알려준다.

