//for(초기변수; 조건문; 증감식){조건문이 참일때 반복실행결과}
//자바스크립트 10번 반복
for(let i=1; i<11; i++){
    console.log('자바스크립트'+i);
}
/* for(let i=1;(1) i<11;(2) i++)(4){
    console.log('자바스크립트');(3)
    1-> 2-> 3-> 4 
    조건이 참일때 2>3>4 를 순차적으로 실행하고 끝나면 다시 2부터 반복실행
} */
//"1월" ~ "12월" 12번 반복
//개발자가 화면에 출력하고 싶은 첫번째 번호가 for문의 초기변수에 들어가는 값이 된다.
//i를 1로 시작하고 i가 12보다 작거나 같은때까지 증감하라 결과
for(let i=1; i<=12; i++){
    console.log(i+'월')
}
for(let i=6; i<=12; i++){
    console.log(i+'월')
}
const coffee = ['아메리카노','카페라떼','에스프레소','녹차라떼','돌체라떼','차이라떼','프라푸치노']
console.log(coffee);
for(let i=0; i<coffee.length; i++){   //.length; 입력으로 갯수만큼 알아서 계산 = 는 피하기(1부터 인식하니까)
    console.log(coffee[i])
}
//1번 메뉴 아메리카노
//2번 메뉴 카페라떼..
for(let i=0; i<coffee.length; i++){
    console.log((i+1)+'번 메뉴 '+coffee[i])
}
//역순으로  
for(let i=coffee.length-1; i>=0; i--){
    console.log(coffee[i])
}
//구구단 2단~9단 출력
//2단 2x1=2 형태로 출력하기
for(let i=1; i<10; i++){
    console.log(`2x${i}=${2*i}`)
}
//for 반복 + if 조건
//1~20까지 출력
for(let i=1; i<21; i++){
    if(i%2 == 1){
        console.log(i)
    }
    //조건문 if 활용 1~20까지 반복숫자 중 홀수만 출력
    //숫자%2 == 1
}
console.log('--------------')
//10~20까지 역순으로 짝수만 출력 반복문
for(let i=20; i>=10; i--){
    if(i%2 == 0){
        console.log(i)
    }
}
console.log('--------------')
const navA = document.querySelectorAll('nav a');
console.log(navA)
for(let i=0; i<navA.length; i++){
/*     console.log(navA[i])
    //모든 a 글자색 빨강
    navA[i].style.color = '#f00'; */
    //홀수 A는 빨강 , 짝수 A는 파랑
    if(i%2==1){
        navA[i].classList.add('odd');
    //    navA[i].style.color = '#f00'; //빨강
    //    navA[i].style.backgroundColor = '#ff0'; //빨강
    }else {
        navA[i].classList.add('even');
    //   navA[i].style.color = '#00f'; //파랑
    //    navA[i].style.backgroundColor = '#eee'; //파랑
    }
}
console.log('--------------')
//li 변수를 만들고 배경색 노랑 변경
const liA = document.querySelectorAll('.list li');   //All사용시 무조건 index필요
console.log(liA)
for(let i=0; i<liA.length; i++){
    liA[i].style.backgroundColor = 'yellow';
}