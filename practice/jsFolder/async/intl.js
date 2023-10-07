
//숫자 간결하게 나타내기
const views = 9144423;
const formatter = new Intl.NumberFormat(navigator.language,{
    compactDisplay:'long',
    notation:'compact',
});
const formatted = formatter.format(views);
console.log(formatted);

//가격 간결하게 나타내기
const formatPrice = new Intl.NumberFormat('ko',{
    currency: 'krw',
    notation: 'standard',
    style : 'currency',
});
const p = 24300;
const formattedP = formatPrice.format(p);
console.log(formattedP);

//상대시간 나타내기
const formatT = new Intl.RelativeTimeFormat('ko',{numeric:'auto'});
const today = new Date();
const started = new Date(2023, 9, 1);
const daysPassed = Math.ceil((started - today) / (1000*60*60*24));
console.log(`프로젝트 시작일은? : ${formatT.format(daysPassed, 'day')}`);