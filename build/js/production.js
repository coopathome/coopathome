/*!
* Bootstrap.js by @fat & @mdo
* Copyright 2013 Twitter, Inc.
* http://www.apache.org/licenses/LICENSE-2.0.txt
*/
!function(e){"use strict";e(function(){e.support.transition=function(){var e=function(){var e=document.createElement("bootstrap"),t={WebkitTransition:"webkitTransitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd otransitionend",transition:"transitionend"},n;for(n in t)if(e.style[n]!==undefined)return t[n]}();return e&&{end:e}}()})}(window.jQuery),!function(e){"use strict";var t='[data-dismiss="alert"]',n=function(n){e(n).on("click",t,this.close)};n.prototype.close=function(t){function s(){i.trigger("closed").remove()}var n=e(this),r=n.attr("data-target"),i;r||(r=n.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,"")),i=e(r),t&&t.preventDefault(),i.length||(i=n.hasClass("alert")?n:n.parent()),i.trigger(t=e.Event("close"));if(t.isDefaultPrevented())return;i.removeClass("in"),e.support.transition&&i.hasClass("fade")?i.on(e.support.transition.end,s):s()};var r=e.fn.alert;e.fn.alert=function(t){return this.each(function(){var r=e(this),i=r.data("alert");i||r.data("alert",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.alert.Constructor=n,e.fn.alert.noConflict=function(){return e.fn.alert=r,this},e(document).on("click.alert.data-api",t,n.prototype.close)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.button.defaults,n)};t.prototype.setState=function(e){var t="disabled",n=this.$element,r=n.data(),i=n.is("input")?"val":"html";e+="Text",r.resetText||n.data("resetText",n[i]()),n[i](r[e]||this.options[e]),setTimeout(function(){e=="loadingText"?n.addClass(t).attr(t,t):n.removeClass(t).removeAttr(t)},0)},t.prototype.toggle=function(){var e=this.$element.closest('[data-toggle="buttons-radio"]');e&&e.find(".active").removeClass("active"),this.$element.toggleClass("active")};var n=e.fn.button;e.fn.button=function(n){return this.each(function(){var r=e(this),i=r.data("button"),s=typeof n=="object"&&n;i||r.data("button",i=new t(this,s)),n=="toggle"?i.toggle():n&&i.setState(n)})},e.fn.button.defaults={loadingText:"loading..."},e.fn.button.Constructor=t,e.fn.button.noConflict=function(){return e.fn.button=n,this},e(document).on("click.button.data-api","[data-toggle^=button]",function(t){var n=e(t.target);n.hasClass("btn")||(n=n.closest(".btn")),n.button("toggle")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.$indicators=this.$element.find(".carousel-indicators"),this.options=n,this.options.pause=="hover"&&this.$element.on("mouseenter",e.proxy(this.pause,this)).on("mouseleave",e.proxy(this.cycle,this))};t.prototype={cycle:function(t){return t||(this.paused=!1),this.interval&&clearInterval(this.interval),this.options.interval&&!this.paused&&(this.interval=setInterval(e.proxy(this.next,this),this.options.interval)),this},getActiveIndex:function(){return this.$active=this.$element.find(".item.active"),this.$items=this.$active.parent().children(),this.$items.index(this.$active)},to:function(t){var n=this.getActiveIndex(),r=this;if(t>this.$items.length-1||t<0)return;return this.sliding?this.$element.one("slid",function(){r.to(t)}):n==t?this.pause().cycle():this.slide(t>n?"next":"prev",e(this.$items[t]))},pause:function(t){return t||(this.paused=!0),this.$element.find(".next, .prev").length&&e.support.transition.end&&(this.$element.trigger(e.support.transition.end),this.cycle(!0)),clearInterval(this.interval),this.interval=null,this},next:function(){if(this.sliding)return;return this.slide("next")},prev:function(){if(this.sliding)return;return this.slide("prev")},slide:function(t,n){var r=this.$element.find(".item.active"),i=n||r[t](),s=this.interval,o=t=="next"?"left":"right",u=t=="next"?"first":"last",a=this,f;this.sliding=!0,s&&this.pause(),i=i.length?i:this.$element.find(".item")[u](),f=e.Event("slide",{relatedTarget:i[0],direction:o});if(i.hasClass("active"))return;this.$indicators.length&&(this.$indicators.find(".active").removeClass("active"),this.$element.one("slid",function(){var t=e(a.$indicators.children()[a.getActiveIndex()]);t&&t.addClass("active")}));if(e.support.transition&&this.$element.hasClass("slide")){this.$element.trigger(f);if(f.isDefaultPrevented())return;i.addClass(t),i[0].offsetWidth,r.addClass(o),i.addClass(o),this.$element.one(e.support.transition.end,function(){i.removeClass([t,o].join(" ")).addClass("active"),r.removeClass(["active",o].join(" ")),a.sliding=!1,setTimeout(function(){a.$element.trigger("slid")},0)})}else{this.$element.trigger(f);if(f.isDefaultPrevented())return;r.removeClass("active"),i.addClass("active"),this.sliding=!1,this.$element.trigger("slid")}return s&&this.cycle(),this}};var n=e.fn.carousel;e.fn.carousel=function(n){return this.each(function(){var r=e(this),i=r.data("carousel"),s=e.extend({},e.fn.carousel.defaults,typeof n=="object"&&n),o=typeof n=="string"?n:s.slide;i||r.data("carousel",i=new t(this,s)),typeof n=="number"?i.to(n):o?i[o]():s.interval&&i.pause().cycle()})},e.fn.carousel.defaults={interval:5e3,pause:"hover"},e.fn.carousel.Constructor=t,e.fn.carousel.noConflict=function(){return e.fn.carousel=n,this},e(document).on("click.carousel.data-api","[data-slide], [data-slide-to]",function(t){var n=e(this),r,i=e(n.attr("data-target")||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,"")),s=e.extend({},i.data(),n.data()),o;i.carousel(s),(o=n.attr("data-slide-to"))&&i.data("carousel").pause().to(o).cycle(),t.preventDefault()})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.collapse.defaults,n),this.options.parent&&(this.$parent=e(this.options.parent)),this.options.toggle&&this.toggle()};t.prototype={constructor:t,dimension:function(){var e=this.$element.hasClass("width");return e?"width":"height"},show:function(){var t,n,r,i;if(this.transitioning||this.$element.hasClass("in"))return;t=this.dimension(),n=e.camelCase(["scroll",t].join("-")),r=this.$parent&&this.$parent.find("> .accordion-group > .in");if(r&&r.length){i=r.data("collapse");if(i&&i.transitioning)return;r.collapse("hide"),i||r.data("collapse",null)}this.$element[t](0),this.transition("addClass",e.Event("show"),"shown"),e.support.transition&&this.$element[t](this.$element[0][n])},hide:function(){var t;if(this.transitioning||!this.$element.hasClass("in"))return;t=this.dimension(),this.reset(this.$element[t]()),this.transition("removeClass",e.Event("hide"),"hidden"),this.$element[t](0)},reset:function(e){var t=this.dimension();return this.$element.removeClass("collapse")[t](e||"auto")[0].offsetWidth,this.$element[e!==null?"addClass":"removeClass"]("collapse"),this},transition:function(t,n,r){var i=this,s=function(){n.type=="show"&&i.reset(),i.transitioning=0,i.$element.trigger(r)};this.$element.trigger(n);if(n.isDefaultPrevented())return;this.transitioning=1,this.$element[t]("in"),e.support.transition&&this.$element.hasClass("collapse")?this.$element.one(e.support.transition.end,s):s()},toggle:function(){this[this.$element.hasClass("in")?"hide":"show"]()}};var n=e.fn.collapse;e.fn.collapse=function(n){return this.each(function(){var r=e(this),i=r.data("collapse"),s=e.extend({},e.fn.collapse.defaults,r.data(),typeof n=="object"&&n);i||r.data("collapse",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.collapse.defaults={toggle:!0},e.fn.collapse.Constructor=t,e.fn.collapse.noConflict=function(){return e.fn.collapse=n,this},e(document).on("click.collapse.data-api","[data-toggle=collapse]",function(t){var n=e(this),r,i=n.attr("data-target")||t.preventDefault()||(r=n.attr("href"))&&r.replace(/.*(?=#[^\s]+$)/,""),s=e(i).data("collapse")?"toggle":n.data();n[e(i).hasClass("in")?"addClass":"removeClass"]("collapsed"),e(i).collapse(s)})}(window.jQuery),!function(e){"use strict";function r(){e(".dropdown-backdrop").remove(),e(t).each(function(){i(e(this)).removeClass("open")})}function i(t){var n=t.attr("data-target"),r;n||(n=t.attr("href"),n=n&&/#/.test(n)&&n.replace(/.*(?=#[^\s]*$)/,"")),r=n&&e(n);if(!r||!r.length)r=t.parent();return r}var t="[data-toggle=dropdown]",n=function(t){var n=e(t).on("click.dropdown.data-api",this.toggle);e("html").on("click.dropdown.data-api",function(){n.parent().removeClass("open")})};n.prototype={constructor:n,toggle:function(t){var n=e(this),s,o;if(n.is(".disabled, :disabled"))return;return s=i(n),o=s.hasClass("open"),r(),o||("ontouchstart"in document.documentElement&&e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click",r),s.toggleClass("open")),n.focus(),!1},keydown:function(n){var r,s,o,u,a,f;if(!/(38|40|27)/.test(n.keyCode))return;r=e(this),n.preventDefault(),n.stopPropagation();if(r.is(".disabled, :disabled"))return;u=i(r),a=u.hasClass("open");if(!a||a&&n.keyCode==27)return n.which==27&&u.find(t).focus(),r.click();s=e("[role=menu] li:not(.divider):visible a",u);if(!s.length)return;f=s.index(s.filter(":focus")),n.keyCode==38&&f>0&&f--,n.keyCode==40&&f<s.length-1&&f++,~f||(f=0),s.eq(f).focus()}};var s=e.fn.dropdown;e.fn.dropdown=function(t){return this.each(function(){var r=e(this),i=r.data("dropdown");i||r.data("dropdown",i=new n(this)),typeof t=="string"&&i[t].call(r)})},e.fn.dropdown.Constructor=n,e.fn.dropdown.noConflict=function(){return e.fn.dropdown=s,this},e(document).on("click.dropdown.data-api",r).on("click.dropdown.data-api",".dropdown form",function(e){e.stopPropagation()}).on("click.dropdown.data-api",t,n.prototype.toggle).on("keydown.dropdown.data-api",t+", [role=menu]",n.prototype.keydown)}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=n,this.$element=e(t).delegate('[data-dismiss="modal"]',"click.dismiss.modal",e.proxy(this.hide,this)),this.options.remote&&this.$element.find(".modal-body").load(this.options.remote)};t.prototype={constructor:t,toggle:function(){return this[this.isShown?"hide":"show"]()},show:function(){var t=this,n=e.Event("show");this.$element.trigger(n);if(this.isShown||n.isDefaultPrevented())return;this.isShown=!0,this.escape(),this.backdrop(function(){var n=e.support.transition&&t.$element.hasClass("fade");t.$element.parent().length||t.$element.appendTo(document.body),t.$element.show(),n&&t.$element[0].offsetWidth,t.$element.addClass("in").attr("aria-hidden",!1),t.enforceFocus(),n?t.$element.one(e.support.transition.end,function(){t.$element.focus().trigger("shown")}):t.$element.focus().trigger("shown")})},hide:function(t){t&&t.preventDefault();var n=this;t=e.Event("hide"),this.$element.trigger(t);if(!this.isShown||t.isDefaultPrevented())return;this.isShown=!1,this.escape(),e(document).off("focusin.modal"),this.$element.removeClass("in").attr("aria-hidden",!0),e.support.transition&&this.$element.hasClass("fade")?this.hideWithTransition():this.hideModal()},enforceFocus:function(){var t=this;e(document).on("focusin.modal",function(e){t.$element[0]!==e.target&&!t.$element.has(e.target).length&&t.$element.focus()})},escape:function(){var e=this;this.isShown&&this.options.keyboard?this.$element.on("keyup.dismiss.modal",function(t){t.which==27&&e.hide()}):this.isShown||this.$element.off("keyup.dismiss.modal")},hideWithTransition:function(){var t=this,n=setTimeout(function(){t.$element.off(e.support.transition.end),t.hideModal()},500);this.$element.one(e.support.transition.end,function(){clearTimeout(n),t.hideModal()})},hideModal:function(){var e=this;this.$element.hide(),this.backdrop(function(){e.removeBackdrop(),e.$element.trigger("hidden")})},removeBackdrop:function(){this.$backdrop&&this.$backdrop.remove(),this.$backdrop=null},backdrop:function(t){var n=this,r=this.$element.hasClass("fade")?"fade":"";if(this.isShown&&this.options.backdrop){var i=e.support.transition&&r;this.$backdrop=e('<div class="modal-backdrop '+r+'" />').appendTo(document.body),this.$backdrop.click(this.options.backdrop=="static"?e.proxy(this.$element[0].focus,this.$element[0]):e.proxy(this.hide,this)),i&&this.$backdrop[0].offsetWidth,this.$backdrop.addClass("in");if(!t)return;i?this.$backdrop.one(e.support.transition.end,t):t()}else!this.isShown&&this.$backdrop?(this.$backdrop.removeClass("in"),e.support.transition&&this.$element.hasClass("fade")?this.$backdrop.one(e.support.transition.end,t):t()):t&&t()}};var n=e.fn.modal;e.fn.modal=function(n){return this.each(function(){var r=e(this),i=r.data("modal"),s=e.extend({},e.fn.modal.defaults,r.data(),typeof n=="object"&&n);i||r.data("modal",i=new t(this,s)),typeof n=="string"?i[n]():s.show&&i.show()})},e.fn.modal.defaults={backdrop:!0,keyboard:!0,show:!0},e.fn.modal.Constructor=t,e.fn.modal.noConflict=function(){return e.fn.modal=n,this},e(document).on("click.modal.data-api",'[data-toggle="modal"]',function(t){var n=e(this),r=n.attr("href"),i=e(n.attr("data-target")||r&&r.replace(/.*(?=#[^\s]+$)/,"")),s=i.data("modal")?"toggle":e.extend({remote:!/#/.test(r)&&r},i.data(),n.data());t.preventDefault(),i.modal(s).one("hide",function(){n.focus()})})}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("tooltip",e,t)};t.prototype={constructor:t,init:function(t,n,r){var i,s,o,u,a;this.type=t,this.$element=e(n),this.options=this.getOptions(r),this.enabled=!0,o=this.options.trigger.split(" ");for(a=o.length;a--;)u=o[a],u=="click"?this.$element.on("click."+this.type,this.options.selector,e.proxy(this.toggle,this)):u!="manual"&&(i=u=="hover"?"mouseenter":"focus",s=u=="hover"?"mouseleave":"blur",this.$element.on(i+"."+this.type,this.options.selector,e.proxy(this.enter,this)),this.$element.on(s+"."+this.type,this.options.selector,e.proxy(this.leave,this)));this.options.selector?this._options=e.extend({},this.options,{trigger:"manual",selector:""}):this.fixTitle()},getOptions:function(t){return t=e.extend({},e.fn[this.type].defaults,this.$element.data(),t),t.delay&&typeof t.delay=="number"&&(t.delay={show:t.delay,hide:t.delay}),t},enter:function(t){var n=e.fn[this.type].defaults,r={},i;this._options&&e.each(this._options,function(e,t){n[e]!=t&&(r[e]=t)},this),i=e(t.currentTarget)[this.type](r).data(this.type);if(!i.options.delay||!i.options.delay.show)return i.show();clearTimeout(this.timeout),i.hoverState="in",this.timeout=setTimeout(function(){i.hoverState=="in"&&i.show()},i.options.delay.show)},leave:function(t){var n=e(t.currentTarget)[this.type](this._options).data(this.type);this.timeout&&clearTimeout(this.timeout);if(!n.options.delay||!n.options.delay.hide)return n.hide();n.hoverState="out",this.timeout=setTimeout(function(){n.hoverState=="out"&&n.hide()},n.options.delay.hide)},show:function(){var t,n,r,i,s,o,u=e.Event("show");if(this.hasContent()&&this.enabled){this.$element.trigger(u);if(u.isDefaultPrevented())return;t=this.tip(),this.setContent(),this.options.animation&&t.addClass("fade"),s=typeof this.options.placement=="function"?this.options.placement.call(this,t[0],this.$element[0]):this.options.placement,t.detach().css({top:0,left:0,display:"block"}),this.options.container?t.appendTo(this.options.container):t.insertAfter(this.$element),n=this.getPosition(),r=t[0].offsetWidth,i=t[0].offsetHeight;switch(s){case"bottom":o={top:n.top+n.height,left:n.left+n.width/2-r/2};break;case"top":o={top:n.top-i,left:n.left+n.width/2-r/2};break;case"left":o={top:n.top+n.height/2-i/2,left:n.left-r};break;case"right":o={top:n.top+n.height/2-i/2,left:n.left+n.width}}this.applyPlacement(o,s),this.$element.trigger("shown")}},applyPlacement:function(e,t){var n=this.tip(),r=n[0].offsetWidth,i=n[0].offsetHeight,s,o,u,a;n.offset(e).addClass(t).addClass("in"),s=n[0].offsetWidth,o=n[0].offsetHeight,t=="top"&&o!=i&&(e.top=e.top+i-o,a=!0),t=="bottom"||t=="top"?(u=0,e.left<0&&(u=e.left*-2,e.left=0,n.offset(e),s=n[0].offsetWidth,o=n[0].offsetHeight),this.replaceArrow(u-r+s,s,"left")):this.replaceArrow(o-i,o,"top"),a&&n.offset(e)},replaceArrow:function(e,t,n){this.arrow().css(n,e?50*(1-e/t)+"%":"")},setContent:function(){var e=this.tip(),t=this.getTitle();e.find(".tooltip-inner")[this.options.html?"html":"text"](t),e.removeClass("fade in top bottom left right")},hide:function(){function i(){var t=setTimeout(function(){n.off(e.support.transition.end).detach()},500);n.one(e.support.transition.end,function(){clearTimeout(t),n.detach()})}var t=this,n=this.tip(),r=e.Event("hide");this.$element.trigger(r);if(r.isDefaultPrevented())return;return n.removeClass("in"),e.support.transition&&this.$tip.hasClass("fade")?i():n.detach(),this.$element.trigger("hidden"),this},fixTitle:function(){var e=this.$element;(e.attr("title")||typeof e.attr("data-original-title")!="string")&&e.attr("data-original-title",e.attr("title")||"").attr("title","")},hasContent:function(){return this.getTitle()},getPosition:function(){var t=this.$element[0];return e.extend({},typeof t.getBoundingClientRect=="function"?t.getBoundingClientRect():{width:t.offsetWidth,height:t.offsetHeight},this.$element.offset())},getTitle:function(){var e,t=this.$element,n=this.options;return e=t.attr("data-original-title")||(typeof n.title=="function"?n.title.call(t[0]):n.title),e},tip:function(){return this.$tip=this.$tip||e(this.options.template)},arrow:function(){return this.$arrow=this.$arrow||this.tip().find(".tooltip-arrow")},validate:function(){this.$element[0].parentNode||(this.hide(),this.$element=null,this.options=null)},enable:function(){this.enabled=!0},disable:function(){this.enabled=!1},toggleEnabled:function(){this.enabled=!this.enabled},toggle:function(t){var n=t?e(t.currentTarget)[this.type](this._options).data(this.type):this;n.tip().hasClass("in")?n.hide():n.show()},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}};var n=e.fn.tooltip;e.fn.tooltip=function(n){return this.each(function(){var r=e(this),i=r.data("tooltip"),s=typeof n=="object"&&n;i||r.data("tooltip",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.tooltip.Constructor=t,e.fn.tooltip.defaults={animation:!0,placement:"top",selector:!1,template:'<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,container:!1},e.fn.tooltip.noConflict=function(){return e.fn.tooltip=n,this}}(window.jQuery),!function(e){"use strict";var t=function(e,t){this.init("popover",e,t)};t.prototype=e.extend({},e.fn.tooltip.Constructor.prototype,{constructor:t,setContent:function(){var e=this.tip(),t=this.getTitle(),n=this.getContent();e.find(".popover-title")[this.options.html?"html":"text"](t),e.find(".popover-content")[this.options.html?"html":"text"](n),e.removeClass("fade top bottom left right in")},hasContent:function(){return this.getTitle()||this.getContent()},getContent:function(){var e,t=this.$element,n=this.options;return e=(typeof n.content=="function"?n.content.call(t[0]):n.content)||t.attr("data-content"),e},tip:function(){return this.$tip||(this.$tip=e(this.options.template)),this.$tip},destroy:function(){this.hide().$element.off("."+this.type).removeData(this.type)}});var n=e.fn.popover;e.fn.popover=function(n){return this.each(function(){var r=e(this),i=r.data("popover"),s=typeof n=="object"&&n;i||r.data("popover",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.popover.Constructor=t,e.fn.popover.defaults=e.extend({},e.fn.tooltip.defaults,{placement:"right",trigger:"click",content:"",template:'<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'}),e.fn.popover.noConflict=function(){return e.fn.popover=n,this}}(window.jQuery),!function(e){"use strict";function t(t,n){var r=e.proxy(this.process,this),i=e(t).is("body")?e(window):e(t),s;this.options=e.extend({},e.fn.scrollspy.defaults,n),this.$scrollElement=i.on("scroll.scroll-spy.data-api",r),this.selector=(this.options.target||(s=e(t).attr("href"))&&s.replace(/.*(?=#[^\s]+$)/,"")||"")+" .nav li > a",this.$body=e("body"),this.refresh(),this.process()}t.prototype={constructor:t,refresh:function(){var t=this,n;this.offsets=e([]),this.targets=e([]),n=this.$body.find(this.selector).map(function(){var n=e(this),r=n.data("target")||n.attr("href"),i=/^#\w/.test(r)&&e(r);return i&&i.length&&[[i.position().top+(!e.isWindow(t.$scrollElement.get(0))&&t.$scrollElement.scrollTop()),r]]||null}).sort(function(e,t){return e[0]-t[0]}).each(function(){t.offsets.push(this[0]),t.targets.push(this[1])})},process:function(){var e=this.$scrollElement.scrollTop()+this.options.offset,t=this.$scrollElement[0].scrollHeight||this.$body[0].scrollHeight,n=t-this.$scrollElement.height(),r=this.offsets,i=this.targets,s=this.activeTarget,o;if(e>=n)return s!=(o=i.last()[0])&&this.activate(o);for(o=r.length;o--;)s!=i[o]&&e>=r[o]&&(!r[o+1]||e<=r[o+1])&&this.activate(i[o])},activate:function(t){var n,r;this.activeTarget=t,e(this.selector).parent(".active").removeClass("active"),r=this.selector+'[data-target="'+t+'"],'+this.selector+'[href="'+t+'"]',n=e(r).parent("li").addClass("active"),n.parent(".dropdown-menu").length&&(n=n.closest("li.dropdown").addClass("active")),n.trigger("activate")}};var n=e.fn.scrollspy;e.fn.scrollspy=function(n){return this.each(function(){var r=e(this),i=r.data("scrollspy"),s=typeof n=="object"&&n;i||r.data("scrollspy",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.scrollspy.Constructor=t,e.fn.scrollspy.defaults={offset:10},e.fn.scrollspy.noConflict=function(){return e.fn.scrollspy=n,this},e(window).on("load",function(){e('[data-spy="scroll"]').each(function(){var t=e(this);t.scrollspy(t.data())})})}(window.jQuery),!function(e){"use strict";var t=function(t){this.element=e(t)};t.prototype={constructor:t,show:function(){var t=this.element,n=t.closest("ul:not(.dropdown-menu)"),r=t.attr("data-target"),i,s,o;r||(r=t.attr("href"),r=r&&r.replace(/.*(?=#[^\s]*$)/,""));if(t.parent("li").hasClass("active"))return;i=n.find(".active:last a")[0],o=e.Event("show",{relatedTarget:i}),t.trigger(o);if(o.isDefaultPrevented())return;s=e(r),this.activate(t.parent("li"),n),this.activate(s,s.parent(),function(){t.trigger({type:"shown",relatedTarget:i})})},activate:function(t,n,r){function o(){i.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),t.addClass("active"),s?(t[0].offsetWidth,t.addClass("in")):t.removeClass("fade"),t.parent(".dropdown-menu")&&t.closest("li.dropdown").addClass("active"),r&&r()}var i=n.find("> .active"),s=r&&e.support.transition&&i.hasClass("fade");s?i.one(e.support.transition.end,o):o(),i.removeClass("in")}};var n=e.fn.tab;e.fn.tab=function(n){return this.each(function(){var r=e(this),i=r.data("tab");i||r.data("tab",i=new t(this)),typeof n=="string"&&i[n]()})},e.fn.tab.Constructor=t,e.fn.tab.noConflict=function(){return e.fn.tab=n,this},e(document).on("click.tab.data-api",'[data-toggle="tab"], [data-toggle="pill"]',function(t){t.preventDefault(),e(this).tab("show")})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.$element=e(t),this.options=e.extend({},e.fn.typeahead.defaults,n),this.matcher=this.options.matcher||this.matcher,this.sorter=this.options.sorter||this.sorter,this.highlighter=this.options.highlighter||this.highlighter,this.updater=this.options.updater||this.updater,this.source=this.options.source,this.$menu=e(this.options.menu),this.shown=!1,this.listen()};t.prototype={constructor:t,select:function(){var e=this.$menu.find(".active").attr("data-value");return this.$element.val(this.updater(e)).change(),this.hide()},updater:function(e){return e},show:function(){var t=e.extend({},this.$element.position(),{height:this.$element[0].offsetHeight});return this.$menu.insertAfter(this.$element).css({top:t.top+t.height,left:t.left}).show(),this.shown=!0,this},hide:function(){return this.$menu.hide(),this.shown=!1,this},lookup:function(t){var n;return this.query=this.$element.val(),!this.query||this.query.length<this.options.minLength?this.shown?this.hide():this:(n=e.isFunction(this.source)?this.source(this.query,e.proxy(this.process,this)):this.source,n?this.process(n):this)},process:function(t){var n=this;return t=e.grep(t,function(e){return n.matcher(e)}),t=this.sorter(t),t.length?this.render(t.slice(0,this.options.items)).show():this.shown?this.hide():this},matcher:function(e){return~e.toLowerCase().indexOf(this.query.toLowerCase())},sorter:function(e){var t=[],n=[],r=[],i;while(i=e.shift())i.toLowerCase().indexOf(this.query.toLowerCase())?~i.indexOf(this.query)?n.push(i):r.push(i):t.push(i);return t.concat(n,r)},highlighter:function(e){var t=this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return e.replace(new RegExp("("+t+")","ig"),function(e,t){return"<strong>"+t+"</strong>"})},render:function(t){var n=this;return t=e(t).map(function(t,r){return t=e(n.options.item).attr("data-value",r),t.find("a").html(n.highlighter(r)),t[0]}),t.first().addClass("active"),this.$menu.html(t),this},next:function(t){var n=this.$menu.find(".active").removeClass("active"),r=n.next();r.length||(r=e(this.$menu.find("li")[0])),r.addClass("active")},prev:function(e){var t=this.$menu.find(".active").removeClass("active"),n=t.prev();n.length||(n=this.$menu.find("li").last()),n.addClass("active")},listen:function(){this.$element.on("focus",e.proxy(this.focus,this)).on("blur",e.proxy(this.blur,this)).on("keypress",e.proxy(this.keypress,this)).on("keyup",e.proxy(this.keyup,this)),this.eventSupported("keydown")&&this.$element.on("keydown",e.proxy(this.keydown,this)),this.$menu.on("click",e.proxy(this.click,this)).on("mouseenter","li",e.proxy(this.mouseenter,this)).on("mouseleave","li",e.proxy(this.mouseleave,this))},eventSupported:function(e){var t=e in this.$element;return t||(this.$element.setAttribute(e,"return;"),t=typeof this.$element[e]=="function"),t},move:function(e){if(!this.shown)return;switch(e.keyCode){case 9:case 13:case 27:e.preventDefault();break;case 38:e.preventDefault(),this.prev();break;case 40:e.preventDefault(),this.next()}e.stopPropagation()},keydown:function(t){this.suppressKeyPressRepeat=~e.inArray(t.keyCode,[40,38,9,13,27]),this.move(t)},keypress:function(e){if(this.suppressKeyPressRepeat)return;this.move(e)},keyup:function(e){switch(e.keyCode){case 40:case 38:case 16:case 17:case 18:break;case 9:case 13:if(!this.shown)return;this.select();break;case 27:if(!this.shown)return;this.hide();break;default:this.lookup()}e.stopPropagation(),e.preventDefault()},focus:function(e){this.focused=!0},blur:function(e){this.focused=!1,!this.mousedover&&this.shown&&this.hide()},click:function(e){e.stopPropagation(),e.preventDefault(),this.select(),this.$element.focus()},mouseenter:function(t){this.mousedover=!0,this.$menu.find(".active").removeClass("active"),e(t.currentTarget).addClass("active")},mouseleave:function(e){this.mousedover=!1,!this.focused&&this.shown&&this.hide()}};var n=e.fn.typeahead;e.fn.typeahead=function(n){return this.each(function(){var r=e(this),i=r.data("typeahead"),s=typeof n=="object"&&n;i||r.data("typeahead",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.typeahead.defaults={source:[],items:8,menu:'<ul class="typeahead dropdown-menu"></ul>',item:'<li><a href="#"></a></li>',minLength:1},e.fn.typeahead.Constructor=t,e.fn.typeahead.noConflict=function(){return e.fn.typeahead=n,this},e(document).on("focus.typeahead.data-api",'[data-provide="typeahead"]',function(t){var n=e(this);if(n.data("typeahead"))return;n.typeahead(n.data())})}(window.jQuery),!function(e){"use strict";var t=function(t,n){this.options=e.extend({},e.fn.affix.defaults,n),this.$window=e(window).on("scroll.affix.data-api",e.proxy(this.checkPosition,this)).on("click.affix.data-api",e.proxy(function(){setTimeout(e.proxy(this.checkPosition,this),1)},this)),this.$element=e(t),this.checkPosition()};t.prototype.checkPosition=function(){if(!this.$element.is(":visible"))return;var t=e(document).height(),n=this.$window.scrollTop(),r=this.$element.offset(),i=this.options.offset,s=i.bottom,o=i.top,u="affix affix-top affix-bottom",a;typeof i!="object"&&(s=o=i),typeof o=="function"&&(o=i.top()),typeof s=="function"&&(s=i.bottom()),a=this.unpin!=null&&n+this.unpin<=r.top?!1:s!=null&&r.top+this.$element.height()>=t-s?"bottom":o!=null&&n<=o?"top":!1;if(this.affixed===a)return;this.affixed=a,this.unpin=a=="bottom"?r.top-n:null,this.$element.removeClass(u).addClass("affix"+(a?"-"+a:""))};var n=e.fn.affix;e.fn.affix=function(n){return this.each(function(){var r=e(this),i=r.data("affix"),s=typeof n=="object"&&n;i||r.data("affix",i=new t(this,s)),typeof n=="string"&&i[n]()})},e.fn.affix.Constructor=t,e.fn.affix.defaults={offset:0},e.fn.affix.noConflict=function(){return e.fn.affix=n,this},e(window).on("load",function(){e('[data-spy="affix"]').each(function(){var t=e(this),n=t.data();n.offset=n.offset||{},n.offsetBottom&&(n.offset.bottom=n.offsetBottom),n.offsetTop&&(n.offset.top=n.offsetTop),t.affix(n)})})}(window.jQuery);
/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 * 
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

/*!
 * css-filters-polyfill.js
 *
 * Author: Christian Schepp Schaefer
 * Summary: A polyfill for CSS filter effects
 * License: MIT
 * Version: 0.22
 *
 * URL:
 * https://github.com/Schepp/
 *
 */
;(function(window){
	var polyfilter = {
		// Detect if we are dealing with IE <= 9
		// http://james.padolsey.com/javascript/detect-_ie-in-js-using-conditional-comments/
		_ie:			(function(){
			var undef,
			v = 3,
			div = document.createElement('div'),
			all = div.getElementsByTagName('i');
			
			while(
				div.innerHTML = '<!--[if gt IE ' + (++v) + ']><i></i><![endif]-->',
				all[0]
			);
			
			return v > 4 ? v : undef;
		}()),
		
		_svg_cache: 		{},
		
		_create_svg_element: function(tagname,attributes){
			var xmlns = 'http://www.w3.org/2000/svg';
			var elem = document.createElementNS(xmlns,tagname);
			for(key in attributes){
				elem.setAttributeNS(null,key,attributes[key]);
			}
			
			return elem;
		},
		
		_create_svg:	function(id,filterelements){
			var xmlns = 'http://www.w3.org/2000/svg';
			var svg = document.createElementNS(xmlns,'svg');
			svg.setAttributeNS(null,'width','0');
			svg.setAttributeNS(null,'height','0');
			svg.setAttributeNS(null,'style','position:absolute');
			
			var svg_filter = document.createElementNS(xmlns,'filter');
			svg_filter.setAttributeNS(null,'id',id);
			svg.appendChild(svg_filter);
			
			for(var i = 0; i < filterelements.length; i++){
				svg_filter.appendChild(filterelements[i]);
			}
			
			return svg;
		},
		
		_pending_stylesheets: 0,
	
		_stylesheets: 		[],
		
		_development_mode: (function(){
			if(location.hostname === 'localhost' || location.hostname.search(/.local$/) !== -1 || location.hostname.search(/\d+\.\d+\.\d+\.\d+/) !== -1){
				if(window.console) console.log('Detected localhost or IP address. Assuming you are a developer. Caching of stylesheets is disabled.');
				return true;
			}
			if(window.console) console.log('Caching of stylesheets is enabled. You need to refresh twice to see any changes.');
			return false;
		})(),
		
		process_stylesheets: function(){
			var xmlHttp = [];
			
			// Check if path to library is correct, do that 2 secs. after this to not disturb initial processing
			window.setTimeout(function(){
				if (window.XMLHttpRequest) {
					var xmlHttpCheck = new XMLHttpRequest();
				} else if (window.ActiveXObject) {
					var xmlHttpCheck = new ActiveXObject("Microsoft.XMLHTTP");
				}
				xmlHttpCheck.open('GET', window.polyfilter_scriptpath + 'htc/sepia.htc', true);
				xmlHttpCheck.onreadystatechange = function(){
					if(xmlHttp.readyState == 4 && xmlHttp.status != 200){
						alert('The configured path \r\rvar polyfilter_scriptpath = "' + window.polyfilter_scriptpath + '"\r\rseems wrong!\r\rConfigure the polyfill\'s correct absolute(!) script path before referencing the css-filters-polyfill.js, like so:\r\rvar polyfilter_scriptpath = "/js/css-filters-polyfill/";\r\rLeaving IE dead in the water is no option. You damn Mac user... ;)');
					}
				};
				try{
					xmlHttpCheck.send(null);
				} catch(e){}
			},2000);
			
			
			var stylesheets = document.querySelectorAll ? document.querySelectorAll('style,link[rel="stylesheet"]') : document.getElementsByTagName('*');
			
			for(var i = 0; i < stylesheets.length; i++){
				(function(i){
					switch(stylesheets[i].nodeName){
						default:
						break;
						
						case 'STYLE':
							polyfilter._stylesheets.push({
								media:		stylesheets[i].media || 'all',
								content: 	stylesheets[i].innerHTML
							});
						break;
						
						case 'LINK':
							if(stylesheets[i].rel === 'stylesheet'){
								var index = polyfilter._stylesheets.length;
							
								polyfilter._stylesheets.push({
									media:		stylesheets[i].media || 'all'
								});
								
								polyfilter._pending_stylesheets++;
								
								// Fetch external stylesheet
								var href = stylesheets[i].href;
								
								// Use localStorage as cache for stylesheets, if available
								if(!polyfilter._development_mode && window.localStorage && window.localStorage.getItem('polyfilter_' + href)){
									polyfilter._pending_stylesheets--;
									polyfilter._stylesheets[index].content = localStorage.getItem('polyfilter_' + href);
									if(polyfilter._pending_stylesheets === 0){
										polyfilter.process();
									}
								}
	
								// Always fetch stylesheets to reflect possible changes
								try{
									if(window.XMLHttpRequest) {
										var xmlHttp = new XMLHttpRequest();
									} else if(window.ActiveXObject) {
										var xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
									}
									xmlHttp.open('GET', href, true);
									xmlHttp.onreadystatechange = function(){
										if(xmlHttp.readyState === 4){
											if(xmlHttp.status === 0){
												if(window.console) console.log('Could not fetch external CSS via HTTP-Request ' + href + '. Probably because of cross origin.');
												if(!polyfilter._stylesheets[index].content){
													polyfilter._pending_stylesheets--;
													polyfilter._stylesheets[index].content = xmlHttp.responseText;
													if(polyfilter._pending_stylesheets === 0){
														polyfilter.process();
													}
												}
											} else {
												if(!polyfilter._stylesheets[index].content){
													polyfilter._pending_stylesheets--;
													polyfilter._stylesheets[index].content = xmlHttp.responseText;
													if(polyfilter._pending_stylesheets === 0){
														polyfilter.process();
													}
												}
												// Cache stylesheet in localStorage, if available
												if(!polyfilter._development_mode && window.localStorage){
													try{
														window.localStorage.setItem('polyfilter_' + href,polyfilter._stylesheets[index].content)
													}
													catch(e){
														if(window.console) console.log('Local storage quota have been exceeded. Caching of stylesheet ' + href + ' is not possible');
													}
												}
											}
										}
									};
									try{
										xmlHttp.send(null);
									} catch(e){
										if(window.console) console.log('Could not fetch external CSS via HTTP-Request ' + href + '. Are you maybe testing using the file://-protocol?');
										if(!polyfilter._stylesheets[index].content){
											polyfilter._pending_stylesheets--;
											if(polyfilter._pending_stylesheets === 0){
												polyfilter.process();
											}
										}
									}
								} catch(e){}
							}
						break;
					}
				})(i);
			}
			if(this._pending_stylesheets === 0){
				this.process();
			}
		},
	
		_processDeclarations:	function(rule){
			var newstyles = '';
			for(var k in rule.declarations){
				var declaration = rule.declarations[k];
			
				if(declaration.property === 'filter'){
					
					if(document.querySelectorAll){
						var elems = document.querySelectorAll(rule.mSelectorText);
						for(var k = 0; k < elems.length; k++){
							elems[k].style.polyfilterStore = declaration.valueText;
						}
					}
					
					var gluedvalues = declaration.valueText;
					var values = gluedvalues.split(/\)\s+/),
						properties = {
							filtersW3C:		[],
							filtersWebKit: 	[],
							filtersSVG:		[],
							filtersIE:		[],
							behaviorsIE:	[]
						};
					
					for(idx in values){
						var value = values[idx] + ')';
						
						currentproperties = polyfilter.convert(value);
		
						for(key in currentproperties){
							if(typeof properties[key] !== 'undefined'){
								properties[key] = properties[key].concat(currentproperties[key]);
							}
						}
					}
					
					newstyles += rule.mSelectorText + '{';
					if(properties['filtersW3C'].length > 0){
						var filter = 
						webkitFilter = 
						mozFilter = 
						oFilter = 
						msFilter = 
						properties['filtersW3C'].join(' ');
		
						if(properties['filtersWebKit'] && properties['filtersWebKit'].length > 0){
							webkitFilter = properties['filtersWebKit'].join(' ');
						}

						if(typeof this._ie === 'undefined'){
							newstyles += '-ms-filter:' + msFilter + ';';
						}
						
						newstyles += '-webkit-filter:' + webkitFilter + ';';
						newstyles += '-moz-filter:' + mozFilter + ';';
						newstyles += '-o-filter:' + oFilter + ';';
					}
					if(properties['filtersSVG'].length > 0){
						if(properties['filtersSVG'][0] != 'none'){
							var id = gluedvalues.replace(/[^a-z0-9]/g,'');

							if(typeof this._svg_cache[id] === 'undefined'){
								this._svg_cache[id] = this._create_svg(id,properties['filtersSVG']);

								if(typeof XMLSerializer === 'undefined'){
									document.body.appendChild(this._svg_cache[id]);
								}
								else {
									var s = new XMLSerializer();
									var svgString = s.serializeToString(this._svg_cache[id]);
									if(svgString.search('SourceGraphic') != -1){
										document.body.appendChild(this._svg_cache[id]);
									}
								}
							}
		
							if(typeof XMLSerializer === 'undefined'){
								newstyles += 'filter: url(#' + id + ')';
							}
							else {
								var s = new XMLSerializer();
								var svgString = s.serializeToString(this._svg_cache[id]);
								
								if(svgString.search('SourceGraphic') != -1){
									newstyles += 'filter: url(#' + id + ')';
								}
								else {
									newstyles += 'filter: url(\'data:image/svg+xml;utf8,' + svgString + '#' + id + '\')';
								}
							}
						}
						else {
							newstyles += 'filter: none;';
						}
					}
					if(typeof this._ie !== 'undefined'){
						if(properties['filtersIE'].length > 0){
							var filtersIE = properties['filtersIE'].join(' ');
							
							newstyles += 'filter:' + filtersIE + ';';
						}
						if(properties['behaviorsIE'].length > 0){
							var behaviorsIE = properties['behaviorsIE'].join(' ');
							
							newstyles += 'behavior:' + behaviorsIE + ';';
						}
					}
					newstyles += '}\r\n';
				}
			}
			return newstyles;
		},
		
		// Absolute path to the .htc-files
		scriptpath:		
			window.polyfilter_scriptpath ? window.polyfilter_scriptpath : (function(){
				alert('Please configure the polyfill\'s absolute(!) script path before referencing the css-filters-polyfill.js, like so:\r\nvar polyfilter_scriptpath = "/js/css-filters-polyfill/";');
				return './'
			})(),
		
		// process stylesheets
		process:		function(){
			var parser = new CSSParser();
	
			for(var i = 0; i < this._stylesheets.length; i++){
				var newstyles = '';
				var sheet = parser.parse(this._stylesheets[i].content, false, true);
				if(sheet !== null) for(var j in sheet.cssRules){
					var rule = sheet.cssRules[j];
					
					switch(rule.type){
						default:
						break;
						
						case 1:
							newstyles += this._processDeclarations(rule);
						break;
						
						case 4:
							newstyles += '@media ' + rule.media.join(',') + '{';
							for(var k in rule.cssRules){
								var mediarule = rule.cssRules[k];
								
								newstyles += this._processDeclarations(mediarule);
							}
							newstyles += '}';
						break;
					}
				}
				var newstylesheet = document.createElement('style');
				newstylesheet.setAttribute('media',this._stylesheets[i].media);
				
				if(typeof polyfilter._ie === 'undefined'){
					newstylesheet.innerHTML = newstyles;
					document.getElementsByTagName('head')[0].appendChild(newstylesheet);
				}
				else {
					document.getElementsByTagName('head')[0].appendChild(newstylesheet);
					newstylesheet.styleSheet.cssText = newstyles;
				}
			}
		},
		
		init:				function(){
			if(Object.defineProperty){
				Object.defineProperty(CSSStyleDeclaration.prototype, 'polyfilter', {
					get:	function(){
						return this.polyfilterStore;
					},
					set:	function(gluedvalues){
						values = gluedvalues.split(/\)\s+/);
						var properties = {
							filtersW3C:		[],
							filtersWebKit: 	[],
							filtersSVG:		[],
							filtersIE:		[],
							behaviorsIE:	[]
						}
				
						for(idx in values){
							var value = values[idx] + ')';
							
							currentproperties = polyfilter.convert(value);
							
							for(key in currentproperties){
								if(typeof properties[key] !== 'undefined'){
									properties[key] = properties[key].concat(currentproperties[key]);
								}
							}
						}
			
						if(properties['filtersW3C'].length > 0){
							if(typeof polyfilter._ie === 'undefined'){
								this.msFilter = 
									properties['filtersW3C'].join(' ');
							}
							
							this.webkitFilter = 
							this.mozFilter = 
							this.oFilter = 
								properties['filtersW3C'].join(' ');
						}
						if(properties['filtersWebKit'].length > 0){
							this.webkitFilter = properties['filtersWebKit'].join(' ');
						}
						if(properties['filtersSVG'].length > 0){
							if(properties['filtersSVG'][0] != 'none'){
								var id = gluedvalues.replace(/[^a-z0-9]/g,'');
					
								if(typeof polyfilter._svg_cache[id] === 'undefined'){
									polyfilter._svg_cache[id] = polyfilter._create_svg(id,properties['filtersSVG']);

									if(typeof XMLSerializer === 'undefined'){
										document.body.appendChild(polyfilter._svg_cache[id]);
									}
									else {
										var s = new XMLSerializer();
										var svgString = s.serializeToString(polyfilter._svg_cache[id]);
										if(svgString.search('SourceGraphic') != -1){
											document.body.appendChild(polyfilter._svg_cache[id]);
										}
									}
								}
			
								if(typeof XMLSerializer === 'undefined'){
									this.filter = 'url(#' + id + ')';
								}
								else {
									var s = new XMLSerializer();
									var svgString = s.serializeToString(polyfilter._svg_cache[id]);
									if(svgString.search('SourceGraphic') != -1){
										this.filter = 'url(#' + id + ')';
									}
									else {
										this.filter = 'url(\'data:image/svg+xml;utf8,' + svgString + '#' + id + '\')';
									}
								}
							}
							else {
								this.filter = 'none';
							}
						}
						if(typeof polyfilter._ie !== 'undefined'){
							if(properties['filtersIE'].length > 0){
								this.filter = 
									properties['filtersIE'].join(' ');
							}
							else {
								this.filter = '';
							}
							if(properties['behaviorsIE'].length > 0){
								this.behavior = 
									properties['behaviorsIE'].join(' ');
							}
							else {
								this.behavior = '';
							}
						}
						this.polyfilterStore = gluedvalues;
					}
				});
			}
		},
		
		convert:			function(value){
			// None
			var fmatch = value.match(/none/i);
			if(fmatch !== null){
				var properties = this.filters.none();
			}
			// Grayscale
			var fmatch = value.match(/(grayscale)\(([0-9\.]+)\)/i);
			if(fmatch !== null){
				var amount = parseFloat(fmatch[2],10),
					properties = this.filters.grayscale(amount);
			}
			// Sepia
			var fmatch = value.match(/(sepia)\(([0-9\.]+)\)/i);
			if(fmatch !== null){
				var amount = parseFloat(fmatch[2],10),
					properties = this.filters.sepia(amount);
			}
			// Blur
			var fmatch = value.match(/(blur)\(([0-9]+)[px]*\)/i);
			if(fmatch !== null){
				var amount = parseInt(fmatch[2],10),
					properties = this.filters.blur(amount);
			}
			// Invert
			var fmatch = value.match(/(invert)\(([0-9\.]+)\)/i);
			if(fmatch !== null){
				var amount = parseFloat(fmatch[2],10),
					properties = this.filters.invert(amount);
			}
			// Brightness
			var fmatch = value.match(/(brightness)\(([0-9\.]+)%\)/i);
			if(fmatch !== null){
				var amount = parseFloat(fmatch[2],10),
					properties = this.filters.brightness(amount);
			}
			// Drop Shadow
			var fmatch = value.match(/(drop\-shadow)\(([0-9]+)[px]*\s+([0-9]+)[px]*\s+([0-9]+)[px]*\s+([#0-9]+)\)/i);
			if(fmatch !== null){
				var offsetX = parseInt(fmatch[2],10),
					offsetY = parseInt(fmatch[3],10),
					radius = parseInt(fmatch[4],10),
					color = fmatch[5],
					properties = this.filters.dropShadow(offsetX,offsetY,radius,color);
			}
			
			return properties;
		},
		
		// EFFECTS SECTION -------------------------------------------------------------------------------------------------------------
		
		filters: 		{
			// None
			none:			function(){
				var properties = {};
				
				if(typeof polyfilter._ie === 'undefined'){
					// Proposed spec
					properties['filtersW3C'] = ['none'];
					
					// Firefox
					properties['filtersSVG'] = ['none'];
				}
				else {
					// IE
					properties['filtersIE'] = ['none'];
				}
				
				return properties;
			},
			
			// Grayscale
			grayscale:			function(amount){
				amount = amount || 0;
				
				var properties = {};
				
				if(typeof polyfilter._ie === 'undefined'){
					// Proposed spec
					properties['filtersW3C'] = ['grayscale(' + amount + ')'];
					
					// Firefox
					// https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
					var svg_fe1 = polyfilter._create_svg_element('feColorMatrix',{
						type:	'matrix',
						values:	(0.2126 + 0.7874 * (1 - amount)) + ' ' 
							+ (0.7152 - 0.7152 * (1 - amount)) + ' ' 
							+ (0.0722 - 0.0722 * (1 - amount)) + ' 0 0 ' 
							+ (0.2126 - 0.2126 * (1 - amount)) + ' ' 
							+ (0.7152 + 0.2848 * (1 - amount)) + ' ' 
							+ (0.0722 - 0.0722 * (1 - amount)) + ' 0 0 ' 
							+ (0.2126 - 0.2126 * (1 - amount)) + ' ' 
							+ (0.7152 - 0.7152 * (1 - amount)) + ' ' 
							+ (0.0722 + 0.9278 * (1 - amount)) + ' 0 0 0 0 0 1 0'
					});
					properties['filtersSVG'] = [svg_fe1];
				}
				else {
					// IE
					properties['filtersIE'] = amount >= 0.5 ? ['gray'] : [];
				}
				
				return properties;
			},
			
			// Sepia
			sepia:			function(amount){
				amount = amount || 0;
		
				var properties = {};
		
				if(typeof polyfilter._ie === 'undefined'){
				
					// Proposed spec
					properties['filtersW3C'] = ['sepia(' + amount + ')'];
					
					// Firefox
					// https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
					var svg_fe1 = polyfilter._create_svg_element('feColorMatrix',{
						type:	'matrix',
						values:	(0.393 + 0.607 * (1 - amount)) + ' ' 
							+ (0.769 - 0.769 * (1 - amount)) + ' ' 
							+ (0.189 - 0.189 * (1 - amount)) + ' 0 0 ' 
							+ (0.349 - 0.349 * (1 - amount)) + ' ' 
							+ (0.686 + 0.314 * (1 - amount)) + ' ' 
							+ (0.168 - 0.168 * (1 - amount)) + ' 0 0 '
							+ (0.272 - 0.272 * (1 - amount)) + ' ' 
							+ (0.534 - 0.534 * (1 - amount)) + ' ' 
							+ (0.131 + 0.869 * (1 - amount)) + ' 0 0 0 0 0 1 0'
					});
					properties['filtersSVG'] = [svg_fe1];
				}
				else {
					// IE
					properties['filtersIE'] = amount >= 0.5 ? ['gray','progid:DXImageTransform.Microsoft.Light()'] : [];
					properties['behaviorsIE'] = amount >= 0.5 ? ['url("' + polyfilter.scriptpath + 'htc/sepia.htc")'] : [];
				}
				
				return properties;
			},
			
			// Blur
			blur:			function(amount){
				amount = Math.round(amount) || 0;
				
				var properties = {};
				
				if(typeof polyfilter._ie === 'undefined'){
					// Proposed spec
					properties['filtersW3C'] = ['blur(' + amount + 'px)'];
					
					// Firefox
					// https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
					var svg_fe1 = polyfilter._create_svg_element('feGaussianBlur',{
						'in':			'SourceGraphic',
						stdDeviation: amount
					});
					properties['filtersSVG'] = [svg_fe1];
				}
				else {
					// IE
					properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Blur(pixelradius=' + amount + ')'];
				}
				
				return properties;
			},
			
			// Invert
			invert:			function(amount){
				amount = amount || 0;
				
				var properties = {};
				
				if(typeof polyfilter._ie === 'undefined'){
					// Proposed spec
					properties['filtersW3C'] = ['invert(' + amount + ')'];
					
					// Firefox
					// https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
					var svg_fe1 = polyfilter._create_svg_element('feComponentTransfer',{});
					var svg_fe1sub = polyfilter._create_svg_element('feFuncR',{
						type:	'table',
						tableValues: amount + ' ' + (1 - amount)
					});
					svg_fe1.appendChild(svg_fe1sub);
					var svg_fe1sub = polyfilter._create_svg_element('feFuncG',{
						type:	'table',
						tableValues: amount + ' ' + (1 - amount)
					});
					svg_fe1.appendChild(svg_fe1sub);
					var svg_fe1sub = polyfilter._create_svg_element('feFuncB',{
						type:	'table',
						tableValues: amount + ' ' + (1 - amount)
					});
					svg_fe1.appendChild(svg_fe1sub);
					properties['filtersSVG'] = [svg_fe1];
				}
				else {
					// IE
					properties['filtersIE'] = amount >= 0.5 ? ['invert'] : [];
				}
				
				return properties;
			},
				
			// Brightness
			brightness:			function(amount){
				amount = amount || 0;
				
				var properties = {};
				
				if(typeof polyfilter._ie === 'undefined'){
					// Proposed spec
					properties['filtersW3C'] = ['brightness(' + amount + '%)'];
	
					// WebKit "specialty"
					properties['filtersWebKit'] = ['brightness(' + (amount - 100) + '%)'];
					
					// Firefox
					// https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
					var svg_fe1 = polyfilter._create_svg_element('feComponentTransfer',{});
					var svg_fe1sub = polyfilter._create_svg_element('feFuncR',{
						type:	'linear',
						slope: 	amount / 100
					});
					svg_fe1.appendChild(svg_fe1sub);
					var svg_fe1sub = polyfilter._create_svg_element('feFuncG',{
						type:	'linear',
						slope: 	amount / 100
					});
					svg_fe1.appendChild(svg_fe1sub);
					var svg_fe1sub = polyfilter._create_svg_element('feFuncB',{
						type:	'linear',
						slope: 	amount / 100 
					});
					svg_fe1.appendChild(svg_fe1sub);
					properties['filtersSVG'] = [svg_fe1];
				}
				else {
					// IE
					properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Light()'];
					properties['behaviorsIE'] = ['url("' + polyfilter.scriptpath + 'htc/brightness.htc")'];
				}
				
				return properties;
			},
				
			// Drop Shadow
			dropShadow:			function(offsetX,offsetY,radius,color){
				offsetX = Math.round(offsetX) || 0;
				offsetY = Math.round(offsetY) || 0;
				radius = Math.round(radius) || 0;
				color = color || '#000000';
				
				var properties = {};
				
				if(typeof polyfilter._ie === 'undefined'){
					// Proposed spec
					properties['filtersW3C'] = ['drop-shadow(' + offsetX + 'px ' + offsetY + 'px ' + radius + 'px ' + color + ')'];
					
					// Firefox
					// https://dvcs.w3.org/hg/FXTF/raw-file/tip/filters/index.html
					var svg_fe1 = polyfilter._create_svg_element('feGaussianBlur',{
						'in':		'SourceAlpha',
						stdDeviation: radius
					});
					var svg_fe2 = polyfilter._create_svg_element('feOffset',{
						dx:		offsetX + 1,
						dy:		offsetY + 1,
						result:	'offsetblur'
					});
					var svg_fe3 = polyfilter._create_svg_element('feFlood',{
						'flood-color': color
					});
					var svg_fe4 = polyfilter._create_svg_element('feComposite',{
						in2:	'offsetblur',
						operator: 'in'
					});
					var svg_fe5 = polyfilter._create_svg_element('feMerge',{});
					var svg_fe5sub = polyfilter._create_svg_element('feMergeNode',{});
					svg_fe5.appendChild(svg_fe5sub);
					var svg_fe5sub = polyfilter._create_svg_element('feMergeNode',{
						'in':		'SourceGraphic'
					});
					svg_fe5.appendChild(svg_fe5sub);
					properties['filtersSVG'] = [svg_fe1,svg_fe2,svg_fe3,svg_fe4,svg_fe5];
				}
				else {
					// IE
					properties['filtersIE'] = ['progid:DXImageTransform.Microsoft.Glow(color=' + color + ',strength=0)','progid:DXImageTransform.Microsoft.Shadow(color=' + color + ',strength=0)'];
					properties['behaviorsIE'] = ['url("' + polyfilter.scriptpath + 'htc/drop-shadow.htc")'];
				}
				
				return properties;
			}
		}
	}

	// Inialize, either via jQuery...
	if(window.jQuery){
		window.jQuery(document).ready(function(e) {
			polyfilter.process_stylesheets();
		});
	}
	// or via contentLoaded...
	else if(window.contentLoaded){
		contentLoaded(window,function(){
			polyfilter.process_stylesheets();
		});
	}
	// or on DOM ready / load
	else {
		if(window.addEventListener) // W3C standard
		{
			document.addEventListener('DOMContentLoaded', function(){
				polyfilter.process_stylesheets();
			}, false);
		} 
		else if(window.attachEvent) // Microsoft
		{
			window.attachEvent('onload', function(){
				polyfilter.process_stylesheets();
			});
		}
	}
	
	// Install style setters and getters
	polyfilter.init();
})(window);
/* ***** BEGIN LICENSE BLOCK *****
 * Version: MPL 1.1/GPL 2.0/LGPL 2.1
 *
 * The contents of this file are subject to the Mozilla Public License Version
 * 1.1 (the "License"); you may not use this file except in compliance with
 * the License. You may obtain a copy of the License at
 * http://www.mozilla.org/MPL/
 *
 * Software distributed under the License is distributed on an "AS IS" basis,
 * WITHOUT WARRANTY OF ANY KIND, either express or implied. See the License
 * for the specific language governing rights and limitations under the
 * License.
 *
 * The Original Code is mozilla.org code.
 *
 * The Initial Developer of the Original Code is
 * Netscape Communications Corporation.
 * Portions created by the Initial Developer are Copyright (C) 1998
 * the Initial Developer. All Rights Reserved.
 *
 * Contributor(s):
 *   emk <VYV03354@nifty.ne.jp>
 *   Daniel Glazman <glazman@netscape.com>
 *   L. David Baron <dbaron@dbaron.org>
 *   Boris Zbarsky <bzbarsky@mit.edu>
 *   Mats Palmgren <mats.palmgren@bredband.net>
 *   Christian Biesinger <cbiesinger@web.de>
 *   Jeff Walden <jwalden+code@mit.edu>
 *   Jonathon Jongsma <jonathon.jongsma@collabora.co.uk>, Collabora Ltd.
 *   Siraj Razick <siraj.razick@collabora.co.uk>, Collabora Ltd.
 *   Daniel Glazman <daniel.glazman@disruptive-innovations.com>
 *
 * Alternatively, the contents of this file may be used under the terms of
 * either of the GNU General Public License Version 2 or later (the "GPL"),
 * or the GNU Lesser General Public License Version 2.1 or later (the "LGPL"),
 * in which case the provisions of the GPL or the LGPL are applicable instead
 * of those above. If you wish to allow use of your version of this file only
 * under the terms of either the GPL or the LGPL, and not to allow others to
 * use your version of this file under the terms of the MPL, indicate your
 * decision by deleting the provisions above and replace them with the notice
 * and other provisions required by the GPL or the LGPL. If you do not delete
 * the provisions above, a recipient may use your version of this file under
 * the terms of any one of the MPL, the GPL or the LGPL.
 *
 * ***** END LICENSE BLOCK ***** */

;
var kCHARSET_RULE_MISSING_SEMICOLON = "Missing semicolon at the end of @charset rule";
var kCHARSET_RULE_CHARSET_IS_STRING = "The charset in the @charset rule should be a string";
var kCHARSET_RULE_MISSING_WS = "Missing mandatory whitespace after @charset";
var kIMPORT_RULE_MISSING_URL = "Missing URL in @import rule";
var kURL_EOF = "Unexpected end of stylesheet";
var kURL_WS_INSIDE = "Multiple tokens inside a url() notation";
var kVARIABLES_RULE_POSITION = "@variables rule invalid at this position in the stylesheet";
var kIMPORT_RULE_POSITION = "@import rule invalid at this position in the stylesheet";
var kNAMESPACE_RULE_POSITION = "@namespace rule invalid at this position in the stylesheet";
var kCHARSET_RULE_CHARSET_SOF = "@charset rule invalid at this position in the stylesheet";
var kUNKNOWN_AT_RULE = "Unknow @-rule";

/* FROM http://peter.sh/data/vendor-prefixed-css.php?js=1 */

var kENGINES = [
  "webkit",
  "presto",
  "trident",
  "generic"
];

var kCSS_VENDOR_VALUES = {
  "-moz-box":             {"webkit": "-webkit-box",        "presto": "", "trident": "", "generic": "box" },
  "-moz-inline-box":      {"webkit": "-webkit-inline-box", "presto": "", "trident": "", "generic": "inline-box" },
  "-moz-initial":         {"webkit": "",                   "presto": "", "trident": "", "generic": "initial" },
  "-moz-linear-gradient": {"webkit20110101": FilterLinearGradientForOutput,
                           "webkit": FilterLinearGradientForOutput,
                           "presto": "",
                           "trident": "",
                           "generic": FilterLinearGradientForOutput },
  "-moz-radial-gradient": {"webkit20110101": FilterRadialGradientForOutput,
                           "webkit": FilterRadialGradientForOutput,
                           "presto": "",
                           "trident": "",
                           "generic": FilterRadialGradientForOutput },
  "-moz-repeating-linear-gradient": {"webkit20110101": "",
                           "webkit": FilterRepeatingGradientForOutput,
                           "presto": "",
                           "trident": "",
                           "generic": FilterRepeatingGradientForOutput },
  "-moz-repeating-radial-gradient": {"webkit20110101": "",
                           "webkit": FilterRepeatingGradientForOutput,
                           "presto": "",
                           "trident": "",
                           "generic": FilterRepeatingGradientForOutput }
};

var kCSS_VENDOR_PREFIXES = {"lastUpdate":1304175007,"properties":[{"gecko":"","webkit":"","presto":"","trident":"-ms-accelerator","status":"P"},
{"gecko":"","webkit":"","presto":"-wap-accesskey","trident":"","status":""},
{"gecko":"-moz-animation","webkit":"-webkit-animation","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-animation-delay","webkit":"-webkit-animation-delay","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-animation-direction","webkit":"-webkit-animation-direction","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-animation-duration","webkit":"-webkit-animation-duration","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-animation-fill-mode","webkit":"-webkit-animation-fill-mode","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-animation-iteration-count","webkit":"-webkit-animation-iteration-count","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-animation-name","webkit":"-webkit-animation-name","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-animation-play-state","webkit":"-webkit-animation-play-state","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-animation-timing-function","webkit":"-webkit-animation-timing-function","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-appearance","webkit":"-webkit-appearance","presto":"","trident":"","status":"CR"},
{"gecko":"","webkit":"-webkit-backface-visibility","presto":"","trident":"","status":"WD"},
{"gecko":"background-clip","webkit":"-webkit-background-clip","presto":"background-clip","trident":"background-clip","status":"WD"},
{"gecko":"","webkit":"-webkit-background-composite","presto":"","trident":"","status":""},
{"gecko":"-moz-background-inline-policy","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"background-origin","webkit":"-webkit-background-origin","presto":"background-origin","trident":"background-origin","status":"WD"},
{"gecko":"","webkit":"background-position-x","presto":"","trident":"-ms-background-position-x","status":""},
{"gecko":"","webkit":"background-position-y","presto":"","trident":"-ms-background-position-y","status":""},
{"gecko":"background-size","webkit":"-webkit-background-size","presto":"background-size","trident":"background-size","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-behavior","status":""},
{"gecko":"-moz-binding","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-block-progression","status":""},
{"gecko":"","webkit":"-webkit-border-after","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-border-after-color","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-border-after-style","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-border-after-width","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-border-before","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-border-before-color","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-border-before-style","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-border-before-width","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-border-bottom-colors","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"border-bottom-left-radius","webkit":"-webkit-border-bottom-left-radius","presto":"border-bottom-left-radius","trident":"border-bottom-left-radius","status":"WD"},
{"gecko":"","webkit":"-webkit-border-bottom-left-radius = border-bottom-left-radius","presto":"","trident":"","status":""},
{"gecko":"border-bottom-right-radius","webkit":"-webkit-border-bottom-right-radius","presto":"border-bottom-right-radius","trident":"border-bottom-right-radius","status":"WD"},
{"gecko":"","webkit":"-webkit-border-bottom-right-radius = border-bottom-right-radius","presto":"","trident":"","status":""},
{"gecko":"-moz-border-end","webkit":"-webkit-border-end","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-border-end-color","webkit":"-webkit-border-end-color","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-border-end-style","webkit":"-webkit-border-end-style","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-border-end-width","webkit":"-webkit-border-end-width","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-border-fit","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-border-horizontal-spacing","presto":"","trident":"","status":""},
{"gecko":"-moz-border-image","webkit":"-webkit-border-image","presto":"-o-border-image","trident":"","status":"WD"},
{"gecko":"-moz-border-left-colors","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"border-radius","webkit":"-webkit-border-radius","presto":"border-radius","trident":"border-radius","status":"WD"},
{"gecko":"-moz-border-right-colors","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"-moz-border-start","webkit":"-webkit-border-start","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-border-start-color","webkit":"-webkit-border-start-color","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-border-start-style","webkit":"-webkit-border-start-style","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-border-start-width","webkit":"-webkit-border-start-width","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-border-top-colors","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"border-top-left-radius","webkit":"-webkit-border-top-left-radius","presto":"border-top-left-radius","trident":"border-top-left-radius","status":"WD"},
{"gecko":"","webkit":"-webkit-border-top-left-radius = border-top-left-radius","presto":"","trident":"","status":""},
{"gecko":"border-top-right-radius","webkit":"-webkit-border-top-right-radius","presto":"border-top-right-radius","trident":"border-top-right-radius","status":"WD"},
{"gecko":"","webkit":"-webkit-border-top-right-radius = border-top-right-radius","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-border-vertical-spacing","presto":"","trident":"","status":""},
{"gecko":"-moz-box-align","webkit":"-webkit-box-align","presto":"","trident":"-ms-box-align","status":"WD"},
{"gecko":"-moz-box-direction","webkit":"-webkit-box-direction","presto":"","trident":"-ms-box-direction","status":"WD"},
{"gecko":"-moz-box-flex","webkit":"-webkit-box-flex","presto":"","trident":"-ms-box-flex","status":"WD"},
{"gecko":"","webkit":"-webkit-box-flex-group","presto":"","trident":"","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-box-line-progression","status":""},
{"gecko":"","webkit":"-webkit-box-lines","presto":"","trident":"-ms-box-lines","status":"WD"},
{"gecko":"-moz-box-ordinal-group","webkit":"-webkit-box-ordinal-group","presto":"","trident":"-ms-box-ordinal-group","status":"WD"},
{"gecko":"-moz-box-orient","webkit":"-webkit-box-orient","presto":"","trident":"-ms-box-orient","status":"WD"},
{"gecko":"-moz-box-pack","webkit":"-webkit-box-pack","presto":"","trident":"-ms-box-pack","status":"WD"},
{"gecko":"","webkit":"-webkit-box-reflect","presto":"","trident":"","status":""},
{"gecko":"box-shadow","webkit":"-webkit-box-shadow","presto":"box-shadow","trident":"box-shadow","status":"WD"},
{"gecko":"-moz-box-sizing","webkit":"box-sizing","presto":"box-sizing","trident":"","status":"CR"},
{"gecko":"","webkit":"-webkit-box-sizing = box-sizing","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-epub-caption-side = caption-side","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-color-correction","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-column-break-after","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-column-break-before","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-column-break-inside","presto":"","trident":"","status":""},
{"gecko":"-moz-column-count","webkit":"-webkit-column-count","presto":"column-count","trident":"column-count","status":"CR"},
{"gecko":"-moz-column-gap","webkit":"-webkit-column-gap","presto":"column-gap","trident":"column-gap","status":"CR"},
{"gecko":"-moz-column-rule","webkit":"-webkit-column-rule","presto":"column-rule","trident":"column-rule","status":"CR"},
{"gecko":"-moz-column-rule-color","webkit":"-webkit-column-rule-color","presto":"column-rule-color","trident":"column-rule-color","status":"CR"},
{"gecko":"-moz-column-rule-style","webkit":"-webkit-column-rule-style","presto":"column-rule-style","trident":"column-rule-style","status":"CR"},
{"gecko":"-moz-column-rule-width","webkit":"-webkit-column-rule-width","presto":"column-rule-width","trident":"column-rule-width","status":"CR"},
{"gecko":"","webkit":"-webkit-column-span","presto":"column-span","trident":"column-span","status":"CR"},
{"gecko":"-moz-column-width","webkit":"-webkit-column-width","presto":"column-width","trident":"column-width","status":"CR"},
{"gecko":"","webkit":"-webkit-columns","presto":"columns","trident":"columns","status":"CR"},
{"gecko":"","webkit":"-webkit-dashboard-region","presto":"-apple-dashboard-region","trident":"","status":""},
{"gecko":"filter","webkit":"","presto":"filter","trident":"-ms-filter","status":""},
{"gecko":"-moz-float-edge","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"","presto":"-o-focus-opacity","trident":"","status":""},
{"gecko":"-moz-font-feature-settings","webkit":"","presto":"","trident":"","status":""},
{"gecko":"-moz-font-language-override","webkit":"","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-font-size-delta","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-font-smoothing","presto":"","trident":"","status":""},
{"gecko":"-moz-force-broken-image-icon","webkit":"","presto":"","trident":"","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column-align","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-column-span","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-columns","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-layer","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row-align","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-row-span","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-grid-rows","status":"WD"},
{"gecko":"","webkit":"-webkit-highlight","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-hyphenate-character","presto":"","trident":"","status":"WD"},
{"gecko":"","webkit":"-webkit-hyphenate-limit-after","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-hyphenate-limit-before","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-hyphens","presto":"","trident":"","status":"WD"},
{"gecko":"","webkit":"-epub-hyphens = -webkit-hyphens","presto":"","trident":"","status":""},
{"gecko":"-moz-image-region","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"ime-mode","webkit":"","presto":"","trident":"-ms-ime-mode","status":""},
{"gecko":"","webkit":"","presto":"-wap-input-format","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-wap-input-required","trident":"","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-interpolation-mode","status":""},
{"gecko":"","webkit":"","presto":"-xv-interpret-as","trident":"","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-flow","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-char","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-line","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-mode","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-layout-grid-type","status":""},
{"gecko":"","webkit":"-webkit-line-box-contain","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-line-break","presto":"","trident":"-ms-line-break","status":""},
{"gecko":"","webkit":"-webkit-line-clamp","presto":"","trident":"","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-line-grid-mode","status":""},
{"gecko":"","webkit":"","presto":"-o-link","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-o-link-source","trident":"","status":""},
{"gecko":"","webkit":"-webkit-locale","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-logical-height","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-logical-width","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-margin-after","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-margin-after-collapse","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-margin-before","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-margin-before-collapse","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-margin-bottom-collapse","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-margin-collapse","presto":"","trident":"","status":""},
{"gecko":"-moz-margin-end","webkit":"-webkit-margin-end","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-margin-start","webkit":"-webkit-margin-start","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-margin-top-collapse","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-marquee","presto":"","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-wap-marquee-dir","trident":"","status":""},
{"gecko":"","webkit":"-webkit-marquee-direction","presto":"","trident":"","status":"WD"},
{"gecko":"","webkit":"-webkit-marquee-increment","presto":"","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-wap-marquee-loop","trident":"","status":"WD"},
{"gecko":"","webkit":"-webkit-marquee-repetition","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-marquee-speed","presto":"-wap-marquee-speed","trident":"","status":"WD"},
{"gecko":"","webkit":"-webkit-marquee-style","presto":"-wap-marquee-style","trident":"","status":"WD"},
{"gecko":"mask","webkit":"-webkit-mask","presto":"mask","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-attachment","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-box-image","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-clip","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-composite","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-image","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-origin","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-position","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-position-x","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-position-y","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-repeat","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-repeat-x","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-repeat-y","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-mask-size","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-match-nearest-mail-blockquote-color","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-max-logical-height","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-max-logical-width","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-min-logical-height","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-min-logical-width","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"","presto":"-o-mini-fold","trident":"","status":""},
{"gecko":"","webkit":"-webkit-nbsp-mode","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"","presto":"-o-object-fit","trident":"","status":"ED"},
{"gecko":"","webkit":"","presto":"-o-object-position","trident":"","status":"ED"},
{"gecko":"opacity","webkit":"-webkit-opacity","presto":"opacity","trident":"opacity","status":"WD"},
{"gecko":"","webkit":"-webkit-opacity = opacity","presto":"","trident":"","status":""},
{"gecko":"-moz-outline-radius","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"-moz-outline-radius-bottomleft","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"-moz-outline-radius-bottomright","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"-moz-outline-radius-topleft","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"-moz-outline-radius-topright","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"overflow-x","webkit":"overflow-x","presto":"overflow-x","trident":"-ms-overflow-x","status":"WD"},
{"gecko":"overflow-y","webkit":"overflow-y","presto":"overflow-y","trident":"-ms-overflow-y","status":"WD"},
{"gecko":"","webkit":"-webkit-padding-after","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-padding-before","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-padding-end","webkit":"-webkit-padding-end","presto":"","trident":"","status":"ED"},
{"gecko":"-moz-padding-start","webkit":"-webkit-padding-start","presto":"","trident":"","status":"ED"},
{"gecko":"","webkit":"-webkit-perspective","presto":"","trident":"","status":"WD"},
{"gecko":"","webkit":"-webkit-perspective-origin","presto":"","trident":"","status":"WD"},
{"gecko":"","webkit":"-webkit-perspective-origin-x","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-perspective-origin-y","presto":"","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-xv-phonemes","trident":"","status":""},
{"gecko":"","webkit":"-webkit-rtl-ordering","presto":"","trident":"","status":"P"},
{"gecko":"-moz-script-level","webkit":"","presto":"","trident":"","status":""},
{"gecko":"-moz-script-min-size","webkit":"","presto":"","trident":"","status":""},
{"gecko":"-moz-script-size-multiplier","webkit":"","presto":"","trident":"","status":""},
{"gecko":"","webkit":"","presto":"scrollbar-3dlight-color","trident":"-ms-scrollbar-3dlight-color","status":"P"},
{"gecko":"","webkit":"","presto":"scrollbar-arrow-color","trident":"-ms-scrollbar-arrow-color","status":"P"},
{"gecko":"","webkit":"","presto":"scrollbar-base-color","trident":"-ms-scrollbar-base-color","status":"P"},
{"gecko":"","webkit":"","presto":"scrollbar-darkshadow-color","trident":"-ms-scrollbar-darkshadow-color","status":"P"},
{"gecko":"","webkit":"","presto":"scrollbar-face-color","trident":"-ms-scrollbar-face-color","status":"P"},
{"gecko":"","webkit":"","presto":"scrollbar-highlight-color","trident":"-ms-scrollbar-highlight-color","status":"P"},
{"gecko":"","webkit":"","presto":"scrollbar-shadow-color","trident":"-ms-scrollbar-shadow-color","status":"P"},
{"gecko":"","webkit":"","presto":"scrollbar-track-color","trident":"-ms-scrollbar-track-color","status":"P"},
{"gecko":"-moz-stack-sizing","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"-webkit-svg-shadow","presto":"","trident":"","status":""},
{"gecko":"-moz-tab-size","webkit":"","presto":"-o-tab-size","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-o-table-baseline","trident":"","status":""},
{"gecko":"","webkit":"-webkit-tap-highlight-color","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-text-align-last","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-text-autospace","status":"WD"},
{"gecko":"-moz-text-blink","webkit":"","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-text-combine","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-epub-text-combine = -webkit-text-combine","presto":"","trident":"","status":""},
{"gecko":"-moz-text-decoration-color","webkit":"","presto":"","trident":"","status":""},
{"gecko":"-moz-text-decoration-line","webkit":"","presto":"","trident":"","status":""},
{"gecko":"-moz-text-decoration-style","webkit":"","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-text-decorations-in-effect","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-text-emphasis","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-epub-text-emphasis = -webkit-text-emphasis","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-text-emphasis-color","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-epub-text-emphasis-color = -webkit-text-emphasis-color","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-text-emphasis-position","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-text-emphasis-style","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-epub-text-emphasis-style = -webkit-text-emphasis-style","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-webkit-text-fill-color","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-text-justify","status":"WD"},
{"gecko":"","webkit":"","presto":"","trident":"-ms-text-kashida-space","status":"P"},
{"gecko":"","webkit":"-webkit-text-orientation","presto":"","trident":"","status":""},
{"gecko":"","webkit":"-epub-text-orientation = -webkit-text-orientation","presto":"","trident":"","status":""},
{"gecko":"","webkit":"text-overflow","presto":"text-overflow","trident":"-ms-text-overflow","status":"WD"},
{"gecko":"","webkit":"-webkit-text-security","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"-webkit-text-size-adjust","presto":"","trident":"-ms-text-size-adjust","status":""},
{"gecko":"","webkit":"-webkit-text-stroke","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"-webkit-text-stroke-color","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"-webkit-text-stroke-width","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"-epub-text-transform = text-transform","presto":"","trident":"","status":""},
{"gecko":"","webkit":"","presto":"","trident":"-ms-text-underline-position","status":"P"},
{"gecko":"","webkit":"-webkit-touch-callout","presto":"","trident":"","status":"P"},
{"gecko":"-moz-transform","webkit":"-webkit-transform","presto":"-o-transform","trident":"-ms-transform","status":"WD"},
{"gecko":"-moz-transform-origin","webkit":"-webkit-transform-origin","presto":"-o-transform-origin","trident":"-ms-transform-origin","status":"WD"},
{"gecko":"","webkit":"-webkit-transform-origin-x","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"-webkit-transform-origin-y","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"-webkit-transform-origin-z","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"-webkit-transform-style","presto":"","trident":"","status":"WD"},
{"gecko":"-moz-transition","webkit":"-webkit-transition","presto":"-o-transition","trident":"","status":"WD"},
{"gecko":"-moz-transition-delay","webkit":"-webkit-transition-delay","presto":"-o-transition-delay","trident":"","status":"WD"},
{"gecko":"-moz-transition-duration","webkit":"-webkit-transition-duration","presto":"-o-transition-duration","trident":"","status":"WD"},
{"gecko":"-moz-transition-property","webkit":"-webkit-transition-property","presto":"-o-transition-property","trident":"","status":"WD"},
{"gecko":"-moz-transition-timing-function","webkit":"-webkit-transition-timing-function","presto":"-o-transition-timing-function","trident":"","status":"WD"},
{"gecko":"","webkit":"-webkit-user-drag","presto":"","trident":"","status":"P"},
{"gecko":"-moz-user-focus","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"-moz-user-input","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"-moz-user-modify","webkit":"-webkit-user-modify","presto":"","trident":"","status":"P"},
{"gecko":"-moz-user-select","webkit":"-webkit-user-select","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"","presto":"-xv-voice-balance","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-xv-voice-duration","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-xv-voice-pitch","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-xv-voice-pitch-range","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-xv-voice-rate","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-xv-voice-stress","trident":"","status":""},
{"gecko":"","webkit":"","presto":"-xv-voice-volume","trident":"","status":""},
{"gecko":"-moz-window-shadow","webkit":"","presto":"","trident":"","status":"P"},
{"gecko":"","webkit":"word-break","presto":"","trident":"-ms-word-break","status":"WD"},
{"gecko":"","webkit":"-epub-word-break = word-break","presto":"","trident":"","status":""},
{"gecko":"word-wrap","webkit":"word-wrap","presto":"word-wrap","trident":"-ms-word-wrap","status":"WD"},
{"gecko":"","webkit":"-webkit-writing-mode","presto":"writing-mode","trident":"-ms-writing-mode","status":"ED"},
{"gecko":"","webkit":"-epub-writing-mode = -webkit-writing-mode","presto":"","trident":"","status":""},
{"gecko":"","webkit":"zoom","presto":"","trident":"-ms-zoom","status":""}]};

var kCSS_PREFIXED_VALUE = [
  {"gecko": "-moz-box", "webkit": "-moz-box", "presto": "", "trident": "", "generic": "box"}
];

var CssInspector = {

  mVENDOR_PREFIXES: null,

  kEXPORTS_FOR_GECKO:   true,
  kEXPORTS_FOR_WEBKIT:  true,
  kEXPORTS_FOR_PRESTO:  true,
  kEXPORTS_FOR_TRIDENT: true,

  cleanPrefixes: function()
  {
    this.mVENDOR_PREFIXES = null;
  },

  prefixesForProperty: function(aProperty)
  {
    if (!this.mVENDOR_PREFIXES) {

      this.mVENDOR_PREFIXES = {};
      for (var i = 0; i < kCSS_VENDOR_PREFIXES.properties.length; i++) {
        var p = kCSS_VENDOR_PREFIXES.properties[i];
        if (p.gecko && (p.webkit || p.presto || p.trident)) {
          var o = {};
          if (this.kEXPORTS_FOR_GECKO) o[p.gecko] = true;
          if (this.kEXPORTS_FOR_WEBKIT && p.webkit)  o[p.webkit] = true;
          if (this.kEXPORTS_FOR_PRESTO && p.presto)  o[p.presto] = true;
          if (this.kEXPORTS_FOR_TRIDENT && p.trident) o[p.trident] = true;
          this.mVENDOR_PREFIXES[p.gecko] = [];
          for (var j in o)
            this.mVENDOR_PREFIXES[p.gecko].push(j)
        }
      }
    }
    if (aProperty in this.mVENDOR_PREFIXES)
      return this.mVENDOR_PREFIXES[aProperty].sort();
    return null;
  },

  parseColorStop: function(parser, token)
  {
    var color = parser.parseColor(token);
    var position = "";
    if (!color)
      return null;
    token = parser.getToken(true, true);
    if (token.isPercentage() ||
        token.isDimensionOfUnit("cm") ||
        token.isDimensionOfUnit("mm") ||
        token.isDimensionOfUnit("in") ||
        token.isDimensionOfUnit("pc") ||
        token.isDimensionOfUnit("px") ||
        token.isDimensionOfUnit("em") ||
        token.isDimensionOfUnit("ex") ||
        token.isDimensionOfUnit("pt")) {
      position = token.value;
      token = parser.getToken(true, true);
    }
    return { color: color, position: position }
  },

  parseGradient: function (parser, token)
  {
    var isRadial = false;
    var gradient = { isRepeating: false };
    if (token.isNotNull()) {
      if (token.isFunction("-moz-linear-gradient(") ||
          token.isFunction("-moz-radial-gradient(") ||
          token.isFunction("-moz-repeating-linear-gradient(") ||
          token.isFunction("-moz-repeating-radial-gradient(")) {
        if (token.isFunction("-moz-radial-gradient(") ||
            token.isFunction("-moz-repeating-radial-gradient(")) {
          gradient.isRadial = true;
        }
        if (token.isFunction("-moz-repeating-linear-gradient(") ||
            token.isFunction("-moz-repeating-radial-gradient(")) {
          gradient.isRepeating = true;
        }
        

        token = parser.getToken(true, true);
        var haveGradientLine = false;
        var foundHorizPosition = false;
        var haveAngle = false;

        if (token.isAngle()) {
          gradient.angle = token.value;
          haveGradientLine = true;
          haveAngle = true;
          token = parser.getToken(true, true);
        }

        if (token.isLength()
            || token.isIdent("top")
            || token.isIdent("center")
            || token.isIdent("bottom")
            || token.isIdent("left")
            || token.isIdent("right")) {
          haveGradientLine = true;
          if (token.isLength()
            || token.isIdent("left")
            || token.isIdent("right")) {
            foundHorizPosition = true;
          }
          gradient.position = token.value;
          token = parser.getToken(true, true);
        }

        if (haveGradientLine) {
          if (!haveAngle && token.isAngle()) { // we have an angle here
            gradient.angle = token.value;
            haveAngle = true;
            token = parser.getToken(true, true);
          }

          else if (token.isLength()
                  || (foundHorizPosition && (token.isIdent("top")
                                             || token.isIdent("center")
                                             || token.isIdent("bottom")))
                  || (!foundHorizPosition && (token.isLength()
                                              || token.isIdent("top")
                                              || token.isIdent("center")
                                              || token.isIdent("bottom")
                                              || token.isIdent("left")
                                              || token.isIdent("right")))) {
            gradient.position = ("position" in gradient) ? gradient.position + " ": "";
            gradient.position += token.value;
            token = parser.getToken(true, true);
          }

          if (!haveAngle && token.isAngle()) { // we have an angle here
            gradient.angle = token.value;
            haveAngle = true;
            token = parser.getToken(true, true);
          }

          // we must find a comma here
          if (!token.isSymbol(","))
            return null;
          token = parser.getToken(true, true);
        }

        // ok... Let's deal with the rest now
        if (gradient.isRadial) {
          if (token.isIdent("circle") ||
              token.isIdent("ellipse")) {
            gradient.shape = token.value;
            token = parser.getToken(true, true);
          }
          if (token.isIdent("closest-side") ||
                   token.isIdent("closest-corner") ||
                   token.isIdent("farthest-side") ||
                   token.isIdent("farthest-corner") ||
                   token.isIdent("contain") ||
                   token.isIdent("cover")) {
            gradient.size = token.value;
            token = parser.getToken(true, true);
          }
          if (!("shape" in gradient) &&
              (token.isIdent("circle") ||
               token.isIdent("ellipse"))) {
            // we can still have the second value...
            gradient.shape = token.value;
            token = parser.getToken(true, true);
          }
          if ((("shape" in gradient) || ("size" in gradient)) && !token.isSymbol(","))
            return null;
          else if (("shape" in gradient) || ("size" in gradient))
            token = parser.getToken(true, true);
        }

        // now color stops...
        var stop1 = this.parseColorStop(parser, token);
        if (!stop1)
          return null;
        token = parser.currentToken();
        if (!token.isSymbol(","))
          return null;
        token = parser.getToken(true, true);
        var stop2 = this.parseColorStop(parser, token);
        if (!stop2)
          return null;
        token = parser.currentToken();
        if (token.isSymbol(",")) {
          token = parser.getToken(true, true);
        }
        // ok we have at least two color stops
        gradient.stops = [stop1, stop2];
        while (!token.isSymbol(")")) {
          var colorstop = this.parseColorStop(parser, token);
          if (!colorstop)
            return null;
          token = parser.currentToken();
          if (!token.isSymbol(")") && !token.isSymbol(","))
            return null;
          if (token.isSymbol(","))
            token = parser.getToken(true, true);
          gradient.stops.push(colorstop);
        }
        return gradient;
      }
    }
    return null;
  },

  parseBoxShadows: function(aString)
  {
    var parser = new CSSParser();
    parser._init();
    parser.mPreserveWS       = false;
    parser.mPreserveComments = false;
    parser.mPreservedTokens = [];
    parser.mScanner.init(aString);

    var shadows = [];
    var token = parser.getToken(true, true);
    var color = "", blurRadius = "0px", offsetX = "0px", offsetY = "0px", spreadRadius = "0px";
    var inset = false;
    while (token.isNotNull()) {
      if (token.isIdent("none")) {
        shadows.push( { none: true } );
        token = parser.getToken(true, true);
      }
      else {
        if (token.isIdent('inset')) {
          inset = true;
          token = parser.getToken(true, true);
        }

        if (token.isPercentage() ||
            token.isDimensionOfUnit("cm") ||
            token.isDimensionOfUnit("mm") ||
            token.isDimensionOfUnit("in") ||
            token.isDimensionOfUnit("pc") ||
            token.isDimensionOfUnit("px") ||
            token.isDimensionOfUnit("em") ||
            token.isDimensionOfUnit("ex") ||
            token.isDimensionOfUnit("pt")) {
          var offsetX = token.value;
          token = parser.getToken(true, true);
        }
        else
          return [];

        if (!inset && token.isIdent('inset')) {
          inset = true;
          token = parser.getToken(true, true);
        }

        if (token.isPercentage() ||
            token.isDimensionOfUnit("cm") ||
            token.isDimensionOfUnit("mm") ||
            token.isDimensionOfUnit("in") ||
            token.isDimensionOfUnit("pc") ||
            token.isDimensionOfUnit("px") ||
            token.isDimensionOfUnit("em") ||
            token.isDimensionOfUnit("ex") ||
            token.isDimensionOfUnit("pt")) {
          var offsetX = token.value;
          token = parser.getToken(true, true);
        }
        else
          return [];

        if (!inset && token.isIdent('inset')) {
          inset = true;
          token = parser.getToken(true, true);
        }

        if (token.isPercentage() ||
            token.isDimensionOfUnit("cm") ||
            token.isDimensionOfUnit("mm") ||
            token.isDimensionOfUnit("in") ||
            token.isDimensionOfUnit("pc") ||
            token.isDimensionOfUnit("px") ||
            token.isDimensionOfUnit("em") ||
            token.isDimensionOfUnit("ex") ||
            token.isDimensionOfUnit("pt")) {
          var blurRadius = token.value;
          token = parser.getToken(true, true);
        }

        if (!inset && token.isIdent('inset')) {
          inset = true;
          token = parser.getToken(true, true);
        }

        if (token.isPercentage() ||
            token.isDimensionOfUnit("cm") ||
            token.isDimensionOfUnit("mm") ||
            token.isDimensionOfUnit("in") ||
            token.isDimensionOfUnit("pc") ||
            token.isDimensionOfUnit("px") ||
            token.isDimensionOfUnit("em") ||
            token.isDimensionOfUnit("ex") ||
            token.isDimensionOfUnit("pt")) {
          var spreadRadius = token.value;
          token = parser.getToken(true, true);
        }

        if (!inset && token.isIdent('inset')) {
          inset = true;
          token = parser.getToken(true, true);
        }

        if (token.isFunction("rgb(") ||
            token.isFunction("rgba(") ||
            token.isFunction("hsl(") ||
            token.isFunction("hsla(") ||
            token.isSymbol("#") ||
            token.isIdent()) {
          var color = parser.parseColor(token);
          token = parser.getToken(true, true);
        }

        if (!inset && token.isIdent('inset')) {
          inset = true;
          token = parser.getToken(true, true);
        }

        shadows.push( { none: false,
                        color: color,
                        offsetX: offsetX, offsetY: offsetY,
                        blurRadius: blurRadius,
                        spreadRadius: spreadRadius } );

        if (token.isSymbol(",")) {
          inset = false;
          color = "";
          blurRadius = "0px";
          spreadRadius = "0px"
          offsetX = "0px";
          offsetY = "0px"; 
          token = parser.getToken(true, true);
        }
        else if (!token.isNotNull())
          return shadows;
        else
          return [];
      }
    }
    return shadows;
  },

  parseTextShadows: function(aString)
  {
    var parser = new CSSParser();
    parser._init();
    parser.mPreserveWS       = false;
    parser.mPreserveComments = false;
    parser.mPreservedTokens = [];
    parser.mScanner.init(aString);

    var shadows = [];
    var token = parser.getToken(true, true);
    var color = "", blurRadius = "0px", offsetX = "0px", offsetY = "0px"; 
    while (token.isNotNull()) {
      if (token.isIdent("none")) {
        shadows.push( { none: true } );
        token = parser.getToken(true, true);
      }
      else {
        if (token.isFunction("rgb(") ||
            token.isFunction("rgba(") ||
            token.isFunction("hsl(") ||
            token.isFunction("hsla(") ||
            token.isSymbol("#") ||
            token.isIdent()) {
          var color = parser.parseColor(token);
          token = parser.getToken(true, true);
        }
        if (token.isPercentage() ||
            token.isDimensionOfUnit("cm") ||
            token.isDimensionOfUnit("mm") ||
            token.isDimensionOfUnit("in") ||
            token.isDimensionOfUnit("pc") ||
            token.isDimensionOfUnit("px") ||
            token.isDimensionOfUnit("em") ||
            token.isDimensionOfUnit("ex") ||
            token.isDimensionOfUnit("pt")) {
          var offsetX = token.value;
          token = parser.getToken(true, true);
        }
        else
          return [];
        if (token.isPercentage() ||
            token.isDimensionOfUnit("cm") ||
            token.isDimensionOfUnit("mm") ||
            token.isDimensionOfUnit("in") ||
            token.isDimensionOfUnit("pc") ||
            token.isDimensionOfUnit("px") ||
            token.isDimensionOfUnit("em") ||
            token.isDimensionOfUnit("ex") ||
            token.isDimensionOfUnit("pt")) {
          var offsetY = token.value;
          token = parser.getToken(true, true);
        }
        else
          return [];
        if (token.isPercentage() ||
            token.isDimensionOfUnit("cm") ||
            token.isDimensionOfUnit("mm") ||
            token.isDimensionOfUnit("in") ||
            token.isDimensionOfUnit("pc") ||
            token.isDimensionOfUnit("px") ||
            token.isDimensionOfUnit("em") ||
            token.isDimensionOfUnit("ex") ||
            token.isDimensionOfUnit("pt")) {
          var blurRadius = token.value;
          token = parser.getToken(true, true);
        }
        if (!color &&
            (token.isFunction("rgb(") ||
             token.isFunction("rgba(") ||
             token.isFunction("hsl(") ||
             token.isFunction("hsla(") ||
             token.isSymbol("#") ||
             token.isIdent())) {
          var color = parser.parseColor(token);
          token = parser.getToken(true, true);
        }

        shadows.push( { none: false,
                        color: color,
                        offsetX: offsetX, offsetY: offsetY,
                        blurRadius: blurRadius } );

        if (token.isSymbol(",")) {
          color = "";
          blurRadius = "0px";
          offsetX = "0px";
          offsetY = "0px"; 
          token = parser.getToken(true, true);
        }
        else if (!token.isNotNull())
          return shadows;
        else
          return [];
      }
    }
    return shadows;
  },

  parseBackgroundImages: function(aString)
  {
    var parser = new CSSParser();
    parser._init();
    parser.mPreserveWS       = false;
    parser.mPreserveComments = false;
    parser.mPreservedTokens = [];
    parser.mScanner.init(aString);

    var backgrounds = [];
    var token = parser.getToken(true, true);
    while (token.isNotNull()) {
      /*if (token.isFunction("rgb(") ||
          token.isFunction("rgba(") ||
          token.isFunction("hsl(") ||
          token.isFunction("hsla(") ||
          token.isSymbol("#") ||
          token.isIdent()) {
        var color = parser.parseColor(token);
        backgrounds.push( { type: "color", value: color });
        token = parser.getToken(true, true);
      }
      else */
      if (token.isFunction("url(")) {
        token = parser.getToken(true, true);
        var urlContent = parser.parseURL(token);
        backgrounds.push( { type: "image", value: "url(" + urlContent });
        token = parser.getToken(true, true);
      }
      else if (token.isFunction("-moz-linear-gradient(") ||
               token.isFunction("-moz-radial-gradient(") ||
               token.isFunction("-moz-repeating-linear-gradient(") ||
               token.isFunction("-moz-repeating-radial-gradient(")) {
        var gradient = this.parseGradient(parser, token);
        backgrounds.push( { type: gradient.isRadial ? "radial-gradient" : "linear-gradient", value: gradient });
        token = parser.getToken(true, true);
      }
      else
        return null;
      if (token.isSymbol(",")) {
        token = parser.getToken(true, true);
        if (!token.isNotNull())
          return null;
      }
    }
    return backgrounds;
  },

  serializeGradient: function(gradient)
  {
    var s = gradient.isRadial
              ? (gradient.isRepeating ? "-moz-repeating-radial-gradient(" : "-moz-radial-gradient(" )
              : (gradient.isRepeating ? "-moz-repeating-linear-gradient(" : "-moz-linear-gradient(" );
    if (gradient.angle || gradient.position)
      s += (gradient.angle ? gradient.angle + " ": "") +
           (gradient.position ? gradient.position : "") +
           ", ";
    if (gradient.isRadial && (gradient.shape || gradient.size))
      s += (gradient.shape ? gradient.shape : "") +
           " " +
           (gradient.size ? gradient.size : "") +
           ", ";
    for (var i = 0; i < gradient.stops.length; i++) {
      var colorstop = gradient.stops[i];
      s += colorstop.color + (colorstop.position ? " " + colorstop.position : "");
      if (i != gradient.stops.length -1)
        s += ", ";
    }
    s += ")";
    return s;
  },

  parseBorderImage: function(aString)
  {
    var parser = new CSSParser();
    parser._init();
    parser.mPreserveWS       = false;
    parser.mPreserveComments = false;
    parser.mPreservedTokens = [];
    parser.mScanner.init(aString);

    var borderImage = {url: "", offsets: [], widths: [], sizes: []};
    var token = parser.getToken(true, true);
    if (token.isFunction("url(")) {
      token = parser.getToken(true, true);
      var urlContent = parser.parseURL(token);
      if (urlContent) {
        borderImage.url = urlContent.substr(0, urlContent.length - 1).trim();
        if ((borderImage.url[0] == '"' && borderImage.url[borderImage.url.length - 1] == '"') ||
             (borderImage.url[0] == "'" && borderImage.url[borderImage.url.length - 1] == "'"))
        borderImage.url = borderImage.url.substr(1, borderImage.url.length - 2);
      }
      else
        return null;
    }
    else
      return null; 

    token = parser.getToken(true, true);
    if (token.isNumber() || token.isPercentage())
      borderImage.offsets.push(token.value);
    else
      return null;
    var i;
    for (i= 0; i < 3; i++) {
      token = parser.getToken(true, true);
      if (token.isNumber() || token.isPercentage())
        borderImage.offsets.push(token.value);
      else
        break;
    }
    if (i == 3)
      token = parser.getToken(true, true);

    if (token.isSymbol("/")) {
      token = parser.getToken(true, true);
      if (token.isDimension()
          || token.isNumber("0")
          || (token.isIdent() && token.value in parser.kBORDER_WIDTH_NAMES))
        borderImage.widths.push(token.value);
      else
        return null;

      for (var i = 0; i < 3; i++) {
        token = parser.getToken(true, true);
        if (token.isDimension()
            || token.isNumber("0")
            || (token.isIdent() && token.value in parser.kBORDER_WIDTH_NAMES))
          borderImage.widths.push(token.value);
        else
          break;
      }
      if (i == 3)
        token = parser.getToken(true, true);
    }

    for (var i = 0; i < 2; i++) {
      if (token.isIdent("stretch")
          || token.isIdent("repeat")
          || token.isIdent("round"))
        borderImage.sizes.push(token.value);
      else if (!token.isNotNull())
        return borderImage;
      else
        return null;
      token = parser.getToken(true, true);
    }
    if (!token.isNotNull())
      return borderImage;

    return null;
  },

  parseMediaQuery: function(aString)
  {
    var kCONSTRAINTS = {
      "width": true,
      "min-width": true,
      "max-width": true,
      "height": true,
      "min-height": true,
      "max-height": true,
      "device-width": true,
      "min-device-width": true,
      "max-device-width": true,
      "device-height": true,
      "min-device-height": true,
      "max-device-height": true,
      "orientation": true,
      "aspect-ratio": true,
      "min-aspect-ratio": true,
      "max-aspect-ratio": true,
      "device-aspect-ratio": true,
      "min-device-aspect-ratio": true,
      "max-device-aspect-ratio": true,
      "color": true,
      "min-color": true,
      "max-color": true,
      "color-index": true,
      "min-color-index": true,
      "max-color-index": true,
      "monochrome": true,
      "min-monochrome": true,
      "max-monochrome": true,
      "resolution": true,
      "min-resolution": true,
      "max-resolution": true,
      "scan": true,
      "grid": true
    };
    var parser = new CSSParser();
    parser._init();
    parser.mPreserveWS       = false;
    parser.mPreserveComments = false;
    parser.mPreservedTokens = [];
    parser.mScanner.init(aString);

    var m = {amplifier: "", medium: "", constraints: []};
    var token = parser.getToken(true, true);

    if (token.isIdent("all") ||
        token.isIdent("aural") ||
        token.isIdent("braille") ||
        token.isIdent("handheld") ||
        token.isIdent("print") ||
        token.isIdent("projection") ||
        token.isIdent("screen") ||
        token.isIdent("tty") ||
        token.isIdent("tv")) {
       m.medium = token.value;
       token = parser.getToken(true, true);
    }
    else if (token.isIdent("not") || token.isIdent("only")) {
      m.amplifier = token.value;
      token = parser.getToken(true, true);
      if (token.isIdent("all") ||
          token.isIdent("aural") ||
          token.isIdent("braille") ||
          token.isIdent("handheld") ||
          token.isIdent("print") ||
          token.isIdent("projection") ||
          token.isIdent("screen") ||
          token.isIdent("tty") ||
          token.isIdent("tv")) {
         m.medium = token.value;
         token = parser.getToken(true, true);
      }
      else
        return null;
    }

    if (m.medium) {
      if (!token.isNotNull())
        return m;
      if (token.isIdent("and")) {
        token = parser.getToken(true, true);
      }
      else
        return null;
    }

    while (token.isSymbol("(")) {
      token = parser.getToken(true, true);
      if (token.isIdent() && (token.value in kCONSTRAINTS)) {
        var constraint = token.value;
        token = parser.getToken(true, true);
        if (token.isSymbol(":")) {
          token = parser.getToken(true, true);
          var values = [];
          while (!token.isSymbol(")")) {
            values.push(token.value);
            token = parser.getToken(true, true);
          }
          if (token.isSymbol(")")) {
            m.constraints.push({constraint: constraint, value: values});
            token = parser.getToken(true, true);
            if (token.isNotNull()) {
              if (token.isIdent("and")) {
                token = parser.getToken(true, true);
              }
              else
                return null;
            }
            else
              return m;
          }
          else
            return null;
        }
        else if (token.isSymbol(")")) {
          m.constraints.push({constraint: constraint, value: null});
          token = parser.getToken(true, true);
          if (token.isNotNull()) {
            if (token.isIdent("and")) {
              token = parser.getToken(true, true);
            }
            else
              return null;
          }
          else
            return m;
        }
        else
          return null;
      }
      else
        return null;
    }
    return m;
  }

};


/************************************************************/
/************************** JSCSSP **************************/
/************************************************************/

var CSS_ESCAPE  = '\\';

var IS_HEX_DIGIT  = 1;
var START_IDENT   = 2;
var IS_IDENT      = 4;
var IS_WHITESPACE = 8;

var W   = IS_WHITESPACE;
var I   = IS_IDENT;
var S   =          START_IDENT;
var SI  = IS_IDENT|START_IDENT;
var XI  = IS_IDENT            |IS_HEX_DIGIT;
var XSI = IS_IDENT|START_IDENT|IS_HEX_DIGIT;

function CSSScanner(aString)
{
  this.init(aString);
}

CSSScanner.prototype = {

  kLexTable: [
  //                                     TAB LF      FF  CR
     0,  0,  0,  0,  0,  0,  0,  0,  0,  W,  W,  0,  W,  W,  0,  0,
  //
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  // SPC !   "   #   $   %   &   '   (   )   *   +   ,   -   .   /
     W,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  I,  0,  0,
  // 0   1   2   3   4   5   6   7   8   9   :   ;   <   =   >   ?
     XI, XI, XI, XI, XI, XI, XI, XI, XI, XI, 0,  0,  0,  0,  0,  0,
  // @   A   B   C   D   E   F   G   H   I   J   K   L   M   N   O
     0,  XSI,XSI,XSI,XSI,XSI,XSI,SI, SI, SI, SI, SI, SI, SI, SI, SI,
  // P   Q   R   S   T   U   V   W   X   Y   Z   [   \   ]   ^   _
     SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, 0,  S,  0,  0,  SI,
  // `   a   b   c   d   e   f   g   h   i   j   k   l   m   n   o
     0,  XSI,XSI,XSI,XSI,XSI,XSI,SI, SI, SI, SI, SI, SI, SI, SI, SI,
  // p   q   r   s   t   u   v   w   x   y   z   {   |   }   ~
     SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, 0,  0,  0,  0,  0,
  //
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  //
     0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
  //     ¡   ¢   £   ¤   ¥   ¦   §   ¨   ©   ª   «   ¬   ­   ®   ¯
     0,  SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
  // °   ±   ²   ³   ´   µ   ¶   ·   ¸   ¹   º   »   ¼   ½   ¾   ¿
     SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
  // À   Á   Â   Ã   Ä   Å   Æ   Ç   È   É   Ê   Ë   Ì   Í   Î   Ï
     SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
  // Ð   Ñ   Ò   Ó   Ô   Õ   Ö   ×   Ø   Ù   Ú   Û   Ü   Ý   Þ   ß
     SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
  // à   á   â   ã   ä   å   æ   ç   è   é   ê   ë   ì   í   î   ï
     SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI,
  // ð   ñ   ò   ó   ô   õ   ö   ÷   ø   ù   ú   û   ü   ý   þ   ÿ
     SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI, SI
  ],

  kHexValues: {
    "0": 0, "1": 1, "2": 2, "3": 3, "4": 4, "5": 5, "6": 6, "7": 7, "8": 8, "9": 9,
    "a": 10, "b": 11, "c": 12, "d": 13, "e": 14, "f": 15
  },

  mString : "",
  mPos : 0,
  mPreservedPos : [],

  init: function(aString) {
    this.mString = aString;
    this.mPos = 0;
    this.mPreservedPos = [];
  },

  getCurrentPos: function() {
    return this.mPos;
  },

  getAlreadyScanned: function()
  {
    return this.mString.substr(0, this.mPos);
  },

  preserveState: function() {
    this.mPreservedPos.push(this.mPos);
  },

  restoreState: function() {
    if (this.mPreservedPos.length) {
      this.mPos = this.mPreservedPos.pop();
    }
  },

  forgetState: function() {
    if (this.mPreservedPos.length) {
      this.mPreservedPos.pop();
    }
  },

  read: function() {
    if (this.mPos < this.mString.length)
      return this.mString.charAt(this.mPos++);
    return -1;
  },

  peek: function() {
    if (this.mPos < this.mString.length)
      return this.mString.charAt(this.mPos);
    return -1;
  },

  isHexDigit: function(c) {
    var code = c.charCodeAt(0);
    return (code < 256 && (this.kLexTable[code] & IS_HEX_DIGIT) != 0);
  },

  isIdentStart: function(c) {
    var code = c.charCodeAt(0);
    return (code >= 256 || (this.kLexTable[code] & START_IDENT) != 0);
  },

  startsWithIdent: function(aFirstChar, aSecondChar) {
    var code = aFirstChar.charCodeAt(0);
    return this.isIdentStart(aFirstChar) ||
           (aFirstChar == "-" && this.isIdentStart(aSecondChar));
  },

  isIdent: function(c) {
    var code = c.charCodeAt(0);
    return (code >= 256 || (this.kLexTable[code] & IS_IDENT) != 0);
  },

  isSymbol: function(c) {
    var code = c.charCodeAt(0);
    return (this.kLexTable[code] & IS_IDENT) != 1;
  },

  pushback: function() {
    this.mPos--;
  },

  nextHexValue: function() {
    var c = this.read();
    if (c == -1 || !this.isHexDigit(c))
      return new jscsspToken(jscsspToken.NULL_TYPE, null);
    var s = c;
    c = this.read();
    while (c != -1 && this.isHexDigit(c)) {
      s += c;
      c = this.read();
    }
    if (c != -1)
      this.pushback();
    return new jscsspToken(jscsspToken.HEX_TYPE, s);
  },

  gatherEscape: function() {
    var c = this.peek();
    if (c == -1)
      return "";
    if (this.isHexDigit(c)) {
      var code = 0;
      for (var i = 0; i < 6; i++) {
        c = this.read();
        if (this.isHexDigit(c))
          code = code * 16 + this.kHexValues[c.toLowerCase()];
        else if (!this.isHexDigit(c) && !this.isWhiteSpace(c)) {
          this.pushback();
          break;
        }
        else
          break;
      }
      if (i == 6) {
        c = this.peek();
        if (this.isWhiteSpace(c))
          this.read();
      }
      return String.fromCharCode(code);
    }
    c = this.read();
    if (c != "\n")
      return c;
    return "";
  },

  gatherIdent: function(c) {
    var s = "";
    if (c == CSS_ESCAPE)
      s += this.gatherEscape();
    else
      s += c;
    c = this.read();
	if(!this.mMediaQueryMode){
		while (c != -1
			   && (this.isIdent(c) || c == CSS_ESCAPE)) {
		  if (c == CSS_ESCAPE)
			s += this.gatherEscape();
		  else
			s += c;
		  c = this.read();
		}
	}
	else {
		while (c != -1
			   && c != '{' 
			   && c != ',') {
			s += c;
		  c = this.read();
		}
	}
    if (c != -1)
      this.pushback();
	  this.mMediaQueryMode = false;
    return s;
  },

  parseIdent: function(c) {
	var value = this.gatherIdent(c);
    var nextChar = this.peek();
    if (nextChar == "(") {
      value += this.read();
      return new jscsspToken(jscsspToken.FUNCTION_TYPE, value);
    }
    return new jscsspToken(jscsspToken.IDENT_TYPE, value);
  },

  isDigit: function(c) {
    return (c >= '0') && (c <= '9');
  },

  parseComment: function(c) {
    var s = c;
    while ((c = this.read()) != -1) {
      s += c;
      if (c == "*") {
        c = this.read();
        if (c == -1)
          break;
        if (c == "/") {
          s += c;
          break;
        }
        this.pushback();
      }
    }
    return new jscsspToken(jscsspToken.COMMENT_TYPE, s);
  },

  parseNumber: function(c) {
    var s = c;
    var foundDot = false;
    while ((c = this.read()) != -1) {
      if (c == ".") {
        if (foundDot)
          break;
        else {
          s += c;
          foundDot = true;
        }
      } else if (this.isDigit(c))
        s += c;
      else
        break;
    }

    if (c != -1 && this.startsWithIdent(c, this.peek())) { // DIMENSION
      var unit = this.gatherIdent(c);
      s += unit;
      return new jscsspToken(jscsspToken.DIMENSION_TYPE, s, unit);
    }
    else if (c == "%") {
      s += "%";
      return new jscsspToken(jscsspToken.PERCENTAGE_TYPE, s);
    }
    else if (c != -1)
      this.pushback();
    return new jscsspToken(jscsspToken.NUMBER_TYPE, s);
  },

  parseString: function(aStop) {
    var s = aStop;
    var previousChar = aStop;
    var c;
    while ((c = this.read()) != -1) {
      if (c == aStop && previousChar != CSS_ESCAPE) {
        s += c;
        break;
      }
      else if (c == CSS_ESCAPE) {
        c = this.peek();
        if (c == -1)
          break;
        else if (c == "\n" || c == "\r" || c == "\f") {
          d = c;
          c = this.read();
          // special for Opera that preserves \r\n...
          if (d == "\r") {
            c = this.peek();
            if (c == "\n")
              c = this.read();
          }
        }
        else {
          s += this.gatherEscape();
          c = this.peek();
        }
      }
      else if (c == "\n" || c == "\r" || c == "\f") {
        break;
      }
      else
        s += c;

      previousChar = c;
    }
    return new jscsspToken(jscsspToken.STRING_TYPE, s);
  },

  isWhiteSpace: function(c) {
    var code = c.charCodeAt(0);
    return code < 256 && (this.kLexTable[code] & IS_WHITESPACE) != 0;
  },

  eatWhiteSpace: function(c) {
    var s = c;
    while ((c = this.read()) != -1) {
      if (!this.isWhiteSpace(c))
        break;
      s += c;
    }
    if (c != -1)
      this.pushback();
    return s;
  },

  parseAtKeyword: function(c) {
    return new jscsspToken(jscsspToken.ATRULE_TYPE, this.gatherIdent(c));
  },

  nextToken: function() {
    var c = this.read();
    if (c == -1)
      return new jscsspToken(jscsspToken.NULL_TYPE, null);

    if (this.startsWithIdent(c, this.peek()))
      return this.parseIdent(c);

    if (c == '@') {
      var nextChar = this.read();
      if (nextChar != -1) {
        var followingChar = this.peek();
        this.pushback();
        if (this.startsWithIdent(nextChar, followingChar))
          return this.parseAtKeyword(c);
      }
    }

    if (c == "." || c == "+" || c == "-") {
      var nextChar = this.peek();
      if (this.isDigit(nextChar))
        return this.parseNumber(c);
      else if (nextChar == "." && c != ".") {
        firstChar = this.read();
        var secondChar = this.peek();
        this.pushback();
        if (this.isDigit(secondChar))
          return this.parseNumber(c);
      }
    }
    if (this.isDigit(c)) {
      return this.parseNumber(c);
    }

    if (c == "'" || c == '"')
      return this.parseString(c);

    if (this.isWhiteSpace(c)) {
      var s = this.eatWhiteSpace(c);
      
      return new jscsspToken(jscsspToken.WHITESPACE_TYPE, s);
    }

    if (c == "|" || c == "~" || c == "^" || c == "$" || c == "*") {
      var nextChar = this.read();
      if (nextChar == "=") {
        switch (c) {
          case "~" :
            return new jscsspToken(jscsspToken.INCLUDES_TYPE, "~=");
          case "|" :
            return new jscsspToken(jscsspToken.DASHMATCH_TYPE, "|=");
          case "^" :
            return new jscsspToken(jscsspToken.BEGINSMATCH_TYPE, "^=");
          case "$" :
            return new jscsspToken(jscsspToken.ENDSMATCH_TYPE, "$=");
          case "*" :
            return new jscsspToken(jscsspToken.CONTAINSMATCH_TYPE, "*=");
          default :
            break;
        }
      } else if (nextChar != -1)
        this.pushback();
    }

    if (c == "/" && this.peek() == "*")
      return this.parseComment(c);

    return new jscsspToken(jscsspToken.SYMBOL_TYPE, c);
  }
};

function CSSParser(aString)
{
  this.mToken = null;
  this.mLookAhead = null;
  this.mScanner = new CSSScanner(aString);

  this.mPreserveWS = true;
  this.mPreserveComments = true;

  this.mPreservedTokens = [];
  
  this.mError = null;
}

CSSParser.prototype = {

  _init:function() {
    this.mToken = null;
    this.mLookAhead = null;
    this.mMediaQueryMode = false;
  },

  kINHERIT: "inherit",

  kBORDER_WIDTH_NAMES: {
      "thin": true,
      "medium": true,
      "thick": true
  },

  kBORDER_STYLE_NAMES: {
    "none": true,
    "hidden": true,
    "dotted": true,
    "dashed": true,
    "solid": true,
    "double": true,
    "groove": true,
    "ridge": true,
    "inset": true,
    "outset": true
  },

  kCOLOR_NAMES: {
    "transparent": true,
  
    "black": true,
    "silver": true,
    "gray": true,
    "white": true,
    "maroon": true,
    "red": true,
    "purple": true,
    "fuchsia": true,
    "green": true,
    "lime": true,
    "olive": true,
    "yellow": true,
    "navy": true,
    "blue": true,
    "teal": true,
    "aqua": true,
    
    "aliceblue": true,
    "antiquewhite": true,
    "aqua": true,
    "aquamarine": true,
    "azure": true,
    "beige": true,
    "bisque": true,
    "black": true,
    "blanchedalmond": true,
    "blue": true,
    "blueviolet": true,
    "brown": true,
    "burlywood": true,
    "cadetblue": true,
    "chartreuse": true,
    "chocolate": true,
    "coral": true,
    "cornflowerblue": true,
    "cornsilk": true,
    "crimson": true,
    "cyan": true,
    "darkblue": true,
    "darkcyan": true,
    "darkgoldenrod": true,
    "darkgray": true,
    "darkgreen": true,
    "darkgrey": true,
    "darkkhaki": true,
    "darkmagenta": true,
    "darkolivegreen": true,
    "darkorange": true,
    "darkorchid": true,
    "darkred": true,
    "darksalmon": true,
    "darkseagreen": true,
    "darkslateblue": true,
    "darkslategray": true,
    "darkslategrey": true,
    "darkturquoise": true,
    "darkviolet": true,
    "deeppink": true,
    "deepskyblue": true,
    "dimgray": true,
    "dimgrey": true,
    "dodgerblue": true,
    "firebrick": true,
    "floralwhite": true,
    "forestgreen": true,
    "fuchsia": true,
    "gainsboro": true,
    "ghostwhite": true,
    "gold": true,
    "goldenrod": true,
    "gray": true,
    "green": true,
    "greenyellow": true,
    "grey": true,
    "honeydew": true,
    "hotpink": true,
    "indianred": true,
    "indigo": true,
    "ivory": true,
    "khaki": true,
    "lavender": true,
    "lavenderblush": true,
    "lawngreen": true,
    "lemonchiffon": true,
    "lightblue": true,
    "lightcoral": true,
    "lightcyan": true,
    "lightgoldenrodyellow": true,
    "lightgray": true,
    "lightgreen": true,
    "lightgrey": true,
    "lightpink": true,
    "lightsalmon": true,
    "lightseagreen": true,
    "lightskyblue": true,
    "lightslategray": true,
    "lightslategrey": true,
    "lightsteelblue": true,
    "lightyellow": true,
    "lime": true,
    "limegreen": true,
    "linen": true,
    "magenta": true,
    "maroon": true,
    "mediumaquamarine": true,
    "mediumblue": true,
    "mediumorchid": true,
    "mediumpurple": true,
    "mediumseagreen": true,
    "mediumslateblue": true,
    "mediumspringgreen": true,
    "mediumturquoise": true,
    "mediumvioletred": true,
    "midnightblue": true,
    "mintcream": true,
    "mistyrose": true,
    "moccasin": true,
    "navajowhite": true,
    "navy": true,
    "oldlace": true,
    "olive": true,
    "olivedrab": true,
    "orange": true,
    "orangered": true,
    "orchid": true,
    "palegoldenrod": true,
    "palegreen": true,
    "paleturquoise": true,
    "palevioletred": true,
    "papayawhip": true,
    "peachpuff": true,
    "peru": true,
    "pink": true,
    "plum": true,
    "powderblue": true,
    "purple": true,
    "red": true,
    "rosybrown": true,
    "royalblue": true,
    "saddlebrown": true,
    "salmon": true,
    "sandybrown": true,
    "seagreen": true,
    "seashell": true,
    "sienna": true,
    "silver": true,
    "skyblue": true,
    "slateblue": true,
    "slategray": true,
    "slategrey": true,
    "snow": true,
    "springgreen": true,
    "steelblue": true,
    "tan": true,
    "teal": true,
    "thistle": true,
    "tomato": true,
    "turquoise": true,
    "violet": true,
    "wheat": true,
    "white": true,
    "whitesmoke": true,
    "yellow": true,
    "yellowgreen": true,
  
    "activeborder": true,
    "activecaption": true,
    "appworkspace": true,
    "background": true,
    "buttonface": true,
    "buttonhighlight": true,
    "buttonshadow": true,
    "buttontext": true,
    "captiontext": true,
    "graytext": true,
    "highlight": true,
    "highlighttext": true,
    "inactiveborder": true,
    "inactivecaption": true,
    "inactivecaptiontext": true,
    "infobackground": true,
    "infotext": true,
    "menu": true,
    "menutext": true,
    "scrollbar": true,
    "threeddarkshadow": true,
    "threedface": true,
    "threedhighlight": true,
    "threedlightshadow": true,
    "threedshadow": true,
    "window": true,
    "windowframe": true,
    "windowtext": true
  },

  kLIST_STYLE_TYPE_NAMES: {
    "decimal": true,
    "decimal-leading-zero": true,
    "lower-roman": true,
    "upper-roman": true,
    "georgian": true,
    "armenian": true,
    "lower-latin": true,
    "lower-alpha": true,
    "upper-latin": true,
    "upper-alpha": true,
    "lower-greek": true,

    "disc": true,
    "circle": true,
    "square": true,
    "none": true,
    
    /* CSS 3 */
    "box": true,
    "check": true,
    "diamond": true,
    "hyphen": true,

    "lower-armenian": true,
    "cjk-ideographic": true,
    "ethiopic-numeric": true,
    "hebrew": true,
    "japanese-formal": true,
    "japanese-informal": true,
    "simp-chinese-formal": true,
    "simp-chinese-informal": true,
    "syriac": true,
    "tamil": true,
    "trad-chinese-formal": true,
    "trad-chinese-informal": true,
    "upper-armenian": true,
    "arabic-indic": true,
    "binary": true,
    "bengali": true,
    "cambodian": true,
    "khmer": true,
    "devanagari": true,
    "gujarati": true,
    "gurmukhi": true,
    "kannada": true,
    "lower-hexadecimal": true,
    "lao": true,
    "malayalam": true,
    "mongolian": true,
    "myanmar": true,
    "octal": true,
    "oriya": true,
    "persian": true,
    "urdu": true,
    "telugu": true,
    "tibetan": true,
    "upper-hexadecimal": true,
    "afar": true,
    "ethiopic-halehame-aa-et": true,
    "ethiopic-halehame-am-et": true,
    "amharic-abegede": true,
    "ehiopic-abegede-am-et": true,
    "cjk-earthly-branch": true,
    "cjk-heavenly-stem": true,
    "ethiopic": true,
    "ethiopic-abegede": true,
    "ethiopic-abegede-gez": true,
    "hangul-consonant": true,
    "hangul": true,
    "hiragana-iroha": true,
    "hiragana": true,
    "katakana-iroha": true,
    "katakana": true,
    "lower-norwegian": true,
    "oromo": true,
    "ethiopic-halehame-om-et": true,
    "sidama": true,
    "ethiopic-halehame-sid-et": true,
    "somali": true,
    "ethiopic-halehame-so-et": true,
    "tigre": true,
    "ethiopic-halehame-tig": true,
    "tigrinya-er-abegede": true,
    "ethiopic-abegede-ti-er": true,
    "tigrinya-et": true,
    "ethiopic-halehame-ti-et": true,
    "upper-greek": true,
    "asterisks": true,
    "footnotes": true,
    "circled-decimal": true,
    "circled-lower-latin": true,
    "circled-upper-latin": true,
    "dotted-decimal": true,
    "double-circled-decimal": true,
    "filled-circled-decimal": true,
    "parenthesised-decimal": true,
    "parenthesised-lower-latin": true
  },

  reportError: function(aMsg) {
    this.mError = aMsg;
  },

  consumeError: function() {
    var e = this.mError;
    this.mError = null;
    return e;
  },

  currentToken: function() {
    return this.mToken;
  },

  getHexValue: function() {
    this.mToken = this.mScanner.nextHexValue();
    return this.mToken;
  },

  getToken: function(aSkipWS, aSkipComment) {
    if (this.mLookAhead) {
      this.mToken = this.mLookAhead;
      this.mLookAhead = null;
      return this.mToken;
    }

    this.mToken = this.mScanner.nextToken();
    while (this.mToken &&
           ((aSkipWS && this.mToken.isWhiteSpace()) ||
            (aSkipComment && this.mToken.isComment())))
      this.mToken = this.mScanner.nextToken();
	return this.mToken;
  },

  lookAhead: function(aSkipWS, aSkipComment) {
    var preservedToken = this.mToken;
    this.mScanner.preserveState();
    var token = this.getToken(aSkipWS, aSkipComment);
    this.mScanner.restoreState();
    this.mToken = preservedToken;

    return token;
  },

  ungetToken: function() {
    this.mLookAhead = this.mToken;
  },

  addUnknownAtRule: function(aSheet, aString) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var blocks = [];
    var token = this.getToken(false, false);
    while (token.isNotNull()) {
      aString += token.value;
      if (token.isSymbol(";") && !blocks.length)
        break;
      else if (token.isSymbol("{")
               || token.isSymbol("(")
               || token.isSymbol("[")
               || token.type == "function") {
        blocks.push(token.isFunction() ? "(" : token.value);
      } else if (token.isSymbol("}")
                 || token.isSymbol(")")
                 || token.isSymbol("]")) {
        if (blocks.length) {
          var ontop = blocks[blocks.length - 1];
          if ((token.isSymbol("}") && ontop == "{")
              || (token.isSymbol(")") && ontop == "(")
              || (token.isSymbol("]") && ontop == "[")) {
            blocks.pop();
            if (!blocks.length && token.isSymbol("}"))
              break;
          }
        }
      }
      token = this.getToken(false, false);
    }

    this.addUnknownRule(aSheet, aString, currentLine);
  },

  addUnknownRule: function(aSheet, aString, aCurrentLine) {
    var errorMsg = this.consumeError();
    var rule = new jscsspErrorRule(errorMsg);
    rule.currentLine = aCurrentLine;
    rule.parsedCssText = aString;
    rule.parentStyleSheet = aSheet;
    aSheet.cssRules.push(rule);
  },

  addWhitespace: function(aSheet, aString) {
    var rule = new jscsspWhitespace();
    rule.parsedCssText = aString;
    rule.parentStyleSheet = aSheet;
    aSheet.cssRules.push(rule);
  },

  addComment: function(aSheet, aString) {
    var rule = new jscsspComment();
    rule.parsedCssText = aString;
    rule.parentStyleSheet = aSheet;
    aSheet.cssRules.push(rule);
  },

  parseCharsetRule: function(aToken, aSheet) {
    var s = aToken.value;
    var token = this.getToken(false, false);
    s += token.value;
    if (token.isWhiteSpace(" ")) {
      token = this.getToken(false, false);
      s += token.value;
      if (token.isString()) {
        var encoding = token.value;
        token = this.getToken(false, false);
        s += token.value;
        if (token.isSymbol(";")) {
          var rule = new jscsspCharsetRule();
          rule.encoding = encoding;
          rule.parsedCssText = s;
          rule.parentStyleSheet = aSheet;
          aSheet.cssRules.push(rule);
          return true;
        }
        else
          this.reportError(kCHARSET_RULE_MISSING_SEMICOLON);
      }
      else
        this.reportError(kCHARSET_RULE_CHARSET_IS_STRING);
    }
    else
      this.reportError(kCHARSET_RULE_MISSING_WS);

    this.addUnknownAtRule(aSheet, s);
    return false;
  },

  parseImportRule: function(aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    this.preserveState();
    var token = this.getToken(true, true);
    var media = [];
    var href = "";
    if (token.isString()) {
      href = token.value;
      s += " " + href;
    }
    else if (token.isFunction("url(")) {
      token = this.getToken(true, true);
      var urlContent = this.parseURL(token);
      if (urlContent) {
        href = "url(" + urlContent;
        s += " " + href;
      }
    }
    else
      this.reportError(kIMPORT_RULE_MISSING_URL);

    if (href) {
      token = this.getToken(true, true);
      while (token.isIdent()) {
        s += " " + token.value;
        media.push(token.value);
        token = this.getToken(true, true);
        if (!token)
          break;
        if (token.isSymbol(",")) {
          s += ",";
        } else if (token.isSymbol(";")) {
          break;
        } else
          break;
        token = this.getToken(true, true);
      }

      if (!media.length) {
        media.push("all");
      }
  
      if (token.isSymbol(";")) {
        s += ";"
        this.forgetState();
        var rule = new jscsspImportRule();
        rule.currentLine = currentLine;
        rule.parsedCssText = s;
        rule.href = href;
        rule.media = media;
        rule.parentStyleSheet = aSheet;
        aSheet.cssRules.push(rule);
        return true;
      }
    }

    this.restoreState();
    this.addUnknownAtRule(aSheet, "@import");
    return false;
  },

  parseVariablesRule: function(token, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = token.value;
    var declarations = [];
    var valid = false;
    this.preserveState();
    token = this.getToken(true, true);
    var media = [];
    var foundMedia = false;
    while (token.isNotNull()) {
      if (token.isIdent()) {
        foundMedia = true;
        s += " " + token.value;
        media.push(token.value);
        token = this.getToken(true, true);
        if (token.isSymbol(",")) {
          s += ",";
        } else {
          if (token.isSymbol("{"))
            this.ungetToken();
          else {
            // error...
            token.type = jscsspToken.NULL_TYPE;
            break;
          }
        }
      } else if (token.isSymbol("{"))
        break;
      else if (foundMedia) {
        token.type = jscsspToken.NULL_TYPE;
        // not a media list
        break;
      }
      token = this.getToken(true, true);
    }

    if (token.isSymbol("{")) {
      s += " {";
      token = this.getToken(true, true);
      while (true) {
        if (!token.isNotNull()) {
          valid = true;
          break;
        }
        if (token.isSymbol("}")) {
          s += "}";
          valid = true;
          break;
        } else {
          var d = this.parseDeclaration(token, declarations, true, false, aSheet);
          s += ((d && declarations.length) ? " " : "") + d;
        }
        token = this.getToken(true, false);
      }
    }
    if (valid) {
      this.forgetState();
      var rule = new jscsspVariablesRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.declarations = declarations;
      rule.media = media;
      rule.parentStyleSheet = aSheet;
      aSheet.cssRules.push(rule)
      return true;
    }
    this.restoreState();
    return false;
  },

  parseNamespaceRule: function(aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    this.preserveState();
    var token = this.getToken(true, true);
    if (token.isNotNull()) {
      var prefix = "";
      var url = "";
      if (token.isIdent()) {
        prefix = token.value;
        s += " " + prefix;
        token = this.getToken(true, true);
      }
      if (token) {
        var foundURL = false;
        if (token.isString()) {
          foundURL = true;
          url = token.value;
          s += " " + url;
        } else if (token.isFunction("url(")) {
          // get a url here...
          token = this.getToken(true, true);
          var urlContent = this.parseURL(token);
          if (urlContent) {
            url += "url(" + urlContent;
            foundURL = true;
            s += " " + urlContent;
          }
        }
      }
      if (foundURL) {
        token = this.getToken(true, true);
        if (token.isSymbol(";")) {
          s += ";";
          this.forgetState();
          var rule = new jscsspNamespaceRule();
          rule.currentLine = currentLine;
          rule.parsedCssText = s;
          rule.prefix = prefix;
          rule.url = url;
          rule.parentStyleSheet = aSheet;
          aSheet.cssRules.push(rule);
          return true;
        }
      }

    }
    this.restoreState();
    this.addUnknownAtRule(aSheet, "@namespace");
    return false;
  },

  parseFontFaceRule: function(aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    var descriptors = [];
    this.preserveState();
    var token = this.getToken(true, true);
    if (token.isNotNull()) {
      // expecting block start
      if (token.isSymbol("{")) {
        s += " " + token.value;
        var token = this.getToken(true, false);
        while (true) {
          if (token.isSymbol("}")) {
            s += "}";
            valid = true;
            break;
          } else {
            var d = this.parseDeclaration(token, descriptors, false, false, aSheet);
            s += ((d && descriptors.length) ? " " : "") + d;
          }
          token = this.getToken(true, false);
        }
      }
    }
    if (valid) {
      this.forgetState();
      var rule = new jscsspFontFaceRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.descriptors = descriptors;
      rule.parentStyleSheet = aSheet;
      aSheet.cssRules.push(rule)
      return true;
    }
    this.restoreState();
    return false;
  },

  parsePageRule: function(aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    var declarations = [];
    this.preserveState();
    var token = this.getToken(true, true);
    var pageSelector = "";
    if (token.isSymbol(":") || token.isIdent()) {
      if (token.isSymbol(":")) {
        pageSelector = ":";
        token = this.getToken(false, false);
      }
      if (token.isIdent()) {
        pageSelector += token.value;
        s += " " + pageSelector;
        token = this.getToken(true, true);
      }
    }
    if (token.isNotNull()) {
      // expecting block start
      if (token.isSymbol("{")) {
        s += " " + token.value;
        var token = this.getToken(true, false);
        while (true) {
          if (token.isSymbol("}")) {
            s += "}";
            valid = true;
            break;
          } else {
            var d = this.parseDeclaration(token, declarations, true, true, aSheet);
            s += ((d && declarations.length) ? " " : "") + d;
          }
          token = this.getToken(true, false);
        }
      }
    }
    if (valid) {
      this.forgetState();
      var rule = new jscsspPageRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.pageSelector = pageSelector;
      rule.declarations = declarations;
      rule.parentStyleSheet = aSheet;
      aSheet.cssRules.push(rule)
      return true;
    }
    this.restoreState();
    return false;
  },

  parseDefaultPropertyValue: function(token, aDecl, aAcceptPriority, descriptor, aSheet) {
    var valueText = "";
    var blocks = [];
    var foundPriority = false;
    var values = [];
    while (token.isNotNull()) {

      if ((token.isSymbol(";")
           || token.isSymbol("}")
           || token.isSymbol("!"))
          && !blocks.length) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }
  
      if (token.isIdent(this.kINHERIT)) {
        if (values.length) {
          return "";
        }
        else {
          valueText = this.kINHERIT;
          var value = new jscsspVariable(kJscsspINHERIT_VALUE, aSheet);
          values.push(value);
          token = this.getToken(true, true);
          break;
        }
      }
      else if (token.isSymbol("{")
                 || token.isSymbol("(")
                 || token.isSymbol("[")) {
        blocks.push(token.value);
      }
      else if (token.isSymbol("}")
                 || token.isSymbol("]")) {
        if (blocks.length) {
          var ontop = blocks[blocks.length - 1];
          if ((token.isSymbol("}") && ontop == "{")
              || (token.isSymbol(")") && ontop == "(")
              || (token.isSymbol("]") && ontop == "[")) {
            blocks.pop();
          }
        }
      }
      // XXX must find a better way to store individual values
      // probably a |values: []| field holding dimensions, percentages
      // functions, idents, numbers and symbols, in that order.
      if (token.isFunction()) {
        if (token.isFunction("var(")) {
          token = this.getToken(true, true);
          if (token.isIdent()) {
            var name = token.value;
            token = this.getToken(true, true);
            if (token.isSymbol(")")) {
              var value = new jscsspVariable(kJscsspVARIABLE_VALUE, aSheet);
              valueText += "var(" + name + ")";
              value.name = name;
              values.push(value);
            }
            else
              return "";
          }
          else
            return "";
        }
        else {
          var fn = token.value;
          token = this.getToken(false, true);
          var arg = this.parseFunctionArgument(token);
          if (arg) {
            valueText += fn + arg;
            var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
            value.value = fn + arg;
            values.push(value);
          }
          else
            return "";
        }
      }
      else if (token.isSymbol("#")) {
        var color = this.parseColor(token);
        if (color) {
          valueText += color;
          var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
          value.value = color;
          values.push(value);
        }
        else
          return "";
      }
      else if (!token.isWhiteSpace() && !token.isSymbol(",")) {
        var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, aSheet);
        value.value = token.value;
        values.push(value);
        valueText += token.value;
      }
      else
        valueText += token.value;
      token = this.getToken(false, true);
    }
    if (values.length && valueText) {
      this.forgetState();
      aDecl.push(this._createJscsspDeclarationFromValuesArray(descriptor, values, valueText));
      return valueText;
    }
    return "";
  },

  parseMarginOrPaddingShorthand: function(token, aDecl, aAcceptPriority, aProperty)
  {
    var top = null;
    var bottom = null;
    var left = null;
    var right = null;

    var values = [];
    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
        token = this.getToken(true, true);
        break;
      }

      else if (token.isDimension()
              || token.isNumber("0")
              || token.isPercentage()
              || token.isIdent("auto")) {
        values.push(token.value);
      }
      else
        return "";

      token = this.getToken(true, true);
    }

    var count = values.length;
    switch (count) {
      case 1:
        top = values[0];
        bottom = top;
        left = top;
        right = top;
        break;
      case 2:
        top = values[0];
        bottom = top;
        left = values[1];
        right = left;
        break;
      case 3:
        top = values[0];
        left = values[1];
        right = left;
        bottom = values[2];
        break;
      case 4:
        top = values[0];
        right = values[1];
        bottom = values[2];
        left = values[3];
        break;
      default:
        return "";
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-top", top));
    aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-right", right));
    aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-bottom", bottom));
    aDecl.push(this._createJscsspDeclarationFromValue(aProperty + "-left", left));
   return top + " " + right + " " + bottom + " " + left;
  },

  parseBorderColorShorthand: function(token, aDecl, aAcceptPriority)
  {
    var top = null;
    var bottom = null;
    var left = null;
    var right = null;

    var values = [];
    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
        token = this.getToken(true, true);
        break;
      }
      
      else {
        var color = this.parseColor(token);
        if (color)
          values.push(color);
        else
          return "";
      }

      token = this.getToken(true, true);
    }

    var count = values.length;
    switch (count) {
      case 1:
        top = values[0];
        bottom = top;
        left = top;
        right = top;
        break;
      case 2:
        top = values[0];
        bottom = top;
        left = values[1];
        right = left;
        break;
      case 3:
        top = values[0];
        left = values[1];
        right = left;
        bottom = values[2];
        break;
      case 4:
        top = values[0];
        right = values[1];
        bottom = values[2];
        left = values[3];
        break;
      default:
        return "";
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue("border-top-color", top));
    aDecl.push(this._createJscsspDeclarationFromValue("border-right-color", right));
    aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-color", bottom));
    aDecl.push(this._createJscsspDeclarationFromValue("border-left-color", left));
    return top + " " + right + " " + bottom + " " + left;
  },

  parseCueShorthand: function(token, declarations, aAcceptPriority)
  {
    var before = "";
    var after = "";

    var values = [];
    var values = [];
    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
      }

      else if (token.isIdent("none"))
        values.push(token.value);

        else if (token.isFunction("url(")) {
        var token = this.getToken(true, true);
        var urlContent = this.parseURL(token);
        if (urlContent)
          values.push("url(" + urlContent);
        else
          return "";
      }
      else
        return "";

      token = this.getToken(true, true);
    }

    var count = values.length;
    switch (count) {
      case 1:
        before = values[0];
        after = before;
        break;
      case 2:
        before = values[0];
        after = values[1];
        break;
      default:
        return "";
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue("cue-before", before));
    aDecl.push(this._createJscsspDeclarationFromValue("cue-after", after));
    return before + " " + after;
  },

  parsePauseShorthand: function(token, declarations, aAcceptPriority)
  {
    var before = "";
    var after = "";

    var values = [];
    var values = [];
    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
      }

      else if (token.isDimensionOfUnit("ms")
               || token.isDimensionOfUnit("s")
               || token.isPercentage()
               || token.isNumber("0"))
        values.push(token.value);
      else
        return "";

      token = this.getToken(true, true);
    }

    var count = values.length;
    switch (count) {
      case 1:
        before = values[0];
        after = before;
        break;
      case 2:
        before = values[0];
        after = values[1];
        break;
      default:
        return "";
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue("pause-before", before));
    aDecl.push(this._createJscsspDeclarationFromValue("pause-after", after));
    return before + " " + after;
  },

  parseBorderWidthShorthand: function(token, aDecl, aAcceptPriority)
  {
    var top = null;
    var bottom = null;
    var left = null;
    var right = null;

    var values = [];
    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
      }
      
      else if (token.isDimension()
               || token.isNumber("0")
               || (token.isIdent() && token.value in this.kBORDER_WIDTH_NAMES)) {
        values.push(token.value);
      }
      else
        return "";

      token = this.getToken(true, true);
    }

    var count = values.length;
    switch (count) {
      case 1:
        top = values[0];
        bottom = top;
        left = top;
        right = top;
        break;
      case 2:
        top = values[0];
        bottom = top;
        left = values[1];
        right = left;
        break;
      case 3:
        top = values[0];
        left = values[1];
        right = left;
        bottom = values[2];
        break;
      case 4:
        top = values[0];
        right = values[1];
        bottom = values[2];
        left = values[3];
        break;
      default:
        return "";
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue("border-top-width", top));
    aDecl.push(this._createJscsspDeclarationFromValue("border-right-width", right));
    aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-width", bottom));
    aDecl.push(this._createJscsspDeclarationFromValue("border-left-width", left));
    return top + " " + right + " " + bottom + " " + left;
  },

  parseBorderStyleShorthand: function(token, aDecl, aAcceptPriority)
  {
    var top = null;
    var bottom = null;
    var left = null;
    var right = null;

    var values = [];
    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!values.length && token.isIdent(this.kINHERIT)) {
        values.push(token.value);
      }
      
      else if (token.isIdent() && token.value in this.kBORDER_STYLE_NAMES) {
        values.push(token.value);
      }
      else
        return "";

      token = this.getToken(true, true);
    }

    var count = values.length;
    switch (count) {
      case 1:
        top = values[0];
        bottom = top;
        left = top;
        right = top;
        break;
      case 2:
        top = values[0];
        bottom = top;
        left = values[1];
        right = left;
        break;
      case 3:
        top = values[0];
        left = values[1];
        right = left;
        bottom = values[2];
        break;
      case 4:
        top = values[0];
        right = values[1];
        bottom = values[2];
        left = values[3];
        break;
      default:
        return "";
    }
    this.forgetState();
    aDecl.push(this._createJscsspDeclarationFromValue("border-top-style", top));
    aDecl.push(this._createJscsspDeclarationFromValue("border-right-style", right));
    aDecl.push(this._createJscsspDeclarationFromValue("border-bottom-style", bottom));
    aDecl.push(this._createJscsspDeclarationFromValue("border-left-style", left));
    return top + " " + right + " " + bottom + " " + left;
  },

  parseBorderEdgeOrOutlineShorthand: function(token, aDecl, aAcceptPriority, aProperty)
  {
    var bWidth = null;
    var bStyle = null;
    var bColor = null;

    while (true) {
      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!bWidth && !bStyle && !bColor
               && token.isIdent(this.kINHERIT)) {
        bWidth = this.kINHERIT;
        bStyle = this.kINHERIT;
        bColor = this.kINHERIT;
      }

      else if (!bWidth &&
               (token.isDimension()
                || (token.isIdent() && token.value in this.kBORDER_WIDTH_NAMES)
                || token.isNumber("0"))) {
        bWidth = token.value;
      }

      else if (!bStyle &&
               (token.isIdent() && token.value in this.kBORDER_STYLE_NAMES)) {
        bStyle = token.value;
      }

      else {
        var color = (aProperty == "outline" && token.isIdent("invert"))
                    ? "invert" : this.parseColor(token);
        if (!bColor && color)
          bColor = color;
        else
          return "";
      }
      token = this.getToken(true, true);
    }

    // create the declarations
    this.forgetState();
    bWidth = bWidth ? bWidth : "medium";
    bStyle = bStyle ? bStyle : "none";
    bColor = bColor ? bColor : "-moz-initial";

    function addPropertyToDecl(aSelf, aDecl, property, w, s, c) {
      aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-width", w));
      aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-style", s));
      aDecl.push(aSelf._createJscsspDeclarationFromValue(property + "-color", c));
    }

    if (aProperty == "border") {
      addPropertyToDecl(this, aDecl, "border-top", bWidth, bStyle, bColor);
      addPropertyToDecl(this, aDecl, "border-right", bWidth, bStyle, bColor);
      addPropertyToDecl(this, aDecl, "border-bottom", bWidth, bStyle, bColor);
      addPropertyToDecl(this, aDecl, "border-left", bWidth, bStyle, bColor);
    }
    else
      addPropertyToDecl(this, aDecl, aProperty, bWidth, bStyle, bColor);
    return bWidth + " " + bStyle + " " + bColor;
  },

  parseBackgroundShorthand: function(token, aDecl, aAcceptPriority)
  {
    var kHPos = {"left": true, "right": true };

    var kVPos = {"top": true, "bottom": true };
    var kPos = {"left": true, "right": true, "top": true, "bottom": true, "center": true};

    var bgColor = null;
    var bgRepeat = null;
    var bgAttachment = null;
    var bgImage = null;
    var bgPosition = null;

    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!bgColor && !bgRepeat && !bgAttachment && !bgImage && !bgPosition
               && token.isIdent(this.kINHERIT)) {
        bgColor = this.kINHERIT;
        bgRepeat = this.kINHERIT;
        bgAttachment = this.kINHERIT;
        bgImage = this.kINHERIT;
        bgPosition = this.kINHERIT;
      }

      else {
        if (!bgAttachment &&
            (token.isIdent("scroll")
             || token.isIdent("fixed"))) {
          bgAttachment = token.value;
        }

        else if (!bgPosition &&
                 ((token.isIdent() && token.value in kPos)
                  || token.isDimension()
                  || token.isNumber("0")
                  || token.isPercentage())) {
          bgPosition = token.value;
          token = this.getToken(true, true);
          if (token.isDimension() || token.isNumber("0") || token.isPercentage()) {
            bgPosition += " " + token.value;
          }
          else if (token.isIdent() && token.value in kPos) {
            if ((bgPosition in kHPos && token.value in kHPos) ||
                (bgPosition in kVPos && token.value in kVPos))
              return "";
            bgPosition += " " + token.value;
          }
          else {
            this.ungetToken();
            bgPosition += " center";
          }
        }

        else if (!bgRepeat &&
                 (token.isIdent("repeat")
                  || token.isIdent("repeat-x")
                  || token.isIdent("repeat-y")
                  || token.isIdent("no-repeat"))) {
          bgRepeat = token.value;
        }

        else if (!bgImage &&
                 (token.isFunction("url(")
                  || token.isIdent("none"))) {
          bgImage = token.value;
          if (token.isFunction("url(")) {
            token = this.getToken(true, true);
            var url = this.parseURL(token); // TODO
            if (url)
              bgImage += url;
            else
              return "";
          }
        }

        else if (!bgImage &&
                 (token.isFunction("-moz-linear-gradient(")
                  || token.isFunction("-moz-radial-gradient(")
                  || token.isFunction("-moz-repeating-linear-gradient(")
                  || token.isFunction("-moz-repeating-radial-gradient("))) {
          var gradient = CssInspector.parseGradient(this, token);
          if (gradient)
            bgImage = CssInspector.serializeGradient(gradient);
          else
            return "";
        }

        else {
          var color = this.parseColor(token);
          if (!bgColor && color)
            bgColor = color;
          else
            return "";
        }

      }

      token = this.getToken(true, true);
    }

    // create the declarations
    this.forgetState();
    bgColor = bgColor ? bgColor : "transparent";
    bgImage = bgImage ? bgImage : "none";
    bgRepeat = bgRepeat ? bgRepeat : "repeat";
    bgAttachment = bgAttachment ? bgAttachment : "scroll";
    bgPosition = bgPosition ? bgPosition : "top left";

    aDecl.push(this._createJscsspDeclarationFromValue("background-color", bgColor));
    aDecl.push(this._createJscsspDeclarationFromValue("background-image", bgImage));
    aDecl.push(this._createJscsspDeclarationFromValue("background-repeat", bgRepeat));
    aDecl.push(this._createJscsspDeclarationFromValue("background-attachment", bgAttachment));
    aDecl.push(this._createJscsspDeclarationFromValue("background-position", bgPosition));
    return bgColor + " " + bgImage + " " + bgRepeat + " " + bgAttachment + " " + bgPosition;
  },

  parseListStyleShorthand: function(token, aDecl, aAcceptPriority)
  {
    var kPosition = { "inside": true, "outside": true };

    var lType = null;
    var lPosition = null;
    var lImage = null;

    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!lType && !lPosition && ! lImage
               && token.isIdent(this.kINHERIT)) {
        lType = this.kINHERIT;
        lPosition = this.kINHERIT;
        lImage = this.kINHERIT;
      }

      else if (!lType &&
               (token.isIdent() && token.value in this.kLIST_STYLE_TYPE_NAMES)) {
        lType = token.value;
      }

      else if (!lPosition &&
               (token.isIdent() && token.value in kPosition)) {
        lPosition = token.value;
      }

      else if (!lImage && token.isFunction("url")) {
        token = this.getToken(true, true);
        var urlContent = this.parseURL(token);
        if (urlContent) {
          lImage = "url(" + urlContent;
        }
        else
          return "";
      }
      else if (!token.isIdent("none"))
        return "";

      token = this.getToken(true, true);
    }

    // create the declarations
    this.forgetState();
    lType = lType ? lType : "none";
    lImage = lImage ? lImage : "none";
    lPosition = lPosition ? lPosition : "outside";

    aDecl.push(this._createJscsspDeclarationFromValue("list-style-type", lType));
    aDecl.push(this._createJscsspDeclarationFromValue("list-style-position", lPosition));
    aDecl.push(this._createJscsspDeclarationFromValue("list-style-image", lImage));
    return lType + " " + lPosition + " " + lImage;
  },

  parseFontShorthand: function(token, aDecl, aAcceptPriority)
  {
    var kStyle = {"italic": true, "oblique": true };
    var kVariant = {"small-caps": true };
    var kWeight = { "bold": true, "bolder": true, "lighter": true,
                      "100": true, "200": true, "300": true, "400": true,
                      "500": true, "600": true, "700": true, "800": true,
                      "900": true };
    var kSize = { "xx-small": true, "x-small": true, "small": true, "medium": true,
                    "large": true, "x-large": true, "xx-large": true,
                    "larger": true, "smaller": true };
    var kValues = { "caption": true, "icon": true, "menu": true, "message-box": true, "small-caption": true, "status-bar": true };
    var kFamily = { "serif": true, "sans-serif": true, "cursive": true, "fantasy": true, "monospace": true };

    var fStyle = null;
    var fVariant = null;
    var fWeight = null;
    var fSize = null;
    var fLineHeight = null;
    var fFamily = "";
    var fSystem = null;
    var fFamilyValues = [];

    var normalCount = 0;
    while (true) {

      if (!token.isNotNull())
        break;

      if (token.isSymbol(";")
          || (aAcceptPriority && token.isSymbol("!"))
          || token.isSymbol("}")) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      }

      else if (!fStyle && !fVariant && !fWeight
               && !fSize && !fLineHeight && !fFamily
               && !fSystem
               && token.isIdent(this.kINHERIT)) {
        fStyle = this.kINHERIT;
        fVariant = this.kINHERIT;
        fWeight = this.kINHERIT;
        fSize = this.kINHERIT;
        fLineHeight = this.kINHERIT;
        fFamily = this.kINHERIT;
        fSystem = this.kINHERIT;
      }

      else {
        if (!fSystem && (token.isIdent() && token.value in kValues)) {
          fSystem = token.value;
          break;
        }

        else {
          if (!fStyle
                   && token.isIdent()
                   && (token.value in kStyle)) {
            fStyle = token.value;
          }
  
          else if (!fVariant
                   && token.isIdent()
                   && (token.value in kVariant)) {
            fVariant = token.value;
          }
  
          else if (!fWeight
                   && (token.isIdent() || token.isNumber())
                   && (token.value in kWeight)) {
            fWeight = token.value;
          }
  
          else if (!fSize
                   && ((token.isIdent() && (token.value in kSize))
                       || token.isDimension()
                       || token.isPercentage())) {
            fSize = token.value;
            var token = this.getToken(false, false);
            if (token.isSymbol("/")) {
              token = this.getToken(false, false);
              if (!fLineHeight &&
                  (token.isDimension() || token.isNumber() || token.isPercentage())) {
                fLineHeight = token.value;
              }
              else
                return "";
            }
            else
              this.ungetToken();
          }

          else if (token.isIdent("normal")) {
            normalCount++;
            if (normalCount > 3)
              return "";
          }

          else if (!fFamily && // *MUST* be last to be tested here
                   (token.isString()
                    || token.isIdent())) {
            var lastWasComma = false;
            while (true) {
              if (!token.isNotNull())
                break;
              else if (token.isSymbol(";")
                  || (aAcceptPriority && token.isSymbol("!"))
                  || token.isSymbol("}")) {
                this.ungetToken();
                break;
              }
              else if (token.isIdent() && token.value in kFamily) {
                var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
                value.value = token.value;
                fFamilyValues.push(value);
                fFamily += token.value;
                break;
              }
              else if (token.isString() || token.isIdent()) {
                var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
                value.value = token.value;
                fFamilyValues.push(value);
                fFamily += token.value;
                lastWasComma = false;
              }
              else if (!lastWasComma && token.isSymbol(",")) {
                fFamily += ", ";
                lastWasComma = true;
              }
              else
                return "";
              token = this.getToken(true, true);
            }
          }

          else {
            return "";
          }
        }

      }

      token = this.getToken(true, true);
    }

    // create the declarations
    this.forgetState();
    if (fSystem) {
      aDecl.push(this._createJscsspDeclarationFromValue("font", fSystem));
      return fSystem;
    }
    fStyle = fStyle ? fStyle : "normal";
    fVariant = fVariant ? fVariant : "normal";
    fWeight = fWeight ? fWeight : "normal";
    fSize = fSize ? fSize : "medium";
    fLineHeight = fLineHeight ? fLineHeight : "normal";
    fFamily = fFamily ? fFamily : "-moz-initial";

    aDecl.push(this._createJscsspDeclarationFromValue("font-style", fStyle));
    aDecl.push(this._createJscsspDeclarationFromValue("font-variant", fVariant));
    aDecl.push(this._createJscsspDeclarationFromValue("font-weight", fWeight));
    aDecl.push(this._createJscsspDeclarationFromValue("font-size", fSize));
    aDecl.push(this._createJscsspDeclarationFromValue("line-height", fLineHeight));
    aDecl.push(this._createJscsspDeclarationFromValuesArray("font-family", fFamilyValues, fFamily));
    return fStyle + " " + fVariant + " " + fWeight + " " + fSize + "/" + fLineHeight + " " + fFamily;
  },

  _createJscsspDeclaration: function(property, value)
  {
    var decl = new jscsspDeclaration();
    decl.property = property;
    decl.value = this.trim11(value);
    decl.parsedCssText = property + ": " + value + ";";
    return decl;
  },

  _createJscsspDeclarationFromValue: function(property, valueText)
  {
    var decl = new jscsspDeclaration();
    decl.property = property;
    var value = new jscsspVariable(kJscsspPRIMITIVE_VALUE, null);
    value.value = valueText;
    decl.values = [value];
    decl.valueText = valueText;
    decl.parsedCssText = property + ": " + valueText + ";";
    return decl;
  },

  _createJscsspDeclarationFromValuesArray: function(property, values, valueText)
  {
    var decl = new jscsspDeclaration();
    decl.property = property;
    decl.values = values;
    decl.valueText = valueText;
    decl.parsedCssText = property + ": " + valueText + ";";
    return decl;
  },

  parseURL: function(token)
  {
    var value = "";
    if (token.isString())
    {
      value += token.value;
      token = this.getToken(true, true);
    }
    else
      while (true)
      {
        if (!token.isNotNull()) {
          this.reportError(kURL_EOF);
          return "";
        }
        if (token.isWhiteSpace()) {
          nextToken = this.lookAhead(true, true);
          // if next token is not a closing parenthesis, that's an error
          if (!nextToken.isSymbol(")")) {
            this.reportError(kURL_WS_INSIDE);
            token = this.currentToken();
            break;
          }
        }
        if (token.isSymbol(")")) {
          break;
        }
        value += token.value;
        token = this.getToken(false, false);
      }

    if (token.isSymbol(")")) {
      return value + ")";
    }
    return "";
  },

  parseFunctionArgument: function(token)
  {
    var value = "";
    if (token.isString())
    {
      value += token.value;
      token = this.getToken(true, true);
    }
    else {
      var parenthesis = 1;
      while (true)
      {
        if (!token.isNotNull())
          return "";
        if (token.isFunction() || token.isSymbol("("))
          parenthesis++;
        if (token.isSymbol(")")) {
          parenthesis--;
          if (!parenthesis)
            break;
        }
        value += token.value;
        token = this.getToken(false, false);
      }
    }

    if (token.isSymbol(")"))
      return value + ")";
    return "";
  },

  parseColor: function(token)
  {
    var color = "";
    if (token.isFunction("rgb(")
        || token.isFunction("rgba(")) {
      color = token.value;
      var isRgba = token.isFunction("rgba(")
      token = this.getToken(true, true);
      if (!token.isNumber() && !token.isPercentage())
        return "";
      color += token.value;
      token = this.getToken(true, true);
      if (!token.isSymbol(","))
        return "";
      color += ", ";
  
      token = this.getToken(true, true);
      if (!token.isNumber() && !token.isPercentage())
        return "";
      color += token.value;
      token = this.getToken(true, true);
      if (!token.isSymbol(","))
        return "";
      color += ", ";
  
      token = this.getToken(true, true);
      if (!token.isNumber() && !token.isPercentage())
        return "";
      color += token.value;
  
      if (isRgba) {
        token = this.getToken(true, true);
        if (!token.isSymbol(","))
          return "";
        color += ", ";
  
        token = this.getToken(true, true);
        if (!token.isNumber())
          return "";
        color += token.value;
      }
  
      token = this.getToken(true, true);
      if (!token.isSymbol(")"))
        return "";
      color += token.value;
    }
  
    else if (token.isFunction("hsl(")
             || token.isFunction("hsla(")) {
      color = token.value;
      var isHsla = token.isFunction("hsla(")
      token = this.getToken(true, true);
      if (!token.isNumber())
        return "";
      color += token.value;
      token = this.getToken(true, true);
      if (!token.isSymbol(","))
        return "";
      color += ", ";
  
      token = this.getToken(true, true);
      if (!token.isPercentage())
        return "";
      color += token.value;
      token = this.getToken(true, true);
      if (!token.isSymbol(","))
        return "";
      color += ", ";
  
      token = this.getToken(true, true);
      if (!token.isPercentage())
        return "";
      color += token.value;
  
      if (isHsla) {
        token = this.getToken(true, true);
        if (!token.isSymbol(","))
          return "";
        color += ", ";
  
        token = this.getToken(true, true);
        if (!token.isNumber())
          return "";
        color += token.value;
      }
  
      token = this.getToken(true, true);
      if (!token.isSymbol(")"))
        return "";
      color += token.value;
    }

    else if (token.isIdent()
             && (token.value in this.kCOLOR_NAMES))
      color = token.value;

    else if (token.isSymbol("#")) {
      token = this.getHexValue();
      if (!token.isHex())
        return "";
      var length = token.value.length;
      if (length != 3 && length != 6)
        return "";
      if (token.value.match( /[a-fA-F0-9]/g ).length != length)
        return "";
      color = "#" + token.value;
    }
    return color;
  },

  parseDeclaration: function(aToken, aDecl, aAcceptPriority, aExpandShorthands, aSheet) {
    this.preserveState();
    var blocks = [];
    if (aToken.isIdent()) {
      var descriptor = aToken.value.toLowerCase();
      var token = this.getToken(true, true);
      if (token.isSymbol(":")) {
        var token = this.getToken(true, true);

        var value = "";
        var declarations = [];
        if (aExpandShorthands)
          switch (descriptor) {
            case "background":
              value = this.parseBackgroundShorthand(token, declarations, aAcceptPriority);
              break;
            case "margin":
            case "padding":
              value = this.parseMarginOrPaddingShorthand(token, declarations, aAcceptPriority, descriptor);
              break;
            case "border-color":
              value = this.parseBorderColorShorthand(token, declarations, aAcceptPriority);
              break;
            case "border-style":
              value = this.parseBorderStyleShorthand(token, declarations, aAcceptPriority);
              break;
            case "border-width":
              value = this.parseBorderWidthShorthand(token, declarations, aAcceptPriority);
              break;
            case "border-top":
            case "border-right":
            case "border-bottom":
            case "border-left":
            case "border":
            case "outline":
              value = this.parseBorderEdgeOrOutlineShorthand(token, declarations, aAcceptPriority, descriptor);
              break;
            case "cue":
              value = this.parseCueShorthand(token, declarations, aAcceptPriority);
              break;
            case "pause":
              value = this.parsePauseShorthand(token, declarations, aAcceptPriority);
              break;
            case "font":
              value = this.parseFontShorthand(token, declarations, aAcceptPriority);
              break;
            case "list-style":
              value = this.parseListStyleShorthand(token, declarations, aAcceptPriority);
              break;
            default:
              value = this.parseDefaultPropertyValue(token, declarations, aAcceptPriority, descriptor, aSheet);
              break;
          }
        else
          value = this.parseDefaultPropertyValue(token, declarations, aAcceptPriority, descriptor, aSheet);
        token = this.currentToken();
        if (value) // no error above
        {
          var priority = false;
          if (token.isSymbol("!")) {
            token = this.getToken(true, true);
            if (token.isIdent("important")) {
              priority = true;
              token = this.getToken(true, true);
              if (token.isSymbol(";") || token.isSymbol("}")) {
                if (token.isSymbol("}"))
                  this.ungetToken();
              }
              else return "";
            }
            else return "";
          }
          else if  (token.isNotNull() && !token.isSymbol(";") && !token.isSymbol("}"))
            return "";
          for (var i = 0; i < declarations.length; i++) {
            declarations[i].priority = priority;
            aDecl.push(declarations[i]);
          }
          return descriptor + ": " + value + ";";
        }
      }
    }
    else if (aToken.isComment()) {
      if (this.mPreserveComments) {
        this.forgetState();
        var comment = new jscsspComment();
        comment.parsedCssText = aToken.value;
        aDecl.push(comment);
      }
      return aToken.value;
    }

    // we have an error here, let's skip it
    this.restoreState();
    var s = aToken.value;
    blocks = [];
    var token = this.getToken(false, false);
    while (token.isNotNull()) {
      s += token.value;
      if ((token.isSymbol(";") || token.isSymbol("}")) && !blocks.length) {
        if (token.isSymbol("}"))
          this.ungetToken();
        break;
      } else if (token.isSymbol("{")
                 || token.isSymbol("(")
                 || token.isSymbol("[")
                 || token.isFunction()) {
        blocks.push(token.isFunction() ? "(" : token.value);
      } else if (token.isSymbol("}")
                 || token.isSymbol(")")
                 || token.isSymbol("]")) {
        if (blocks.length) {
          var ontop = blocks[blocks.length - 1];
          if ((token.isSymbol("}") && ontop == "{")
              || (token.isSymbol(")") && ontop == "(")
              || (token.isSymbol("]") && ontop == "[")) {
            blocks.pop();
          }
        }
      }
      token = this.getToken(false, false);
    }
    return "";
  },

  parseKeyframesRule: function(aToken, aSheet) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    var keyframesRule = new jscsspKeyframesRule();
    keyframesRule.currentLine = currentLine;
    this.preserveState();
    var token = this.getToken(true, true);
    var foundName = false;
    while (token.isNotNull()) {
      if (token.isIdent()) {
        // should be the keyframes' name
        foundName = true;
        s += " " + token.value;
        keyframesRule.name = token.value;
        token = this.getToken(true, true);
        if (token.isSymbol("{"))
          this.ungetToken();
        else {
          // error...
          token.type = jscsspToken.NULL_TYPE;
          break;
        }
      }
      else if (token.isSymbol("{")) {
        if (!foundName) {
          token.type = jscsspToken.NULL_TYPE;
          // not a valid keyframes at-rule
        }
        break;
      }
      else {
        token.type = jscsspToken.NULL_TYPE;
        // not a valid keyframes at-rule
        break;
      }
      token = this.getToken(true, true);
    }

    if (token.isSymbol("{") && keyframesRule.name) {
      // ok let's parse keyframe rules now...
      s += " { ";
      token = this.getToken(true, false);
      while (token.isNotNull()) {
        if (token.isComment() && this.mPreserveComments) {
          s += " " + token.value;
          var comment = new jscsspComment();
          comment.parsedCssText = token.value;
          keyframesRule.cssRules.push(comment);
        } else if (token.isSymbol("}")) {
          valid = true;
          break;
        } else {
          var r = this.parseKeyframeRule(token, keyframesRule, true);
          if (r)
            s += r;
        }
        token = this.getToken(true, false);
      }
    }
    if (valid) {
      this.forgetState();
      keyframesRule.currentLine = currentLine;
      keyframesRule.parsedCssText = s;
      aSheet.cssRules.push(keyframesRule);
      return true;
    }
    this.restoreState();
    return false;
  },

  parseKeyframeRule: function(aToken, aOwner) {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    this.preserveState();
    var token = aToken;

    // find the keyframe keys
    var key = "";
    while (token.isNotNull()) {
      if (token.isIdent() || token.isPercentage()) {
        if (token.isIdent()
            && !token.isIdent("from")
            && !token.isIdent("to")) {
          key = "";
          break;
        }
        key += token.value;
        token = this.getToken(true, true);
        if (token.isSymbol("{")) {
          this.ungetToken();
          break;
        }
        else 
          if (token.isSymbol(",")) {
            key += ", ";
          }
          else {
            key = "";
            break;
          }
      }
      else {
        key = "";
        break;
      }
      token = this.getToken(true, true);
    }

    var valid = false;
    var declarations = [];
    if (key) {
      var s = key;
      token = this.getToken(true, true);
      if (token.isSymbol("{")) {
        s += " { ";
        token = this.getToken(true, false);
        while (true) {
          if (!token.isNotNull()) {
            valid = true;
            break;
          }
          if (token.isSymbol("}")) {
            s += "}";
            valid = true;
            break;
          } else {
            var d = this.parseDeclaration(token, declarations, true, true, aOwner);
            s += ((d && declarations.length) ? " " : "") + d;
          }
          token = this.getToken(true, false);
        }
      }
    }
    else {
      // key is invalid so the whole rule is invalid with it
    }

    if (valid) {
      var rule = new jscsspKeyframeRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.declarations = declarations;
      rule.keyText = key;
      rule.parentRule = aOwner;
      aOwner.cssRules.push(rule);
      return s;
    }
    this.restoreState();
    s = this.currentToken().value;
    this.addUnknownAtRule(aOwner, s);
    return "";
  },

  parseMediaRule: function(aToken, aSheet) {
	this.mScanner.mMediaQueryMode = true;
	var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    var s = aToken.value;
    var valid = false;
    var mediaRule = new jscsspMediaRule();
    mediaRule.currentLine = currentLine;
    this.preserveState();
    var token = this.getToken(true, true);
    var foundMedia = false;
    while (token.isNotNull()) {
      if (token.isIdent()) {
        foundMedia = true;
        s += " " + token.value;
  		mediaRule.media.push(token.value);
        token = this.getToken(true, true);
        if (token.isSymbol(",")) {
          s += ",";
        } else {
          if (token.isSymbol("{"))
            this.ungetToken();
          else {
            // error...
            token.type = jscsspToken.NULL_TYPE;
            break;
          }
        }
      }
      else if (token.isSymbol("{"))
        break;
      else if (foundMedia) {
        token.type = jscsspToken.NULL_TYPE;
        // not a media list
        break;
      }
      token = this.getToken(true, true);
    }
    if (token.isSymbol("{") && mediaRule.media.length) {
      // ok let's parse style rules now...
      s += " { ";
      token = this.getToken(true, false);
      while (token.isNotNull()) {
        if (token.isComment() && this.mPreserveComments) {
          s += " " + token.value;
          var comment = new jscsspComment();
          comment.parsedCssText = token.value;
          mediaRule.cssRules.push(comment);
        } else if (token.isSymbol("}")) {
          valid = true;
          break;
        } else {
          var r = this.parseStyleRule(token, mediaRule, true);
          if (r)
            s += r;
        }
        token = this.getToken(true, false);
      }
    }
	if (valid) {
      this.forgetState();
      mediaRule.parsedCssText = s;
      aSheet.cssRules.push(mediaRule);
      return true;
    }
    this.restoreState();
    return false;
  },


  trim11: function(str) {
    str = str.replace(/^\s+/, '');
    for (var i = str.length - 1; i >= 0; i--) {
      if (/\S/.test( str.charAt(i) )) { // XXX charat
        str = str.substring(0, i + 1);
        break;
      }
    }
    return str;
  },

  parseStyleRule: function(aToken, aOwner, aIsInsideMediaRule)
  {
    var currentLine = CountLF(this.mScanner.getAlreadyScanned());
    this.preserveState();
    // first let's see if we have a selector here...
    var selector = this.parseSelector(aToken, false);
    var valid = false;
    var declarations = [];
    if (selector) {
      selector = this.trim11(selector.selector);
      var s = selector;
      var token = this.getToken(true, true);
      if (token.isSymbol("{")) {
        s += " { ";
        var token = this.getToken(true, false);
        while (true) {
          if (!token.isNotNull()) {
            valid = true;
            break;
          }
          if (token.isSymbol("}")) {
            s += "}";
            valid = true;
            break;
          } else {
            var d = this.parseDeclaration(token, declarations, true, true, aOwner);
            s += ((d && declarations.length) ? " " : "") + d;
          }
          token = this.getToken(true, false);
        }
      }
    }
    else {
      // selector is invalid so the whole rule is invalid with it
    }

    if (valid) {
      var rule = new jscsspStyleRule();
      rule.currentLine = currentLine;
      rule.parsedCssText = s;
      rule.declarations = declarations;
      rule.mSelectorText = selector;
      if (aIsInsideMediaRule)
        rule.parentRule = aOwner;
      else
        rule.parentStyleSheet = aOwner;
      aOwner.cssRules.push(rule);
      return s;
    }
    this.restoreState();
    s = this.currentToken().value;
    this.addUnknownAtRule(aOwner, s);
    return "";
  },

  parseSelector: function(aToken, aParseSelectorOnly) {
    var s = "";
    var specificity = {a: 0, b: 0, c: 0, d: 0}; // CSS 2.1 section 6.4.3
    var isFirstInChain = true;
    var token = aToken;
    var valid = false;
    var combinatorFound = false;
    while (true) {
      if (!token.isNotNull()) {
        if (aParseSelectorOnly)
          return {selector: s, specificity: specificity };
        return "";
      }

      if (!aParseSelectorOnly && token.isSymbol("{")) {
        // end of selector
        valid = !combinatorFound;
	if (valid) this.ungetToken();
        break;
      }

      if (token.isSymbol(",")) { // group of selectors
        s += token.value;
        isFirstInChain = true;
        combinatorFound = false;
        token = this.getToken(false, true);
        continue;
      }
      // now combinators and grouping...
      else if (!combinatorFound
	       && (token.isWhiteSpace()
		    || token.isSymbol(">")
                    || token.isSymbol("+")
                    || token.isSymbol("~"))) {
	if (token.isWhiteSpace()) {
          s += " ";
	  var nextToken = this.lookAhead(true, true);
	  if (!nextToken.isNotNull()) {
            if (aParseSelectorOnly)
              return {selector: s, specificity: specificity };
	    return "";
	  }
	  if (nextToken.isSymbol(">")
	      || nextToken.isSymbol("+")
	      || nextToken.isSymbol("~")) {
            token = this.getToken(true, true);
	    s += token.value + " ";
	    combinatorFound = true;
	  }
	}
        else {
          s += token.value;
	  combinatorFound = true;
	}
	isFirstInChain = true;
        token = this.getToken(true, true);
        continue;
      }
      else {
        var simpleSelector = this.parseSimpleSelector(token, isFirstInChain, true);
        if (!simpleSelector)
          break; // error
        s += simpleSelector.selector;
        specificity.b += simpleSelector.specificity.b;
        specificity.c += simpleSelector.specificity.c;
        specificity.d += simpleSelector.specificity.d;
	isFirstInChain = false;
	combinatorFound = false;
      }

      token = this.getToken(false, true);
    }

    if (valid) {
      return {selector: s, specificity: specificity };
    }
    return "";
  },

  isPseudoElement: function(aIdent)
  {
    switch (aIdent) {
      case "first-letter":
      case "first-line":
      case "before":
      case "after":
      case "marker":
        return true;
        break;
      default: return false;
        break;
    }
  },

  parseSimpleSelector: function(token, isFirstInChain, canNegate)
  {
    var s = "";
    var specificity = {a: 0, b: 0, c: 0, d: 0}; // CSS 2.1 section 6.4.3
    
    if (isFirstInChain
        && (token.isSymbol("*") || token.isSymbol("|") || token.isIdent())) {
      // type or universal selector
      if (token.isSymbol("*") || token.isIdent()) {
        // we don't know yet if it's a prefix or a universal
        // selector
        s += token.value;
        var isIdent = token.isIdent();
        token = this.getToken(false, true);
        if (token.isSymbol("|")) {
          // it's a prefix
          s += token.value;
          token = this.getToken(false, true);
          if (token.isIdent() || token.isSymbol("*")) {
            // ok we now have a type element or universal
            // selector
            s += token.value;
            if (token.isIdent())
              specificity.d++;
          } else
            // oops that's an error...
            return null;
        } else {
          this.ungetToken();
          if (isIdent)
            specificity.d++;
        }
      } else if (token.isSymbol("|")) {
        s += token.value;
        token = this.getToken(false, true);
        if (token.isIdent() || token.isSymbol("*")) {
          s += token.value;
          if (token.isIdent())
            specificity.d++;
        } else
          // oops that's an error
          return null;
      }
    }
  
    else if (token.isSymbol(".") || token.isSymbol("#")) {
      var isClass = token.isSymbol(".");
      s += token.value;
      token = this.getToken(false, true);
      if (token.isIdent()) {
        s += token.value;
        if (isClass)
          specificity.c++;
        else
          specificity.b++;
      }
      else
        return null;
    }

    else if (token.isSymbol(":")) {
      s += token.value;
      token = this.getToken(false, true);
      if (token.isSymbol(":")) {
        s += token.value;
        token = this.getToken(false, true);
      }
      if (token.isIdent()) {
        s += token.value;
        if (this.isPseudoElement(token.value))
          specificity.d++;
        else
          specificity.c++;
      }
      else if (token.isFunction()) {
        s += token.value;
        if (token.isFunction(":not(")) {
          if (!canNegate)
            return null;
          token = this.getToken(true, true);
          var simpleSelector = this.parseSimpleSelector(token, isFirstInChain, false);
          if (!simpleSelector)
            return null;
          else {
            s += simpleSelector.selector;
            token = this.getToken(true, true);
            if (token.isSymbol(")"))
              s += ")";
            else
              return null;
          }
          specificity.c++;
        }
        else {
          while (true) {
            token = this.getToken(false, true);
            if (token.isSymbol(")")) {
              s += ")";
              break;
            } else
              s += token.value;
          }
          specificity.c++;
        }
      } else
        return null;
  
    } else if (token.isSymbol("[")) {
      s += "[";
      token = this.getToken(true, true);
      if (token.isIdent() || token.isSymbol("*")) {
        s += token.value;
        var nextToken = this.getToken(true, true);
        if (token.isSymbol("|")) {
          s += "|";
          token = this.getToken(true, true);
          if (token.isIdent())
            s += token.value;
          else
            return null;
        } else
          this.ungetToken();
      } else if (token.isSymbol("|")) {
        s += "|";
        token = this.getToken(true, true);
        if (token.isIdent())
          s += token.value;
        else
          return null;
      }
      else
        return null;
  
      // nothing, =, *=, $=, ^=, |=
      token = this.getToken(true, true);
      if (token.isIncludes()
          || token.isDashmatch()
          || token.isBeginsmatch()
          || token.isEndsmatch()
          || token.isContainsmatch()
          || token.isSymbol("=")) {
        s += token.value;
        token = this.getToken(true, true);
        if (token.isString() || token.isIdent()) {
          s += token.value;
          token = this.getToken(true, true);
        }
        else
          return null;
    
        if (token.isSymbol("]")) {
          s += token.value;
          specificity.c++;
        }
        else
          return null;
      }
      else if (token.isSymbol("]")) {
        s += token.value;
        specificity.c++;
      }
      else
        return null;
        
    }
    else if (token.isWhiteSpace()) {
      var t = this.lookAhead(true, true);
      if (t.isSymbol('{'))
        return ""
    }
    if (s)
      return {selector: s, specificity: specificity };
    return null;
  },

  preserveState: function() {
    this.mPreservedTokens.push(this.currentToken());
    this.mScanner.preserveState();
  },

  restoreState: function() {
    if (this.mPreservedTokens.length) {
      this.mScanner.restoreState();
      this.mToken = this.mPreservedTokens.pop();
    }
  },

  forgetState: function() {
    if (this.mPreservedTokens.length) {
      this.mScanner.forgetState();
      this.mPreservedTokens.pop();
    }
  },

  parse: function(aString, aTryToPreserveWhitespaces, aTryToPreserveComments) {
    if (!aString)
      return null; // early way out if we can

    this.mPreserveWS       = aTryToPreserveWhitespaces;
    this.mPreserveComments = aTryToPreserveComments;
    this.mPreservedTokens = [];
    this.mScanner.init(aString);
    var sheet = new jscsspStylesheet();

    // @charset can only appear at first char of the stylesheet
    var token = this.getToken(false, false);
    if (!token.isNotNull())
      return;
    if (token.isAtRule("@charset")) {
      this.parseCharsetRule(token, sheet);
      token = this.getToken(false, false);
    }

    var foundStyleRules = false;
    var foundImportRules = false;
    var foundNameSpaceRules = false;
    while (true) {
      if (!token.isNotNull())
        break;
      if (token.isWhiteSpace())
      {
        if (aTryToPreserveWhitespaces)
          this.addWhitespace(sheet, token.value);
      }

      else if (token.isComment())
      {
        if (this.mPreserveComments)
          this.addComment(sheet, token.value);
      }

      else if (token.isAtRule()) {
        if (token.isAtRule("@variables")) {
          if (!foundImportRules && !foundStyleRules)
            this.parseVariablesRule(token, sheet);
          else {
            this.reportError(kVARIABLES_RULE_POSITION);
            this.addUnknownAtRule(sheet, token.value);
          }
        }
        else if (token.isAtRule("@import")) {
          // @import rules MUST occur before all style and namespace
          // rules
          if (!foundStyleRules && !foundNameSpaceRules)
            foundImportRules = this.parseImportRule(token, sheet);
          else {
            this.reportError(kIMPORT_RULE_POSITION);
            this.addUnknownAtRule(sheet, token.value);
          }
        }
        else if (token.isAtRule("@namespace")) {
          // @namespace rules MUST occur before all style rule and
          // after all @import rules
          if (!foundStyleRules)
            foundNameSpaceRules = this.parseNamespaceRule(token, sheet);
          else {
            this.reportError(kNAMESPACE_RULE_POSITION);
            this.addUnknownAtRule(sheet, token.value);
          }
        }
        else if (token.isAtRule("@font-face")) {
          if (this.parseFontFaceRule(token, sheet))
            foundStyleRules = true;
          else
            this.addUnknownAtRule(sheet, token.value);
        }
        else if (token.isAtRule("@page")) {
          if (this.parsePageRule(token, sheet))
            foundStyleRules = true;
          else
            this.addUnknownAtRule(sheet, token.value);
        }
        else if (token.isAtRule("@media")) {
          if (this.parseMediaRule(token, sheet))
            foundStyleRules = true;
          else
            this.addUnknownAtRule(sheet, token.value);
        }
        else if (token.isAtRule("@keyframes")) {
          if (!this.parseKeyframesRule(token, sheet))
            this.addUnknownAtRule(sheet, token.value);
        }
        else if (token.isAtRule("@charset")) {
          this.reportError(kCHARSET_RULE_CHARSET_SOF);
          this.addUnknownAtRule(sheet, token.value);
        }
        else {
          this.reportError(kUNKNOWN_AT_RULE);
          this.addUnknownAtRule(sheet, token.value);
        }
      }

      else // plain style rules
      {
        var ruleText = this.parseStyleRule(token, sheet, false);
        if (ruleText)
          foundStyleRules = true;
      }
      token = this.getToken(false);
    }

    return sheet;
  }

};


function jscsspToken(aType, aValue, aUnit)
{
  this.type = aType;
  this.value = aValue;
  this.unit = aUnit;
}

jscsspToken.NULL_TYPE = 0;

jscsspToken.WHITESPACE_TYPE = 1;
jscsspToken.STRING_TYPE = 2;
jscsspToken.COMMENT_TYPE = 3;
jscsspToken.NUMBER_TYPE = 4;
jscsspToken.IDENT_TYPE = 5;
jscsspToken.FUNCTION_TYPE = 6;
jscsspToken.ATRULE_TYPE = 7;
jscsspToken.INCLUDES_TYPE = 8;
jscsspToken.DASHMATCH_TYPE = 9;
jscsspToken.BEGINSMATCH_TYPE = 10;
jscsspToken.ENDSMATCH_TYPE = 11;
jscsspToken.CONTAINSMATCH_TYPE = 12;
jscsspToken.SYMBOL_TYPE = 13;
jscsspToken.DIMENSION_TYPE = 14;
jscsspToken.PERCENTAGE_TYPE = 15;
jscsspToken.HEX_TYPE = 16;

jscsspToken.prototype = {

  isNotNull: function ()
  {
    return this.type;
  },

  _isOfType: function (aType, aValue)
  {
    return (this.type == aType && (!aValue || this.value.toLowerCase() == aValue));
  },

  isWhiteSpace: function(w)
  {
    return this._isOfType(jscsspToken.WHITESPACE_TYPE, w);
  },

  isString: function()
  {
    return this._isOfType(jscsspToken.STRING_TYPE);
  },

  isComment: function()
  {
    return this._isOfType(jscsspToken.COMMENT_TYPE);
  },

  isNumber: function(n)
  {
    return this._isOfType(jscsspToken.NUMBER_TYPE, n);
  },

  isSymbol: function(c)
  {
    return this._isOfType(jscsspToken.SYMBOL_TYPE, c);
  },

  isIdent: function(i)
  {
    return this._isOfType(jscsspToken.IDENT_TYPE, i);
  },

  isFunction: function(f)
  {
    return this._isOfType(jscsspToken.FUNCTION_TYPE, f);
  },

  isAtRule: function(a)
  {
    return this._isOfType(jscsspToken.ATRULE_TYPE, a);
  },

  isIncludes: function()
  {
    return this._isOfType(jscsspToken.INCLUDES_TYPE);
  },

  isDashmatch: function()
  {
    return this._isOfType(jscsspToken.DASHMATCH_TYPE);
  },

  isBeginsmatch: function()
  {
    return this._isOfType(jscsspToken.BEGINSMATCH_TYPE);
  },

  isEndsmatch: function()
  {
    return this._isOfType(jscsspToken.ENDSMATCH_TYPE);
  },

  isContainsmatch: function()
  {
    return this._isOfType(jscsspToken.CONTAINSMATCH_TYPE);
  },

  isSymbol: function(c)
  {
    return this._isOfType(jscsspToken.SYMBOL_TYPE, c);
  },

  isDimension: function()
  {
    return this._isOfType(jscsspToken.DIMENSION_TYPE);
  },

  isPercentage: function()
  {
    return this._isOfType(jscsspToken.PERCENTAGE_TYPE);
  },

  isHex: function()
  {
    return this._isOfType(jscsspToken.HEX_TYPE);
  },

  isDimensionOfUnit: function(aUnit)
  {
    return (this.isDimension() && this.unit == aUnit);
  },

  isLength: function()
  {
    return (this.isPercentage() ||
            this.isDimensionOfUnit("cm") ||
            this.isDimensionOfUnit("mm") ||
            this.isDimensionOfUnit("in") ||
            this.isDimensionOfUnit("pc") ||
            this.isDimensionOfUnit("px") ||
            this.isDimensionOfUnit("em") ||
            this.isDimensionOfUnit("ex") ||
            this.isDimensionOfUnit("pt"));
  },

  isAngle: function()
  {
    return (this.isDimensionOfUnit("deg") ||
            this.isDimensionOfUnit("rad") ||
            this.isDimensionOfUnit("grad"));
  }
}

var kJscsspUNKNOWN_RULE   = 0;
var kJscsspSTYLE_RULE     = 1
var kJscsspCHARSET_RULE   = 2;
var kJscsspIMPORT_RULE    = 3;
var kJscsspMEDIA_RULE     = 4;
var kJscsspFONT_FACE_RULE = 5;
var kJscsspPAGE_RULE      = 6;

var kJscsspKEYFRAMES_RULE = 7;
var kJscsspKEYFRAME_RULE  = 8;

var kJscsspNAMESPACE_RULE = 100;
var kJscsspCOMMENT        = 101;
var kJscsspWHITE_SPACE    = 102;

var kJscsspVARIABLES_RULE = 200;

var kJscsspSTYLE_DECLARATION = 1000;

var gTABS = "";

function jscsspStylesheet()
{
  this.cssRules = [];
  this.variables = {};
}

jscsspStylesheet.prototype = {
  insertRule: function(aRule, aIndex) {
    try {
     this.cssRules.splice(aIndex, 1, aRule);
    }
    catch(e) {
    }
  },

  deleteRule: function(aIndex) {
    try {
      this.cssRules.splice(aIndex);
    }
    catch(e) {
    }
  },

  cssText: function() {
    var rv = "";
    for (var i = 0; i < this.cssRules.length; i++)
      rv += this.cssRules[i].cssText() + "\n";
    return rv;
  },

  resolveVariables: function(aMedium) {

    function ItemFoundInArray(aArray, aItem) {
      for (var i = 0; i < aArray.length; i++)
        if (aItem == aArray[i])
          return true;
      return false;
    }
    
    for (var i = 0; i < this.cssRules.length; i++)
    {
      var rule = this.cssRules[i];
      if (rule.type == kJscsspSTYLE_RULE || rule.type == kJscsspIMPORT_RULE)
        break;
      else if (rule.type == kJscsspVARIABLES_RULE &&
               (!rule.media.length || ItemFoundInArray(rule.media, aMedium))) {
        
        for (var j = 0; j < rule.declarations.length; j++) {
          var valueText = "";
          for (var k = 0; k < rule.declarations[j].values.length; k++)
            valueText += (k ? " " : "") + rule.declarations[j].values[k].value;
          this.variables[rule.declarations[j].property] = valueText;
        }
      }
    }
  }
};

/* kJscsspCHARSET_RULE */

function jscsspCharsetRule()
{
  this.type = kJscsspCHARSET_RULE;
  this.encoding = null;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspCharsetRule.prototype = {

  cssText: function() {
    return "@charset " + this.encoding + ";";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(false, false);
    if (token.isAtRule("@charset")) {
      if (parser.parseCharsetRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.encoding = newRule.encoding;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspUNKNOWN_RULE */

function jscsspErrorRule(aErrorMsg)
{
  this.error = aErrorMsg ? aErrorMsg : "INVALID"; 
  this.type = kJscsspUNKNOWN_RULE;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspErrorRule.prototype = {
  cssText: function() {
    return this.parsedCssText;
  }
};

/* kJscsspCOMMENT */

function jscsspComment()
{
  this.type = kJscsspCOMMENT;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspComment.prototype = {
  cssText: function() {
    return this.parsedCssText;
  },

  setCssText: function(val) {
    var parser = new CSSParser(val);
    var token = parser.getToken(true, false);
    if (token.isComment())
      this.parsedCssText = token.value;
    else
      throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspWHITE_SPACE */

function jscsspWhitespace()
{
  this.type = kJscsspWHITE_SPACE;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspWhitespace.prototype = {
  cssText: function() {
    return this.parsedCssText;
  }
};

/* kJscsspIMPORT_RULE */

function jscsspImportRule()
{
  this.type = kJscsspIMPORT_RULE;
  this.parsedCssText = null;
  this.href = null;
  this.media = []; 
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspImportRule.prototype = {
  cssText: function() {
    var mediaString = this.media.join(", ");
    return "@import " + this.href
                      + ((mediaString && mediaString != "all") ? mediaString + " " : "")
                      + ";";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule("@import")) {
      if (parser.parseImportRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.href = newRule.href;
        this.media = newRule.media;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspNAMESPACE_RULE */

function jscsspNamespaceRule()
{
  this.type = kJscsspNAMESPACE_RULE;
  this.parsedCssText = null;
  this.prefix = null;
  this.url = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspNamespaceRule.prototype = {
  cssText: function() {
    return "@namespace " + (this.prefix ? this.prefix + " ": "")
                        + this.url
                        + ";";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule("@namespace")) {
      if (parser.parseNamespaceRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.url = newRule.url;
        this.prefix = newRule.prefix;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspSTYLE_DECLARATION */

function jscsspDeclaration()
{
  this.type = kJscsspSTYLE_DECLARATION;
  this.property = null;
  this.values = [];
  this.valueText = null;
  this.priority = null;
  this.parsedCssText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspDeclaration.prototype = {
  kCOMMA_SEPARATED: {
    "cursor": true,
    "font-family": true,
    "voice-family": true,
    "background-image": true
  },

  kUNMODIFIED_COMMA_SEPARATED_PROPERTIES: {
    "text-shadow": true,
    "box-shadow": true,
    "-moz-transition": true,
    "-moz-transition-property": true,
    "-moz-transition-duration": true,
    "-moz-transition-timing-function": true,
    "-moz-transition-delay": true
  },

  cssText: function() {
    var prefixes = CssInspector.prefixesForProperty(this.property);

    if (this.property in this.kUNMODIFIED_COMMA_SEPARATED_PROPERTIES) {
      if (prefixes) {
        var rv = "";
        for (var propertyIndex = 0; propertyIndex < prefixes.length; propertyIndex++) {
          var property = prefixes[propertyIndex];
          rv += (propertyIndex ? gTABS : "") + property + ": ";
          rv += this.valueText + (this.priority ? " !important" : "") + ";";
          rv += ((prefixes.length > 1 && propertyIndex != prefixes.length -1) ? "\n" : "");
        }
        return rv;
      }
      return this.property + ": " + this.valueText +
             (this.priority ? " !important" : "") + ";"
    }

    if (prefixes) {
      var rv = "";
      for (var propertyIndex = 0; propertyIndex < prefixes.length; propertyIndex++) {
        var property = prefixes[propertyIndex];
        rv += (propertyIndex ? gTABS : "") + property + ": ";
        var separator = (property in this.kCOMMA_SEPARATED) ? ", " : " ";
        for (var i = 0; i < this.values.length; i++)
          if (this.values[i].cssText() != null)
            rv += (i ? separator : "") + this.values[i].cssText();
          else
            return null;
        rv += (this.priority ? " !important" : "") + ";" +
              ((prefixes.length > 1 && propertyIndex != prefixes.length -1) ? "\n" : "");
      }
      return rv;
    }

    var rv = this.property + ": ";
    var separator = (this.property in this.kCOMMA_SEPARATED) ? ", " : " ";
    var extras = {"webkit": false, "presto": false, "trident": false, "generic": false }
    for (var i = 0; i < this.values.length; i++) {
      var v = this.values[i].cssText();
      if (v != null) {
        var paren = v.indexOf("(");
        var kwd = v;
        if (paren != -1)
          kwd = v.substr(0, paren);
        if (kwd in kCSS_VENDOR_VALUES) {
          for (var j in kCSS_VENDOR_VALUES[kwd]) {
            extras[j] = extras[j] || (kCSS_VENDOR_VALUES[kwd][j] != "");
          }
        }
        rv += (i ? separator : "") + v;
      }
      else
        return null;
    }
    rv += (this.priority ? " !important" : "") + ";";

    for (var j in extras) {
      if (extras[j]) {
        var str = "\n" + gTABS +  this.property + ": ";
        for (var i = 0; i < this.values.length; i++) {
          var v = this.values[i].cssText();
          if (v != null) {
            var paren = v.indexOf("(");
            var kwd = v;
            if (paren != -1)
              kwd = v.substr(0, paren);
            if (kwd in kCSS_VENDOR_VALUES) {
              functor = kCSS_VENDOR_VALUES[kwd][j];
              if (functor) {
                v = (typeof functor == "string") ? functor : functor(v, j);
                if (!v) {
                  str = null;
                  break;
                }
              }
            }
            str += (i ? separator : "") + v;
          }
          else
            return null;
        }
        if (str)
          rv += str + ";"
        else
          rv += "\n" + gTABS + "/* Impossible to translate property " + this.property + " for " + j + " */";
      }
    }
    return rv;
  },

  setCssText: function(val) {
    var declarations = [];
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (parser.parseDeclaration(token, declarations, true, true, null)
        && declarations.length
        && declarations[0].type == kJscsspSTYLE_DECLARATION) {
      var newDecl = declarations.cssRules[0];
      this.property = newDecl.property;
      this.value = newDecl.value;
      this.priority = newDecl.priority;
      this.parsedCssText = newRule.parsedCssText;
      return;
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspFONT_FACE_RULE */

function jscsspFontFaceRule()
{
  this.type = kJscsspFONT_FACE_RULE;
  this.parsedCssText = null;
  this.descriptors = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspFontFaceRule.prototype = {
  cssText: function() {
    var rv = gTABS + "@font-face {\n";
    var preservedGTABS = gTABS;
    gTABS += "  ";
    for (var i = 0; i < this.descriptors.length; i++)
      rv += gTABS + this.descriptors[i].cssText() + "\n";
    gTABS = preservedGTABS;
    return rv + gTABS + "}";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule("@font-face")) {
      if (parser.parseFontFaceRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.descriptors = newRule.descriptors;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspKEYFRAMES_RULE */
function jscsspKeyframesRule()
{
  this.type = kJscsspKEYFRAMES_RULE;
  this.parsedCssText = null;
  this.cssRules = [];
  this.name = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspKeyframesRule.prototype = {
  cssText: function() {
    var rv = gTABS
               + "@keyframes "
               + this.name + " {\n";
    var preservedGTABS = gTABS;
    gTABS += "  ";
    for (var i = 0; i < this.cssRules.length; i++)
      rv += gTABS + this.cssRules[i].cssText() + "\n";
    gTABS = preservedGTABS;
    rv += gTABS + "}\n";
    return rv;
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule("@keyframes")) {
      if (parser.parseKeyframesRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.cssRules = newRule.cssRules;
        this.name = newRule.name;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspKEYFRAME_RULE */
function jscsspKeyframeRule()
{
  this.type = kJscsspKEYFRAME_RULE;
  this.parsedCssText = null;
  this.declarations = []
  this.keyText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspKeyframeRule.prototype = {
  cssText: function() {
    var rv = this.keyText + " {\n";
    var preservedGTABS = gTABS;
    gTABS += "  ";
    for (var i = 0; i < this.declarations.length; i++) {
      var declText = this.declarations[i].cssText();
      if (declText)
        rv += gTABS + this.declarations[i].cssText() + "\n";
    }
    gTABS = preservedGTABS;
    return rv + gTABS + "}";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (!token.isNotNull()) {
      if (parser.parseKeyframeRule(token, sheet, false)) {
        var newRule = sheet.cssRules[0];
        this.keyText = newRule.keyText;
        this.declarations = newRule.declarations;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspMEDIA_RULE */

function jscsspMediaRule()
{
  this.type = kJscsspMEDIA_RULE;
  this.parsedCssText = null;
  this.cssRules = [];
  this.media = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspMediaRule.prototype = {
  cssText: function() {
    var rv = gTABS + "@media " + this.media.join(", ") + " {\n";
    var preservedGTABS = gTABS;
    gTABS += "  ";
    for (var i = 0; i < this.cssRules.length; i++)
      rv += gTABS + this.cssRules[i].cssText() + "\n";
    gTABS = preservedGTABS;
    return rv + gTABS + "}";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule("@media")) {
      if (parser.parseMediaRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.cssRules = newRule.cssRules;
        this.media = newRule.media;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspSTYLE_RULE */

function jscsspStyleRule()
{
  this.type = kJscsspSTYLE_RULE;
  this.parsedCssText = null;
  this.declarations = []
  this.mSelectorText = null;
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspStyleRule.prototype = {
  cssText: function() {
    var rv = this.mSelectorText + " {\n";
    var preservedGTABS = gTABS;
    gTABS += "  ";
    for (var i = 0; i < this.declarations.length; i++) {
      var declText = this.declarations[i].cssText();
      if (declText)
        rv += gTABS + this.declarations[i].cssText() + "\n";
    }
    gTABS = preservedGTABS;
    return rv + gTABS + "}";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (!token.isNotNull()) {
      if (parser.parseStyleRule(token, sheet, false)) {
        var newRule = sheet.cssRules[0];
        this.mSelectorText = newRule.mSelectorText;
        this.declarations = newRule.declarations;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  },

  selectorText: function() {
    return this.mSelectorText;
  },

  setSelectorText: function(val) {
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (!token.isNotNull()) {
      var s = parser.parseSelector(token, true);
      if (s) {
        this.mSelectorText = s.selector;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspPAGE_RULE */

function jscsspPageRule()
{
  this.type = kJscsspPAGE_RULE;
  this.parsedCssText = null;
  this.pageSelector = null;
  this.declarations = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
}

jscsspPageRule.prototype = {
  cssText: function() {
    var rv = gTABS + "@page "
                   + (this.pageSelector ? this.pageSelector + " ": "")
                   + "{\n";
    var preservedGTABS = gTABS;
    gTABS += "  ";
    for (var i = 0; i < this.declarations.length; i++)
      rv += gTABS + this.declarations[i].cssText() + "\n";
    gTABS = preservedGTABS;
    return rv + gTABS + "}";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule("@page")) {
      if (parser.parsePageRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.pageSelector = newRule.pageSelector;
        this.declarations = newRule.declarations;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

/* kJscsspVARIABLES_RULE */

function jscsspVariablesRule()
{
  this.type = kJscsspVARIABLES_RULE;
  this.parsedCssText = null;
  this.declarations = [];
  this.parentStyleSheet = null;
  this.parentRule = null;
  this.media = null;
}

jscsspVariablesRule.prototype = {
  cssText: function() {
    var rv = gTABS + "@variables " +
                     (this.media.length ? this.media.join(", ") + " " : "") +
                     "{\n";
    var preservedGTABS = gTABS;
    gTABS += "  ";
    for (var i = 0; i < this.declarations.length; i++)
      rv += gTABS + this.declarations[i].cssText() + "\n";
    gTABS = preservedGTABS;
    return rv + gTABS + "}";
  },

  setCssText: function(val) {
    var sheet = {cssRules: []};
    var parser = new CSSParser(val);
    var token = parser.getToken(true, true);
    if (token.isAtRule("@variables")) {
      if (parser.parseVariablesRule(token, sheet)) {
        var newRule = sheet.cssRules[0];
        this.declarations = newRule.declarations;
        this.parsedCssText = newRule.parsedCssText;
        return;
      }
    }
    throw DOMException.SYNTAX_ERR;
  }
};

var kJscsspINHERIT_VALUE = 0;
var kJscsspPRIMITIVE_VALUE = 1;
var kJscsspVARIABLE_VALUE = 4;

function jscsspVariable(aType, aSheet)
{
  this.value = "";
  this.type = aType;
  this.name  = null;
  this.parentRule = null;
  this.parentStyleSheet = aSheet;
}

jscsspVariable.prototype = {
  cssText: function() {
    if (this.type == kJscsspVARIABLE_VALUE)
      return this.resolveVariable(this.name, this.parentRule, this.parentStyleSheet);
    else
      return this.value;
  },

  setCssText: function(val) {
    if (this.type == kJscsspVARIABLE_VALUE)
      throw DOMException.SYNTAX_ERR;
    else
      this.value = val;
  },

  resolveVariable: function(aName, aRule, aSheet)
  {
    if (aName.toLowerCase() in aSheet.variables)
      return aSheet.variables[aName.toLowerCase()];
    return null;
  }
};

function ParseURL(buffer) {
  var result = { };
  result.protocol = "";
  result.user = "";
  result.password = "";
  result.host = "";
  result.port = "";
  result.path = "";
  result.query = "";

  var section = "PROTOCOL";
  var start = 0;
  var wasSlash = false;

  while(start < buffer.length) {
    if(section == "PROTOCOL") {
      if(buffer.charAt(start) == ':') {
        section = "AFTER_PROTOCOL";
        start++;
      } else if(buffer.charAt(start) == '/' && result.protocol.length() == 0) { 
        section = PATH;
      } else {
        result.protocol += buffer.charAt(start++);
      }
    } else if(section == "AFTER_PROTOCOL") {
      if(buffer.charAt(start) == '/') {
    if(!wasSlash) {
          wasSlash = true;
    } else {
          wasSlash = false;
          section = "USER";
    }
        start ++;
      } else {
        throw new ParseException("Protocol shell be separated with 2 slashes");
      }       
    } else if(section == "USER") {
      if(buffer.charAt(start) == '/') {
        result.host = result.user;
        result.user = "";
        section = "PATH";
      } else if(buffer.charAt(start) == '?') {
        result.host = result.user;
        result.user = "";
        section = "QUERY";
        start++;
      } else if(buffer.charAt(start) == ':') {
        section = "PASSWORD";
        start++;
      } else if(buffer.charAt(start) == '@') {
        section = "HOST";
        start++;
      } else {
        result.user += buffer.charAt(start++);
      }
    } else if(section == "PASSWORD") {
      if(buffer.charAt(start) == '/') {
        result.host = result.user;
        result.port = result.password;
        result.user = "";
        result.password = "";
        section = "PATH";
      } else if(buffer.charAt(start) == '?') {
        result.host = result.user;
        result.port = result.password;
        result.user = "";
        result.password = "";
        section = "QUERY";
        start ++;
      } else if(buffer.charAt(start) == '@') {
        section = "HOST";
        start++;
      } else {
        result.password += buffer.charAt(start++);
      }
    } else if(section == "HOST") {
      if(buffer.charAt(start) == '/') {
        section = "PATH";
      } else if(buffer.charAt(start) == ':') {
        section = "PORT";
        start++;
      } else if(buffer.charAt(start) == '?') {
        section = "QUERY";
        start++;
      } else {
        result.host += buffer.charAt(start++);
      }
    } else if(section == "PORT") {
      if(buffer.charAt(start) == '/') {
        section = "PATH";
      } else if(buffer.charAt(start) == '?') {
        section = "QUERY";
        start++;
      } else {
        result.port += buffer.charAt(start++);
      }
    } else if(section == "PATH") {
      if(buffer.charAt(start) == '?') {
    section = "QUERY";
    start ++;
      } else {
    result.path += buffer.charAt(start++);
      }
    } else if(section == "QUERY") {
      result.query += buffer.charAt(start++);
    }
  }

  if(section == "PROTOCOL") {
    result.host = result.protocol;
    result.protocol = "http";
  } else if(section == "AFTER_PROTOCOL") {
    throw new ParseException("Invalid url");
  } else if(section == "USER") {
    result.host = result.user;
    result.user = "";
  } else if(section == "PASSWORD") {
    result.host = result.user;
    result.port = result.password;
    result.user = "";
    result.password = "";
  }

  return result;
}

function ParseException(description) {
    this.description = description;
}

function CountLF(s)
{
  var nCR = s.match( /\n/g );
  return nCR ? nCR.length + 1 : 1;
}


function FilterLinearGradientForOutput(aValue, aEngine)
{
  if (aEngine == "generic")
    return aValue.substr(5);

  if (aEngine == "webkit")
    return aValue.replace( /\-moz\-/g , "-webkit-")

  if (aEngine != "webkit20110101")
    return "";

  var g = CssInspector.parseBackgroundImages(aValue)[0];

  var cancelled = false;
  var str = "-webkit-gradient(linear, ";
  var position = ("position" in g.value) ? g.value.position.toLowerCase() : "";
  var angle    = ("angle" in g.value) ? g.value.angle.toLowerCase() : "";
  // normalize angle
  if (angle) {
    var match = angle.match(/^([0-9\-\.\\+]+)([a-z]*)/);
    var angle = parseFloat(match[1]);
    var unit  = match[2];
    switch (unit) {
      case "grad": angle = angle * 90 / 100; break;
      case "rad":  angle = angle * 180 / Math.PI; break;
      default: break;
    }
    while (angle < 0)
      angle += 360;
    while (angle >= 360)
      angle -= 360;
  }
  // get startpoint w/o keywords
  var startpoint = [];
  var endpoint = [];
  if (position != "") {
    if (position == "center")
      position = "center center";
    startpoint = position.split(" ");
    if (angle == "" && angle != 0) {
      // no angle, then we just turn the point 180 degrees around center
      switch (startpoint[0]) {
        case "left":   endpoint.push("right"); break;
        case "center": endpoint.push("center"); break;
        case "right":  endpoint.push("left"); break;
        default: {
            var match = startpoint[0].match(/^([0-9\-\.\\+]+)([a-z]*)/);
            var v     = parseFloat(match[0]);
            var unit  = match[1];
            if (unit == "%") {
              endpoint.push((100-v) + "%");
            }
            else
              cancelled = true;
          }
          break;
      }
      if (!cancelled)
        switch (startpoint[1]) {
          case "top":    endpoint.push("bottom"); break;
          case "center": endpoint.push("center"); break;
          case "bottom": endpoint.push("top"); break;
          default: {
              var match = startpoint[1].match(/^([0-9\-\.\\+]+)([a-z]*)/);
              var v     = parseFloat(match[0]);
              var unit  = match[1];
              if (unit == "%") {
                endpoint.push((100-v) + "%");
              }
              else
                cancelled = true;
            }
            break;
        }
    }
    else {
      switch (angle) {
        case 0:    endpoint.push("right"); endpoint.push(startpoint[1]); break;
        case 90:   endpoint.push(startpoint[0]); endpoint.push("top"); break;
        case 180:  endpoint.push("left"); endpoint.push(startpoint[1]); break;
        case 270:  endpoint.push(startpoint[0]); endpoint.push("bottom"); break;
        default:     cancelled = true; break;
      }
    }
  }
  else {
    // no position defined, we accept only vertical and horizontal
    if (angle == "")
      angle = 270;
    switch (angle) {
      case 0:    startpoint= ["left", "center"];   endpoint = ["right", "center"]; break;
      case 90:   startpoint= ["center", "bottom"]; endpoint = ["center", "top"]; break;
      case 180:  startpoint= ["right", "center"];  endpoint = ["left", "center"]; break;
      case 270:  startpoint= ["center", "top"];    endpoint = ["center", "bottom"]; break;
      default:     cancelled = true; break;
    }
  }

  if (cancelled)
    return "";

  str += startpoint.join(" ") + ", " + endpoint.join(" ");
  if (!g.value.stops[0].position)
    g.value.stops[0].position = "0%";
  if (!g.value.stops[g.value.stops.length-1].position)
    g.value.stops[g.value.stops.length-1].position = "100%";
  var current = 0;
  for (var i = 0; i < g.value.stops.length && !cancelled; i++) {
    var s = g.value.stops[i];
    if (s.position) {
      if (s.position.indexOf("%") == -1) {
        cancelled = true;
        break;
      }
    }
    else {
      var j = i + 1;
      while (j < g.value.stops.length && !g.value.stops[j].position)
        j++;
      var inc = parseFloat(g.value.stops[j].position) - current;
      for (var k = i; k < j; k++) {
        g.value.stops[k].position = (current + inc * (k - i + 1) / (j - i + 1)) + "%";
      }
    }
    current = parseFloat(s.position);
    str += ", color-stop(" + (parseFloat(current) / 100) + ", " + s.color + ")";
  }

  if (cancelled)
    return "";
  return str + ")";
}

function FilterRadialGradientForOutput(aValue, aEngine)
{
  if (aEngine == "generic")
    return aValue.substr(5);

  else if (aEngine == "webkit")
    return aValue.replace( /\-moz\-/g , "-webkit-")

  else if (aEngine != "webkit20110101")
    return "";

  var g = CssInspector.parseBackgroundImages(aValue)[0];

  var shape = ("shape" in g.value) ? g.value.shape : "";
  var size  = ("size"  in g.value) ? g.value.size : "";
  if (shape != "circle"
      || (size != "farthest-corner" && size != "cover"))
    return "";

  if (g.value.stops.length < 2
      || !("position" in g.value.stops[0])
      || !g.value.stops[g.value.stops.length - 1].position
      || !("position" in g.value.stops[0])
      || !g.value.stops[g.value.stops.length - 1].position)
    return "";

  for (var i = 0; i < g.value.stops.length; i++) {
    var s = g.value.stops[i];
    if (("position" in s) && s.position && s.position.indexOf("px") == -1)
      return "";
  }

  var str = "-webkit-gradient(radial, ";
  var position  = ("position"  in g.value) ? g.value.position : "center center";
  str += position + ", " +  parseFloat(g.value.stops[0].position) + ", ";
  str += position + ", " +  parseFloat(g.value.stops[g.value.stops.length - 1].position);

  // at this point we're sure to deal with pixels
  var current = parseFloat(g.value.stops[0].position);
  for (var i = 0; i < g.value.stops.length; i++) {
    var s = g.value.stops[i];
    if (!("position" in s) || !s.position) {
      var j = i + 1;
      while (j < g.value.stops.length && !g.value.stops[j].position)
        j++;
      var inc = parseFloat(g.value.stops[j].position) - current;
      for (var k = i; k < j; k++) {
        g.value.stops[k].position = (current + inc * (k - i + 1) / (j - i + 1)) + "px";
      }
    }
    current = parseFloat(s.position);
    var c = (current - parseFloat(g.value.stops[0].position)) /
            (parseFloat(g.value.stops[g.value.stops.length - 1].position) - parseFloat(g.value.stops[0].position));
    str += ", color-stop(" + c + ", " + s.color + ")";
  }
  str += ")"
  return str;
}

function FilterRepeatingGradientForOutput(aValue, aEngine)
{
  if (aEngine == "generic")
    return aValue.substr(5);

  else if (aEngine == "webkit")
    return aValue.replace( /\-moz\-/g , "-webkit-")

  return "";
}

// JavaScript Document
$(document).ready(function() {

    /* --- Opacity Effect --- */
    $('.products-list li, .about-list li')
        .mouseover(function() {
            $(this).siblings().css({
                opacity: 0.25
            })
        })
        .mouseout(function() {
            $(this).siblings().css({
                opacity: 1
            })
        });

    /* --- Active Switch --- */
    $(".tabbable .nav a, .products-filter a").click(function(e) {
        $(".tabbable .nav a, .products-filter a").removeClass("active");
        $(this).addClass("active");
        e.preventDefault();
    });

    /* --- Flex Slider --- */
    $(window).load(function() {
        $('.flexslider').flexslider({
            animation: "slide",
            slideshowSpeed: 3500,
            animationSpeed: 500,
            prevText: "<i class='icon-angle-left'></i>",
            nextText: "<i class='icon-angle-right'></i>"
        });
    });

    /* --- Fancybox --- */
    $(".view-fancybox").fancybox({
        openEffect: 'elastic',
        closeEffect: 'elastic',
        next: 'left',
        prev: 'right'
    });

    /* --- Masonry --- */
    var $container = $('#isotope');
    $container.imagesLoaded(function() {
        $container.isotope({
            itemSelector: '.item',
        });
    });
    $('#filters a').click(function() {
        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });
        return false;
    });


    /* --- toTop --- */
    $(window).scroll(function() {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
    });

    /* --- Change Color --- */
    $(".change-css").click(function() {
        $("#changeColor").attr({
            href: this.rel
        });
    });

});
;( function( $, window, undefined ) {

	'use strict';

	$.CatSlider = function( options, element ) {
		this.$el = $( element );
		this._init( options );
	};

	$.CatSlider.prototype = {

		_init : function( options ) {

			// the categories (ul)
			this.$categories = this.$el.children( 'ul' );
			// the navigation
			this.$navcategories = this.$el.find( 'nav > a' );
			var animEndEventNames = {
				'WebkitAnimation' : 'webkitAnimationEnd',
				'OAnimation' : 'oAnimationEnd',
				'msAnimation' : 'MSAnimationEnd',
				'animation' : 'animationend'
			};
			// animation end event name
			this.animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];
			// animations and transforms support
			this.support = Modernizr.csstransforms && Modernizr.cssanimations;
			// if currently animating
			this.isAnimating = false;
			// current category
			this.current = 0;
			var $currcat = this.$categories.eq( 0 );
			if( !this.support ) {
				this.$categories.hide();
				$currcat.show();
			}
			else {
				$currcat.addClass( 'mi-current' );
			}
			// current nav category
			this.$navcategories.eq( 0 ).addClass( 'mi-selected' );
			// initialize the events
			this._initEvents();

		},
		_initEvents : function() {

			var self = this;
			this.$navcategories.on( 'click.catslider', function() {
				self.showCategory( $( this ).index() );
				return false;
			} );

			// reset on window resize..
			$( window ).on( 'resize', function() {
				self.$categories.removeClass().eq( 0 ).addClass( 'mi-current' );
				self.$navcategories.eq( self.current ).removeClass( 'mi-selected' ).end().eq( 0 ).addClass( 'mi-selected' );
				self.current = 0;
			} );

		},
		showCategory : function( catidx ) {

			if( catidx === this.current || this.isAnimating ) {
				return false;
			}
			this.isAnimating = true;
			// update selected navigation
			this.$navcategories.eq( this.current ).removeClass( 'mi-selected' ).end().eq( catidx ).addClass( 'mi-selected' );

			var dir = catidx > this.current ? 'right' : 'left',
				toClass = dir === 'right' ? 'mi-moveToLeft' : 'mi-moveToRight',
				fromClass = dir === 'right' ? 'mi-moveFromRight' : 'mi-moveFromLeft',
				// current category
				$currcat = this.$categories.eq( this.current ),
				// new category
				$newcat = this.$categories.eq( catidx ),
				$newcatchild = $newcat.children(),
				lastEnter = dir === 'right' ? $newcatchild.length - 1 : 0,
				self = this;

			if( this.support ) {

				$currcat.removeClass().addClass( toClass );
				
				setTimeout( function() {

					$newcat.removeClass().addClass( fromClass );
					$newcatchild.eq( lastEnter ).on( self.animEndEventName, function() {

						$( this ).off( self.animEndEventName );
						$newcat.addClass( 'mi-current' );
						self.current = catidx;
						var $this = $( this );
						// solve chrome bug
						self.forceRedraw( $this.get(0) );
						self.isAnimating = false;

					} );

				}, $newcatchild.length * 90 );

			}
			else {

				$currcat.hide();
				$newcat.show();
				this.current = catidx;
				this.isAnimating = false;

			}

		},
		// based on http://stackoverflow.com/a/8840703/989439
		forceRedraw : function(element) {
			if (!element) { return; }
			var n = document.createTextNode(' '),
				position = element.style.position;
			element.appendChild(n);
			element.style.position = 'relative';
			setTimeout(function(){
				element.style.position = position;
				n.parentNode.removeChild(n);
			}, 25);
		}

	}

	$.fn.catslider = function( options ) {
		var instance = $.data( this, 'catslider' );
		if ( typeof options === 'string' ) {
			var args = Array.prototype.slice.call( arguments, 1 );
			this.each(function() {
				instance[ options ].apply( instance, args );
			});
		}
		else {
			this.each(function() {
				instance ? instance._init() : instance = $.data( this, 'catslider', new $.CatSlider( options, this ) );
			});
		}
		return instance;
	};

} )( jQuery, window );
/*! fancyBox v2.1.4 fancyapps.com | fancyapps.com/fancybox/#license */
(function(C,z,f,r){var q=f(C),n=f(z),b=f.fancybox=function(){b.open.apply(this,arguments)},H=navigator.userAgent.match(/msie/),w=null,s=z.createTouch!==r,t=function(a){return a&&a.hasOwnProperty&&a instanceof f},p=function(a){return a&&"string"===f.type(a)},F=function(a){return p(a)&&0<a.indexOf("%")},l=function(a,d){var e=parseInt(a,10)||0;d&&F(a)&&(e*=b.getViewport()[d]/100);return Math.ceil(e)},x=function(a,b){return l(a,b)+"px"};f.extend(b,{version:"2.1.4",defaults:{padding:15,margin:20,width:800,
height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!s,fitToView:!0,aspectRatio:!1,topRatio:0.5,leftRatio:0.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3E3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",
34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+
(H?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,
openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:f.noop,beforeLoad:f.noop,afterLoad:f.noop,beforeShow:f.noop,afterShow:f.noop,beforeChange:f.noop,beforeClose:f.noop,afterClose:f.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,
isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(a,d){if(a&&(f.isPlainObject(d)||(d={}),!1!==b.close(!0)))return f.isArray(a)||(a=t(a)?f(a).get():[a]),f.each(a,function(e,c){var k={},g,h,j,m,l;"object"===f.type(c)&&(c.nodeType&&(c=f(c)),t(c)?(k={href:c.data("fancybox-href")||c.attr("href"),title:c.data("fancybox-title")||c.attr("title"),isDom:!0,element:c},f.metadata&&f.extend(!0,k,
c.metadata())):k=c);g=d.href||k.href||(p(c)?c:null);h=d.title!==r?d.title:k.title||"";m=(j=d.content||k.content)?"html":d.type||k.type;!m&&k.isDom&&(m=c.data("fancybox-type"),m||(m=(m=c.prop("class").match(/fancybox\.(\w+)/))?m[1]:null));p(g)&&(m||(b.isImage(g)?m="image":b.isSWF(g)?m="swf":"#"===g.charAt(0)?m="inline":p(c)&&(m="html",j=c)),"ajax"===m&&(l=g.split(/\s+/,2),g=l.shift(),l=l.shift()));j||("inline"===m?g?j=f(p(g)?g.replace(/.*(?=#[^\s]+$)/,""):g):k.isDom&&(j=c):"html"===m?j=g:!m&&(!g&&
k.isDom)&&(m="inline",j=c));f.extend(k,{href:g,type:m,content:j,title:h,selector:l});a[e]=k}),b.opts=f.extend(!0,{},b.defaults,d),d.keys!==r&&(b.opts.keys=d.keys?f.extend({},b.defaults.keys,d.keys):!1),b.group=a,b._start(b.opts.index)},cancel:function(){var a=b.coming;a&&!1!==b.trigger("onCancel")&&(b.hideLoading(),b.ajaxLoad&&b.ajaxLoad.abort(),b.ajaxLoad=null,b.imgPreload&&(b.imgPreload.onload=b.imgPreload.onerror=null),a.wrap&&a.wrap.stop(!0,!0).trigger("onReset").remove(),b.coming=null,b.current||
b._afterZoomOut(a))},close:function(a){b.cancel();!1!==b.trigger("beforeClose")&&(b.unbindEvents(),b.isActive&&(!b.isOpen||!0===a?(f(".fancybox-wrap").stop(!0).trigger("onReset").remove(),b._afterZoomOut()):(b.isOpen=b.isOpened=!1,b.isClosing=!0,f(".fancybox-item, .fancybox-nav").remove(),b.wrap.stop(!0,!0).removeClass("fancybox-opened"),b.transitions[b.current.closeMethod]())))},play:function(a){var d=function(){clearTimeout(b.player.timer)},e=function(){d();b.current&&b.player.isActive&&(b.player.timer=
setTimeout(b.next,b.current.playSpeed))},c=function(){d();f("body").unbind(".player");b.player.isActive=!1;b.trigger("onPlayEnd")};if(!0===a||!b.player.isActive&&!1!==a){if(b.current&&(b.current.loop||b.current.index<b.group.length-1))b.player.isActive=!0,f("body").bind({"afterShow.player onUpdate.player":e,"onCancel.player beforeClose.player":c,"beforeLoad.player":d}),e(),b.trigger("onPlayStart")}else c()},next:function(a){var d=b.current;d&&(p(a)||(a=d.direction.next),b.jumpto(d.index+1,a,"next"))},
prev:function(a){var d=b.current;d&&(p(a)||(a=d.direction.prev),b.jumpto(d.index-1,a,"prev"))},jumpto:function(a,d,e){var c=b.current;c&&(a=l(a),b.direction=d||c.direction[a>=c.index?"next":"prev"],b.router=e||"jumpto",c.loop&&(0>a&&(a=c.group.length+a%c.group.length),a%=c.group.length),c.group[a]!==r&&(b.cancel(),b._start(a)))},reposition:function(a,d){var e=b.current,c=e?e.wrap:null,k;c&&(k=b._getPosition(d),a&&"scroll"===a.type?(delete k.position,c.stop(!0,!0).animate(k,200)):(c.css(k),e.pos=f.extend({},
e.dim,k)))},update:function(a){var d=a&&a.type,e=!d||"orientationchange"===d;e&&(clearTimeout(w),w=null);b.isOpen&&!w&&(w=setTimeout(function(){var c=b.current;c&&!b.isClosing&&(b.wrap.removeClass("fancybox-tmp"),(e||"load"===d||"resize"===d&&c.autoResize)&&b._setDimension(),"scroll"===d&&c.canShrink||b.reposition(a),b.trigger("onUpdate"),w=null)},e&&!s?0:300))},toggle:function(a){b.isOpen&&(b.current.fitToView="boolean"===f.type(a)?a:!b.current.fitToView,s&&(b.wrap.removeAttr("style").addClass("fancybox-tmp"),
b.trigger("onUpdate")),b.update())},hideLoading:function(){n.unbind(".loading");f("#fancybox-loading").remove()},showLoading:function(){var a,d;b.hideLoading();a=f('<div id="fancybox-loading"><div></div></div>').click(b.cancel).appendTo("body");n.bind("keydown.loading",function(a){if(27===(a.which||a.keyCode))a.preventDefault(),b.cancel()});b.defaults.fixed||(d=b.getViewport(),a.css({position:"absolute",top:0.5*d.h+d.y,left:0.5*d.w+d.x}))},getViewport:function(){var a=b.current&&b.current.locked||
!1,d={x:q.scrollLeft(),y:q.scrollTop()};a?(d.w=a[0].clientWidth,d.h=a[0].clientHeight):(d.w=s&&C.innerWidth?C.innerWidth:q.width(),d.h=s&&C.innerHeight?C.innerHeight:q.height());return d},unbindEvents:function(){b.wrap&&t(b.wrap)&&b.wrap.unbind(".fb");n.unbind(".fb");q.unbind(".fb")},bindEvents:function(){var a=b.current,d;a&&(q.bind("orientationchange.fb"+(s?"":" resize.fb")+(a.autoCenter&&!a.locked?" scroll.fb":""),b.update),(d=a.keys)&&n.bind("keydown.fb",function(e){var c=e.which||e.keyCode,k=
e.target||e.srcElement;if(27===c&&b.coming)return!1;!e.ctrlKey&&(!e.altKey&&!e.shiftKey&&!e.metaKey&&(!k||!k.type&&!f(k).is("[contenteditable]")))&&f.each(d,function(d,k){if(1<a.group.length&&k[c]!==r)return b[d](k[c]),e.preventDefault(),!1;if(-1<f.inArray(c,k))return b[d](),e.preventDefault(),!1})}),f.fn.mousewheel&&a.mouseWheel&&b.wrap.bind("mousewheel.fb",function(d,c,k,g){for(var h=f(d.target||null),j=!1;h.length&&!j&&!h.is(".fancybox-skin")&&!h.is(".fancybox-wrap");)j=h[0]&&!(h[0].style.overflow&&
"hidden"===h[0].style.overflow)&&(h[0].clientWidth&&h[0].scrollWidth>h[0].clientWidth||h[0].clientHeight&&h[0].scrollHeight>h[0].clientHeight),h=f(h).parent();if(0!==c&&!j&&1<b.group.length&&!a.canShrink){if(0<g||0<k)b.prev(0<g?"down":"left");else if(0>g||0>k)b.next(0>g?"up":"right");d.preventDefault()}}))},trigger:function(a,d){var e,c=d||b.coming||b.current;if(c){f.isFunction(c[a])&&(e=c[a].apply(c,Array.prototype.slice.call(arguments,1)));if(!1===e)return!1;c.helpers&&f.each(c.helpers,function(d,
e){e&&(b.helpers[d]&&f.isFunction(b.helpers[d][a]))&&(e=f.extend(!0,{},b.helpers[d].defaults,e),b.helpers[d][a](e,c))});f.event.trigger(a+".fb")}},isImage:function(a){return p(a)&&a.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp)((\?|#).*)?$)/i)},isSWF:function(a){return p(a)&&a.match(/\.(swf)((\?|#).*)?$/i)},_start:function(a){var d={},e,c;a=l(a);e=b.group[a]||null;if(!e)return!1;d=f.extend(!0,{},b.opts,e);e=d.margin;c=d.padding;"number"===f.type(e)&&(d.margin=[e,e,e,e]);"number"===f.type(c)&&
(d.padding=[c,c,c,c]);d.modal&&f.extend(!0,d,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}});d.autoSize&&(d.autoWidth=d.autoHeight=!0);"auto"===d.width&&(d.autoWidth=!0);"auto"===d.height&&(d.autoHeight=!0);d.group=b.group;d.index=a;b.coming=d;if(!1===b.trigger("beforeLoad"))b.coming=null;else{c=d.type;e=d.href;if(!c)return b.coming=null,b.current&&b.router&&"jumpto"!==b.router?(b.current.index=a,b[b.router](b.direction)):!1;b.isActive=
!0;if("image"===c||"swf"===c)d.autoHeight=d.autoWidth=!1,d.scrolling="visible";"image"===c&&(d.aspectRatio=!0);"iframe"===c&&s&&(d.scrolling="scroll");d.wrap=f(d.tpl.wrap).addClass("fancybox-"+(s?"mobile":"desktop")+" fancybox-type-"+c+" fancybox-tmp "+d.wrapCSS).appendTo(d.parent||"body");f.extend(d,{skin:f(".fancybox-skin",d.wrap),outer:f(".fancybox-outer",d.wrap),inner:f(".fancybox-inner",d.wrap)});f.each(["Top","Right","Bottom","Left"],function(a,b){d.skin.css("padding"+b,x(d.padding[a]))});b.trigger("onReady");
if("inline"===c||"html"===c){if(!d.content||!d.content.length)return b._error("content")}else if(!e)return b._error("href");"image"===c?b._loadImage():"ajax"===c?b._loadAjax():"iframe"===c?b._loadIframe():b._afterLoad()}},_error:function(a){f.extend(b.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:a,content:b.coming.tpl.error});b._afterLoad()},_loadImage:function(){var a=b.imgPreload=new Image;a.onload=function(){this.onload=this.onerror=null;b.coming.width=
this.width;b.coming.height=this.height;b._afterLoad()};a.onerror=function(){this.onload=this.onerror=null;b._error("image")};a.src=b.coming.href;!0!==a.complete&&b.showLoading()},_loadAjax:function(){var a=b.coming;b.showLoading();b.ajaxLoad=f.ajax(f.extend({},a.ajax,{url:a.href,error:function(a,e){b.coming&&"abort"!==e?b._error("ajax",a):b.hideLoading()},success:function(d,e){"success"===e&&(a.content=d,b._afterLoad())}}))},_loadIframe:function(){var a=b.coming,d=f(a.tpl.iframe.replace(/\{rnd\}/g,
(new Date).getTime())).attr("scrolling",s?"auto":a.iframe.scrolling).attr("src",a.href);f(a.wrap).bind("onReset",function(){try{f(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(a){}});a.iframe.preload&&(b.showLoading(),d.one("load",function(){f(this).data("ready",1);s||f(this).bind("load.fb",b.update);f(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show();b._afterLoad()}));a.content=d.appendTo(a.inner);a.iframe.preload||b._afterLoad()},_preloadImages:function(){var a=
b.group,d=b.current,e=a.length,c=d.preload?Math.min(d.preload,e-1):0,f,g;for(g=1;g<=c;g+=1)f=a[(d.index+g)%e],"image"===f.type&&f.href&&((new Image).src=f.href)},_afterLoad:function(){var a=b.coming,d=b.current,e,c,k,g,h;b.hideLoading();if(a&&!1!==b.isActive)if(!1===b.trigger("afterLoad",a,d))a.wrap.stop(!0).trigger("onReset").remove(),b.coming=null;else{d&&(b.trigger("beforeChange",d),d.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove());b.unbindEvents();
e=a.content;c=a.type;k=a.scrolling;f.extend(b,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:d});g=a.href;switch(c){case "inline":case "ajax":case "html":a.selector?e=f("<div>").html(e).find(a.selector):t(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",f('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){f(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",
!1)}));break;case "image":e=a.tpl.image.replace("{href}",g);break;case "swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+g+'"></param>',h="",f.each(a.swf,function(a,b){e+='<param name="'+a+'" value="'+b+'"></param>';h+=" "+a+'="'+b+'"'}),e+='<embed src="'+g+'" type="application/x-shockwave-flash" width="100%" height="100%"'+h+"></embed></object>"}(!t(e)||!e.parent().is(a.inner))&&a.inner.append(e);b.trigger("beforeShow");
a.inner.css("overflow","yes"===k?"scroll":"no"===k?"hidden":k);b._setDimension();b.reposition();b.isOpen=!1;b.coming=null;b.bindEvents();if(b.isOpened){if(d.prevMethod)b.transitions[d.prevMethod]()}else f(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove();b.transitions[b.isOpened?a.nextMethod:a.openMethod]();b._preloadImages()}},_setDimension:function(){var a=b.getViewport(),d=0,e=!1,c=!1,e=b.wrap,k=b.skin,g=b.inner,h=b.current,c=h.width,j=h.height,m=h.minWidth,u=h.minHeight,n=h.maxWidth,
v=h.maxHeight,s=h.scrolling,q=h.scrollOutside?h.scrollbarWidth:0,y=h.margin,p=l(y[1]+y[3]),r=l(y[0]+y[2]),z,A,t,D,B,G,C,E,w;e.add(k).add(g).width("auto").height("auto").removeClass("fancybox-tmp");y=l(k.outerWidth(!0)-k.width());z=l(k.outerHeight(!0)-k.height());A=p+y;t=r+z;D=F(c)?(a.w-A)*l(c)/100:c;B=F(j)?(a.h-t)*l(j)/100:j;if("iframe"===h.type){if(w=h.content,h.autoHeight&&1===w.data("ready"))try{w[0].contentWindow.document.location&&(g.width(D).height(9999),G=w.contents().find("body"),q&&G.css("overflow-x",
"hidden"),B=G.height())}catch(H){}}else if(h.autoWidth||h.autoHeight)g.addClass("fancybox-tmp"),h.autoWidth||g.width(D),h.autoHeight||g.height(B),h.autoWidth&&(D=g.width()),h.autoHeight&&(B=g.height()),g.removeClass("fancybox-tmp");c=l(D);j=l(B);E=D/B;m=l(F(m)?l(m,"w")-A:m);n=l(F(n)?l(n,"w")-A:n);u=l(F(u)?l(u,"h")-t:u);v=l(F(v)?l(v,"h")-t:v);G=n;C=v;h.fitToView&&(n=Math.min(a.w-A,n),v=Math.min(a.h-t,v));A=a.w-p;r=a.h-r;h.aspectRatio?(c>n&&(c=n,j=l(c/E)),j>v&&(j=v,c=l(j*E)),c<m&&(c=m,j=l(c/E)),j<u&&
(j=u,c=l(j*E))):(c=Math.max(m,Math.min(c,n)),h.autoHeight&&"iframe"!==h.type&&(g.width(c),j=g.height()),j=Math.max(u,Math.min(j,v)));if(h.fitToView)if(g.width(c).height(j),e.width(c+y),a=e.width(),p=e.height(),h.aspectRatio)for(;(a>A||p>r)&&(c>m&&j>u)&&!(19<d++);)j=Math.max(u,Math.min(v,j-10)),c=l(j*E),c<m&&(c=m,j=l(c/E)),c>n&&(c=n,j=l(c/E)),g.width(c).height(j),e.width(c+y),a=e.width(),p=e.height();else c=Math.max(m,Math.min(c,c-(a-A))),j=Math.max(u,Math.min(j,j-(p-r)));q&&("auto"===s&&j<B&&c+y+
q<A)&&(c+=q);g.width(c).height(j);e.width(c+y);a=e.width();p=e.height();e=(a>A||p>r)&&c>m&&j>u;c=h.aspectRatio?c<G&&j<C&&c<D&&j<B:(c<G||j<C)&&(c<D||j<B);f.extend(h,{dim:{width:x(a),height:x(p)},origWidth:D,origHeight:B,canShrink:e,canExpand:c,wPadding:y,hPadding:z,wrapSpace:p-k.outerHeight(!0),skinSpace:k.height()-j});!w&&(h.autoHeight&&j>u&&j<v&&!c)&&g.height("auto")},_getPosition:function(a){var d=b.current,e=b.getViewport(),c=d.margin,f=b.wrap.width()+c[1]+c[3],g=b.wrap.height()+c[0]+c[2],c={position:"absolute",
top:c[0],left:c[3]};d.autoCenter&&d.fixed&&!a&&g<=e.h&&f<=e.w?c.position="fixed":d.locked||(c.top+=e.y,c.left+=e.x);c.top=x(Math.max(c.top,c.top+(e.h-g)*d.topRatio));c.left=x(Math.max(c.left,c.left+(e.w-f)*d.leftRatio));return c},_afterZoomIn:function(){var a=b.current;a&&(b.isOpen=b.isOpened=!0,b.wrap.css("overflow","visible").addClass("fancybox-opened"),b.update(),(a.closeClick||a.nextClick&&1<b.group.length)&&b.inner.css("cursor","pointer").bind("click.fb",function(d){!f(d.target).is("a")&&!f(d.target).parent().is("a")&&
(d.preventDefault(),b[a.closeClick?"close":"next"]())}),a.closeBtn&&f(a.tpl.closeBtn).appendTo(b.skin).bind("click.fb",function(a){a.preventDefault();b.close()}),a.arrows&&1<b.group.length&&((a.loop||0<a.index)&&f(a.tpl.prev).appendTo(b.outer).bind("click.fb",b.prev),(a.loop||a.index<b.group.length-1)&&f(a.tpl.next).appendTo(b.outer).bind("click.fb",b.next)),b.trigger("afterShow"),!a.loop&&a.index===a.group.length-1?b.play(!1):b.opts.autoPlay&&!b.player.isActive&&(b.opts.autoPlay=!1,b.play()))},_afterZoomOut:function(a){a=
a||b.current;f(".fancybox-wrap").trigger("onReset").remove();f.extend(b,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null});b.trigger("afterClose",a)}});b.transitions={getOrigPosition:function(){var a=b.current,d=a.element,e=a.orig,c={},f=50,g=50,h=a.hPadding,j=a.wPadding,m=b.getViewport();!e&&(a.isDom&&d.is(":visible"))&&(e=d.find("img:first"),e.length||(e=d));t(e)?(c=e.offset(),e.is("img")&&(f=e.outerWidth(),g=e.outerHeight())):
(c.top=m.y+(m.h-g)*a.topRatio,c.left=m.x+(m.w-f)*a.leftRatio);if("fixed"===b.wrap.css("position")||a.locked)c.top-=m.y,c.left-=m.x;return c={top:x(c.top-h*a.topRatio),left:x(c.left-j*a.leftRatio),width:x(f+j),height:x(g+h)}},step:function(a,d){var e,c,f=d.prop;c=b.current;var g=c.wrapSpace,h=c.skinSpace;if("width"===f||"height"===f)e=d.end===d.start?1:(a-d.start)/(d.end-d.start),b.isClosing&&(e=1-e),c="width"===f?c.wPadding:c.hPadding,c=a-c,b.skin[f](l("width"===f?c:c-g*e)),b.inner[f](l("width"===
f?c:c-g*e-h*e))},zoomIn:function(){var a=b.current,d=a.pos,e=a.openEffect,c="elastic"===e,k=f.extend({opacity:1},d);delete k.position;c?(d=this.getOrigPosition(),a.openOpacity&&(d.opacity=0.1)):"fade"===e&&(d.opacity=0.1);b.wrap.css(d).animate(k,{duration:"none"===e?0:a.openSpeed,easing:a.openEasing,step:c?this.step:null,complete:b._afterZoomIn})},zoomOut:function(){var a=b.current,d=a.closeEffect,e="elastic"===d,c={opacity:0.1};e&&(c=this.getOrigPosition(),a.closeOpacity&&(c.opacity=0.1));b.wrap.animate(c,
{duration:"none"===d?0:a.closeSpeed,easing:a.closeEasing,step:e?this.step:null,complete:b._afterZoomOut})},changeIn:function(){var a=b.current,d=a.nextEffect,e=a.pos,c={opacity:1},f=b.direction,g;e.opacity=0.1;"elastic"===d&&(g="down"===f||"up"===f?"top":"left","down"===f||"right"===f?(e[g]=x(l(e[g])-200),c[g]="+=200px"):(e[g]=x(l(e[g])+200),c[g]="-=200px"));"none"===d?b._afterZoomIn():b.wrap.css(e).animate(c,{duration:a.nextSpeed,easing:a.nextEasing,complete:b._afterZoomIn})},changeOut:function(){var a=
b.previous,d=a.prevEffect,e={opacity:0.1},c=b.direction;"elastic"===d&&(e["down"===c||"up"===c?"top":"left"]=("up"===c||"left"===c?"-":"+")+"=200px");a.wrap.animate(e,{duration:"none"===d?0:a.prevSpeed,easing:a.prevEasing,complete:function(){f(this).trigger("onReset").remove()}})}};b.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!s,fixed:!0},overlay:null,fixed:!1,create:function(a){a=f.extend({},this.defaults,a);this.overlay&&this.close();this.overlay=f('<div class="fancybox-overlay"></div>').appendTo("body");
this.fixed=!1;a.fixed&&b.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(a){var d=this;a=f.extend({},this.defaults,a);this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(a);this.fixed||(q.bind("resize.overlay",f.proxy(this.update,this)),this.update());a.closeClick&&this.overlay.bind("click.overlay",function(a){f(a.target).hasClass("fancybox-overlay")&&(b.isActive?b.close():d.close())});this.overlay.css(a.css).show()},
close:function(){f(".fancybox-overlay").remove();q.unbind("resize.overlay");this.overlay=null;!1!==this.margin&&(f("body").css("margin-right",this.margin),this.margin=!1);this.el&&this.el.removeClass("fancybox-lock")},update:function(){var a="100%",b;this.overlay.width(a).height("100%");H?(b=Math.max(z.documentElement.offsetWidth,z.body.offsetWidth),n.width()>b&&(a=n.width())):n.width()>q.width()&&(a=n.width());this.overlay.width(a).height(n.height())},onReady:function(a,b){f(".fancybox-overlay").stop(!0,
!0);this.overlay||(this.margin=n.height()>q.height()||"scroll"===f("body").css("overflow-y")?f("body").css("margin-right"):!1,this.el=z.all&&!z.querySelector?f("html"):f("body"),this.create(a));a.locked&&this.fixed&&(b.locked=this.overlay.append(b.wrap),b.fixed=!1);!0===a.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(a,b){b.locked&&(this.el.addClass("fancybox-lock"),!1!==this.margin&&f("body").css("margin-right",l(this.margin)+b.scrollbarWidth));this.open(a)},onUpdate:function(){this.fixed||
this.update()},afterClose:function(a){this.overlay&&!b.isActive&&this.overlay.fadeOut(a.speedOut,f.proxy(this.close,this))}};b.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(a){var d=b.current,e=d.title,c=a.type;f.isFunction(e)&&(e=e.call(d.element,d));if(p(e)&&""!==f.trim(e)){d=f('<div class="fancybox-title fancybox-title-'+c+'-wrap">'+e+"</div>");switch(c){case "inside":c=b.skin;break;case "outside":c=b.wrap;break;case "over":c=b.inner;break;default:c=b.skin,d.appendTo("body"),
H&&d.width(d.width()),d.wrapInner('<span class="child"></span>'),b.current.margin[2]+=Math.abs(l(d.css("margin-bottom")))}d["top"===a.position?"prependTo":"appendTo"](c)}}};f.fn.fancybox=function(a){var d,e=f(this),c=this.selector||"",k=function(g){var h=f(this).blur(),j=d,k,l;!g.ctrlKey&&(!g.altKey&&!g.shiftKey&&!g.metaKey)&&!h.is(".fancybox-wrap")&&(k=a.groupAttr||"data-fancybox-group",l=h.attr(k),l||(k="rel",l=h.get(0)[k]),l&&(""!==l&&"nofollow"!==l)&&(h=c.length?f(c):e,h=h.filter("["+k+'="'+l+
'"]'),j=h.index(this)),a.index=j,!1!==b.open(h,a)&&g.preventDefault())};a=a||{};d=a.index||0;!c||!1===a.live?e.unbind("click.fb-start").bind("click.fb-start",k):n.undelegate(c,"click.fb-start").delegate(c+":not('.fancybox-item, .fancybox-nav')","click.fb-start",k);this.filter("[data-fancybox-start=1]").trigger("click");return this};n.ready(function(){f.scrollbarWidth===r&&(f.scrollbarWidth=function(){var a=f('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),b=a.children(),
b=b.innerWidth()-b.height(99).innerWidth();a.remove();return b});if(f.support.fixedPosition===r){var a=f.support,d=f('<div style="position:fixed;top:20px;"></div>').appendTo("body"),e=20===d[0].offsetTop||15===d[0].offsetTop;d.remove();a.fixedPosition=e}f.extend(b.defaults,{scrollbarWidth:f.scrollbarWidth(),fixed:f.support.fixedPosition,parent:f("body")})})})(window,document,jQuery);
(function(d){d.flexslider=function(j,l){var a=d(j),c=d.extend({},d.flexslider.defaults,l),e=c.namespace,q="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,u=q?"touchend":"click",m="vertical"===c.direction,n=c.reverse,h=0<c.itemWidth,s="fade"===c.animation,t=""!==c.asNavFor,f={};d.data(j,"flexslider",a);f={init:function(){a.animating=!1;a.currentSlide=c.startAt;a.animatingTo=a.currentSlide;a.atEnd=0===a.currentSlide||a.currentSlide===a.last;a.containerSelector=c.selector.substr(0,
c.selector.search(" "));a.slides=d(c.selector,a);a.container=d(a.containerSelector,a);a.count=a.slides.length;a.syncExists=0<d(c.sync).length;"slide"===c.animation&&(c.animation="swing");a.prop=m?"top":"marginLeft";a.args={};a.manualPause=!1;var b=a,g;if(g=!c.video)if(g=!s)if(g=c.useCSS)a:{g=document.createElement("div");var p=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"],e;for(e in p)if(void 0!==g.style[p[e]]){a.pfx=p[e].replace("Perspective","").toLowerCase();
a.prop="-"+a.pfx+"-transform";g=!0;break a}g=!1}b.transitions=g;""!==c.controlsContainer&&(a.controlsContainer=0<d(c.controlsContainer).length&&d(c.controlsContainer));""!==c.manualControls&&(a.manualControls=0<d(c.manualControls).length&&d(c.manualControls));c.randomize&&(a.slides.sort(function(){return Math.round(Math.random())-0.5}),a.container.empty().append(a.slides));a.doMath();t&&f.asNav.setup();a.setup("init");c.controlNav&&f.controlNav.setup();c.directionNav&&f.directionNav.setup();c.keyboard&&
((1===d(a.containerSelector).length||c.multipleKeyboard)&&d(document).bind("keyup",function(b){b=b.keyCode;if(!a.animating&&(39===b||37===b))b=39===b?a.getTarget("next"):37===b?a.getTarget("prev"):!1,a.flexAnimate(b,c.pauseOnAction)}));c.mousewheel&&a.bind("mousewheel",function(b,g){b.preventDefault();var d=0>g?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(d,c.pauseOnAction)});c.pausePlay&&f.pausePlay.setup();c.slideshow&&(c.pauseOnHover&&a.hover(function(){!a.manualPlay&&(!a.manualPause&&
a.pause())},function(){!a.manualPause&&(!a.manualPlay&&a.play())}),0<c.initDelay?setTimeout(a.play,c.initDelay):a.play());q&&(c.touch&&f.touch());(!s||s&&c.smoothHeight)&&d(window).bind("resize focus",f.resize);setTimeout(function(){c.start(a)},200)},asNav:{setup:function(){a.asNav=!0;a.animatingTo=Math.floor(a.currentSlide/a.move);a.currentItem=a.currentSlide;a.slides.removeClass(e+"active-slide").eq(a.currentItem).addClass(e+"active-slide");a.slides.click(function(b){b.preventDefault();b=d(this);
var g=b.index();!d(c.asNavFor).data("flexslider").animating&&(!b.hasClass("active")&&(a.direction=a.currentItem<g?"next":"prev",a.flexAnimate(g,c.pauseOnAction,!1,!0,!0)))})}},controlNav:{setup:function(){a.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var b=1,g;a.controlNavScaffold=d('<ol class="'+e+"control-nav "+e+("thumbnails"===c.controlNav?"control-thumbs":"control-paging")+'"></ol>');if(1<a.pagingCount)for(var p=0;p<a.pagingCount;p++)g="thumbnails"===
c.controlNav?'<img src="'+a.slides.eq(p).attr("data-thumb")+'"/>':"<a>"+b+"</a>",a.controlNavScaffold.append("<li>"+g+"</li>"),b++;a.controlsContainer?d(a.controlsContainer).append(a.controlNavScaffold):a.append(a.controlNavScaffold);f.controlNav.set();f.controlNav.active();a.controlNavScaffold.delegate("a, img",u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(a.direction=g>a.currentSlide?"next":"prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNavScaffold.delegate("a",
"click touchstart",function(a){a.preventDefault()})},setupManual:function(){a.controlNav=a.manualControls;f.controlNav.active();a.controlNav.live(u,function(b){b.preventDefault();b=d(this);var g=a.controlNav.index(b);b.hasClass(e+"active")||(g>a.currentSlide?a.direction="next":a.direction="prev",a.flexAnimate(g,c.pauseOnAction))});q&&a.controlNav.live("click touchstart",function(a){a.preventDefault()})},set:function(){a.controlNav=d("."+e+"control-nav li "+("thumbnails"===c.controlNav?"img":"a"),
a.controlsContainer?a.controlsContainer:a)},active:function(){a.controlNav.removeClass(e+"active").eq(a.animatingTo).addClass(e+"active")},update:function(b,c){1<a.pagingCount&&"add"===b?a.controlNavScaffold.append(d("<li><a>"+a.count+"</a></li>")):1===a.pagingCount?a.controlNavScaffold.find("li").remove():a.controlNav.eq(c).closest("li").remove();f.controlNav.set();1<a.pagingCount&&a.pagingCount!==a.controlNav.length?a.update(c,b):f.controlNav.active()}},directionNav:{setup:function(){var b=d('<ul class="'+
e+'direction-nav"><li><a class="'+e+'prev" href="#">'+c.prevText+'</a></li><li><a class="'+e+'next" href="#">'+c.nextText+"</a></li></ul>");a.controlsContainer?(d(a.controlsContainer).append(b),a.directionNav=d("."+e+"direction-nav li a",a.controlsContainer)):(a.append(b),a.directionNav=d("."+e+"direction-nav li a",a));f.directionNav.update();a.directionNav.bind(u,function(b){b.preventDefault();b=d(this).hasClass(e+"next")?a.getTarget("next"):a.getTarget("prev");a.flexAnimate(b,c.pauseOnAction)});
q&&a.directionNav.bind("click touchstart",function(a){a.preventDefault()})},update:function(){var b=e+"disabled";1===a.pagingCount?a.directionNav.addClass(b):c.animationLoop?a.directionNav.removeClass(b):0===a.animatingTo?a.directionNav.removeClass(b).filter("."+e+"prev").addClass(b):a.animatingTo===a.last?a.directionNav.removeClass(b).filter("."+e+"next").addClass(b):a.directionNav.removeClass(b)}},pausePlay:{setup:function(){var b=d('<div class="'+e+'pauseplay"><a></a></div>');a.controlsContainer?
(a.controlsContainer.append(b),a.pausePlay=d("."+e+"pauseplay a",a.controlsContainer)):(a.append(b),a.pausePlay=d("."+e+"pauseplay a",a));f.pausePlay.update(c.slideshow?e+"pause":e+"play");a.pausePlay.bind(u,function(b){b.preventDefault();d(this).hasClass(e+"pause")?(a.manualPause=!0,a.manualPlay=!1,a.pause()):(a.manualPause=!1,a.manualPlay=!0,a.play())});q&&a.pausePlay.bind("click touchstart",function(a){a.preventDefault()})},update:function(b){"play"===b?a.pausePlay.removeClass(e+"pause").addClass(e+
"play").text(c.playText):a.pausePlay.removeClass(e+"play").addClass(e+"pause").text(c.pauseText)}},touch:function(){function b(b){k=m?d-b.touches[0].pageY:d-b.touches[0].pageX;q=m?Math.abs(k)<Math.abs(b.touches[0].pageX-e):Math.abs(k)<Math.abs(b.touches[0].pageY-e);if(!q||500<Number(new Date)-l)b.preventDefault(),!s&&(a.transitions&&(c.animationLoop||(k/=0===a.currentSlide&&0>k||a.currentSlide===a.last&&0<k?Math.abs(k)/r+2:1),a.setProps(f+k,"setTouch")))}function g(){j.removeEventListener("touchmove",
b,!1);if(a.animatingTo===a.currentSlide&&(!q&&null!==k)){var h=n?-k:k,m=0<h?a.getTarget("next"):a.getTarget("prev");a.canAdvance(m)&&(550>Number(new Date)-l&&50<Math.abs(h)||Math.abs(h)>r/2)?a.flexAnimate(m,c.pauseOnAction):s||a.flexAnimate(a.currentSlide,c.pauseOnAction,!0)}j.removeEventListener("touchend",g,!1);f=k=e=d=null}var d,e,f,r,k,l,q=!1;j.addEventListener("touchstart",function(k){a.animating?k.preventDefault():1===k.touches.length&&(a.pause(),r=m?a.h:a.w,l=Number(new Date),f=h&&(n&&a.animatingTo===
a.last)?0:h&&n?a.limit-(a.itemW+c.itemMargin)*a.move*a.animatingTo:h&&a.currentSlide===a.last?a.limit:h?(a.itemW+c.itemMargin)*a.move*a.currentSlide:n?(a.last-a.currentSlide+a.cloneOffset)*r:(a.currentSlide+a.cloneOffset)*r,d=m?k.touches[0].pageY:k.touches[0].pageX,e=m?k.touches[0].pageX:k.touches[0].pageY,j.addEventListener("touchmove",b,!1),j.addEventListener("touchend",g,!1))},!1)},resize:function(){!a.animating&&(a.is(":visible")&&(h||a.doMath(),s?f.smoothHeight():h?(a.slides.width(a.computedW),
a.update(a.pagingCount),a.setProps()):m?(a.viewport.height(a.h),a.setProps(a.h,"setTotal")):(c.smoothHeight&&f.smoothHeight(),a.newSlides.width(a.computedW),a.setProps(a.computedW,"setTotal"))))},smoothHeight:function(b){if(!m||s){var c=s?a:a.viewport;b?c.animate({height:a.slides.eq(a.animatingTo).height()},b):c.height(a.slides.eq(a.animatingTo).height())}},sync:function(b){var g=d(c.sync).data("flexslider"),e=a.animatingTo;switch(b){case "animate":g.flexAnimate(e,c.pauseOnAction,!1,!0);break;case "play":!g.playing&&
(!g.asNav&&g.play());break;case "pause":g.pause()}}};a.flexAnimate=function(b,g,p,j,l){t&&(1===a.pagingCount&&(a.direction=a.currentItem<b?"next":"prev"));if(!a.animating&&((a.canAdvance(b,l)||p)&&a.is(":visible"))){if(t&&j)if(p=d(c.asNavFor).data("flexslider"),a.atEnd=0===b||b===a.count-1,p.flexAnimate(b,!0,!1,!0,l),a.direction=a.currentItem<b?"next":"prev",p.direction=a.direction,Math.ceil((b+1)/a.visible)-1!==a.currentSlide&&0!==b)a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+
"active-slide"),b=Math.floor(b/a.visible);else return a.currentItem=b,a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide"),!1;a.animating=!0;a.animatingTo=b;c.before(a);g&&a.pause();a.syncExists&&(!l&&f.sync("animate"));c.controlNav&&f.controlNav.active();h||a.slides.removeClass(e+"active-slide").eq(b).addClass(e+"active-slide");a.atEnd=0===b||b===a.last;c.directionNav&&f.directionNav.update();b===a.last&&(c.end(a),c.animationLoop||a.pause());if(s)q?(a.slides.eq(a.currentSlide).css({opacity:0,
zIndex:1}),a.slides.eq(b).css({opacity:1,zIndex:2}),a.slides.unbind("webkitTransitionEnd transitionend"),a.slides.eq(a.currentSlide).bind("webkitTransitionEnd transitionend",function(){c.after(a)}),a.animating=!1,a.currentSlide=a.animatingTo):(a.slides.eq(a.currentSlide).fadeOut(c.animationSpeed,c.easing),a.slides.eq(b).fadeIn(c.animationSpeed,c.easing,a.wrapup));else{var r=m?a.slides.filter(":first").height():a.computedW;h?(b=c.itemWidth>a.w?2*c.itemMargin:c.itemMargin,b=(a.itemW+b)*a.move*a.animatingTo,
b=b>a.limit&&1!==a.visible?a.limit:b):b=0===a.currentSlide&&(b===a.count-1&&(c.animationLoop&&"next"!==a.direction))?n?(a.count+a.cloneOffset)*r:0:a.currentSlide===a.last&&(0===b&&(c.animationLoop&&"prev"!==a.direction))?n?0:(a.count+1)*r:n?(a.count-1-b+a.cloneOffset)*r:(b+a.cloneOffset)*r;a.setProps(b,"",c.animationSpeed);if(a.transitions){if(!c.animationLoop||!a.atEnd)a.animating=!1,a.currentSlide=a.animatingTo;a.container.unbind("webkitTransitionEnd transitionend");a.container.bind("webkitTransitionEnd transitionend",
function(){a.wrapup(r)})}else a.container.animate(a.args,c.animationSpeed,c.easing,function(){a.wrapup(r)})}c.smoothHeight&&f.smoothHeight(c.animationSpeed)}};a.wrapup=function(b){!s&&(!h&&(0===a.currentSlide&&(a.animatingTo===a.last&&c.animationLoop)?a.setProps(b,"jumpEnd"):a.currentSlide===a.last&&(0===a.animatingTo&&c.animationLoop&&a.setProps(b,"jumpStart"))));a.animating=!1;a.currentSlide=a.animatingTo;c.after(a)};a.animateSlides=function(){a.animating||a.flexAnimate(a.getTarget("next"))};a.pause=
function(){clearInterval(a.animatedSlides);a.playing=!1;c.pausePlay&&f.pausePlay.update("play");a.syncExists&&f.sync("pause")};a.play=function(){a.animatedSlides=setInterval(a.animateSlides,c.slideshowSpeed);a.playing=!0;c.pausePlay&&f.pausePlay.update("pause");a.syncExists&&f.sync("play")};a.canAdvance=function(b,g){var d=t?a.pagingCount-1:a.last;return g?!0:t&&(a.currentItem===a.count-1&&(0===b&&"prev"===a.direction))?!0:t&&(0===a.currentItem&&(b===a.pagingCount-1&&"next"!==a.direction))?!1:b===
a.currentSlide&&!t?!1:c.animationLoop?!0:a.atEnd&&(0===a.currentSlide&&(b===d&&"next"!==a.direction))?!1:a.atEnd&&(a.currentSlide===d&&(0===b&&"next"===a.direction))?!1:!0};a.getTarget=function(b){a.direction=b;return"next"===b?a.currentSlide===a.last?0:a.currentSlide+1:0===a.currentSlide?a.last:a.currentSlide-1};a.setProps=function(b,g,d){var e,f=b?b:(a.itemW+c.itemMargin)*a.move*a.animatingTo;e=-1*function(){if(h)return"setTouch"===g?b:n&&a.animatingTo===a.last?0:n?a.limit-(a.itemW+c.itemMargin)*
a.move*a.animatingTo:a.animatingTo===a.last?a.limit:f;switch(g){case "setTotal":return n?(a.count-1-a.currentSlide+a.cloneOffset)*b:(a.currentSlide+a.cloneOffset)*b;case "setTouch":return b;case "jumpEnd":return n?b:a.count*b;case "jumpStart":return n?a.count*b:b;default:return b}}()+"px";a.transitions&&(e=m?"translate3d(0,"+e+",0)":"translate3d("+e+",0,0)",d=void 0!==d?d/1E3+"s":"0s",a.container.css("-"+a.pfx+"-transition-duration",d));a.args[a.prop]=e;(a.transitions||void 0===d)&&a.container.css(a.args)};
a.setup=function(b){if(s)a.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===b&&(q?a.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+c.animationSpeed/1E3+"s ease",zIndex:1}).eq(a.currentSlide).css({opacity:1,zIndex:2}):a.slides.eq(a.currentSlide).fadeIn(c.animationSpeed,c.easing)),c.smoothHeight&&f.smoothHeight();else{var g,p;"init"===b&&(a.viewport=d('<div class="'+e+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(a).append(a.container),
a.cloneCount=0,a.cloneOffset=0,n&&(p=d.makeArray(a.slides).reverse(),a.slides=d(p),a.container.empty().append(a.slides)));c.animationLoop&&(!h&&(a.cloneCount=2,a.cloneOffset=1,"init"!==b&&a.container.find(".clone").remove(),a.container.append(a.slides.first().clone().addClass("clone")).prepend(a.slides.last().clone().addClass("clone"))));a.newSlides=d(c.selector,a);g=n?a.count-1-a.currentSlide+a.cloneOffset:a.currentSlide+a.cloneOffset;m&&!h?(a.container.height(200*(a.count+a.cloneCount)+"%").css("position",
"absolute").width("100%"),setTimeout(function(){a.newSlides.css({display:"block"});a.doMath();a.viewport.height(a.h);a.setProps(g*a.h,"init")},"init"===b?100:0)):(a.container.width(200*(a.count+a.cloneCount)+"%"),a.setProps(g*a.computedW,"init"),setTimeout(function(){a.doMath();a.newSlides.css({width:a.computedW,"float":"left",display:"block"});c.smoothHeight&&f.smoothHeight()},"init"===b?100:0))}h||a.slides.removeClass(e+"active-slide").eq(a.currentSlide).addClass(e+"active-slide")};a.doMath=function(){var b=
a.slides.first(),d=c.itemMargin,e=c.minItems,f=c.maxItems;a.w=a.width();a.h=b.height();a.boxPadding=b.outerWidth()-b.width();h?(a.itemT=c.itemWidth+d,a.minW=e?e*a.itemT:a.w,a.maxW=f?f*a.itemT:a.w,a.itemW=a.minW>a.w?(a.w-d*e)/e:a.maxW<a.w?(a.w-d*f)/f:c.itemWidth>a.w?a.w:c.itemWidth,a.visible=Math.floor(a.w/(a.itemW+d)),a.move=0<c.move&&c.move<a.visible?c.move:a.visible,a.pagingCount=Math.ceil((a.count-a.visible)/a.move+1),a.last=a.pagingCount-1,a.limit=1===a.pagingCount?0:c.itemWidth>a.w?(a.itemW+
2*d)*a.count-a.w-d:(a.itemW+d)*a.count-a.w-d):(a.itemW=a.w,a.pagingCount=a.count,a.last=a.count-1);a.computedW=a.itemW-a.boxPadding};a.update=function(b,d){a.doMath();h||(b<a.currentSlide?a.currentSlide+=1:b<=a.currentSlide&&(0!==b&&(a.currentSlide-=1)),a.animatingTo=a.currentSlide);if(c.controlNav&&!a.manualControls)if("add"===d&&!h||a.pagingCount>a.controlNav.length)f.controlNav.update("add");else if("remove"===d&&!h||a.pagingCount<a.controlNav.length)h&&(a.currentSlide>a.last&&(a.currentSlide-=
1,a.animatingTo-=1)),f.controlNav.update("remove",a.last);c.directionNav&&f.directionNav.update()};a.addSlide=function(b,e){var f=d(b);a.count+=1;a.last=a.count-1;m&&n?void 0!==e?a.slides.eq(a.count-e).after(f):a.container.prepend(f):void 0!==e?a.slides.eq(e).before(f):a.container.append(f);a.update(e,"add");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.added(a)};a.removeSlide=function(b){var e=isNaN(b)?a.slides.index(d(b)):b;a.count-=1;a.last=a.count-1;isNaN(b)?d(b,a.slides).remove():m&&n?
a.slides.eq(a.last).remove():a.slides.eq(b).remove();a.doMath();a.update(e,"remove");a.slides=d(c.selector+":not(.clone)",a);a.setup();c.removed(a)};f.init()};d.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7E3,animationSpeed:600,initDelay:0,randomize:1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:0,directionNav:!0,prevText:"Previous",
nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}};d.fn.flexslider=function(j){void 0===j&&(j={});if("object"===typeof j)return this.each(function(){var a=d(this),c=a.find(j.selector?j.selector:".slides > li");1===
c.length?(c.fadeIn(400),j.start&&j.start(a)):void 0==a.data("flexslider")&&new d.flexslider(this,j)});var l=d(this).data("flexslider");switch(j){case "play":l.play();break;case "pause":l.pause();break;case "next":l.flexAnimate(l.getTarget("next"),!0);break;case "prev":case "previous":l.flexAnimate(l.getTarget("prev"),!0);break;default:"number"===typeof j&&l.flexAnimate(j,!0)}}})(jQuery);
/**
 * Isotope v1.5.25
 * An exquisite jQuery plugin for magical layouts
 * http://isotope.metafizzy.co
 *
 * Commercial use requires one-time purchase of a commercial license
 * http://isotope.metafizzy.co/docs/license.html
 *
 * Non-commercial use is licensed under the MIT License
 *
 * Copyright 2013 Metafizzy
 */
(function(a,b,c){"use strict";var d=a.document,e=a.Modernizr,f=function(a){return a.charAt(0).toUpperCase()+a.slice(1)},g="Moz Webkit O Ms".split(" "),h=function(a){var b=d.documentElement.style,c;if(typeof b[a]=="string")return a;a=f(a);for(var e=0,h=g.length;e<h;e++){c=g[e]+a;if(typeof b[c]=="string")return c}},i=h("transform"),j=h("transitionProperty"),k={csstransforms:function(){return!!i},csstransforms3d:function(){var a=!!h("perspective");if(a){var c=" -o- -moz- -ms- -webkit- -khtml- ".split(" "),d="@media ("+c.join("transform-3d),(")+"modernizr)",e=b("<style>"+d+"{#modernizr{height:3px}}"+"</style>").appendTo("head"),f=b('<div id="modernizr" />').appendTo("html");a=f.height()===3,f.remove(),e.remove()}return a},csstransitions:function(){return!!j}},l;if(e)for(l in k)e.hasOwnProperty(l)||e.addTest(l,k[l]);else{e=a.Modernizr={_version:"1.6ish: miniModernizr for Isotope"};var m=" ",n;for(l in k)n=k[l](),e[l]=n,m+=" "+(n?"":"no-")+l;b("html").addClass(m)}if(e.csstransforms){var o=e.csstransforms3d?{translate:function(a){return"translate3d("+a[0]+"px, "+a[1]+"px, 0) "},scale:function(a){return"scale3d("+a+", "+a+", 1) "}}:{translate:function(a){return"translate("+a[0]+"px, "+a[1]+"px) "},scale:function(a){return"scale("+a+") "}},p=function(a,c,d){var e=b.data(a,"isoTransform")||{},f={},g,h={},j;f[c]=d,b.extend(e,f);for(g in e)j=e[g],h[g]=o[g](j);var k=h.translate||"",l=h.scale||"",m=k+l;b.data(a,"isoTransform",e),a.style[i]=m};b.cssNumber.scale=!0,b.cssHooks.scale={set:function(a,b){p(a,"scale",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.scale?d.scale:1}},b.fx.step.scale=function(a){b.cssHooks.scale.set(a.elem,a.now+a.unit)},b.cssNumber.translate=!0,b.cssHooks.translate={set:function(a,b){p(a,"translate",b)},get:function(a,c){var d=b.data(a,"isoTransform");return d&&d.translate?d.translate:[0,0]}}}var q,r;e.csstransitions&&(q={WebkitTransitionProperty:"webkitTransitionEnd",MozTransitionProperty:"transitionend",OTransitionProperty:"oTransitionEnd otransitionend",transitionProperty:"transitionend"}[j],r=h("transitionDuration"));var s=b.event,t=b.event.handle?"handle":"dispatch",u;s.special.smartresize={setup:function(){b(this).bind("resize",s.special.smartresize.handler)},teardown:function(){b(this).unbind("resize",s.special.smartresize.handler)},handler:function(a,b){var c=this,d=arguments;a.type="smartresize",u&&clearTimeout(u),u=setTimeout(function(){s[t].apply(c,d)},b==="execAsap"?0:100)}},b.fn.smartresize=function(a){return a?this.bind("smartresize",a):this.trigger("smartresize",["execAsap"])},b.Isotope=function(a,c,d){this.element=b(c),this._create(a),this._init(d)};var v=["width","height"],w=b(a);b.Isotope.settings={resizable:!0,layoutMode:"masonry",containerClass:"isotope",itemClass:"isotope-item",hiddenClass:"isotope-hidden",hiddenStyle:{opacity:0,scale:.001},visibleStyle:{opacity:1,scale:1},containerStyle:{position:"relative",overflow:"hidden"},animationEngine:"best-available",animationOptions:{queue:!1,duration:800},sortBy:"original-order",sortAscending:!0,resizesContainer:!0,transformsEnabled:!0,itemPositionDataEnabled:!1},b.Isotope.prototype={_create:function(a){this.options=b.extend({},b.Isotope.settings,a),this.styleQueue=[],this.elemCount=0;var c=this.element[0].style;this.originalStyle={};var d=v.slice(0);for(var e in this.options.containerStyle)d.push(e);for(var f=0,g=d.length;f<g;f++)e=d[f],this.originalStyle[e]=c[e]||"";this.element.css(this.options.containerStyle),this._updateAnimationEngine(),this._updateUsingTransforms();var h={"original-order":function(a,b){return b.elemCount++,b.elemCount},random:function(){return Math.random()}};this.options.getSortData=b.extend(this.options.getSortData,h),this.reloadItems(),this.offset={left:parseInt(this.element.css("padding-left")||0,10),top:parseInt(this.element.css("padding-top")||0,10)};var i=this;setTimeout(function(){i.element.addClass(i.options.containerClass)},0),this.options.resizable&&w.bind("smartresize.isotope",function(){i.resize()}),this.element.delegate("."+this.options.hiddenClass,"click",function(){return!1})},_getAtoms:function(a){var b=this.options.itemSelector,c=b?a.filter(b).add(a.find(b)):a,d={position:"absolute"};return c=c.filter(function(a,b){return b.nodeType===1}),this.usingTransforms&&(d.left=0,d.top=0),c.css(d).addClass(this.options.itemClass),this.updateSortData(c,!0),c},_init:function(a){this.$filteredAtoms=this._filter(this.$allAtoms),this._sort(),this.reLayout(a)},option:function(a){if(b.isPlainObject(a)){this.options=b.extend(!0,this.options,a);var c;for(var d in a)c="_update"+f(d),this[c]&&this[c]()}},_updateAnimationEngine:function(){var a=this.options.animationEngine.toLowerCase().replace(/[ _\-]/g,""),b;switch(a){case"css":case"none":b=!1;break;case"jquery":b=!0;break;default:b=!e.csstransitions}this.isUsingJQueryAnimation=b,this._updateUsingTransforms()},_updateTransformsEnabled:function(){this._updateUsingTransforms()},_updateUsingTransforms:function(){var a=this.usingTransforms=this.options.transformsEnabled&&e.csstransforms&&e.csstransitions&&!this.isUsingJQueryAnimation;a||(delete this.options.hiddenStyle.scale,delete this.options.visibleStyle.scale),this.getPositionStyles=a?this._translate:this._positionAbs},_filter:function(a){var b=this.options.filter===""?"*":this.options.filter;if(!b)return a;var c=this.options.hiddenClass,d="."+c,e=a.filter(d),f=e;if(b!=="*"){f=e.filter(b);var g=a.not(d).not(b).addClass(c);this.styleQueue.push({$el:g,style:this.options.hiddenStyle})}return this.styleQueue.push({$el:f,style:this.options.visibleStyle}),f.removeClass(c),a.filter(b)},updateSortData:function(a,c){var d=this,e=this.options.getSortData,f,g;a.each(function(){f=b(this),g={};for(var a in e)!c&&a==="original-order"?g[a]=b.data(this,"isotope-sort-data")[a]:g[a]=e[a](f,d);b.data(this,"isotope-sort-data",g)})},_sort:function(){var a=this.options.sortBy,b=this._getSorter,c=this.options.sortAscending?1:-1,d=function(d,e){var f=b(d,a),g=b(e,a);return f===g&&a!=="original-order"&&(f=b(d,"original-order"),g=b(e,"original-order")),(f>g?1:f<g?-1:0)*c};this.$filteredAtoms.sort(d)},_getSorter:function(a,c){return b.data(a,"isotope-sort-data")[c]},_translate:function(a,b){return{translate:[a,b]}},_positionAbs:function(a,b){return{left:a,top:b}},_pushPosition:function(a,b,c){b=Math.round(b+this.offset.left),c=Math.round(c+this.offset.top);var d=this.getPositionStyles(b,c);this.styleQueue.push({$el:a,style:d}),this.options.itemPositionDataEnabled&&a.data("isotope-item-position",{x:b,y:c})},layout:function(a,b){var c=this.options.layoutMode;this["_"+c+"Layout"](a);if(this.options.resizesContainer){var d=this["_"+c+"GetContainerSize"]();this.styleQueue.push({$el:this.element,style:d})}this._processStyleQueue(a,b),this.isLaidOut=!0},_processStyleQueue:function(a,c){var d=this.isLaidOut?this.isUsingJQueryAnimation?"animate":"css":"css",f=this.options.animationOptions,g=this.options.onLayout,h,i,j,k;i=function(a,b){b.$el[d](b.style,f)};if(this._isInserting&&this.isUsingJQueryAnimation)i=function(a,b){h=b.$el.hasClass("no-transition")?"css":d,b.$el[h](b.style,f)};else if(c||g||f.complete){var l=!1,m=[c,g,f.complete],n=this;j=!0,k=function(){if(l)return;var b;for(var c=0,d=m.length;c<d;c++)b=m[c],typeof b=="function"&&b.call(n.element,a,n);l=!0};if(this.isUsingJQueryAnimation&&d==="animate")f.complete=k,j=!1;else if(e.csstransitions){var o=0,p=this.styleQueue[0],s=p&&p.$el,t;while(!s||!s.length){t=this.styleQueue[o++];if(!t)return;s=t.$el}var u=parseFloat(getComputedStyle(s[0])[r]);u>0&&(i=function(a,b){b.$el[d](b.style,f).one(q,k)},j=!1)}}b.each(this.styleQueue,i),j&&k(),this.styleQueue=[]},resize:function(){this["_"+this.options.layoutMode+"ResizeChanged"]()&&this.reLayout()},reLayout:function(a){this["_"+this.options.layoutMode+"Reset"](),this.layout(this.$filteredAtoms,a)},addItems:function(a,b){var c=this._getAtoms(a);this.$allAtoms=this.$allAtoms.add(c),b&&b(c)},insert:function(a,b){this.element.append(a);var c=this;this.addItems(a,function(a){var d=c._filter(a);c._addHideAppended(d),c._sort(),c.reLayout(),c._revealAppended(d,b)})},appended:function(a,b){var c=this;this.addItems(a,function(a){c._addHideAppended(a),c.layout(a),c._revealAppended(a,b)})},_addHideAppended:function(a){this.$filteredAtoms=this.$filteredAtoms.add(a),a.addClass("no-transition"),this._isInserting=!0,this.styleQueue.push({$el:a,style:this.options.hiddenStyle})},_revealAppended:function(a,b){var c=this;setTimeout(function(){a.removeClass("no-transition"),c.styleQueue.push({$el:a,style:c.options.visibleStyle}),c._isInserting=!1,c._processStyleQueue(a,b)},10)},reloadItems:function(){this.$allAtoms=this._getAtoms(this.element.children())},remove:function(a,b){this.$allAtoms=this.$allAtoms.not(a),this.$filteredAtoms=this.$filteredAtoms.not(a);var c=this,d=function(){a.remove(),b&&b.call(c.element)};a.filter(":not(."+this.options.hiddenClass+")").length?(this.styleQueue.push({$el:a,style:this.options.hiddenStyle}),this._sort(),this.reLayout(d)):d()},shuffle:function(a){this.updateSortData(this.$allAtoms),this.options.sortBy="random",this._sort(),this.reLayout(a)},destroy:function(){var a=this.usingTransforms,b=this.options;this.$allAtoms.removeClass(b.hiddenClass+" "+b.itemClass).each(function(){var b=this.style;b.position="",b.top="",b.left="",b.opacity="",a&&(b[i]="")});var c=this.element[0].style;for(var d in this.originalStyle)c[d]=this.originalStyle[d];this.element.unbind(".isotope").undelegate("."+b.hiddenClass,"click").removeClass(b.containerClass).removeData("isotope"),w.unbind(".isotope")},_getSegments:function(a){var b=this.options.layoutMode,c=a?"rowHeight":"columnWidth",d=a?"height":"width",e=a?"rows":"cols",g=this.element[d](),h,i=this.options[b]&&this.options[b][c]||this.$filteredAtoms["outer"+f(d)](!0)||g;h=Math.floor(g/i),h=Math.max(h,1),this[b][e]=h,this[b][c]=i},_checkIfSegmentsChanged:function(a){var b=this.options.layoutMode,c=a?"rows":"cols",d=this[b][c];return this._getSegments(a),this[b][c]!==d},_masonryReset:function(){this.masonry={},this._getSegments();var a=this.masonry.cols;this.masonry.colYs=[];while(a--)this.masonry.colYs.push(0)},_masonryLayout:function(a){var c=this,d=c.masonry;a.each(function(){var a=b(this),e=Math.ceil(a.outerWidth(!0)/d.columnWidth);e=Math.min(e,d.cols);if(e===1)c._masonryPlaceBrick(a,d.colYs);else{var f=d.cols+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.colYs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryPlaceBrick(a,g)}})},_masonryPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=this.masonry.columnWidth*d,h=c;this._pushPosition(a,g,h);var i=c+a.outerHeight(!0),j=this.masonry.cols+1-f;for(e=0;e<j;e++)this.masonry.colYs[d+e]=i},_masonryGetContainerSize:function(){var a=Math.max.apply(Math,this.masonry.colYs);return{height:a}},_masonryResizeChanged:function(){return this._checkIfSegmentsChanged()},_fitRowsReset:function(){this.fitRows={x:0,y:0,height:0}},_fitRowsLayout:function(a){var c=this,d=this.element.width(),e=this.fitRows;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.x!==0&&f+e.x>d&&(e.x=0,e.y=e.height),c._pushPosition(a,e.x,e.y),e.height=Math.max(e.y+g,e.height),e.x+=f})},_fitRowsGetContainerSize:function(){return{height:this.fitRows.height}},_fitRowsResizeChanged:function(){return!0},_cellsByRowReset:function(){this.cellsByRow={index:0},this._getSegments(),this._getSegments(!0)},_cellsByRowLayout:function(a){var c=this,d=this.cellsByRow;a.each(function(){var a=b(this),e=d.index%d.cols,f=Math.floor(d.index/d.cols),g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByRowGetContainerSize:function(){return{height:Math.ceil(this.$filteredAtoms.length/this.cellsByRow.cols)*this.cellsByRow.rowHeight+this.offset.top}},_cellsByRowResizeChanged:function(){return this._checkIfSegmentsChanged()},_straightDownReset:function(){this.straightDown={y:0}},_straightDownLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,0,c.straightDown.y),c.straightDown.y+=d.outerHeight(!0)})},_straightDownGetContainerSize:function(){return{height:this.straightDown.y}},_straightDownResizeChanged:function(){return!0},_masonryHorizontalReset:function(){this.masonryHorizontal={},this._getSegments(!0);var a=this.masonryHorizontal.rows;this.masonryHorizontal.rowXs=[];while(a--)this.masonryHorizontal.rowXs.push(0)},_masonryHorizontalLayout:function(a){var c=this,d=c.masonryHorizontal;a.each(function(){var a=b(this),e=Math.ceil(a.outerHeight(!0)/d.rowHeight);e=Math.min(e,d.rows);if(e===1)c._masonryHorizontalPlaceBrick(a,d.rowXs);else{var f=d.rows+1-e,g=[],h,i;for(i=0;i<f;i++)h=d.rowXs.slice(i,i+e),g[i]=Math.max.apply(Math,h);c._masonryHorizontalPlaceBrick(a,g)}})},_masonryHorizontalPlaceBrick:function(a,b){var c=Math.min.apply(Math,b),d=0;for(var e=0,f=b.length;e<f;e++)if(b[e]===c){d=e;break}var g=c,h=this.masonryHorizontal.rowHeight*d;this._pushPosition(a,g,h);var i=c+a.outerWidth(!0),j=this.masonryHorizontal.rows+1-f;for(e=0;e<j;e++)this.masonryHorizontal.rowXs[d+e]=i},_masonryHorizontalGetContainerSize:function(){var a=Math.max.apply(Math,this.masonryHorizontal.rowXs);return{width:a}},_masonryHorizontalResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_fitColumnsReset:function(){this.fitColumns={x:0,y:0,width:0}},_fitColumnsLayout:function(a){var c=this,d=this.element.height(),e=this.fitColumns;a.each(function(){var a=b(this),f=a.outerWidth(!0),g=a.outerHeight(!0);e.y!==0&&g+e.y>d&&(e.x=e.width,e.y=0),c._pushPosition(a,e.x,e.y),e.width=Math.max(e.x+f,e.width),e.y+=g})},_fitColumnsGetContainerSize:function(){return{width:this.fitColumns.width}},_fitColumnsResizeChanged:function(){return!0},_cellsByColumnReset:function(){this.cellsByColumn={index:0},this._getSegments(),this._getSegments(!0)},_cellsByColumnLayout:function(a){var c=this,d=this.cellsByColumn;a.each(function(){var a=b(this),e=Math.floor(d.index/d.rows),f=d.index%d.rows,g=(e+.5)*d.columnWidth-a.outerWidth(!0)/2,h=(f+.5)*d.rowHeight-a.outerHeight(!0)/2;c._pushPosition(a,g,h),d.index++})},_cellsByColumnGetContainerSize:function(){return{width:Math.ceil(this.$filteredAtoms.length/this.cellsByColumn.rows)*this.cellsByColumn.columnWidth}},_cellsByColumnResizeChanged:function(){return this._checkIfSegmentsChanged(!0)},_straightAcrossReset:function(){this.straightAcross={x:0}},_straightAcrossLayout:function(a){var c=this;a.each(function(a){var d=b(this);c._pushPosition(d,c.straightAcross.x,0),c.straightAcross.x+=d.outerWidth(!0)})},_straightAcrossGetContainerSize:function(){return{width:this.straightAcross.x}},_straightAcrossResizeChanged:function(){return!0}},b.fn.imagesLoaded=function(a){function h(){a.call(c,d)}function i(a){var c=a.target;c.src!==f&&b.inArray(c,g)===-1&&(g.push(c),--e<=0&&(setTimeout(h),d.unbind(".imagesLoaded",i)))}var c=this,d=c.find("img").add(c.filter("img")),e=d.length,f="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",g=[];return e||h(),d.bind("load.imagesLoaded error.imagesLoaded",i).each(function(){var a=this.src;this.src=f,this.src=a}),c};var x=function(b){a.console&&a.console.error(b)};b.fn.isotope=function(a,c){if(typeof a=="string"){var d=Array.prototype.slice.call(arguments,1);this.each(function(){var c=b.data(this,"isotope");if(!c){x("cannot call methods on isotope prior to initialization; attempted to call method '"+a+"'");return}if(!b.isFunction(c[a])||a.charAt(0)==="_"){x("no such method '"+a+"' for isotope instance");return}c[a].apply(c,d)})}else this.each(function(){var d=b.data(this,"isotope");d?(d.option(a),d._init(c)):b.data(this,"isotope",new b.Isotope(a,this,c))});return this}})(window,jQuery);
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(49.183514, -97.939793),
          zoom: 16,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          navigationControl: true,
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
          }
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var coopathome = new google.maps.LatLng(49.183514, -97.939793);

        var image = {
          url: 'home.png',
          size: new google.maps.Size(75, 80),
        };

        var marker = new google.maps.Marker({
          position: coopathome,
          map: map,
          title:"Co-op@Home",
          icon: image,
          });

        var styles = [
        {
          stylers: [
           { hue: "#BF8040" },
            { saturation: -20 }
          ]
        },{
          featureType: "landscape",
         stylers: [
           { color: "#BF8040" },
           { visibility: "simplified" },
           { lightness: "60" }
         ]
       },{
          featureType: "road",
          elementType: "labels",
          stylers: [
           { visibility: "on" }
         ]
       },{
          featureType: "road",
          elementType: "geometry.fill",
          stylers: [
          { visibility: "off" },
          { color: "#BF8040" }
         ]
       },{
          featureType: "road",
          elementType: "geometry.stroke",
          stylers: [
          { visibility: "on" },
          { color: "#BF8040" }
         ]
       },{
          featureType: "water",
          elementType: "geometry",
          stylers: [
          { visibility: "simplified" },
          { color: "#5798C7" }
         ]
       },{
          featureType: "poi",
          elementType: "geometry",
          stylers: [
          { visibility: "simplified" },
          { color: "#734E26" },
          { lightness: "40" }
         ]
       }
      ];

      map.setOptions({styles: styles});

      }

      google.maps.event.addDomListener(window, 'load', initialize);

function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(49.27900, -97.93282),
          zoom: 9,
          mapTypeId: google.maps.MapTypeId.ROADMAP,
          mapTypeControl: true,
          mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.DROPDOWN_MENU
          },
          navigationControl: true,
          navigationControlOptions: {
            style: google.maps.NavigationControlStyle.SMALL
          }
        };
        var map = new google.maps.Map(document.getElementById("map-canvas"),
            mapOptions);

        var styles = [
        {
          stylers: [
           { hue: "#BF8040" },
            { saturation: -20 }
          ]
        },{
          featureType: "landscape",
         stylers: [
           { color: "#BF8040" },
           { visibility: "simplified" },
           { lightness: "60" }
         ]
       },{
          featureType: "road",
          elementType: "labels",
          stylers: [
           { visibility: "off" }
         ]
       },{
          featureType: "road",
          elementType: "geometry",
          stylers: [
          { visibility: "simplified" },
          { color: "#BF8040" }
         ]
       },{
          featureType: "water",
          elementType: "geometry",
          stylers: [
          { visibility: "simplified" },
          { color: "#5798C7" }
         ]
       },{
          featureType: "poi",
          elementType: "geometry",
          stylers: [
          { visibility: "simplified" },
          { color: "#734E26" },
          { lightness: "40" }
         ]
       }
      ];

      map.setOptions({styles: styles});

        var winkler = new google.maps.Circle({
          center: new google.maps.LatLng(49.109873, -97.893058),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var stjoseph = new google.maps.Circle({
          center: new google.maps.LatLng(49.13225831354115, -97.3939728713852),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var thornhill = new google.maps.Circle({
          center: new google.maps.LatLng(49.19125833333333, -98.21359999999999),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var stephenfield = new google.maps.Circle({
          center: new google.maps.LatLng(49.50488333333333, -98.21055),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var blumenfeld = new google.maps.Circle({
          center: new google.maps.LatLng(49.05223958217645, -97.96181116593051),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var altona = new google.maps.Circle({
          center: new google.maps.LatLng(49.08776388888889, -97.55866111111111),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var carman = new google.maps.Circle({
          center: new google.maps.LatLng(49.50868333333334, -98.00876666666667),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var darlingford = new google.maps.Circle({
          center: new google.maps.LatLng(49.1467573805923, -98.37192648745877),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var homewood = new google.maps.Circle({
          center: new google.maps.LatLng(49.50367222222222, -97.8988027777778),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var kane = new google.maps.Circle({
          center: new google.maps.LatLng(49.34969012016662, -97.71928097844821),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var truckstop = new google.maps.Circle({
          center: new google.maps.LatLng(49.19457499999999, -97.990225),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var sperling = new google.maps.Circle({
          center: new google.maps.LatLng(49.51744461060855, -97.71656799316396),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var plumcoulee = new google.maps.Circle({
          center: new google.maps.LatLng(49.18992961969731, -97.76140364376826),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var rosetown = new google.maps.Circle({
          center: new google.maps.LatLng(49.0351790427966, -97.72800383699196),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var roland = new google.maps.Circle({
          center: new google.maps.LatLng(49.35097891867653, -97.93320332984185),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var lowefarm = new google.maps.Circle({
          center: new google.maps.LatLng(49.355248, -97.587306),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var halbstadt = new google.maps.Circle({
          center: new google.maps.LatLng(49.041529, -97.397637),
          map: map,
          radius: 10000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

        var tinkercreek = new google.maps.Circle({
          center: new google.maps.LatLng(49.088031, -98.084012),
          map: map,
          radius: 5000,    // 10 km in metres
          fillColor: "#bb4d3e",
          fillOpacity: "0.35",
          strokeWeight: "0",
        });

      }
      google.maps.event.addDomListener(window, 'load', initialize);

/**
 * modalEffects.js v1.0.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 * 
 * Copyright 2013, Codrops
 * http://www.codrops.com
 */
var ModalEffects = (function() {

	function init() {

		var overlay = document.querySelector( '.md-overlay' );

		[].slice.call( document.querySelectorAll( '.md-trigger' ) ).forEach( function( el, i ) {

			var modal = document.querySelector( '#' + el.getAttribute( 'data-modal' ) ),
				close = modal.querySelector( '.md-close' );

			function removeModal( hasPerspective ) {
				classie.remove( modal, 'md-show' );

				if( hasPerspective ) {
					classie.remove( document.documentElement, 'md-perspective' );
				}
			}

			function removeModalHandler() {
				removeModal( classie.has( el, 'md-setperspective' ) ); 
			}

			el.addEventListener( 'click', function( ev ) {
				classie.add( modal, 'md-show' );
				overlay.removeEventListener( 'click', removeModalHandler );
				overlay.addEventListener( 'click', removeModalHandler );

				if( classie.has( el, 'md-setperspective' ) ) {
					setTimeout( function() {
						classie.add( document.documentElement, 'md-perspective' );
					}, 25 );
				}
			});

			close.addEventListener( 'click', function( ev ) {
				ev.stopPropagation();
				removeModalHandler();
			});

		} );

	}

	init();

})();
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-cssanimations-csstransforms-shiv-cssclasses-prefixed-testprop-testallprops-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function x(a){j.cssText=a}function y(a,b){return x(prefixes.join(a+";")+(b||""))}function z(a,b){return typeof a===b}function A(a,b){return!!~(""+a).indexOf(b)}function B(a,b){for(var d in a){var e=a[d];if(!A(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function C(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:z(f,"function")?f.bind(d||b):f}return!1}function D(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+n.join(d+" ")+d).split(" ");return z(b,"string")||z(b,"undefined")?B(e,b):(e=(a+" "+o.join(d+" ")+d).split(" "),C(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m="Webkit Moz O ms",n=m.split(" "),o=m.toLowerCase().split(" "),p={},q={},r={},s=[],t=s.slice,u,v={}.hasOwnProperty,w;!z(v,"undefined")&&!z(v.call,"undefined")?w=function(a,b){return v.call(a,b)}:w=function(a,b){return b in a&&z(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=t.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(t.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(t.call(arguments)))};return e}),p.cssanimations=function(){return D("animationName")},p.csstransforms=function(){return!!D("transform")};for(var E in p)w(p,E)&&(u=E.toLowerCase(),e[u]=p[E](),s.push((e[u]?"":"no-")+u));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)w(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},x(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._domPrefixes=o,e._cssomPrefixes=n,e.testProp=function(a){return B([a])},e.testAllProps=D,e.prefixed=function(a,b,c){return b?D(a,b,c):D(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+s.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-touch-shiv-cssclasses-teststyles-prefixes-load
 */
;window.Modernizr=function(a,b,c){function w(a){j.cssText=a}function x(a,b){return w(m.join(a+";")+(b||""))}function y(a,b){return typeof a===b}function z(a,b){return!!~(""+a).indexOf(b)}function A(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:y(f,"function")?f.bind(d||b):f}return!1}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n={},o={},p={},q=[],r=q.slice,s,t=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},u={}.hasOwnProperty,v;!y(u,"undefined")&&!y(u.call,"undefined")?v=function(a,b){return u.call(a,b)}:v=function(a,b){return b in a&&y(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=r.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(r.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(r.call(arguments)))};return e}),n.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:t(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c};for(var B in n)v(n,B)&&(s=B.toLowerCase(),e[s]=n[B](),q.push((e[s]?"":"no-")+s));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)v(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},w(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e.testStyles=t,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+q.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};
$('#bfflyer-download').click(function() {
    // do the useful thing...
    // then track that it happened
    analytics.track('Downloaded Black Friday Flyer');
});