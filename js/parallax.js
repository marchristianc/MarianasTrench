var trench,depthgauges,topsubflash,middlesubflash,bottomsubflash,fish1,fish2,fish3,fish4,bubbles1,bubbles2,bubbles3,bubbles4,bubbles5,trenchscroller,depthgaugesscroller,fishflashscroller,middlesubflashscroller,bottomsubflashscroller,fish1scroller,fish2scroller,fish3scroller,fish4scroller,bubbles1scroller,bubbles2scroller,bubbles3scroller,bubbles4scroller,bubbles5scroller,topOffset,windowobject=jQuery(window),firstScroll=!0;function ScrollingImage(e,s,l,o){this.image=e,this.inertia=s||0,this.framerate=l||30,this.showDebug=o||!1,this.debug("showDebug:"+this.showDebug),this.startY=parseFloat(jQuery(e).css("top")),this.scrollInterval,this.enabled=!0,this.initProps(),this.lastScrollTop=0}function pauseFlash(e){document.getElementById(e).pauseMovie()}function resumeFlash(e){document.getElementById(e).resumeMovie()}function isFlashInView(e){var s=jQuery(e),l=s.attr("id")+"swf",o=s.data("isFlashLoaded");topOffset=utilitytoggle.hasClass("closed")?parseInt(s.css("top"),10):parseInt(s.css("top"),10)+utilityheight,windowobject.scrollTop()+windowobject.height()>topOffset&&topOffset+s.height()>windowobject.scrollTop()?s.hasClass("notinview")&&(s.removeClass("notinview"),"true"==o?resumeFlash(l):"false"==o&&(loadFlash(e),s.data("isFlashLoaded","true"))):s.hasClass("notinview")||("true"==o&&pauseFlash(l),s.addClass("notinview"))}function loadFlash(e){var s,l=jQuery(e).attr("id"),o={},t={menu:"false",allowFullScreen:"false",allowScriptAccess:"always",wmode:"transparent",quality:"high"},r={},a=rootPath+"/flash/";switch(l){case"topsubflash":o={swfPath:a},r={id:"topsubflashswf"},s=a+"SubTop.swf",swfobject.embedSWF(s,"topsubflashholder","332","869","9.0.124","http://www.adobe.com/go/getflashplayer",o,t,r);break;case"middlesubflash":r={id:"middlesubflashswf"},s=a+"JellyFishSub.swf",swfobject.embedSWF(s,"middlesubflashholder","846","567","10","http://www.adobe.com/go/getflashplayer",o,t,r);break;case"bottomsubflash":o={swfPath:a,debug:"false"},r={id:"bottomsubflashswf"},s=a+"CamSubPreloader.swf",swfobject.embedSWF(s,"bottomsubflashholder","846","760","10","http://www.adobe.com/go/getflashplayer",o,t,r)}}ScrollingImage.prototype.initProps=function(){var e=this;windowobject.bind("scrollstart",(function(s){e.handleScrollStart(s)})),windowobject.bind("scrollstop",(function(s){e.handleScrollStop(s)}))},ScrollingImage.prototype.handleScrollStart=function(e){if(this.debug("scrollstart"),this.updatePosition(),null==this.scrollInterval){var s=this;this.scrollInterval=setInterval((function(){s.updatePosition()}),this.getIntervalFromFramerate())}},ScrollingImage.prototype.handleScrollStop=function(e){this.debug("scrollstop"),clearInterval(this.scrollInterval),this.scrollInterval=void 0,this.updatePosition()},ScrollingImage.prototype.updatePosition=function(){var e=jQuery(document).scrollTop(),s=(jQuery(document).height(),jQuery(windowobject).height(),e-this.lastScrollTop);if(0!=s){var l=.02;this.inertia<0&&(l*=-1);var o=this.startY+this.inertia*e,t=o+s*l;this.debug("deltaScrolled:"+s);var r=this.image;this.image.stop(!0).animate({top:t},{duration:1e3,ease:"easeInQuad",complete:function(){r.animate({top:o},3e3,"easeOutElastic")}}),this.lastScrollTop=e}},ScrollingImage.prototype.getScrollDirection=function(){var e=jQuery(windowobject).scrollTop()>this.lastScrollTop?1:-1;return this.lastScrollTop=jQuery(windowobject).scrollTop(),e},ScrollingImage.prototype.getIntervalFromFramerate=function(){return 1e3/this.framerate},ScrollingImage.prototype.debug=function(e){this.showDebug},jQuery(document).ready((function(){windowobject=jQuery(window),trench=jQuery("#trench"),depthgauges=jQuery("#depthgauges"),topsubflash=jQuery("#topsubflash"),middlesubflash=jQuery("#middlesubflash"),bottomsubflash=jQuery("#bottomsubflash"),allflash=topsubflash.add(middlesubflash).add(bottomsubflash),fish1=jQuery("#fish1"),fish2=jQuery("#fish2"),fish3=jQuery("#fish3"),fish4=jQuery("#fish4"),bubbles1=jQuery("#bubbles1"),bubbles2=jQuery("#bubbles2"),bubbles3=jQuery("#bubbles3"),bubbles4=jQuery("#bubbles4"),bubbles5=jQuery("#bubbles5"),trenchscroller=new ScrollingImage(trench,-.1),depthgaugesscroller=new ScrollingImage(depthgauges,-.175),topsubflashscroller=new ScrollingImage(topsubflash,.1),middlesubflashscroller=new ScrollingImage(middlesubflash,.2),bottomsubflashscroller=new ScrollingImage(bottomsubflash,.025),fish1scroller=new ScrollingImage(fish1,.1),fish2scroller=new ScrollingImage(fish2,.1),fish3scroller=new ScrollingImage(fish3,.05),fish4scroller=new ScrollingImage(fish4,.2),bubbles1scroller=new ScrollingImage(bubbles1,-.35),bubbles2scroller=new ScrollingImage(bubbles2,-1),bubbles3scroller=new ScrollingImage(bubbles3,-.4),bubbles4scroller=new ScrollingImage(bubbles4,-.35),bubbles5scroller=new ScrollingImage(bubbles5,-1),jQuery(windowobject).smartresize((function(e){windowWidth=jQuery(windowobject).width(),windowWidth<=960?jQuery("body").addClass("narrowwindow"):jQuery("body").removeClass("narrowwindow")}))})),jQuery(window).load((function(){jQuery(allflash).each((function(){var e=jQuery(this).attr("rel");jQuery(this).data("isFlashLoaded",e),isFlashInView(jQuery(this))})),jQuery(windowobject).scroll((function(){jQuery(allflash).each((function(){isFlashInView(jQuery(this))}))}))}));