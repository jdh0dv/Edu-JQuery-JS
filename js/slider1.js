$(function(){
    // 1. next
    // - next를 클릭했을 때 왼쪽으로 한칸씩 이동하는 애니메이션 작성
    // - 마지막에서 다시 처음으로 이동
    // - css와 animate를 이용하여 무한롤링 되도록 설정

    // 2. prev

    // 3. indi
    // - indi의 li를 클릭했을 때, 클릭한 li만 스타일을 변경
    // - 클릭한 li와 관련된 img로 이동
    // - next, prev 때 해당하는 li에 on이라는 class를 붙여라

    $('.indi li').click(function(){
        $('.indi li').removeClass('on')
        $(this).addClass('on')

        var n = $(this).index()
        $('.img_wrap').stop().animate({ left : -782 * n})
    })

    //next
    var n = 0
    $('.next').click(function(){
        n++
        if(n == 5){ // n > 3
            $('.img_wrap').css({ left : -782 * 0}) // 마지막과 동일한 위치
            n = 1; // 마지막 타겟
        }        
        $('.img_wrap').stop().animate({ left : -782 * n})

        $('.indi li').removeClass('on')
        $('.indi li').eq(n).addClass('on')
        if( n == 4){
            $('.indi li').eq(0).addClass('on')
        }
    })

    //prev
    $('.prev').click(function(){
        n --
        if( n == -1 ){ // n < 0
            $('.img_wrap').css({ left : -782 * 4})
            n = 3;
        }
        $('.img_wrap').stop().animate({ left : -782 * n})
        
        $('.indi li').removeClass('on')
        $('.indi li').eq(n).addClass('on')

    })
})