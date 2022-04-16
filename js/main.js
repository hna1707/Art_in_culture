$(function(){

    //비주얼 슬라이더
    $('.slider_imgs').slick({
        autoplay: true,             //자동 슬라이드
        autoplaySpeed: 1900,         //이미지 전환속도(정지된 시간 포함)
        arrows:false,                //양옆 화살표(true가 기본)
        dots:true,                  //페이지버튼
        //fade:true,                  //투명도로 전환
        easing:'swing',
        initialSlide:4,             //처음 시작하는 이미지(0부터 센다)
        pauseOnFocus:false,         //이미지를 클릭하면 멈춤
        pauseOnHover:false,         //이미지위에 마우스를 올려놓으면 멈춤
        speed:300,                  //이미지 전환시 만의 속도
        swipe:false,                //밀어서 움직이기
        //vertical:true              //위로 전환
        //rtl:true
    });

    //비주얼 슬라이더-stop/play
    $(".sliderBtn").click(function(){
        //$('.sliderBtn').toggleClass("on");      //stop,play 이미지 전환(단순히 모양만바꿀때)

        if( !( $('.sliderBtn').hasClass('on')) ){   //클라스on기 없을때
            $('.slider_imgs').slick('slickPause');
            $(this).addClass('on');
        } else {
            $('.slider_imgs').slick('slickPause');
            $(this).removeClass('on');
        }
    });

    //매거진 슬라이더
    $('.magazine_imgs').slick({
        autoplay: false,             //자동 슬라이드
        autoplaySpeed:2000,         //이미지 전환속도(정지된 시간 포함)
        arrows:true,                //양옆 화살표(true가 기본)
        dots:false,                  //페이지버튼
        //fade:true,                  //투명도로 전환
        easing:'swing',
        initialSlide:4,             //처음 시작하는 이미지(0부터 센다)
        pauseOnFocus:false,         //이미지를 클릭하면 멈춤
        pauseOnHover:false,         //이미지위에 마우스를 올려놓으면 멈춤
        speed:300,                  //이미지 전환시 만의 속도
        swipe:true,                //밀어서 움직이기
        //vertical:true              //위로 전환
        //rtl:true
    });

    // 배너 슬라이더
    $('.rolling').slick({
        autoplay: true,
        autoplaySpeed: 800,
        easing: 'easeInOutSine',
        arrows:false,            
        dots:false, 
        centerMode: true,
        centerPadding: '16px',
        slidesToShow: 7
    });

});