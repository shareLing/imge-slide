/**
 * Created by Administrator on 2017/9/22.
 */
$(function (){
    var size;

    var clone=$(".banner .img li").first().clone();
    $(".banner .img").append(clone);
    size=$(".banner .img li").size();
    // alert(size);
    for(var j=0;j<size-1;j++){
        $(".banner .num").append("<li></li>")
    }

    var i=0;
        $(".banner .btn_l").click(function(){
            i--;
            if(i==-1){
                $(".banner .img").css({left:-(size-1)*550});
                i=size-2;
            }
            $(".banner .img").animate({left:-(i*550)},500);
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
        });



        $(".banner .btn_r").click(function(){
        i++;
        if(i==size){
            $(".banner .img").css({left:0});
            i=1;
        }
        $(".banner .img").animate({left:-(i*550)},500);

        if(i==size-1){
            $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");

        }else{
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
        }

    });


    /*鼠标划入原点事件*/
    $(".banner .num li").hover(function () {
        var index=$(this).index();
        i=index;
        $(this).addClass("on").siblings().removeClass("on");
        $(".banner .img").stop().animate({left:-index*550},550);

    });

    //轮播
    var t=setInterval(function(){
         i++;
        if(i==size){
            $(".banner .img").css({left:0});
            i=1;
        }
        $(".banner .img").animate({left:-(i*550)},500);

        if(i==size-1){
            $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");

        }else{
            $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
        }

    },2000);

    //对banner的定时器进行操作
    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(function(){
            i++;
            if(i==size){
                $(".banner .img").css({left:0});
                i=1;
            }
            $(".banner .img").animate({left:-(i*550)},500);
            if(i==size-1){
                $(".banner .num li").eq(0).addClass("on").siblings().removeClass("on");
            }else{
                $(".banner .num li").eq(i).addClass("on").siblings().removeClass("on");
            }

        },2000);
    });


})
