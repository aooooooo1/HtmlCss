//1. object to json 객체를 병렬화 하는방법
let json = JSON.stringify(true);//스트링파이에 true 넣을수 있다.
json = JSON.stringify(['a','b']);//배열도 넣을수 있다.

const rabbit = {
    name : 'tori',
    color:'white',
    size :null,
    birthDate: new Date(),
    jump : () => {
        console.log(`${name} can jump!`);
    },
};
json = JSON.stringify(rabbit);

json = JSON.stringify(rabbit,['name'])//파라미터로 []안에 이름을 넣을수있다.
//또는 콜백함수 사용할수있다ㅣ
json = JSON.stringify(rabbit, (key,value)=>{
    console.log(`Key : ${key}, Value : ${value}`);
    //return value;
    return key === 'name' ? 'seoungjin' : value;
});
console.log(json); 

//===============2. json to object=================
const obj = JSON.parse(json, (key, value)=>{
    return key == 'birthDate' ? new Date(value) : value;
}); 
console.log("obj" + obj);

//래빗을 JSON으로 변환하고 이 JSON을 obj로 변환하였지만 애초에 래빗의 함수는 제이슨으로
//바꿔지지 않았기 때문에 obj.jump()는 쓸수 없다. 
rabbit.jump();

const date1 = rabbit.birthDate.getMonth();
const dateobj = obj.birthDate.getMonth();
//이것도 json으로 변환하면 birthDate는 스트링으로 변환되어서 자식함수를 못쓴다.
//하지만 obj에게 콜백함수를 쓰면 가능하다.
console.log(`dateRabbit : ${date1}`);
console.log(`dateObj : ${dateobj}`);
