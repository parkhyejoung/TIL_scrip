//1.인스타그램 알고리즘
//2.프로필 클릭 시 개인 프로필 페이지로 이동 가능 (o) -> 페이지제작 필요

const profileDOM = document.querySelector('.profile')   //111
console.log(profileDOM);    
profileDOM.addEventListener('click',profilego);     //222
function profilego(){                               //333
    return window.location.href = 'insta_profile.html';
}

//3.우측 ... 메뉴 클릭 시 저장~신고 등 기능 실행 (o) -> 페이지제작 필요
//4..사진 한번 터치 시 반응없음 (x js)
//5.사진 두번 터치 시 좋아요 자동 등록 (o)

const photo = document.querySelector('main > .photo');
const likeImg = document.querySelector('.like img');
console.log(photo,likeImg); 
console.log(likeImg.src);
photo.addEventListener('dblclick',likeOn)
function likeOn(){
    //console.log('test');
    return likeImg.src='./images/icons/like_on.png'
}
//객체.속성 //속성읽기
//객체.속성  = 값 //속성 값 변경

//6.좋아요 아이콘 한번 터치 시 좋아요 (o) , 다시 터치 시 좋아요 해체 반복 (x-조건문 공부 필요)
//이미지 더블클릭 하기 전 기준

likeImg.addEventListener('click',clickLike)
function clickLike(){
    return likeImg.src='./images/icons/like_on.png'
}
const tagDOM = document.querySelector('.tag')
console.log(tagDOM);
tagDOM.addEventListener('click',tagGo);
function tagGo(){
    return window.location.href = 'insta_tag.html';}
//7.댓글 아이콘 터치 시 댓글 입력창 실행 (o)-제작필요 , 실행화면에서 바깥쪽 영역 터치 댓글입력창 닫힘 (o)
//8.공유 아이콘 터치 시 공유가능 계정들 창 실행, 바깥쪽 영역 터치 시 닫힘  (o)-제작필요 
//9.즐겨찾기 아이콘 터치 시 즐겨찾기 저장(X-DB필요)이 됨과 동시에 컬렉션 화면 출력(o)
//10.글 1줄,날짜만 미리표시,글 터치 시 전체 내용(나머지 글 줄고 해시태그 포함) 펼치기 (o)

const storyDOM = document.querySelector('.story')
const dateDOM = document.querySelector('.date')
console.log(storyDOM,dateDOM);
//함수를 생성하지 않고 바로 작성한이유? 반복이 아니고 즉시 실행되기때문
tagDOM.style.display = 'none';
//글 클릭시 태그 표시
storyDOM.addEventListener('click',tagshow)
function tagshow(){
    return tagDOM.style.display = 'block';
}
 //별도의 동적기능 없이 단순한 링크만 있는 경우는 js없이 a태그에 링크 걸기 
//동적기능 예)해외IP접속차단 동일IP 접속차단 성인사이트접속인증 로그인에 따른 접속가능 페이지일 경우 로그인 페이지 유무 확인 등
//11.해시태그 터치 시 해당 태그 사용 게시글 페이지 이동  (o) 
//12.날짜 터치 기능 없음 (x js)
//추가 페이지 목록) 개인 프로필 페이지(insta_profile.html) , 저장~신고등 기능 , 댓글 입력창 , 공유가능 계정들 표시 , 즐겨찾기 컬렉션 선택 화면,태그사용게시글(insta_tag_html)
