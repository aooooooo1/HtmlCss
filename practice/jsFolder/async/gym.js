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
liNew.innerHTML = '윗몸일으키기';
let UlTag = document.querySelector('.list')
UlTag.appendChild(liNew);
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

//12.과일리스트를 클릭하면 밑에 사진이 나오게하기
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
    console.log(e.clientX,e.clientY)//현제화면에서 마우스 위치
    console.log(e.pageX,e.pageY)//전체화면에서 마우스 위치
    circle.style.left = (e.pageX)+'px';
    circle.style.top = (e.pageY+10)+'px';
})