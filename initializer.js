//변수 선언, 초기값 입력, 페이지 로드 시 명령 호출 관련

var user_info = new Array();    //유저 정보 저장
var post = new Array();         //포스터 정보 저장

//관리자 계정 추가
user_info.push(["master", "master", "개발자", "master@gmail.com", 0]);

//더미 포스트 데이터
post.push(["제목", "영화제목", "닉네임", "날짜", "포스트내용"]);

//로드 후 초기 페이지
list_displayer();