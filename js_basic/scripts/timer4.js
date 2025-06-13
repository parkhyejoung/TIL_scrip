//회원가입 버튼 클릭 시 join_msg에 '가입축하합니다'메세지 출력되고 
const joIn = document.querySelector('#join')
const joinMsg = document.querySelector('.join_msg')
console.log(joIn,joinMsg);
joinMsg.classList.add('hide'); // 초기상태(숨기기)
joIn.addEventListener('click',pop)
function pop(){
    joinMsg.classList.remove('hide');
    joinMsg.textContent = '가입축하합니다';
    //(메세지출력 후)3초후 메세지 자동 사라지기
    const hideMsg = setTimeout(()=>{
        joinMsg.classList.add('hide');
    },3000)
}
//3초 후 메세지 자동 사라지기
const pay = document.querySelector('#pay');
const payMsg = document.querySelector('.pay_msg');
const payResetBtn = document.querySelector('.pay_reset');
let payMsgOut;
joinMsg.classList.add('hide');
pay.addEventListener('click', pMsg)
function pMsg(){
    payMsg.classList.remove('hide'); //숨기는 클래스 제거로 보이게하기
    payResetBtn.classList.remove('hide');
    payResetBtn.classList.remove('hide');
    payMsg.textContent = '결제완료되었습니다. 5초 후 광고사이트로 이동합니다.';
    payMsgOut = setTimeout(()=>{
        window.location.href = './timer3.html'
    },5000)
}
