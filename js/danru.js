$(function(){
	//初始化
	var size;
	size=$(".banner .img li").size();
	$(".banner .img li").eq(0).show();
 	
    for(var i=1;i<=size;i++){
    	var li="<li>"+i+"</li>"
    	$(".banner .num").append(li);
    }
    $(".banner .num li").eq(0).addClass("on");

	//按左侧按钮效果
	var j=0;
	$(".banner .btn_l").click(function(){
		j--;
		 if(j==-1){			
			j=size-1;
	     }
	    $(".banner .img li").eq(j).fadeIn(300).siblings().fadeOut(300);
        $(".banner .num li").eq(j).addClass("on").siblings().removeClass("on");

	});
	//按右侧按钮效果
	$(".banner .btn_r").click(function(){
		j++;
		 if(j==size){	
			j=0;
	     }
	    $(".banner .img li").eq(j).fadeIn(300).siblings().fadeOut(300);
        $(".banner .num li").eq(j).addClass("on").siblings().removeClass("on");
	});


	//自动轮播
	    var t=setInterval(function(){
         j++;
        if(j==size){
           j=0; 
        }
        $(".banner .img li").eq(j).fadeIn(300).siblings().fadeOut(300);
        $(".banner .num li").eq(j).addClass("on").siblings().removeClass("on");

    },2000);


	//手动轮播
	$(".banner .num li").hover(function () {
        var index=$(this).index();
        j=index;
        $(this).addClass("on").siblings().removeClass("on");
        $(".banner .img li").eq(j).fadeIn(300).siblings().fadeOut(300);

    });

    
	//鼠标滑入画出banner的效果
    $(".banner").hover(function(){
        clearInterval(t);
    },function(){
        t=setInterval(function(){
           j++;
		 if(j==size){	
			j=0;
	     }
	    $(".banner .img li").eq(j).fadeIn(300).siblings().fadeOut(300);
        $(".banner .num li").eq(j).addClass("on").siblings().removeClass("on");

        },2000);
    });

})