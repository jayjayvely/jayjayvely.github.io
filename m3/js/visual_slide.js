$(document).ready(function(){
            var wd = parseInt($(window).width());
            var intv = setInterval(function(){
                nextAni();
            }, 3000);
            function nextAni(){
                $(".s_box").not(":animated").animate({"margin-left":-wd+"px"},800,function(){
                    $(".s_box li").eq(0).appendTo($(".s_box"));
                    $(".s_box").css("margin-left", "0px");
                    $(".btn_box li").eq(0).appendTo($(".btn_box"));
                    $(".btn_box li").removeClass("on");
                    $(".btn_box li").eq(0).addClass("on");
                });
            }
            var sw = true;
            $(".play").click(function(){
                if(sw==true){
                    $(this).addClass("on");
                    clearInterval(intv);
                } else {
                    $(this).removeClass("on");
                    nextAni();
                    intv = setInterval(function(){
                        nextAni();
                    }, 3000);
                }
                sw= !sw;
            });
            $(".btn_box li").click(function(){
                var idx = $(this).index()-1;
                clearInterval(intv);
                for(var i=0;i<idx;i++){
                    $(".btn_box li").eq(0).appendTo($(".btn_box"));
                    $(".s_box li").eq(0).appendTo($(".s_box"));
                }
                nextAni();
                intv = setInterval(function(){
                    nextAni()
            },3000);
          });

            $(".s_ani").click(function(){
                $("html,body").unbind().animate({scrollTop:$("#txt_box").offset().top - 40},'slow');
            });
        });