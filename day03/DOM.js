$(document).ready(function(){
    // [내용(텍스트) 변경]
    // - text() : 글자를 변경 -무조건 텍스트로만 인식
    // 1. list1의 첫번째 a의 글자를 'HOME'이라고 변경
    $('.list1 li a:first').text('HOME');
    // - html() : 문서의 내용을 변경 - 태그를 인식
    // 2. list1의 두번째 a의 글자를 '<strong>PROFILE</strong>'이라고 변경
    $('.list1 li a:eq(1)').html('<strong>PROFILE</strong>');

})
