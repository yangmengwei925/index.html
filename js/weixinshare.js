var baseUrl='http://m.yx.renren.com/2496/shengdan/';
function updateWeiXin(obj){
    var shareData = {
                    title: obj.title,
                    desc: obj.desc,
                    link: obj.link,
                    imgUrl: obj.imgUrl,
                    success: function() {
                        //用户确认分享后执行的回调函数
                        //jQuery("#shareBox").fadeOut();
                    },
                    cancel: function() {
                        //用户取消分享后执行的回调函数
                        //jQuery("#shareBox").fadeOut();
                    }
                };
            
            var shareData2 = {
                    title: obj.desc,
                    //desc: obj.title,
                    link: obj.link,
                    imgUrl: obj.imgUrl,
                    success: function() {
                        //用户确认分享后执行的回调函数
                        //jQuery("#shareBox").fadeOut();
                    },
                    cancel: function() {
                        //用户取消分享后执行的回调函数
                        //jQuery("#shareBox").fadeOut();
                    }
                };
            
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData2);
}
function weixin(obj) {
	
	var url = location.href.split('#')[0];
    Zepto.post("http://m.yx.renren.com/2496/wxShare", {url: url}, function(json){
        wx.config({
            debug: false,
            appId: json.appId,
            timestamp: json.timestamp,
            nonceStr: json.nonceStr,
            signature: json.signature,
            jsApiList: [
                        'checkJsApi',
		                'onMenuShareAppMessage',
		                'onMenuShareTimeline',
		                //'onMenuShareQQ',
		                //'onMenuShareWeibo',
		                'hideMenuItems'
		                ]
        });

        wx.ready(function() {
            var shareData = {
	                title: obj.title,
	                desc: obj.desc,
	                link: obj.link,
	                imgUrl: obj.imgUrl,
	                success: function() {
	                    //用户确认分享后执行的回调函数
	                	//jQuery("#shareBox").fadeOut();
	                },
	                cancel: function() {
	                    //用户取消分享后执行的回调函数
	                	//jQuery("#shareBox").fadeOut();
	                }
	            };
            
            var shareData2 = {
                    title: obj.desc,
                    //desc: obj.title,
                    link: obj.link,
                    imgUrl: obj.imgUrl,
                    success: function() {
                        //用户确认分享后执行的回调函数
                    	//jQuery("#shareBox").fadeOut();
                    },
                    cancel: function() {
                        //用户取消分享后执行的回调函数
                    	//jQuery("#shareBox").fadeOut();
                    }
                };
            
            wx.onMenuShareAppMessage(shareData);
            wx.onMenuShareTimeline(shareData2);
            //wx.onMenuShareQQ(sharata);
            //wx.onMenuShareWeibo(shareData);
            wx.hideMenuItems({
                menuList: [
                   'menuItem:share:qq',
                   'menuItem:share:QZone',
                   //'menuItem:copyUrl',
                   'menuItem:share:email',
                   'menuItem:openWithSafari'
                   ]
            });
        });

        wx.error(function(res) {
            //alert(res.errMsg);
        });
    }, "json");
}