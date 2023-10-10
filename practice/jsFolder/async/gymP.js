//10.인풋텍스트를 적고 추가를 누르면 리스트에 추가되는 코드 만들기
//12.추가버튼을 누르면 생성리스트옆에 x버튼도 같이 생성하기 ->10번과 함께
'use strcik'
let input = document.querySelector('[type=text]');
let btn = document.querySelector('[type=button]');
let ul = document.querySelector('.listul');

btn.addEventListener('click',function(){
    let inv = input.value;
    
    let addli = document.createElement('li');
    addli.textContent=inv;
    console.log(addli)
    ul.append(addli);
    input.value='';
    input.focus();
    let x = document.createElement('button');
    x.textContent='remove';
    addli.appendChild(x);
    x.addEventListener('click',function(){
        x.parentNode.remove();
    })
})

let imgli = document.querySelectorAll('.imgli');
let imgB = document.querySelector('.imgB');
for(let i = 0; i < imgli.length; i++){
    imgli[i].addEventListener('click', function(){
        let dataimg = imgli[i].dataset.img;
        let img = document.querySelector('.imgB>img');
        let name = document.querySelector('h2');
        img.setAttribute('src',dataimg);
        imgB.appendChild(img);
        name.textContent=imgli[i].textContent;
    })
}

let html = document.querySelector('html');
html.addEventListener('mousemove',function(e){
    let x = e.pageX + 'px';
    let y = e.pageY +10+ 'px';
    let circle = document.querySelector('.circle');
    circle.style.left = x;
    circle.style.top = y;

})