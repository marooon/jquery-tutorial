/**
 * JQuery tutorial plugin
 *
 * Copyright (c) 2015 marooon
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * @author: marooon (http://marooon.com)
 * @version: 0.0.1
**/

;(function($) {
    var s = 0;
    $.fn.tutorial = function(options){
        var defaults = {
            speed: 300,
            color: "#000000",
            opacity: 0.6,
            message: "#message",
            message_text: [
                "ステップ１<br />aaaテスト1です。最初。",
                "ステップ２<br />eeeeeeテスト2です。",
                "ステップ３<br />テスト3です。",
                "ステップ４<br />テスト4です。"
            ],
            target: [".step1",".step2",".step3",".step4"],
            tutorial: "#tutorial",
            btn_open: "#btn-open",
            btn_next: "#btn-next",
            btn_prev: "#btn-prev",
            btn_close: "#btn-close",
            pager: "#pageArea"
        }
        var options = $.extend(defaults, options);
        this.each(function() {
            $(options.btn_open).click(function(){
                $.tutorial.animate.open(options);
            });
            $(options.btn_next).click(function(){
                $.tutorial.animate.next(options);
            });
            $(options.btn_prev).click(function(){
                $.tutorial.animate.prev(options);
            });
            $(options.btn_close).click(function(){
                $.tutorial.animate.close(options);
            });
        });
    };
    $.tutorial = {
        animate: {
            open: function(options){
                $(options.message).html(options.message_text[s]);
                $(options.tutorial).show();
                $.tutorial.updateShape(options);
                $.tutorial.updateStep(options);
                return;
            },
            next: function(options){
                s++;
                if(!options.target[s]){
                    s--;
                    return;
                };
                $(options.message).html(options.message_text[s]);
                $.tutorial.updateShape(options);
                $.tutorial.updateStep(options);
                return;
            },
            prev: function(options){
                s--;
                if(!options.target[s]){
                    s++;
                    return;
                };
                $(options.message).html(options.message_text[s]);
                $.tutorial.updateShape(options);
                $.tutorial.updateStep(options);
                return;
            },
            close: function(options){
                s=0;
                $(options.tutorial).hide();
                $.tutorial.updateStep(options);
                return;
            }
        },
        updateShape: function(options){
            var target = options.target[s]
            // 要素の幅と縦
            var ofs = $(target).offset();
            var t = ofs.top;
            var l = ofs.left;
            var h = $(target).height();
            var w = $(target).width();
            var ww = $(window).width();
            var wh = document.body.clientHeight;
            $("html,body").animate({scrollTop:t-30},"slow");
            $(".top", options.tutorial).animate({
                "background-color": options.color,
                "opacity": options.opacity,
                "height": t
            }, options.speed );
            $(".left", options.tutorial).animate({
                "background-color": options.color,
                "opacity": options.opacity,
                "top": t,
                "height": h,
                "width": l
            }, options.speed );
            $(".right", options.tutorial).animate({
                "background-color": options.color,
                "opacity": options.opacity,
                "top": t,
                "height": h,
                "width": ww-l-w
            }, options.speed );
            $(".bottom", options.tutorial).animate({
                "background-color": options.color,
                "opacity": options.opacity,
                "top": t+h,
                "height": wh-t-h
            }, options.speed );
            return;
        },
        updateStep: function(options){
            var pageArea = options.pager;
            var page = s+1;
            var txt = page+" / "+options.target.length;
            $(pageArea).html(txt);
            return ;
        }
    };
})(jQuery);
