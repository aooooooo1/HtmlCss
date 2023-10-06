// promise 비동기적 콜백 대신에 쓸수있다.
// 1)state상태 2)prouduce제공자/consumer소비자 
//state: pending -> fulfilled or rejected
//**1 PRODUCER
const promise1 = new Promise((resolve, reject)=>{
    //promise를 만드는순간 executor콜백함수 실행됨
    console.log('const프로미스1함수 1초간 실행후 executor콜백함수 실행됨');
    setTimeout(()=>{
        //resolve('seoungjin')//스트링값을 넣어서 제공함
        //reject일때 값을 catch()로 보넴
        reject(new Error('reject catch 프로미스1'));
    },1000);
});
//**2 CONSUMER : then, catch, finally
promise1.then((value)=>{ //producer부터 resolve값을 value로 받음.
    console.log(value);
}).catch((errorIN)=>{
    console.log(errorIN);
}).finally(()=>{
    console.log('finally : 성공/실패 상관없이 결국 실행되는 함수입니다.')
});

/* promise chaining */
const fetchNumber = new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(1);//resolve일때 값을 then()에 보냄.
    }, 1000);
});
fetchNumber.then(num => num * 2)
.then(num => num * 3)
.then(num => {
    //다른 서버에 보내서 다른 숫자를 가져올것임.resolve가 줄then이 없으므로 return한다.
    return new Promise((resolve,reject)=>{
        setTimeout(() => resolve(num - 1), 1000);
    })
})
.then(num => console.log(num));

//  ** 콜백 -> 프로미스
class UserStorage {
    loginUser(id, password){
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(
                    id === 'admin' && password === 'admin'
                ){
                    resolve(id);
                } else{
                    reject(new Error('아이디 비밀번호를 찾을수 없습니다.'));
                }
            },1000);
        });
    }
    getRoles(user){
        return new Promise((resolve,reject)=>{
            setTimeout(()=>{
                if(user === 'admin'){
                    resolve({name:'seoungjin', role: 'admin'});
                } else{
                    reject(new Error('no access'));
                }
            },1000);
        });
    }
} 
const userStorage = new UserStorage;
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`hello ${user.name}, you hava a ${user.role} role`))
.catch(console.log);