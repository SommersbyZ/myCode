/*!!! mtusir 30-07-2015 */
!function(a,b){"use strict";"function"==typeof define&&define.amd?define(b):a.utils=b()}(window,function(){var a=function(){var a=function(){var a=document.createElement("bootstrap"),b={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"};for(var c in b)if(void 0!==a.style[c])return b[c]}();return a},b=function(b,c,d,e){var f,g=b&&b.style,h=!1,i=a();d=d||300,g&&(g.webkitTransitionDuration=g.MozTransitionDuration=g.msTransitionDuration=g.OTransitionDuration=g.transitionDuration=d+"ms",g.webkitTransform="translate3d("+c+"px,0,0)",g.msTransform=g.MozTransform=g.OTransform="translateX("+c+"px)",f=function(a){if("undefined"!=typeof a){if(a.target!==a.currentTarget)return;a.target.removeEventListener(i,f)}else b.removeEventListener(i,f);h=!0,e&&e.call(this)},d>0&&(b.addEventListener(i,f),setTimeout(function(){h||f.call(b)},d+25)))};return{geTransitionEnd:a,translate:b}});