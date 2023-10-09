//1.get으로 제목가지고와서 내용바꾸기
let t = document.getElementById('title')
t.textContent = 'health'; //html요소를 문자로 받음
t.innerHTML = '<span>health!!!</span>';//html요소를 받음
let i = document.getElementsByClassName('item');
console.log(i[0]);
//2.쿼리셀렉터:tag,id,class
//querySelectorAll
let queryI = document.querySelectorAll('.item');
//3.input태그안에 placeholder속성 추가하기
let inputTag = document.querySelector("input")
inputTag.setAttribute('placeholder','input');
inputTag.removeAttribute('placeholder');
inputTag.setAttribute('requierd','');
//4.(배경)컬러 추가
let helloClass = document.querySelector('.hello');
helloClass.style.color = 'orange';
helloClass.style.background = 'lightblue';
//8.orange클래스 추가 제거
helloClass.classList.add('orange');
helloClass.classList.remove('orange');
//9.html요소 만들기-ul자식에 새로운li를 추가하기
let liNew = document.createElement('li');

//10.인풋텍스트를 적고 추가를 누르면 리스트에 추가되는 코드 만들기
//12.추가버튼을 누르면 생성리스트옆에 x버튼도 같이 생성하기 ->10번과 함께
let btnTag = document.querySelector('#btn');
btnTag.addEventListener('click',function(){
    let inVel = inputTag.value.trim();//트림을 쓰면 string으로 변환된다.
    if(!inVel){
        return;
    }
    let btn = document.createElement('button');
    btn.setAttribute('type','button');
    btn.classList.add('removeBtn');
    btn.textContent='X';
    btn.addEventListener('click',function(event){
        event.target.parentNode.remove();
    })
    let liNew = document.createElement('li');
    liNew.innerHTML = inputTag.value;
    liNew.appendChild(btn);
    UlTag.appendChild(liNew);
    inputTag.value='';
    inputTag.focus();
});

//11.버튼을 눌렀을때 해당리스트를 삭제하기
let removeBtn = document.querySelector('.removeBtn');
removeBtn.addEventListener('click',function(event){
    event.target.parentNode.remove();
})

//12.과일리스트를 클릭하면 밑에 사진이 나오게하기,제목도 바뀌기
let listBtn = document.getElementsByClassName('listBtn');//주의:배열이다. 
let img = document.getElementById('img');
let h2 = document.querySelector('.img>h2');
for(let i = 0; i<listBtn.length; i++){
    listBtn[i].addEventListener('click', function(e){ 
        let datasetimg = e.target.dataset.img;
        img.setAttribute('src',datasetimg);
        h2.textContent=e.target.textContent;
    });
}
//13.마우스다운했을때 위치에 박스가 오게하기
let body = document.querySelector('html');
let circle = document.querySelector('.circle');
body.addEventListener('mousemove',function(e){
    //console.log(e.clientX,e.clientY)//현제화면에서 마우스 위치
    //console.log(e.pageX,e.pageY)//전체화면에서 마우스 위치
    circle.style.left = (e.pageX)+'px';
    circle.style.top = (e.pageY+10)+'px';
})

document.addEventListener('click', function(event) {
    const container = document.createElement('div');
    container.classList.add('fireC');
    document.body.appendChild(container);

    const numFireworks = 10; // 폭죽을 몇 개 생성할지 조절할 수 있습니다.

    for (let i = 0; i < numFireworks; i++) {
        const firework = document.createElement('div');
        firework.classList.add('firework');
        container.appendChild(firework);

        // 랜덤한 배경색 선택
        const randomColor = getRandomColor();
        firework.style.backgroundColor = randomColor;
        // 클릭한 위치를 기준으로 랜덤한 위치에 폭죽 효과 표시
        const x = event.clientX + getRandomInt(-50, 50);
        const y = event.clientY + getRandomInt(-50, 50);
        firework.style.left = x + 'px';
        firework.style.top = y + 'px';

        // 1초 후에 요소 제거
        setTimeout(function() {
            firework.remove();
            if (container.childNodes.length === 0) {
                container.remove();
            }
        }, 1000);
    }
});

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Q1) submit이벤트가 form태그 안에서 발동되는 조건은?



//10.8일) object타입(참조타입)을 만들고 한번에 key,value출력해봐라 2가지 방법으로.

const person ={
    name:'kim',
    age:28,
    isprogramer:true,  
    say(){
        console.log('hi');
    },
};
//객체접근방식 2가지를 설명해라

console.log(`person.name : ${person.name}`);
console.log(`person[''] : ${person['age']}`);

let perAry = Object.keys(person); //key[]
for(let i = 0; i < perAry.length; i++){
    console.log(`key : ${perAry[i]}`);
    let key = perAry[i];
    let value = person[key];
    console.log(`value : ${value}`);
}
for(let k in person){
    console.log(person[k]);
}

//배열은 리터럴 , 생성자 표기법이 있다.
//Q2) 리터럴 배열을 생성하고 forEach를 써서 값을 두개를써서 콘솔에 나타내라,for of 를 사용해라

const ary = ['apple','tangerine','orange','pineapple'];
ary.pop();
ary.forEach(  function(item,index){console.log(item,index)}  )
for(let i of ary){
    console.log(`========forof ${i}`);
}
//Q3) rest parameter을 활용해서 함수값이 몇개가 들어가든 콘솔에 출력하도록 만들어라
  
function ary2 (...aryvalue){
    aryvalue.forEach(function(item,index){
        console.log(`item : ${item} , index ${index}`);
    })
}
ary2('a','b','aa','asdf');

//Q4) 깊은복사하는 후 값을 하나 변경해봐라

let ary3 = ['q','w','e'];
let ary4 = [...ary3];
ary4[0]='qqqq';
console.log(ary4);

//Q6) return값을 가지는 함수를 생성하고 출력해라

function sum(a,b){
    return a + b;
};
let sum2 = sum(1,2);
console.log(sum2);