/* -----------------------------------------------------------------------------

    Jiraiya - Advanced Personal Resume / CV vCard Template

    File:           JS Custom
    Version:        1.0
    Last change:    26/09/2017

----------------------------------------------------------------------------- */

(function($) {

    'use strict';

    new WOW().init();

    $("#container-mixItUp").mixItUp();

    /*------------------------------------------------------------------------*/
    /*  * Start Preloader
    /*------------------------------------------------------------------------*/

    function loader() {

        $(window).on('load', function() {


            $("html, body").animate({
                scrollTop: $("html").offset().top
            });

            var loader = $('.loader');
            var wHeight = $(window).height();
            var wWidth = $(window).width();
            var i = 0;

            /*Center loader on half screen */
            loader.css({

                top: wHeight / 2 - 2.5,
                left: wWidth / 2 - 200

             })

             do{

                loader.animate({

                  width: i
                },10)

                i+=3;

              } while(i <= 400)

              if(i === 402){

                loader.animate({

                  left: 0,
                  width: '100%'

                })

                loader.animate({

                  top: '0',
                  height: '100vh'

                })

              }

            /* This line hide loader and show content */
            setTimeout(function(){

                $('.loader-wrapper').fadeOut();
                $(loader).fadeOut();
                $('.loader-wrapper').remove();
                $(".into").fadeIn();

                /*Set time in milisec */
              },3500);
            });

    }

    loader();

	/*-----------------------------------------------------------------------------------*/
    /*  Start My Photos
    /*-----------------------------------------------------------------------------------*/
	
    function openWinodws() {

        $(".into .box-arrow-slide .lines-break i.icon.ion-ios-arrow-down, .into .box-right-intro button.btn").on('click', function(){

            $("body").attr("id","visibilityScrool");
            $(".into .right-intro").attr("id","backgroundRightIntro");
            $(".into .overlay-home, .into .right-intro .background-home").fadeIn();
            $(".into .box-right-intro, .into .box-arrow-slide .lines-break .icon").attr("id","colorOpenWindow");
            $(".into").attr("id","marginTranslateX");
            $(".into .box-arrow-slide .lines-break i.icon.ion-ios-arrow-left").fadeIn();
            $(".into .box-arrow-slide .lines-break i.icon.ion-ios-arrow-down").fadeOut();
            $(".main-right").show();

        });

    }

    openWinodws();

    function closeWinodws() {

        $(".into .box-arrow-slide .lines-break i.icon.ion-ios-arrow-left").on('click', function(){



            $("body").removeAttr("id","visibilityScrool");
            $(".into .right-intro").removeAttr("id","backgroundRightIntro");
            $(".into .overlay-home, .into .right-intro .background-home").hide();
            $(".into .box-right-intro, .into .box-arrow-slide .lines-break .icon").removeAttr("id","colorOpenWindow");
            $(".into").removeAttr("id","marginTranslateX");
            $(".into").attr("id","marginTranslateXRight");
            $(".into .box-arrow-slide .lines-break i.icon.ion-ios-arrow-left").fadeOut();
            $(".into .box-arrow-slide .lines-break i.icon.ion-ios-arrow-down").fadeIn();
            $(".main-right").hide();

        });

    }

    closeWinodws();

	function fullPreviewSize() {
		
		$(".photos .photos-item img").on('click', function(){
			
			$(this).addClass("previewImg");
			showPreviewImg();
			$(this).removeClass("previewImg");
			
		});
		
		function showPreviewImg(){
			
			const myElement = document.querySelector(".previewImg");
			const showEl = document.querySelector(".boxPreview img");
			var sho = myElement.getAttribute('src');
			var shs = showEl.setAttribute('src', sho);
			$(".boxPreview").fadeIn();
		}
		
	}

	fullPreviewSize();

	function ClosefullPreviewSize(){
		
		$(".boxPreview .icon").on('click', function(){
			$(".boxPreview").fadeOut();
			fullPreviewSize();
			
		});
	}
	
	ClosefullPreviewSize();

    /*-----------------------------------------------------------------------------------*/
    /*  Start My Portfolio
    /*-----------------------------------------------------------------------------------*/
    
    $(".portfolio ul.filter-menu li a").on('mouseenter', function() {
        
        $("ul.filter-menu li:nth-child(1)").children().removeAttr("id","active-color");
        $("ul.filter-menu li a.active-color").attr("id", "active-color");
        
    });
    
    $(".portfolio ul.filter-menu li a").on('mouseleave', function() {
        
        $("ul.filter-menu li a.active-color").removeAttr("id", "active-color");
        
    });
	
    $(".portfolio-item .portfolio-info").height($(".portfolio-item .portfolio-img img").height());
    
    $(window).resize(function(){ 
        
        $(".portfolio-item .portfolio-info").height($(".portfolio-item .portfolio-img img").height());
        
    });  
	
 












}(jQuery));

/*-----------------------------------------------------------------------------------*/
/*      * End
/*-----------------------------------------------------------------------------------*/
