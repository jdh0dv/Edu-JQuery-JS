$(document).ready(function(){
    // [내용(텍스트) 변경]
    // - text() : 글자를 변경 -무조건 텍스트로만 인식
    // 1. list1의 첫번째 a의 글자를 'HOME'이라고 변경
    $('.list1 li a:first').text('HOME');

    // - html() : 문서의 내용을 변경 - 태그를 인식
    // 2. list1의 두번째 a의 글자를 '<strong>PROFILE</strong>'이라고 변경
    $('.list1 li a').eq(1).html('<strong>PROFILE</strong>');



    // [태그 삽입]
    // - prepend() / append() : 타겟의 안쪽으로 맨 앞/맨 뒤에 태그 삽입
    // 3. list1의 맨 앞에 'START'를 추가
    $('.list1').prepend('<li><a href="#">START</a></li>');

    // 4. list1의 맨 뒤에 'END'를 추가
    $('.list1').append('<li><a href="#">END</a></li>');


    // - before() / after() (타겟의 밖에 삽입) : 타겟의 앞/뒤에 태그 삽입
    // 5. list1의 menu3 앞에 'GALLERY'를 삽입
    $('.list1 li:eq(3)').before('<li><a href="#">GALLARY</a></li>');

    // 6. list1의 menu3 뒤에 'BOARD'를 삽입 : 순서바뀜
    $('.list1 li').eq(4).after('<li><a href="#">BOARD</a></li>');



    // [태그 이동]
    // $('선택자').명령어('타겟')
    // - prependTo() / appendTo() : 선택자를 타겟의 안쪽으로 맨 앞/맨 뒤에 이동
    // 7. list1의 START를, list2의 맨 앞으로 이동
    $('.list1 li:first').prependTo('.list2');

    // 8. list1의 END를, list2의 맨 뒤로 이동
    $('.list1 li:last').appendTo('.list2');

    // - insertBefore() / insertAfter() : 선택자를 타겟의 앞/뒤로 이동

    // 9. list1의 GALLERY를 list2의 menu2 앞으로 이동
    $('.list1 li').eq(2).insertBefore('.list2 li:eq(2)');

    // 10. list1의 BOARD를 list2의 menu3 뒤로 이동
    $('.list1 li:eq(3)').insertAfter('.list2 li:eq(4)');    





    // [태그 삭제]
    // - remove() : 타겟을 삭제 (제거)
    // - empty() : 타겟 안에 있는 내용을 삭제 (비우는)
    // 11. list2의 menu2를 삭제
    $('.list2 li:eq(3)').remove();

    // 12. list2의 menu4를 비워라
    $('.list2 li:eq(5)').empty();



    // [wrap : 타겟을 원하는 태그로 감싸는 명령어]
    // -wrap, wrapAll, wrapInner
    // wrap() : 타겟이 여러개일 경우 각각 감싸짐
    // 13. list1을 <nav class="navWrap"></nav>로 감쌀 때 사용
    // $('.list1, .list2').wrap('<nav class="navWrap"></nav>');

    // wrapAll() : 타겟이 여러개일 경우 하나의 영역으로 감싸짐, 다른 엘레먼트가 있을 경우 뒤로 밀려남.
    // 14. list1과 list2를 한번에 <nav class="navWrap"></nav>로 감쌀 때 사용
    $('.list1, .list2').wrapAll('<nav class="navWrap"></nav>');

    // wrapInner() : 타겟 안에 있는 내용을 감쌀 때 사용
    // 15. body 안에 있는 내용을 <div class="container"></div>로 감싸지도록 설계
    $('body').wrapInner('<div class="container"></div>');
})








