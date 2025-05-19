let b = 20; // 전역변수(블록 {} 밖)
let c = 30; // 전역변수(블록 {} 밖)
function test(){ //블록선언(여기부터 지역스코프 시작)
    let a = 10; //지역변수 (블록 안{})
    console.log(a+b);
} //블록종료(지역 종료)
test(); // 함수 호출(함수 밖에서)
/* console.log(a); 지역변수는 전역에서 호출하려면 에러*/
/* console.log(a+b);  *///오류나면 아래도 쫙 오류
console.log(b+c); //전역변수기 때문에 전역스코프 위치 실행 가능
console.log('------------------------------------------')
let d = 5; //전역변수
let e = 15; //전역변수
let f; //전역변수 생성 (값 선언 안된 상태 undefined)
let g; //전역변수 생성 (값 선언 안된 상태 undefined)
scopeTest(); // 호출(함수실행) 함수호출 위치는 함수보다 위에 있어도 실행가능,하지만 위치에 따라 결과바뀔수있음 주의
console.log(f); //호출 후 f의 결과를 실행하는 함수기 때문에 25가 실행된다.
function scopeTest(){ //함수 호출 전 대기 상태의 함수 생성 구조 
    //함수 대기상태는 절대 실행되지않는다. 호출을 해야만 실행된다!
    f = 25; //지역변수
    g = 35; //지역변수
    console.log(d+f); //o 5+25
    console.log(e+g); //o 15+35
}
console.log(g+d); // o 40
console.log(d+e); // o 5+15
//함수 대기상태 안에서 다른 함수를 호출할수있다.
let x = 1; //전역변수
let y; //전역변수
function func1(){ //함수 대기 상태 func1
    y = 5; //전역변수에 값 대입
    console.log(x+y);
}
function func2() { //함수 대기 상태 func2
    let z = 10; //지역변수 생성과 값 대입
    func1(); //func2 함수대기 안 func1 함수 호출(func2 대기상태로 실행되지않음)
    console.log(x+y+z);
}
func2(); // func2 함수 호출(func2 안 func1 함께 절차에 맞게 실행)
console.log('------------------------------헨젤과 그레텔 알고리즘')
function storyFucn1() {
    let person = ['헨젤','그레텔'];
    let src = '조약돌';
    //헨젤과 그레텔이 조약돌을 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}
function storyFucn2() {
    let person = ['헨젤','그레텔'];
    let src = '빵부스러기';
    //헨젤과 그레텔이 빵부스러기를 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}을 이용해서 집을 찾아갔습니다.`);
}
storyFucn1(); //함수호출
storyFucn2(); //함수호출
console.log('------------------------------헨젤과 그레텔 알고리즘-매개변수')
function storyFucn(src) { //매개변수 생성
    let person = ['헨젤','그레텔'];
/*     let src = '빵부스러기'; */
    //헨젤과 그레텔이 조약돌를(을) 이용해서 집을 찾아갔습니다.
    //헨젤과 그레텔이 빵부스러기를(을) 이용해서 집을 찾아갔습니다.
    console.log(`${person[0]}과 ${person[1]}이 ${src}를(을) 이용해서 집을 찾아갔습니다.`); //src 실행
}
storyFucn(`조약돌`); //매개변수 대입
storyFucn(`빵부스러기`); //매개변수 대입
console.log(`------------------------------커피레시피 - 기본값포함`)
//fuction coffeeFunc1(){}함수를 생성한다. 실행결과가 항상 같으므로 매개변수는 선언하지않는다.
//fuction coffeeFunc1(data1){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 1개 있기 때문에 매개변수를 1개 생성한다.
//fuction coffeeFunc1(data1,data2){} 함수를 생성한다. 결과 실행 시 매번 달라지는 데이터가 2개 있기 때문에 매개변수를 2개 생성한다.
//coffeeFunc1(10);
//(위)프로그래밍해석 : 함수를 생성 후 달라지는 데이터 1개에 맞춘 매개변수 1개 생성완료 . 이후 함수를 호출하고 매개변수에 대입할 10값 입력.
//fuction coffeeFunc1(data1){ 실행함수+매개변수data1활용 } 
//coffeeFunc1(10);
//매개변수를 생성하고 매개변수에 값을 대입했다면 반드시 함수 내부에 매개변수를 활용한 결과식을 만들어야한다.
//매개변수 사용 시 호출할때 매개변수에 전달할 대입값을 작성안해도 함수가 실행되게 하고 싶다면 매개변수 생성 시 기본값을 함께 작성해야 합니다. function 함수명(매개변수=기본값){}
function coffeeFunc1(data1=1,data2=0.5) { //<<기본값 설정
    let water = data1+'컵 물을 채운다'; //알고리즘 - 데이터 나눠서 정리필요 
    let espresso = `${data2}샷 에스프레소를 넣는다`;
    console.log(water,espresso);
}
coffeeFunc1(2,1);
coffeeFunc1(3,0.5);
coffeeFunc1(); //<<기본값 하고 싶으면 공란으로
//====================================커피주문 알고리즘(고객입장)
console.log('-------------------------커피주문 알고리즘')
function kiosk(menu,num=1) {
    const msg = '잔 주문완료되었습니다'
    console.log(menu, num, msg);
}   
kiosk('카페라떼'); // 기본값이라 두번째 매개변수 생략
kiosk('아메리카노',2); //기본값이 아니라 매개변수 모두 작성
kiosk('녹차라떼');
kiosk('아메리카노',4);
console.log(`-----------------------------커피주문 알고리즘`)
function kiosk2(hotIce,menu,num=1) {
    const msg = '잔 주문완료되었습니다';
    const type = ['따뜻한','차가운'];
    console.log(type[hotIce],menu,num,msg);
}
kiosk2 (0,'카페라떼',2);
kiosk2 (1,'아메리카노');
kiosk2 (0,'녹차라떼',2);
kiosk2 (1,'아메리카노');
console.log('--------------------------함수의 리턴(return)')
//더하기 알고리즘
//함수 내부 {}는 대기장소로 호출하지 않는한 절대 실행되지않는다.
//함수 외부는 {}가 끝난 위치로 함수를 호출해서 실행시킬수있는 위치다
//함수 내에서 return을 작성하면 내부의 데이터를 함수 외부로 반환해서 실행시키거나 데이터를 전달하는것을 말한다.
function plusFunc(num){
    let total = num+1;
    return total; //리턴으로 실행함수가 아닌 값만 보냈다면?
}
console.log(plusFunc(2));
console.log('--------------------------구구단 알고리즘 리턴과 매개변수 활용')
let dan99 = ''; //전역변수(초기값) 앞으로 문자데이터가 들어올 예정으로 빈문자초기값
function dan99Func(num){
    dan99 = `${num}x1=${num*1} `;
    //dan99 = dan99 +`${num}x2=${num*2}`
    //기본 dan99변수에 우측 데이터를 더해서 대입하라.
    dan99 += `${num}x2=${num*2} `; //앞에 데이터를 지우지말고 연달아서 기존값에 더해서 대입한다 '+='
    dan99 += `${num}x3=${num*3} `; // ` 뒤 공백 -> 보기편하게 띄어쓰기 된다
    dan99 += `${num}x4=${num*4} `;
    dan99 += `${num}x5=${num*5} `;
    dan99 += `${num}x6=${num*6} `;
    dan99 += `${num}x7=${num*7} `;
    dan99 += `${num}x8=${num*8} `;
    dan99 += `${num}x9=${num*9}`;
    return dan99;
}
dan99Func(2); //구구단 2단
console.log(dan99Func(2));
console.log('-------------------------할인률 계산기 알고리즘');
// 27900원을 입력했을때(가격은 달라질수있음)
// 입력한 가격에 대한 5%,10%,20%,30%,40%,50% 할인률 동시출력
// 10% 할인율 계산법 : 가격 * 0.9 
// 4% 할인율 계산법 100-4 = 96 -> 가격 * 0.96
// 결과예시) 5% 할인율 결과 : ????원
let discountResult = '';
function discount(price){
    discountResult = `5% 할인율 결과 : ${price*0.95}원 `;
    discountResult += `10% 할인율 결과 : ${price*0.9}원 `;
    discountResult += `20% 할인율 결과 : ${price*0.19}원 `;
    discountResult += `30% 할인율 결과 : ${price*0.29}원 `;
    discountResult += `40% 할인율 결과 : ${price*0.39}원 `;
    discountResult += `50% 할인율 결과 : ${price*0.49}원 `;
    return discountResult;
}
console.log(discount(27500));