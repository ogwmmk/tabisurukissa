// 記載例

// $(function(){
//     $(".headar_title").css("color","blue")
// });

// ふわっとフェードイン

$(function(){
  $(window).scroll(function(){
    $(".fade-in").each(function(){
      const elempos = $(this).offset().top;
      // 位置を取得
      const scroll = $(window).scrollTop();
      // スクロールの位置（量）を取得
      const windowHeight = $(window).height();
      // 画面の高さを取得
      if(scroll > elempos - windowHeight){
        $(this).addClass("scroll-in");
      }
    });
  });
  jQuery(window).scroll();
});

$(function(){
  $(window).scroll(function(){
    $(".fade-in2").each(function(){
      const elempos = $(this).offset().top;
      // 位置を取得
      const scroll = $(window).scrollTop();
      // スクロールの位置（量）を取得
      const windowHeight = $(window).height();
      // 画面の高さを取得
      if(scroll > elempos - windowHeight){
        $(this).addClass("scroll-in");
      }
    });
  });
  jQuery(window).scroll();
});





$(function(){
  var pos = 0;
  var header = $('.header');
  
  $(window).on('scroll', function(){
    if($(this).scrollTop() < pos ){
      //上にスクロールしたとき
      header.removeClass('hed_hide');
    }else{
      //下にスクロールしたとき
      header.addClass('hed_hide');
    }
    pos = $(this).scrollTop();
  });
});


// start

$(function() {
	setTimeout(function(){
		$(".in").fadeIn(1600);
	},1000); //秒後にロゴをフェードイン
	setTimeout(function(){
		$(".out").hide(3000);
	},4000); //秒後にロゴ含め真っ白背景をフェードアウト
});




