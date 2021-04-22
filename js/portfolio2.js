;(function($){
var portfolio2 = {
    init:function(){
        var that = this
        that.headerFn();
        that.section1();
        that.section2();
        that.section3();
        that.section4();
        that.section5();
        that.section6();
        that.section7();
        that.section8();
    },
    headerFn:function(){
        var $wrap = $('#wrap');

        $(window).scroll(function(){
            if($(window).scrollTop()>$('#section4').offset().top-600){
                $wrap.css({backgroundColor:'rgb('+237+','+123+','+73+')'},500)
            }
            else if($(window).scrollTop()<=$('#section4').offset().top-600){
                $wrap.css({backgroundColor:'rgb('+190+','+90+','+75+')'},500)
            }
            if($(window).scrollTop()>$('#section8').offset().top-500){
                $wrap.css({backgroundColor:'rgb('+190+','+90+','+75+')'},500)
                // alert('d');
            }
            // console.log('1::'+$(window).scrollTop())
            // console.log($('#section8').offset().top)
        })
    },
    section1:function(){
        var $section1 = $('#section1');
        var $winW = $(window).innerWidth();
        var $winH = $(window).innerHeight();
        var $h2 = $('#section1 h2');
        var rate = 0.057803468;
        var $h2Size = $winW*0.057803468;

        function resizeFn(){
            $winW = $(window).innerWidth();
            $winH = $(window).innerHeight();
            $section1.css({width:$winW,height:$winH});

            // rate = 0.057803468;
            // $h2Size = $winW*0.057803468;
            // $h2.css({fontSize:$h2Size})

        }
        resizeFn();
        $(window).resize(function(){
            resizeFn();
        })
    },
    section2:function(){
        var $time = $('#section2 .time');
        var n = $time.length -1 ;
        var move = [0,1,4,8,5,9];
        var px = -85+'px';
        var $division = $('#section2 .division');
        var j=9;
        var k=5;
        var l=8;
        var $topBoxW = $('#section2 .top-box').innerWidth();
        var $h2Size = $topBoxW*0.073333333;
        var $h2 = $('#section2 h2');
        

        // function resizeFn(){
        //     $topBoxW = $('#section2 .top-box').innerWidth();
        //     $h2Size = $topBoxW*0.073333333;

        //     $h2.css({fontSize:$h2Size});
        // }
        // $(window).resize(function(){
        //     resizeFn();  
        // })

        for(var i=0;i<=n;i++){
            $time.eq(i).stop().animate({marginTop:0},0).animate({marginTop:(-85*move[i])+'px'},1000);
        }
        
        setInterval(function(){
            j--;
            if(j<0){j=9}
                $time.eq(5).stop().animate({marginTop:(-85*j)+'px'},600)
        },1000);
        setInterval(function(){
            k--;
            if(k<0){k=5}
                $time.eq(4).stop().animate({marginTop:(-85*k)+'px'},1000);
        },10000)
        setInterval(function(){
            l--;
            if(l<0){l=5}
            $time.eq(3).stop().animate({marginTop:(-85*l)+'px'},1000);
        },60000)

        function blinkFn1(){
        $division.css({opacity:1},1000);
        }
        function blinkFn2(){
            $division.css({opacity:0},1000);
        }
        blinkFn1();
        blinkFn2();
        setInterval(blinkFn1,1000);
        setInterval(blinkFn2,2000);
    },
    section3:function(){
        var $slide = $('#section3 .slide');
        var n = $('#section3 .slide').length;
        var $slideWrap = $('#section3 .slide-wrap');
        var $slideW = $slide.innerWidth();
        var next = [];
        var prev = [];
        var start = 0;
        var end =0;
        var cnt=0;
        var setId = 0;
        var setId2 = 0;

        function resizeFn(){
            if($(window).innerWidth()<=780){
                $slide.css({width:330+'px'});
            }
            else{
                $slide.css({width:390+'px'});
            }
            $slideW = $slide.innerWidth();
            // movingNextFn();
        }
        setTimeout(resizeFn,100);

        $(window).resize(function(){
            
            setTimeout(resizeFn,100);
        })

        function movingNextFn(){
            next = [9,0,1,2,3,4,5,6,7,8];

            for(var i=0;i<cnt;i++){

                var tem = next.shift();
                next.push(tem);
            }

            for(var i=0;i<n;i++){
                $slideW = $slide.innerWidth();
                $slide.eq(next[i]).stop().animate({left:($slideW*i)+'px'},0).animate({left:($slideW*(i-1))+'px'},2000, 'linear');
            }
            // console.log(next)
            // console.log($slide.innerWidth());
            
        }

        function movingPrevFn(){
            prev = [0,1,2,3,4,5,6,7,8,9];

            for(var i=9;i>cnt;i--){
                var tem = prev.pop();
                prev.unshift(tem);
            }

            for(var i=0;i<n;i++){
                $slide.eq(prev[i]).stop().animate({left:($slideW*(i))+'px'},0).animate({left:($slideW*(i+1))+'px'},2000, 'linear');
            }
            // console.log(prev);

        }


        function nextFn(){
            cnt++;
            if(cnt>=n){cnt=0}
            
                movingNextFn();
            
        }

        function prevFn(){
            cnt--;
            if(cnt<0){cnt=9}
            
                movingPrevFn()
            
        }

        $slideWrap.on({
            mousedown:function(e){
                e.preventDefault();
                start = e.pageX;
            },
            mouseup:function(e){
                e.preventDefault();
                end = e.pageX
                swipeFn();
            }
        })
        
        function swipeFn(){
            if(start-end>0){
                pause();
                if(!$slide.is(':animated')){
                    nextFn();
                }
            }
            if(start-end<0){
                pause();
                if(!$slide.is(':animated')){
                    prevFn();
                }
            }
        }

        $slide.on({
            mouseover:function(){
                pause();
            },
            // mouseleave:function(){
            //     nextFn();
            //     setId = setInterval(nextFn,2000);
            // }
        })

       
        function rollingNext(){
            nextFn();
            setId = setInterval(nextFn,2000);
        }
        rollingNext();

        function pause(){
            clearInterval(setId)
            clearInterval(setId2)
            setId2 = setInterval(function(){
                clearInterval(setId)
                clearInterval(setId2) 
                rollingNext();
            },4000)
        }


        //buy now! 롤링
        var $h5 = $('#section3 h5');
        var nextH5 = [];
        var cnt2=0;
        var $buyBox = $('#section3 .buy-box');
        var setId3 = 0;
        var m = 0;
        var k=1;
        // console.log($h5.length);

        function h5SlideFn(){
           
            nextH5 = [2,0,1];
            for(var i=0;i<=cnt2;i++){
                var tem2 = nextH5.shift();
                nextH5.push(tem2);
                // console.log(nextH5);
            }
            // for(var idx=0;idx<=9;idx++){
                for(var i=0;i<=2;i++){
                    $buyBox.eq(m).find('h5').eq(nextH5[i]).stop().animate({left:(100*i)+'%'},0).animate({left:(100*(i-1))+'%'},1000,'linear');
                }
            // }

        }

        function nextCountFn(idx){
            m=idx
            cnt2++;
            if(cnt2>2){cnt2=0}
            h5SlideFn();
        }



        $buyBox.each(function(idx){
            $buyBox.eq(idx).on({
                mouseover:function(){
                    if(k==1){
                        k=0
                        nextCountFn(idx);
                        h5Rolling();
                        // console.log(idx)
                    }

                },
                mouseleave:function(){
                    k=1
                    clearInterval(setId3);
                }
            })
        })
        function h5Rolling(){
            setId3 = setInterval(nextCountFn,1000);
        }


    },
    section4:function(){
        var $slide = $('#section4 .slide');
        var $span = $('#section4 span');
        var $a = $('#section4 .left-content > div');
        var next = [];
        var n = $span.length;
        var cnt = 0;
        var setId = 0;
        var k=1;
        var j=0;
        var $h2PBox = $('#section4 .left-content');
        var $h2Size = $h2PBox*0.192982456;
        var $h2 = $('#section4 h2');

        $slide.on({
            click:function(){
                j++;
                if(j>2){j=0}
                if(j==1){
                    $slide.addClass('addEvent1');
                }
                if(j==2){
                    $slide.addClass('addEvent2');
                }
                if(j==0){
                    setTimeout(function(){
                        $slide.removeClass('addEvent2');
                    },100)
                    setTimeout(function(){
                        $slide.removeClass('addEvent1');
                    },300)
                }
                // console.log('j'+j)
            }
        })

        function btnSlideFn(){

           

                next=[2,0,1]
                for(var i=0;i<=cnt;i++){
                    var tem = next.shift();
                    next.push(tem);
                    // console.log(next)
                }
                for(var i=0;i<=2;i++){
                    $span.eq(next[i]).stop().animate({left:(75*i)+'%'},0).animate({left:(75*(i-1))+'%'},2000,'linear');

                }
            
        }
        function nextFn(){
            
            cnt++;
            if(cnt>=n){cnt=0}
            btnSlideFn();
        }

        
        
        $a.on({
            mouseover:function(){
                if(k==1){
                    k=0;
                    nextFn();
                    rollingFn();
                }

            },
            mouseleave:function(){
                k=1;
                clearInterval(setId);
            }

        })

        function rollingFn(){
            
            setId=setInterval(nextFn,2000)
        
        }

        // function pauseFn(){
        //     clearInterval(setId)
        // }


        // function resizeFn(){
        //     $h2PBox = $('#section4 .left-content').innerWidth();
        //     $h2Size = $h2PBox*0.192982456;

        //     $h2.css({fontSize:$h2Size});
        // }
        // resizeFn();

        // $(window).resize(function(){
        //     resizeFn();
        // })

    },
    section5:function(){
        var $li = $('#section5 li');
        var $contentWrap = $('#section5 .content-wrap');
        var t =0;
        var $spanBox = $('#section5 .col div');
        var $spantxt = $('#section5 .col div a span');
        var next = [];
        var cnt=0;
        var setId = 0;
        var t2=0;

        //왼쪽 테이스팃!

        function slideFn(){
            next=[2,0,1];
            for(var i=0;i<=cnt;i++){
                var tem = next.shift();
                next.push(tem);
            }
            for(var i=0;i<=2;i++){
                $spantxt.eq(next[i]).stop().animate({left:(75*i)+'%'},0).animate({left:(75*(i-1)+'%')},1500,'linear')

            }
        }

        function nextCount(){
            cnt++;
            if(cnt>2){cnt=0}
            slideFn();
        }

        function rollingFn(){
            setId = setInterval(nextCount,1500);
        }

        $spanBox.on({
            mouseover:function(){
                if(t2==0){
                    t2=1;
                    nextCount()
                    rollingFn();
                }
            },
            mouseleave:function(){
                if(t2==1){
                    t2=0;
                clearInterval(setId);
                }
            }
        })


        //오른쪽 아코디언
        $li.find('.txt-box').eq(0).slideDown();
        $li.eq(0).addClass('addEvent')
        $li.each(function(idx){
            $(this).on({
                mouseover:function(){
                    if(t==0){
                        t=1;
                        $(this).find('a').removeClass('addEventOut')
                        $(this).find('a').addClass('addEventOn');
                    }
                    
                },
                mouseleave:function(){
                    if(t==1){
                        t=0;
                        $(this).find('a').removeClass('addEventOn')
                        $(this).find('a').addClass('addEventOut')
                    }
                   
                },
                click:function(){
                    q =0;
                    //화살표
                    // console.log($li.hasClass('addEvent'))
                    if($li.eq(idx).hasClass('addEvent')==false){
                        $li.removeClass('addEvent');
                    }
                        $(this).toggleClass('addEvent');

                    //텍스트 박스 보이기
                    $li.find('.txt-box').stop().slideUp()
                    $(this).find('.txt-box').stop().slideToggle(200);

                    $contentWrap.stop().animate({zIndex:1,opacity:0},0)
                    $contentWrap.eq(idx==0?q=4:q=idx-1).stop().animate({zIndex:2,opacity:1},100)
                    $contentWrap.eq(idx).stop().animate({zIndex:3,opacity:0},0).animate({opacity:1},400)
                }
            })
        })

        

        

    },
    section6:function(){
        var $face = $('#section6 li');
        var $col = $('#section6 .col')
        var $pageBtn = $('#section6 .page-btn');
        var setId = 0;
        var setId2 = 0;

        function pageColor(){
            if($face.hasClass('addEvent')==false){
                $pageBtn.eq(1).removeClass('addEvent')
                $pageBtn.eq(0).addClass('addEvent')
            }
            else{
                // console.log('hi')
                $pageBtn.eq(0).removeClass('addEvent')
                $pageBtn.eq(1).addClass('addEvent')
            }
        }
        pageColor();


        function timeFn(){
            $face.each(function(idx){
                setTimeout(function(){
                    $face.eq(idx).addClass('addEvent');
                    pageColor();
                },300*idx)
                setTimeout(function(){
                    setTimeout(function(){
                        $face.eq(idx).removeClass('addEvent');
                        pageColor();
                    },300*idx)
                },4000)
            })
        }

        function infinite(){
            setTimeout(timeFn,1000)
            setId = setInterval(timeFn,8000);

        }
        infinite();

        function pause(){
            clearInterval(setId);
            clearInterval(setId2);
            setId2 = setInterval(function(){
                clearInterval(setId);
                clearInterval(setId2);
                infinite();

            },6000)
        }
        $col.on({
            mouseover:function(){
                pause();
            }
        })



    },
    section7:function(){
        var $box = $('#section7 .btn-wrap');
        var $txt = $('#section7 span');
        var n = $txt.length;
        var next = [];
        var cnt = 0;
        var setId =0;
        var t=0;


        function eventFn(){
            next=[2,0,1];
            for(var i=0;i<=cnt;i++){
                var tem=next.shift();
                next.push(tem);
            }
            for(var i=0;i<n;i++){
                $txt.eq(next[i]).stop().animate({left:(85*i)+'%'},0).animate({left:(85*(i-1))+'%'},2000,'linear')
            }
        }

        function nextFn(){
            cnt++;
            if(cnt>n-1){cnt=0}
            eventFn()
        }
        
        function rollingFn(){
            nextFn();
            setId = setInterval(nextFn,2000)
        }

        $box.on({
            mouseover:function(){
                if(t==0){
                    t=1;
                    rollingFn();
                }
                
            },
            mouseleave:function(){
                if(t==1){
                    t=0;
                    clearInterval(setId)
                }
            }
        })

    },
    section8:function(){
        var $left = $('#section8 .left');
        var $right = $('#section8 .right-box');
        var $leftH = $left.innerHeight();

        function resizeFn(){
            $leftH = $left.innerHeight();

            if($(window).innerWidth()>780){
                $right.css({height:$leftH});
            }
            else{
                $right.css({height:100+'%'});
            }
        }
        setTimeout(resizeFn,100);
        $(window).resize(function(){
            resizeFn();
        })

        var $box = $('#section8 .btn-box');
        var $txt = $('#section8 span');
        var setId = 0;
        var cnt = 0;
        var next = [];
        var n =0;
        var t=0;

        function eventFn(){
            next = [2,0,1];
            for(i=0;i<=cnt;i++){
                var tem = next.shift();
                next.push(tem);
            }

            for(i=0;i<3;i++){
                $box.eq(n).find('span').eq(next[i]).stop().animate({left:(91*i)+'%'},0).animate({left:(91*(i-1))+'%'},2000,'linear');
            }
           
        }

        function nextFn(){
            cnt++;
            if(cnt>2){cnt=0}
            eventFn();
        }

        function rollingFn(){
            nextFn();
            setId = setInterval(nextFn,2000);
        }

        $box.each(function(idx){
            $(this).on({
                mouseover:function(){
                    n=idx;
                    if(t==0){
                        t=1;
                        rollingFn();
                    }
                },
                mouseleave:function(){
                    if(t==1){
                        t=0;
                        clearInterval(setId);
                    }
                }
            })
        })




    }

};
portfolio2.init();
})(jQuery);