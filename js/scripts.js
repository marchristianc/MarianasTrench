var utilitynav,utilityheight,utilityheightpx,utilitytoggle,bodyelement,htmlelement,emailfield,emailfieldfooter,countryselect,countryselectfooter,countryfakeselect,countryfakeselectfooter,registerform,registerformfooter,ajaxloading,ajaxloadingfooter,ajaxthankyou,ajaxthankyoufooter,popuplinks,depthfacttriggers,depthfacts,utilitytimer,homescrolltoplink,alreadyvisited="false";function startTimer(){utilitytimer=setTimeout((function(){utilitynav.animate({marginTop:utilityheightpx},500,(function(){utilitytoggle.addClass("closed")}))}),5e3)}jQuery(document).ready((function(e){bodyelement=jQuery("body"),htmlelement=jQuery("html"),utilitynav=jQuery("#utility"),utilitytoggle=jQuery("#utility").find("a.utilitytoggle"),modalheader=jQuery(".jqmWindowInner").find("h2"),registerform=jQuery("#registerform").find("form"),registerformfooter=jQuery("#registerformfooter").find("form"),emailfield=jQuery("#email"),emailfieldfooter=jQuery("#emailfooter"),countryselect=jQuery("#P\\/COUNTRY"),countryselectfooter=jQuery("#p\\/countryfooter"),ajaxloading=jQuery("#loading"),ajaxloadingfooter=jQuery("#loadingfooter"),ajaxthankyou=jQuery("#thankyou"),ajaxthankyoufooter=jQuery("#thankyoufooter"),popuplinks=jQuery("a.popup"),depthfacts=jQuery("#depthrelative").find(".depthfact"),depthfacttriggers=jQuery("#depthrelative").find("a.facttrigger"),homescrolltoplink=jQuery("#homescrolltop"),htmlelement.hasClass("no-generatedcontent")&&(jQuery(utilitytoggle).append("<span></span>"),jQuery(modalheader).prepend('<span class="linebefore"></span>').append('<span class="lineafter"></span>')),depthfacts.length>0&&(isiPad||isMobile?depthfacttriggers.click((function(){depthfacttriggers.parent("aside").removeClass("openfact");var e=jQuery(this).parent("aside");return e.hasClass("openfact")?e.removeClass("openfact"):e.addClass("openfact"),!1})):(depthfacttriggers.hover((function(){jQuery(this).parent("aside").addClass("openfact")}),(function(){})).click((function(e){return!1})),depthfacts.hover((function(){}),(function(){jQuery(this).removeClass("openfact")})))),Modernizr.load([{test:Modernizr.inputtypes.email&&Modernizr.input.required&&Modernizr.input.placeholder,nope:"/scripts/h5f.min.js",callback:function(){bodyelement.addClass("h5fneeded"),H5F.setup(registerform,{validClass:"valid",invalidClass:"invalid",requiredClass:"required",placeholderClass:"placeholder"}),H5F.setup(registerformfooter,{validClass:"valid",invalidClass:"invalid",requiredClass:"required",placeholderClass:"placeholder"})}}]),isiPad||isMobile?(countryselect.change((function(){"default"!=jQuery(this).val()&&jQuery(this).removeClass("invalid")})),countryselectfooter.change((function(){"default"!=jQuery(this).val()&&jQuery(this).removeClass("invalid")}))):(countryselect.linkselect({change:function(){(countryfakeselect=jQuery("#P\\/COUNTRY_link")).removeClass("invalid")}}),countryselect=jQuery("#P\\/COUNTRY"),countryselectfooter.linkselect({change:function(){(countryfakeselectfooter=jQuery("#p\\/country_linkfooter")).removeClass("invalid")}}),(countryselectfooter=jQuery("#p\\/countryfooter")).attr("name","P/COUNTRY")),"true"==(alreadyvisited=jQuery.cookie("alreadyvisited"))?(utilitynav.css("position","absolute"),utilityheight=utilitynav.innerHeight(),utilityheightpx="-"+String(utilityheight)+"px",utilitynav.css("margin-top",utilityheightpx),utilitytoggle.addClass("closed")):(startTimer(),utilitynav.css({"margin-top":0,visibility:"visible"}).mouseover((function(){clearTimeout(utilitytimer),jQuery(this).unbind("mouseover")})).hover((function(){clearTimeout(utilitytimer)}),(function(){startTimer()})).click((function(){clearTimeout(utilitytimer)})),jQuery.cookie("alreadyvisited","true",{expires:365})),utilitytoggle.click((function(){return jQuery(this).hasClass("closed")?utilitynav.animate({marginTop:"0"},500,(function(){utilitytoggle.removeClass("closed")})):utilitynav.animate({marginTop:utilityheightpx},500,(function(){utilitytoggle.addClass("closed")})),!1})),homescrolltoplink.length>0&&homescrolltoplink.click((function(){setTimeout((function(){utilitytoggle.hasClass("closed")&&utilitytoggle.trigger("click")}),500)})),registerform.submit((function(e){e.preventDefault(),jQuery(this).addClass("validated");var t=!0,a=countryselect.val();if(isiPad||isMobile?"default"==a&&(t=!1,countryselect.addClass("invalid")):"default"==a&&((countryfakeselect=jQuery("#P\\/COUNTRY_link")).addClass("invalid"),t=!1),bodyelement.hasClass("h5fneeded")||registerform.find("input:invalid").length>0&&(t=!1),t){window.console&&window.console.log&&console.log("form is valid, submission start...");var i=registerform.serialize();jQuery.ajax({type:"GET",url:"/ba-simple-proxy.php",data:i,beforeSend:function(){registerform.fadeOut(0,(function(){ajaxloading.show(0)}))},success:function(){window.console&&window.console.log&&console.log("form submission success..."),ajaxloading.hide(0,(function(){ajaxthankyou.fadeIn()}))},error:function(e,t,a){window.console&&window.console.log&&console.log("form submission error..."),window.console&&window.console.debug&&console.debug(e,t,a)}})}else window.console&&window.console.log&&console.log("form is invalid, fix errors to continue..."),registerform.find("input.text").focus().blur()})),registerformfooter.submit((function(e){e.preventDefault(),jQuery(this).addClass("validated");var t=!0,a=countryselectfooter.val();if(isiPad||isMobile?"default"==a&&(t=!1,countryselectfooter.addClass("invalid")):"default"==a&&((countryfakeselectfooter=jQuery("#p\\/countryfooter_link")).addClass("invalid"),t=!1),bodyelement.hasClass("h5fneeded")||registerformfooter.find("input:invalid").length>0&&(t=!1),t){var i=registerformfooter.serialize();jQuery.ajax({type:"GET",url:"/ba-simple-proxy.php",data:i,beforeSend:function(){registerformfooter.fadeOut((function(){ajaxloadingfooter.fadeIn()}))},success:function(){ajaxloadingfooter.fadeOut((function(){ajaxthankyoufooter.fadeIn()}))},error:function(){}})}else registerformfooter.find("input.text").focus().blur()})),popuplinks.click((function(){return function(e,t,a,i){a+=32,i+=96;var s=window.open(e,t,"width="+a+", height="+i+", location=yes, menubar=no, status=no, toolbar=no, scrollbars=yes, resizable=yes");s.resizeTo(a,i),s.focus()}(jQuery(this).attr("href"),"popup",600,400),!1})),jQuery.fn.slides&&jQuery(".featured-image").slides({crossfade:!0,effect:"fade",fadeSpeed:500,pause:4e3,play:4e3,preload:!0,preloadImage:rootPath+"/assets/loading.gif"}),jQuery("ul.sub-menu").parentsUntil("#header-nav > li").addClass("parent"),jQuery("ul.sub-menu > li").parent().append('<div class="arrow"></div>'),jQuery(".arrow").each((function(){a_width=Math.ceil(jQuery(this).parent().parent().find("a").outerWidth()/2)-5,jQuery(this).css("margin-left",a_width+"px")})),jQuery.fn.superfish&&(jQuery.browser.msie&&parseInt(jQuery.browser.version)<9?jQuery("#header-nav").superfish({speed:1}):jQuery("#header-nav").superfish()),jQuery(".widget h3:contains('About DEEPSEA CHALLENGE')").html("About <em>DEEPSEA CHALLENGE</em>"),jQuery(".wp-caption").each((function(){jQuery(this).width(jQuery(this).width()-10)}))})),jQuery(window).load((function(){utilityheight=jQuery("#utility").innerHeight()+1,utilityheightpx="-"+String(utilityheight)+"px","true"==alreadyvisited&&jQuery("#utility").css({position:"relative","margin-top":utilityheightpx,visibility:"visible"})})),jQuery(document).ready((function(e){if(e("#latestnews").find(".widget_text").eq(1).addClass("last"),e.easing.easeInOutQuad=function(e,t,a,i,s){return(t/=s/2)<1?i/2*t*t+a:-i/2*(--t*(t-2)-1)+a},1==e("#hero").length){e("#view-port");var t=e(".slide");e(t).eq(0).addClass("active");e(".slide.active");var a=e("#hero"),i=e("#hero-wrap"),s=i.length,l=e(".slide").length,r=(e(window).width(),a.width()),o=a.attr("class").match(/rotate_\d+/)[0].replace("rotate_",""),n=[],d=[],c=[],u=[],f=[];hero_nav=e("#heronav"),s=i.length,o>0&&(n=!0);c=[];var v=[],p=e(".nextprevnav");d=[];function h(t,i){a.hasClass("cross_fade")&&function(t){e(".slide.active").fadeOut((function(){e(this).removeClass("active"),!0&&(e(".breadcrumb").removeClass("active"),e("#breadcrumb-"+t).addClass("active"))})),e("#hero-"+t).fadeIn(1e3).addClass("active")}(t),!0===c&&!0==!i&&m(),!0===c&&!0===i&&function(t){e(".slide.active").css({left:"-100%"}).removeClass("active"),e(".slide").eq(t-1).css({left:"0%"}).addClass("active").hide().fadeIn(1e3),e(".breadcrumb").removeClass("active"),e(".breadcrumb").eq(t-1).addClass("active")}(t)}function m(){var a=e(".slide.active"),i=a.index()+1;l===i?(a.stop(!0,!0).animate({left:"-100%"},"slow","easeInOutQuad"),e(".slide.first").stop(!0,!0).animate({left:"0%"},"slow","easeInOutQuad",(function(){e(".slide.first").css({left:"100%"}),e(".slide:not(.last)").css({left:"100%"}),t.eq(0).css({left:"0%"}),t.removeClass("active"),t.eq(0).addClass("active"),e(".breadcrumb").removeClass("active"),e(".breadcrumb").eq(0).addClass("active")}))):(e(".slide:not(.last)").css({left:"100%"}),e(".slide.active").css({left:"0%"}),a.stop(!0,!0).animate({left:"-100%"},"slow","easeInOutQuad"),t.eq(i).stop(!0,!0).animate({left:"0%"},"slow","easeInOutQuad",(function(){t.removeClass("active"),t.eq(i).addClass("active")})),e(".breadcrumb").removeClass("active"),e(".breadcrumb").eq(i).addClass("active"))}if(a.hasClass("dot_nav")&&!0,a.hasClass("slide_rotate")&&(c=!0),a.hasClass("slide_dot_nav")&&(v=!0),a.hasClass("dotnav_center")&&(d=!0),a.hasClass("slide_nav")&&(f=!0),a.hasClass("cross_fade")&&(u=!0),!0===c&&(t.filter(":last").clone().appendTo(a).addClass("clone last").css({left:"-100%"}).removeClass("active"),t.filter(":first").clone().appendTo(a).addClass("clone first").css({left:"100%"}).removeClass("active")),e(window).resize((function(){e(window).width()})),(a.hasClass("dot_nav")||a.hasClass("slide_dot_nav"))&&l>1&&(l>1&&function(){e("#slides").append('<ul id="heronav"></ul>');var a=e("#heronav");if(a.width(),t.each((function(e){e+=1,a.append('<li id="breadcrumb-'+e+'" class="breadcrumb"><a href="javascript:void(0);" rel="nofollow"><span class="ir">Slide-'+e+"</span></a></li>")})),a.find("li").filter(":first").addClass("active"),!0===d){var i=a.find("li").width()*l,s=.5*r-.5*i;e("#heronav").css({width:i,left:s/r*100+"%"})}}(),t.each((function(t){t+=1,e(this).attr("id","hero-"+t)})),e("#heronav").find("li").bind("click",(function(t,a,i){!0===n&&(y=clearInterval(y)),t.preventDefault();var s=e(this);if(!s.hasClass("active")){a=s.index()+1;hero_nav.find("li").removeClass("active"),s.addClass("active"),h(a,!0)}}))),(!0===v||!0===f)&&l>1&&l>1&&(s>0?i.append('<a href="javascript:void(0);" rel="nofollow" id="nextslide" class="nav-next-prev"><span class="ir">Next Slide</span></a><a href="javascript:void(0);" rel="nofollow" id="prevslide" class="nav-next-prev"><span class="ir">Previous Slide</span></a>'):a.append('<a href="javascript:void(0);" rel="nofollow" id="nextslide" class="nav-next-prev"><span class="ir">Next Slide</span></a><a href="javascript:void(0);" rel="nofollow" id="prevslide" class="nav-next-prev"><span class="ir">Previous Slide</span></a>'),next_slide(),prev_slide()),!0===n&&l>1)var y=setInterval((function(t){t=e(".slide.active").index()+1,h(++t>l?t=1:t)}),o+"000");p.bind("click",(function(t){t.preventDefault(),e(this).addClass("active")})),e("#nextslide").bind("click",(function(t){var a;t.preventDefault(),!0===n&&(y=clearInterval(y)),!0===c&&m(),!0===u&&((a=e(".slide.active").index()+1)===l?(e(".slide.active").removeClass("active").fadeOut(),e(".slide").filter(":first-child").fadeIn(1e3).addClass("active"),!0&&(e(".breadcrumb.active").removeClass("active"),e(".breadcrumb").eq(0).addClass("active"))):(e(".slide.active").removeClass("active").fadeOut(),e(".slide").eq(a).fadeIn(1e3).addClass("active"),!0&&(e(".breadcrumb.active").removeClass("active"),e(".breadcrumb").eq(a).addClass("active"))),p.removeClass("active"))})),e("#prevslide").bind("click",(function(a){var i;a.preventDefault(),!0===n&&(y=clearInterval(y)),!0===c&&function(){var a=e(".slide.active"),i=a.index()-1;l===i?(a.stop(!0,!0).animate({left:"-100%"},"slow","easeInOutQuad"),e(".slide.first").stop(!0,!0).animate({left:"0%"},"slow","easeInOutQuad",(function(){e(".slide.first").css({left:"100%"}),e(".slide:not(.last)").css({left:"100%"}),t.eq(0).css({left:"0%"}),t.removeClass("active"),t.eq(0).addClass("active"),e(".breadcrumb").removeClass("active"),e(".breadcrumb").eq(0).addClass("active")}))):(e(".slide:not(.first)").css({left:"-100%"}),e(".slide.active").css({left:"0%"}),a.stop(!0,!0).animate({left:"100%"},"slow","easeInOutQuad"),t.eq(i).stop(!0,!0).animate({left:"0%"},"slow","easeInOutQuad",(function(){t.removeClass("active"),t.eq(i).addClass("active")})),e(".breadcrumb").removeClass("active"),-1===i?e(".breadcrumb").filter(":last").addClass("active"):e(".breadcrumb").eq(i).addClass("active"))}(),!0===u&&(i=e(".slide.active").index()-1,e(".slide.active").removeClass("active").fadeOut(),e(".slide").eq(i).fadeIn(1e3).addClass("active"),!0&&(e(".breadcrumb.active").removeClass("active"),e(".breadcrumb").eq(i).addClass("active")),p.removeClass("active"))}))}var g=e("#latestnews .widget").eq(0).find(".textwidget").height(),C=e("#factsataglance .widget").find(".textwidget").height(),b=e("#latestnews .widget").eq(1).find("#promowrap").height();g>160&&e("#latestnews .widget:first").find(".textwidget ul").addClass("default-skin").customScrollbar(),C>160&&e("#factsataglance .widget").find(".textwidget").addClass("default-skin").customScrollbar(),b>75&&e("#latestnews .widget").eq(1).find("#promowrap").addClass("default-skin").customScrollbar()}));