'use strict';
//async 비동기적인 샐행방법
console.log('1');
setTimeout(() => {
    console.log(`1s - 2`)
}, 1000); //브라우저 함수 setTimeout()에 콜백1000사용했다.
console.log('3');

function printImmediately(print){
    print();
};
printImmediately(()=>console.log('immediately'));

function printDelay(print, timeout){
    setTimeout(print, timeout);
}
printDelay(()=>console.log('2s async callback'),2000);

