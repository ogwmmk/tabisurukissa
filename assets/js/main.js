// $(".underbar").hover(
//     function() {
//         //マウスカーソルが重なった時の処理
//         $(".underbar").addClass("big");
//     },
//     function() {
//         //マウスカーソルが離れた時の処理
//         $(".underbar").removeClass("big");
//     }


    // $(".header_text").click(function() {
    //     $(".header_text").css("color","pink");
    // });

    // $(function(){
    //     //色を指定するのはどちらでもできる
    //     $("h1").css("color", "pink");
    //     $("li").css("color", "blue");
      
        //cssで指定するものであれば色以外のプロパティもOK
        // $("#samplePage").css("margin-left", '50px');
      
        // $(".tanaha").css("color", "red");
    //   });


    // $(function(){
    //     $(".point").click(function(){
    //       $(".headar_subtatle").fadeOut();
    //     });
    //   });


      $(function(){
        $('#nav').hover(function(){
           $('nav').addClass('underline');
        });
     
     })