/* Copyright (c) 2006 Brandon Aaron (http://brandonaaron.net)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php) 
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * $LastChangedDate: 2007-07-21 18:44:59 -0500 (Sat, 21 Jul 2007) $
 * $Rev: 2446 $
 *
 * Version 2.1.1
 */
/**
 * @name bgiframe
 * @type jQuery
 * @cat Plugins/bgiframe
 * @author Brandon Aaron (brandon.aaron@gmail.com || http://brandonaaron.net)
 */
(function(b){b.fn.bgIframe=b.fn.bgiframe=function(a){if(b.browser.msie&&/6.0/.test(navigator.userAgent)){var a=b.extend({top:"auto",left:"auto",width:"auto",height:"auto",opacity:!0,src:"javascript:false;"},a||{}),c=function(a){return a&&a.constructor==Number?a+"px":a},d='<iframe class="bgiframe"frameborder="0"tabindex="-1"src="'+a.src+'"style="display:block;position:absolute;z-index:-1;'+(a.opacity!==!1?"filter:Alpha(Opacity='0');":"")+"top:"+(a.top=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderTopWidth)||0)*-1)+'px')": c(a.top))+";left:"+(a.left=="auto"?"expression(((parseInt(this.parentNode.currentStyle.borderLeftWidth)||0)*-1)+'px')":c(a.left))+";width:"+(a.width=="auto"?"expression(this.parentNode.offsetWidth+'px')":c(a.width))+";height:"+(a.height=="auto"?"expression(this.parentNode.offsetHeight+'px')":c(a.height))+';"/>';return this.each(function(){b("> iframe.bgiframe",this).length==0&&this.insertBefore(document.createElement(d),this.firstChild)})}return this}})(jQuery);