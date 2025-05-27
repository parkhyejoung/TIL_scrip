// 프로젝트소개 팝업 알고리즘
// 1.팝업 숨기기(popup_bg)
// 2.썸네일 이미지(a) 클릭 시 팝업 보이기(popup_bg)
// 3.(팝업 실행 기준) 배경클릭(popup_bg)시 팝업 숨기기(popup_bg)
// 4.프로젝트 팝업 실행 시 클릭한 대상의 이미지가 출력되는 알고리즘
// 1.클릭한 대상의 이미지 경로 확인
// 2.위 경로를 팝업 이미지의 경로에 대입
//알고리즘 기준 반복해야하는 데이터를 변수로 생성하기
const popupBg = document.querySelector('.popup_bg');//하나만 잡을때
const thumbNailA = document.querySelectorAll('.design a');//여러개 잡을때
console.log(popupBg,thumbNailA);//111
//1.팝업숨기기
popupBg.style.display = 'none';//111
//변수로 만든 DOM요소가 여러개일 경우 이벤트를 위해 접근할때는 인덱스를 사용해서 하나씩 개별 접근해야한다.
// 2.썸네일 이미지(a) 클릭 시 팝업 보이기(popup_bg)
thumbNailA[0].addEventListener('click',function(){
    console.log(0);
    console.log(this);
    console.log(this.children[0].src);
    console.log(popupBg.children[0].children[0].src); //팝업bg의 자식의 자식의 src 확인
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[1].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[2].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[3].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[4].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[5].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[6].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[7].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[8].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[9].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
thumbNailA[10].addEventListener('click',function(){
    popupShow(this); //팝업 출력 함수 호출
})
function popupShow(target){
    console.log('-----------함수시작위치와 에러체크')
/*     console.log(popupBg.children[0].children[0].this.children[0].src);//정상체크 */
    popupBg.style.display = 'flex';
    popupBg.children[0].children[0].src = target.children[0].src;
    popupShow(this);
    return;  //함수종료한다는뜻
}
popupBg.addEventListener('click',popupHide)
function popupHide(){
    return popupBg.style.display = 'none';
}
// 3.(팝업 실행 기준) 배경클릭(popup_bg)시 팝업 숨기기(popup_bg)