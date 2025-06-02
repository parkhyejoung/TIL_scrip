const birthday_flower = [
    {
        month:1,
        flower:'수선화',Add commentMore actions
        content:'자기애, 자존심, 외로움',
    },{
        month:2,
        flower:'제비꽃',
        content:'겸손, 양보',
    },{
        month:3,
        flower:'수선화',
        content:'자기애, 자존심, 외로움',
    },{
        month:4,
        flower:'스위트피',
        content:'추억, 즐거움'
    },{
        month:5,
        flower:'은방울꽃',
        content:'희망, 섬세함'
    },{
        month:6,
        flower:'백합',
        content:'순결'
    },{
        month:7,
        flower:'미나리아재비',
        content:'아름다움, 인격'
    },{
        month:8,
        flower:'글라디올러스',
        content:'비밀, 상상, 견고함'
    },{
        month:9,
        flower:'물망초',
        content:'진실한 사랑'
    },{
        month:10,
        flower:'금잔화',
        content:'실망, 비애'
    },{
        month:11,
        flower:'국화',
        content:'성실, 진실'
    },{
        month:12,
        flower:'포인세티아',
        content:'축하, 감사'
    }
]//test
console.log(birthday_flower[0].month)
console.log(birthday_flower[0].flower)
console.log(birthday_flower[0].content)
//변수
const userMonth = document.querySelector('input[name=month]');
const resultBtn = document.querySelector('#result_btn');
const total = document.querySelector('.total');
console.log(userMonth, resultBtn, total);
//resultBtn.addEventListener('click',()=>{})
//resultBtn.addEventListener('click', function(){})
resultBtn.addEventListener('click', birthdayFunc);
function birthdayFunc(){
    //if(userMonth.value >= 1 && userMonth.value <= 12){
    if(userMonth.value == 1||2||3||4||5||6||7||8||9||10||11||12){
        total.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄생화는 ${birthday_flower[userMonth.value-1].flower}, 꽃말은 ${birthday_flower[userMonth.value-1].content}입니다.`
    }
    /* if(userMonth.value == 1){
        total.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄생화는 ${birthday_flower[userMonth.value-1].flower}, 꽃말은 ${birthday_flower[userMonth.value-1].content}입니다.`Add commentMore actions
    }
    if(userMonth.value == 2){
        total.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄생화는 ${birthday_flower[userMonth.value-1].flower}, 꽃말은 ${birthday_flower[userMonth.value-1].content}입니다.`
    }
    if(userMonth.value == 3){
        total.textContent = `${birthday_flower[userMonth.value-1].month}월의 탄생화는 ${birthday_flower[userMonth.value-1].flower}, 꽃말은 ${birthday_flower[userMonth.value-1].content}입니다.`
    } */
}
