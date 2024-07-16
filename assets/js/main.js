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