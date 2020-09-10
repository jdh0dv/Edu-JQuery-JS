$(function(){
    var n = 0
    var indi_on = '../img/ico_slider_on.png';
    var indi_off = '../img/ico_slider.png';
    var $indi_li = $('.indi li img')

    // 1. next, prev
    // - next를 클릭했을 때 왼쪽으로 한칸씩 이동하는 애니메이션 작성
    // - 마지막에서 다시 처음으로 이동
    // - css와 animate를 이용하여 무한롤링 되도록 설정

    //next    
    $('.next').click(function(){
        n++
        if(n == 5){ // n > 3
            $('.img_wrap').css({ left : -782 * 0}) // 마지막과 동일한 위치
            n = 1; // 마지막 타겟
        }        
        $('.img_wrap').stop().animate({ left : -782 * n})

        $indi_li.attr( 'src' , indi_off )
        $indi_li.eq(n).attr( 'src' , indi_on )

        $('.cpage').text(n+1)        

        if( n == 4){
            $indi_li.eq(0).attr( 'src' , indi_on )
            $('.cpage').text(1)
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
        
        $indi_li.attr( 'src' , indi_off )
        $indi_li.eq(n).attr( 'src' , indi_on )

        $('.cpage').text(n+1)

    })

    // 3. indi
    // - indi의 li를 클릭했을 때, 클릭한 li만 스타일을 변경
    // - 클릭한 li와 관련된 img로 이동
    // - next, prev 때 해당하는 li에 on이라는 class를 붙여라
    $('.indi li').click(function(){

        var n = $(this).index()
        $indi_li.attr( 'src', indi_off)
        $(this).children().attr( 'src', indi_on)

        $('.img_wrap').stop().animate({ left : -782 * n})

        $('.cpage').text(n+1)
    })    

    // 4. page numbering
    // - apage : img_wrap의 li 기준
    var all = $('.img_wrap li').length -1
    $('.apage').text(all)

    //5번과 6번은 같이 쓰기 매우 복잡함 -> 각각 쓰는 것을 권장.
    // 5. rolling - over/out
    // - slider에 마우스를 올렸을 때 rolling을 멈추고, 빠져나가면 다시 실행하여라

    var rolling = setInterval(function(){
        $('.next').click()
    },1000)

    /* 5번 내용, 6번내용과 함께 쓸 수 없어 주석처리함
    $('.slider').mouseover(function(){
        clearInterval(rolling)
    })
    $('.slider').mouseout(function(){
        rolling = setInterval(function(){
            $('.next').click()
        },1000)
    })
    */

    // 6. rolling - button
    // btn_auto를 클릭했을 때 버튼이 정지면 멈추고, 재생이면 실행---->이미지로 변경
    // 정지 : ../img/stop-icon.png
    // 재생 : ../img/play-icon.png


})

