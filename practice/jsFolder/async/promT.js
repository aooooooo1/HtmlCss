class userS {
    loginU(id, pw){
        return new Promise((res,rej)=>{
            setTimeout(() => {
                if(id === 'a' && pw ==='a'){
                    res(id);
                } else {
                    rej(new Error('no'));
                }
            }, 500);
        });
    }
    getR(user){
        return new Promise((res,rej)=>{
            setTimeout(()=>{
                if(user === 'a'){
                    res({name:'jin',role: 'admin'});
                } else{
                    rej(new Error('no a'));
                }
            },1000);
        });
    }
}
const users = new userS;
const step1id = prompt('u id');
const setp2pw = prompt('u pw');
users.loginU(step1id, setp2pw)
.then(users.getR)
.then(user => alert(`hello ${user.name}, you hava a ${user.role} role`))
.catch(user => alert(`hello ${user.name}, you hava a ${user.role} role`));