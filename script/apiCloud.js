

function initFs(callBack){
    var fs = api.require('fs');
    fs.exist({
        path: 'fs://shiyuanmeng'
    },function(ret,err){

        if(!ret.exist ){
            fs.createDir({ path:'fs://shiyuanmeng'},function(ret,err){
                //alert(JSON.stringify(ret))
                //alert("创建")
                if(callBack){
                    callBack(ret,err);
                }
            });
        }else if(callBack){
            callBack(ret,err);
        }

    });

}


/*
 * 图片压缩处理   , 并调用图片 裁剪处理  【有返回值 （新的url and 图片裁剪的样式）】
 * ***注意 布局 要求   <div>< img  src ="*"/></div> 外层盒子 宽度showWidth 高度showHieght 溢出隐藏
 * @param {Object} url 图片地址
 * @param {Object} showWidth  要展示的宽
 * @param {Object} showHieght 要展示的高
 */
function getImgByThisSize(url,showWidth,showHieght){
    if(url&&url.startWith("http")){
        //对于含特定的  路径的图片 做分割
        if(url.indexOf("/fangpai/") != (-1)){
            var s1=url.split("/fangpai/");
        }else if(url.indexOf("/guagua/") != (-1)){
            var s1=url.split("/guagua/");
        }else if(url.indexOf("/guoguo/") != (-1)){
            var s1=url.split("/guoguo/");
        }else if(url.indexOf("/miaomuhuahui/") != (-1)){
            var s1=url.split("/miaomuhuahui/");
        }else if(url.indexOf("/storage/") != (-1)){
            var s1=url.split("/storage/");
        }


        //从图片地址中获取图片的真实宽高
        var group=s1[1].split("*");
        var orgWidth=parseFloat(group[0]);
        var orgHeight=parseFloat(group[1]);
        // 根据         要展示的宽 计算 2倍图所需要的宽度
        var width = Math.round(showWidth*2);
        //如果【 图片真实宽度】 大于 【2倍图所需要的宽度】 那么就 对图片 地址  拼接参数 进行 图片 压缩
        if (width < orgWidth) {
            var imgTypes = url.substring(url.lastIndexOf("."));
            var imgName = url.split(imgTypes)[0]+"_"+width+"_0";
            url = imgName+imgTypes;
        }
        // 进行图片裁剪  并把裁剪结果 返回
        return getImgSizeBySize(url,showWidth,showHieght);
    }
}
/*
 * 图片 裁剪处理  【有返回值 （新的url and 图片裁剪的样式）】
 * @param {Object} url 图片地址
 * @param {Object} showWidth  要展示的宽
 * @param {Object} showHieght 要展示的高
 */
function getImgSizeBySize(url,showWidth,showHieght){
    if(url){
        //获取图片的真是 宽高
        var realSize = getImageRealSize(url);
        //需要的缩略图尺寸
        var thumSize = {w:showWidth,h:showHieght};
        //根据   原真实宽高  和 压缩后宽度 计算  ---> 压缩后 高度
        var h = getHeightFromWidth(realSize.w,realSize.h,thumSize.w);

        //根据 需要高度 与  图片 压缩后 高度 进行比较  判断 是 需要 【左右裁剪 展示中间部分】还是【上下裁剪显示中间部分】 以此来不让图片变形
        if(thumSize.h > h){
            //【左右裁剪 展示中间部分】  即 高度固定是   showHieght
            var w = getHeightFromWidth(realSize.h,realSize.w,thumSize.h);//   算出左右超出部分值
            var over = 0-Math.round((w - thumSize.w)/2);//  通过算出的值左右截取
            var obj = {url:url,style:"margin-left:"+over+"px"+"; margin-right:"+over+"px;height:"+showHieght+"px"};
            //var obj={over:over,type:1}
            return obj;
        }else{
            var over =  0-Math.round((h - thumSize.h)/2); //  通过算出的值上下截取
            var obj = {url:url,style:"margin-top:"+over+"px"+";margin-bottom:"+over+"px;width:"+showWidth+"px"};
            // var obj={over:over,type:2}
            return obj;
        }
    }
}

//只是压缩图片  不做变形处理
function changeImgBySize(url,showWidth){
	if(url.indexOf("/guoguo/") != (-1)){
        var s1=url.split("/guoguo/");
    }else if(url.indexOf("/guagua/") != (-1)){
        var s1=url.split("/guagua/");
    }else if(url.indexOf("/guoguo/") != (-1)){
        var s1=url.split("/guoguo/");
    }else if(url.indexOf("/miaomuhuahui/") != (-1)){
        var s1=url.split("/miaomuhuahui/");
    }else if(url.indexOf("/storage/") != (-1)){
        var s1=url.split("/storage/");
    }
    var group=s1[1].split("*");
    var orgWidth=parseFloat(group[0]);
    var orgHeight=parseFloat(group[1]);
    var width = Math.round(showWidth*2);
    if (width < orgWidth) {
    	var imgTypes = url.substring(url.lastIndexOf("."));
    	var imgName = url.split(imgTypes)[0]+"_"+width+"_0";
    	url = imgName+imgTypes;
    }
    return url;
}
//获取图片真实尺寸
function getImageRealSize(url){
    if(url){
        if(url.indexOf("/fangpai/") != (-1)){
            var s1=url.split("/fangpai/");
        }else if(url.indexOf("/guagua/") != (-1)){
            var s1=url.split("/guagua/");
        }else if(url.indexOf("/guoguo/") != (-1)){
            var s1=url.split("/guoguo/");
        }else if(url.indexOf("/miaomuhuahui/") != (-1)){
            var s1=url.split("/miaomuhuahui/");
        }else if(url.indexOf("/storage/") != (-1)){
            var s1=url.split("/storage/");
        }

        var group=s1[1].split("*");
        var orgWidth=parseFloat(group[0]);
        var orgHeight=parseFloat(group[1]);
        var obj ={w:orgWidth,h:orgHeight};
        return obj;
    }
}

/*
*   这块是按比例算出对应的宽高
* */
function getHeightFromWidth(realWidth,realHeight,thumWidth){
    var thumHeight = Math.round((thumWidth/realWidth)*realHeight);//显示宽度除以图片真实宽度 乘以 图片真实高度
    return thumHeight;
}



function toast(msg){
	var strDM = api.systemType;//系统
	if (strDM == 'ios') {
        api.toast({
	        msg: msg,
	        duration:2000,
	        location: 'middle'
	    });
    } else if (strDM == 'android') {
        api.toast({
	        msg: msg,
	        duration:2000,
	        location: 'bottom'
	    });
    }
}



function ajax(url,params,callback,endFunction){
    var user = getUserInfo();
    params.token = user.token;
   //alert(url);
    api.ajax({
        url: url,
        method: 'post',
        timeout: 120,
        dataType: 'json',
        data: {
            values: params
            }
        }, function (ret, err) {
            if(ret){
                callback(ret);
            }else{
                    if(err.msg && err.msg != ""){
                        api.toast({msg: err.msg});
                    }else{
                        //服务器定义的错误消息
                        api.toast({msg: err.body});
                    }
                }
                endFunction();
        });
}

function ajaxBase64(base64,type,callback,endFunction){
        var params = {};
        params.file = base64;
        params.type = 1;
        params.suffix = type;
        ajax(uploadImageBase64Url,params,function(ret){
            if(ret && isBlack(ret.error)){
                var imgUrl = ret.ok;
                callback(imgUrl);
            }else{
                api.toast({
                    msg: '上传图片失败',
                    duration:2000,
                    location: 'middle'
                });
            }
        },function(){
            endFunction();
        });
}

function publicAddImage(sourceType,targetWidth,callBack) {
    var sourceT='library';
    if(sourceType){
        sourceT=sourceType;
    }
    api.getPicture({
        sourceType: sourceT,
        encodingType: 'jpg',
        mediaValue: 'pic',
        allowEdit:true,
        destinationType: 'url',
        targetWidth: targetWidth
    }, function (ret, err) {

        if (ret && isNotBlack(ret.data)) {
            var orgPath = ret.data;
            var fs = api.require('fs');
            //todo 这里是APIcloud bug 会回调两次
            var flag = true;
            fs.moveTo({
                oldPath: orgPath,
                newPath: 'fs://fangzhibo/img/tmpCopy/'
            }, function (ret, err) {
                if (ret.status) {
                    if(!flag){
                        return;
                    }
                    flag = false;
                    var fileName = orgPath.substring(orgPath.lastIndexOf("/"), orgPath.length);
                    callBack({status: true, filePath: api.fsDir + "/fangzhibo/img/tmpCopy" + fileName}, {});
                } else {
                    callBack({}, err);
                }
            });
        } else {
            callBack({}, err);
        }
    });
}

//缓存图片
function apiCloud_downloadImg(imgUrl,callBack){
    var path="fs://fangzhibo/download/img/"+hex_md5(imgUrl);
    var fs = api.require('fs');
    fs.exist({
        path: path
    },function(ret,err){
        if(ret.exist){
            callBack(path);
        }else{
            api.download({
                url: imgUrl,
                savePath: path,
                report: false,
                cache: false,
                allowResume:false
            },function(ret,err){
                if (ret) {
                    callBack(path);
                } else{
                    callBack()
                }
            });
        }
    });

}



function updateImageToShow(type){
    api.actionSheet({
        cancelTitle: '取消',
        buttons: ['拍照','从手机相册选择']
    },function(ret,err){
        var index= ret.buttonIndex;
        var sourceType;
        switch(index){
            case 1 : sourceType = 'camera';
                break;
            case 2 : sourceType = 'album';
                break;
            default : return;
        }
        api.getPicture({
            sourceType: sourceType,
            //encodingType: 'jpg',
            mediaValue: 'pic',
            destinationType: 'base64',
            allowEdit: true,
            quality: 100,
            saveToPhotoAlbum: true
        }, function(ret, err){
            if (ret && isNotBlack(ret.base64Data)) {
                api.showProgress({
                    title : '上传中...'
                });
                var suffix = ret.data.substring(ret.data.lastIndexOf(".")+1);
                ajaxBase64(ret.base64Data,suffix,function(imgUrl){
                    api.hideProgress();
                    $api.byId(type).src = imgUrl;
                },function(){
                    api.hideProgress();
                });
            }
        });
    });
}



/****
 * 打开相册
 *
 * @param max 最大选取数量
 * @param needCopy 是否需要拷贝到本地目录（如果有压缩，不会拷贝）
 * @param callBack 回调方法
 * 返回结果（如果不传targetWidth,则不返回宽度）
 * {status:false,data:[]}
 * data:[{path:图片路径,width:宽度,height:高度},{path:图片路径,width:宽度,height:高度},...];
 *
 *
 */
function openImage(max,needCopy,callBack) {
    var obj = api.require('UIMediaScanner');
    obj.open({
        type:'picture',
        column: 4,
        classify: true,
        max: max,
        sort: {
            key: 'time',
            order: 'desc'
        },
        texts: {
            stateText: '请选择图片',
            cancelText: '取消',
            finishText: '完成'
        },
        styles: {
            bg: '#fff',
            mark: {
                icon: '',
                position: 'bottom_left',
                size: 20
            },
            nav: {
                bg: '#eee',
                stateColor: '#000',
                stateSize: 18,
                cancleBg: 'rgba(0,0,0,0)',
                cancelColor: '#000',
                cancelSize: 18,
                finishBg: 'rgba(0,0,0,0)',
                finishColor: '#000',
                finishSize: 18
            }
        }
    }, function(ret){
        //对选取的图片进行处理（transPath：IOS等设备有旋转的问题，必须要先转换一下。
        // copyTo：从目录拷贝到本地目录,transPath转换完成后是一个临时目录重启APP会删除
        // compress：压缩图片）


        //path: '',                    //字符串类型；资源路径，返回资源在本地的绝对路径
        //thumbPath: '',               //字符串类型；缩略图路径，返回资源在本地的绝对路径
        //suffix: '',                  //字符串类型；文件后缀名，如：png，jpg, mp4
        //size: 1048576,               //数字类型；资源大小，单位（Bytes）
        //time: '2015-06-29 15:49'     //字符串类型；资源创建时间，格式：yyyy-MM-dd HH:mm:ss

        if(ret&&ret.list&&ret.list.length>0){
            api.showProgress();

            var realResult=ret.list;
            var j = 0;
            var hasCall = false;
            var size=realResult.length;
            for (var i = 0; i < realResult.length; i++) {
                (function (i) {
                    obj.transPath({//IOS需要调用transPath
                        path: realResult[i].path
                    }, function(ret){
                        var orgPath=ret.path;
                         if(needCopy){
                            copyTo(orgPath,i);
                        }else{
                            endSuccessCallBack();
                        }

                    });
                })(i);
            }
        }else{
            callBack({status:false,data:[]});
        }

        function endSuccessCallBack(){
            j++;
            if (j == size && !hasCall) {
                hasCall = true;
                api.hideProgress();
                callBack({status:true,data:realResult});
            }
        }

        function copyTo(orgPath,i){
            var fs = api.require('fs');
            fs.copyTo({
                oldPath: orgPath,
                newPath: 'fs://fangzhibo/img/tmpCopy/'
            }, function (ret, err) {
                if (ret.status) {
                    var fileName = orgPath.substring(orgPath.lastIndexOf("/"), orgPath.length);
                    realResult[i].path=api.fsDir + "/fangzhibo/img/tmpCopy" + fileName;
                }
                endSuccessCallBack();
            });
        }
    });
}

	function openImageNew(num,callback){
					//path: '',                    //字符串类型；资源路径，返回资源在本地的绝对路径
                    //thumbPath: '',               //字符串类型；缩略图路径，返回资源在本地的绝对路径
                    //suffix: '',                  //字符串类型；文件后缀名，如：png，jpg, mp4
                    //size: 1048576,               //数字类型；资源大小，单位（Bytes）
                    //time: '2015-06-29 15:49'     //字符串类型；资源创建时间，格式：yyyy-MM-dd HH:mm:ss
        var Multiplechoice = api.require('Multiplechoice');
//      api.showProgress();
		Multiplechoice.choice({
			maxstr : num,
			uploadflowUrl : uploadImageUrl
		},function(ret,err){
			var realResult =[];
			for(var i = 0;i<ret.alllocalpath.length;i++){
				var obj={path:ret.alllocalpath[i],thumbPath:ret.alllocalpath[i]};
				realResult.push(obj);
			}
//			api.hideProgress();
			callback({status:true,data:realResult});
		})
	}

function openVideo(callBack) {
    var obj = api.require('UIMediaScanner');
    obj.open({
        type:'video',
        column: 4,
        classify: true,
        max: 1,
        sort: {
            key: 'time',
            order: 'desc'
        },
        texts: {
            stateText: '请选择视频',
            cancelText: '取消',
            finishText: '完成'
        },
        styles: {
            bg: '#fff',
            mark: {
                icon: '',
                position: 'bottom_left',
                size: 20
            },
            nav: {
                bg: '#eee',
                stateColor: '#000',
                stateSize: 18,
                cancleBg: 'rgba(0,0,0,0)',
                cancelColor: '#000',
                cancelSize: 18,
                finishBg: 'rgba(0,0,0,0)',
                finishColor: '#000',
                finishSize: 18
            }
        }
    }, function(ret){
        //对选取的图片进行处理（transPath：IOS等设备有旋转的问题，必须要先转换一下。
        // copyTo：从目录拷贝到本地目录,transPath转换完成后是一个临时目录重启APP会删除
        // compress：压缩图片）

        //path: '',                    //字符串类型；资源路径，返回资源在本地的绝对路径
        //thumbPath: '',               //字符串类型；缩略图路径，返回资源在本地的绝对路径
        //suffix: '',                  //字符串类型；文件后缀名，如：png，jpg, mp4
        //size: 1048576,               //数字类型；资源大小，单位（Bytes）
        //time: '2015-06-29 15:49'     //字符串类型；资源创建时间，格式：yyyy-MM-dd HH:mm:ss
        if(ret){
            callBack({status:true,data:ret.list});

        }else{
            callBack({status:false,data:[]});
        }


    });


}


//type:0 200K以内，1：400K左右
function compressImage(orgSize,type,path,callBack){
    if(orgSize<200*1024){
        callBack({status: true, path: path});
    }else{

        var imageFilter = api.require("imageFilter");
        var quality=0.5;
        if(orgSize>1024*1024){
            if(type==0){
                quality=0.4;
            }else{
                quality=0.4;
            }
        }else if(orgSize>1024*500&&orgSize<=1024*1024){
            if(type==0){
                quality=0.4;
            }else{
                quality=0.5;
            }
        }else {
            if(type==0){
                quality=0.5;
            }else{
                quality=0.6;
            }
        }
        var imageName = hex_md5(path) +"_"+orgSize+"_"+quality +'.jpg';

        imageFilter.compress({
            img: path,
            quality:quality,
            save: {
                album: false,
                imgPath: "fs://youhuipai/tmpCompress/",
                imgName: imageName
            }
        }, function (ret, err) {
            if (ret.status) {
                callBack({status: true, path: api.fsDir + "/youhuipai/tmpCompress/" + imageName});
            } else {
                callBack({status:true,path:path});
            }
        });
    }

}


//type:0 200K以内，1：400K左右
function compressImage(orgSize,type,path,callBack){
    if(orgSize<200*1024){
        callBack({status: true, path: path});
    }else{

        var imageFilter = api.require("imageFilter");
        var quality=5;
        if(orgSize>1024*1024){
            if(type==0){
                quality=4;
            }else{
                quality=4;
            }
        }else if(orgSize>1024*500&&orgSize<=1024*1024){
            if(type==0){
                quality=4;
            }else{
                quality=5;
            }
        }else {
            if(type==0){
                quality=5;
            }else{
                quality=6;
            }
        }
        var compactPicture = api.require('compactPicture');
        compactPicture.HittingPic({
            picpatharray: [path],
            size: quality
        }, function(ret) {
            if(isNotBlack(ret)  && isNotBlack(ret.states)){
                //转换成小写
                var image;
                var states = ret.states;
                for(var i = 0;i < states.length;i++){
                    image = coverToSuffix(states[i]);
                }
                callBack({status:true,path:image});
            }
        });

    }

}
//数字三位一逗号
function formatNum(strNum) {

    if (strNum.length <= 3) {

        return strNum;

    }

    if (!/^(\+|-)?(\d+)(\.\d+)?$/.test(strNum)) {

        return strNum;

    }

    var a = RegExp.$1, b = RegExp.$2, c = RegExp.$3;

    var re = new RegExp();

    re.compile("(\\d)(\\d{3})(,|$)");

    while (re.test(b)) {

        b = b.replace(re, "$1,$2$3");

    }

    return a + "" + b + "" + c;

}

function openRegister(name,url,pageParam,overload) {

    var delay = 0;
    var sysType = api.systemType;
    var params = {
        name : name,
        url : url,
        pageParam : pageParam,
        bounces : false,//页面是否弹动
        bgColor : 'rgba(255,255,255,0)',
        scrollToTop : false,
        vScrollBarEnabled : false,
        hScrollBarEnabled : false,
        scaleEnabled : false,//页面是否可以缩放，为true时softInputMode参数无效
        slidBackEnabled : true,//是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只iOS有效
        showProgress : false,//是否显示等待框，只在url为网址时有效
        delay : delay,//window显示延迟时间，适用于将被打开的window中可能需要打开有耗时操作的模块时，可延迟window展示到屏幕的时间，保持UI的整体性
        reload : false,//页面已经打开时，是否重新加载页面，重新加载页面后apiready方法将会被执行
        allowEdit : true//是否允许长按页面时弹出选择菜单
    };
    if(sysType == 'android'){
        var ver = api.systemVersion;
        ver = parseFloat(ver);
        if(ver >= 5.0){
            params.delay = 100;
        }
//      params.animation={type:"movein",                //动画类型（详见动画类型常量）
//          subType:"from_right",       //动画子类型（详见动画子类型常量）
//          duration:300                //动画过渡时间，默认300毫秒
//      }
    }

    if(overload) {
        for (var m in overload) {
            params[m] = overload[m];
        }
    }
    api.openWin(params);
}


function openNewOfIndex(name,url,pageParam){
	api.openWin({
	    name: name,
	    historyGestureEnabled:false,
	    slidBackEnabled:false,
	    url: url,
	    pageParam: pageParam,
	    animation:{
		    type:"none",                //动画类型（详见动画类型常量
		    duration:10                //动画过渡时间，默认300毫秒
		}
	});
}


function openNewWindow(name,url,pageParam,overload,loginAddress) {
//  if(url == undefined){
//      url = './' + name + '.html';
//  }
//  if(url.indexOf("login.html") == -1){
//      //校验
//      loginAddress=loginAddress||'../login/login.html';
//      var isCheck = checkUserLogin(loginAddress);
//      if(!isCheck){
//          return;
//      }
//
//  }
    var delay = 0;
    var sysType = api.systemType;
    var params = {
        name : name,
        url : url,
        pageParam : pageParam,
        bounces : false,//页面是否弹动
        bgColor : 'rgba(255,255,255,0)',
        scrollToTop : false,
        vScrollBarEnabled : true,
        hScrollBarEnabled : false,
        scaleEnabled : false,//页面是否可以缩放，为true时softInputMode参数无效
        slidBackEnabled : true,//是否支持滑动返回。iOS7.0及以上系统中，在新打开的页面中向右滑动，可以返回到上一个页面，该字段只iOS有效
        showProgress : false,//是否显示等待框，只在url为网址时有效
        delay : delay,//window显示延迟时间，适用于将被打开的window中可能需要打开有耗时操作的模块时，可延迟window展示到屏幕的时间，保持UI的整体性
        reload : false,//页面已经打开时，是否重新加载页面，重新加载页面后apiready方法将会被执行
        allowEdit : true//是否允许长按页面时弹出选择菜单
    };
    if(sysType == 'android'){
        var ver = api.systemVersion;
        ver = parseFloat(ver);
        if(ver >= 5.0){
            params.delay = 100;
        }
        params.animation={
        	type:"push",                //动画类型（详见动画类型常量）
            subType:"from_right",       //动画子类型（详见动画子类型常量）
            duration:300                //动画过渡时间，默认300毫秒
        }
    }

    if(overload) {
        for (var m in overload) {
            params[m] = overload[m];
        }
    }
    api.openWin(params);
}

function closeWin(){
    api.closeWin({
        name: api.winName
    });
}


//无动画关闭此页面
function closeThisWin(){
    api.closeWin({
        name: api.winName,
        animation:{type:"none"}
    });
}

function openFrame(name,url,pageParam,headHeight,bottomHeight,overload) {
    var params = {
        name : name,
        url : url,
        pageParam : pageParam,
        rect : {
            x : 0,
            y : headHeight,
            w : api.frameWidth,
            h : api.frameHeight - headHeight - bottomHeight
            },
        bounces : false,
        opaque : false,
        //bgColor:'#EDEDED',
        bgColor : '#ededed',
        useWKWebView: true, //设置在 ios 平台使用 wkWebview 显示页面,$api.getStorage会失效。需要使用api.setPerfs
        allowEdit : true,
        vScrollBarEnabled : true,
        showProgress : false,
        hScrollBarEnabled : false,
        reload : false
    };

    if(overload) {
            for (var m in overload) {
            //if (params[m]) {
                params[m] = overload[m];
            //}
        }
    }

    api.openFrame(params);
}

//win窗口中打开的FRAME距离顶部的高度（win窗口头部高度）
var winHeadHeight = 45;
//win窗口中打开的FRAME距离底部的高度（win窗口底部高度）
var winBottomHeight = 0;

function openFrameInWin(name, url, pageParam, overload) {
    openFrame(name,url,pageParam,winHeadHeight,winBottomHeight,overload);
}


function initFrameInWin(pageParam,overload,height){
    var statusBarAppearance = api.statusBarAppearance;//是否支持沉浸式
    var header = $api.dom('#topbar');
    $api.fixStatusBar(header);
    // if (statusBarAppearance) {
    //
    // }
    header.style.display = 'block';
    winHeadHeight = header.offsetHeight;
    if(height){
        winHeadHeight += height;
    }

    openFrameInWin(api.winName + '_body','./' + api.winName + '_body.html',pageParam,overload);
}


function imageBrowser(data,index){
    var imageBrowser = api.require('imageBrowser');
    imageBrowser.openImages({
        imageUrls : data,
        showList : false,
        activeIndex : index
    });
}


//ios 7的标题拦需要的长度
function getTitlePadingHeight(){
    var strDM = api.systemType;
    if (strDM == 'ios') {
        var strSV = api.systemVersion;
        var numSV = parseInt(strSV,10);
        if (numSV <= 7 ) {
          return 20;
        }
    }
    return 0;
}



function copyMsg(){
    var paste = api.require('pasteboard');
    var param = {value:'Hello paste'};
    paste.paste(param,function(ret,err){
        if (ret.status){
            api.alert({
                title: '返回信息',
                msg: 'statues:'+ret.status,
                buttons:['确定']
            },function(ret,err){
            });
        } else{
            api.alert({
                title: '返回信息',
                msg: 'msg:'+ret.msg+' code:'+err.code,
                buttons:['确定']
            },function(ret,err){
            });
        }
    })
}


function isIos(){
    var strDM = api.systemType;
    if (strDM == 'ios') {
        return true;
    }
    return false;
}

//生成滚动图片栏
function doScrollPicture(name,paths,titles,height,callback){
    var captions = [];

    if(isNotBlack(titles) && titles.length > 0){
        captions = titles;
    }

    var obj = api.require('UIScrollPicture');
    obj.open({
        rect: {
            x: 0,
            y: 0,
            w: api.frameWidth,
            h: height
        },
        data: {
            paths: paths,
            captions: captions
        },
        styles: {
            caption: {
                height: 35,
                color: '#FFFFFF',
                size: 13,
                bgColor: 'rgba(105,105,105,0.7)',
                position: 'overlay'
            }
//          indicator: {
//              align: 'center',
//              color: 'rgb(238,238,238)',
//              activeColor: 'rgb(178,178,178)'
//          }
        },
        placeholderImg: 'widget://image/defaultCover@2x.png',
        contentMode: 'scaleToFill',
        interval: 3,
        loop: true,
        fixedOn: name,
        fixed: false
    }, function(ret, err){
        if(ret.status){
            if(ret.eventType == 'click'){
                //点击图片的操作
                if(callback){
                    callback(ret.index);
                }
            }
        }
    });
}


/**
 * 绑定弹出菜单栏
 * 需要引入zepto.js
 * @param el 需要被绑定的元素
 * @param titles 标题名称 如：["按钮1","按钮2","按钮3"]
 * @param callBack 回调  回调传入按钮的index
 *
 */
function bindBubbleMenu(el,titles,callBack,params,head){
    var arrayPath=[];
    for(var i=0;i<titles.length;i++){
        arrayPath.push({title:titles[i]});
    }
    head=head||parseInt(api.winHeight)-parseInt(api.frameHeight);
    $(el).on('longTap',function(e){
        //e.stopPropagation();

        var pos = el.getBoundingClientRect();

        var obj = api.require('bubbleMenu');
        if(!isIos){
            //var div=document.createElement("div");
            //div.setAttribute("class","wshade");
            //div.style.height=document.body.offsetHeight+"px";
            //document.body.appendChild(div);
            //$(div).on("tap",function(){
            //    obj.close();
            //    document.body.removeChild(div);
            //});
            //$(div).on("swipe",function(){
            //    obj.close();
            //    document.body.removeChild(div);
            //});
        }

        var centerY=(pos.top<40)?(head+40):(pos.top+head);

        obj.open({
            centerX:pos.left+(pos.width/2),
            centerY:centerY,
            //fixedOn:api.winName,
            btnArray:arrayPath
        },function(ret,err){
            obj.close();
            callBack(ret.index,params);
        });

    });
}




function uploadFile(filePath,callBack,url){
    url=url||uploadImageUrl;
    api.ajax({
        url: url,
        method: 'post',
        timeout: 100,
        dataType: 'json',
        returnAll: false,
        data: {
            files: {file: filePath}
        }
    }, function (ret, err) {
        if (ret) {
            callBack({status:true,result:ret.ok});
        } else {
            callBack({},err);
        }
    });
}


function uploadFiles(files,index,callBack,url){
    var uploadUrl=uploadImageUrl;
    if(url){
        uploadUrl=url;
    }
    if(files.length==0){
        callBack({status:true,result:{}},{});
        return;
    }
    if(index>=files.length){
        getItems(files,function(result){
            callBack({status:true,result:result},{});
        });
        return;
    }
    var file=files[index];
    getItem(file,function(ret){
        if(ret.data){
            uploadFiles(files,index+1,callBack);
        }else{
            api.ajax({
                url: uploadUrl,
                method: 'post',
                timeout: 100,
                dataType: 'json',
                returnAll: false,
                data: {
                    files: {file: file}
                }
            }, function (ret, err) {
                if (ret) {
                    setItem(file,ret.ok,function(){
                        uploadFiles(files,index+1,callBack);
                    });
                } else {
                    callBack({},err);
                }
            });
        }
    });

}

function hideProgress(name,frameName){
    api.execScript({
        name: name,
        frameName : frameName,
        script: 'api.hideProgress();'
    });
}



//传入屏幕宽度的百分比，以及补白。计算出宽度。
function getWidthByPhone(percent,margin) {
    margin=margin||0;
    return Math.round((api.frameWidth-margin)*percent);
}

//获取图片的宽高，如果有传入最大宽度，计算出相同比率的高度。
function getWidthAndHeightByImageSrc(imgSrc,maxWidth,maxHeight){
    // /images/436*300*d1bda1*de7104*162f52*e70cc814cf8874e2f450aa7ed24519ff

    maxWidth=maxWidth||0;
    maxHeight=maxHeight||0;
    var result={w:350,h:175};
    if(isBlack(imgSrc)){
            result.err = true;
        return result;
    }
    var s1=imgSrc.split("/images/");
    if(s1&& s1.length<1){
        return result;
    }
    var s2=s1[1].split("*");
    if(s2&&s2.length<1){
        return result;
    }
    result.srcW=parseInt(s2[0]);
    result.srcH=parseInt(s2[1]);
    if(maxWidth>0){
        var b=maxWidth/result.srcW;
        result.h=Math.round(result.srcH*b);
        result.w=maxWidth;
    }
    if(maxHeight>0){
        var b=maxHeight/result.srcH;
        result.w=Math.round(result.srcW*b);
        result.h=maxHeight;
    }
    return result;
}


function apiCloud_removeFile(path){
    var fs = api.require('fs');
    fs.remove({
        path: path
    },function(ret,err){
    });
}

//初始化通知
function bindPush(){
    var user = getUserInfo();
    if (isBlack(user)) {
        return;
    }
    var ajpush = api.require('ajpush');
    if(api.systemType == "ios"){
    	ajpush.bindAliasAndTags({alias: user.id}, function (ret) {
            if (ret.statusCode == 0) {

            }
        });
    }else{
    	ajpush.init(function (ret) {
	        if (ret && ret.status) {
	            ajpush.bindAliasAndTags({alias: user.id}, function (ret) {
	                if (ret.statusCode == 0) {

	                }
	            });
	        }
	    });
    }
}



function bindBigImgs(imgs) {
    var data = [];
    var j = 0;
    for (var i = 0; i < imgs.length; i++) {
        var src= imgs[i].getAttribute("src");
        src=src.replace(/_(\d+)_(\d+)/,"");
        data[j] =src;
        j++;
    }

    for(var i=0;i<imgs.length;i++){
        (function (i) {
            imgs[i].onclick=function(e){
                //if(chatBoxPanelHeight&&chatBoxPanelHeight>0){
                //
                //}else{
                    stopEventBubble(e);
                    imageBrowser.openImages({
                        imageUrls: data,
                        showList: false,
                        activeIndex: i
                    });
                //}

            }
        })(i);
    }
}


function getLocation(callback){
    var currentLocation=$api.getStorage("currentLocation");
    if(currentLocation){
        var lat = currentLocation.latitude;
        var lon = currentLocation.longitude;
        if(callback){
            callback(lat,lon);
        }
        return;
    }
//  api.showProgress({title:'定位中....'});

    var baiduLocation = api.require('baiduLocation');
    baiduLocation.getLocation(
        function(ret, err){
//          api.hideProgress();
            if(ret.status && isNotBlack(ret.latitude) && isNotBlack(ret.longitude)){
                var lat = ret.latitude;
                var lon = ret.longitude;
                $api.setStorage("currentLocation",ret);
                $api.setStorage('historyLocation',ret);
                //在系统初始化的时候删除掉定位。首页定时任务每隔5分钟清除一次定位。
                if(callback){
                    callback(lat,lon);
                }
            } else {
                     var historyLocation = $api.getStorage('historyLocation');

                     if(isNotBlack(historyLocation)){
                        var lat = historyLocation.latitude;
                        var lon = historyLocation.longitude;
                        if(callback){
                        callback(lat,lon);
                    }
                     } else {
                        if(callback){
                        callback(0,0);
                    }
                     }
            }

//          else{
//              api.alert({
//                  title: '提示',
//                  msg: '获取位置信息失败,请确认已打开定位服务',
//                  buttons:['确定']
//              },function(ret,err){
//                  api.confirm({
//                      title: '是否重新获取位置信息？',
//                      buttons: ['确定', '取消']
//                  },function( ret, err ){
//                      if(ret && ret.buttonIndex == 1){
//                              getLocation(callback);
//                      }
//                  });
//              });
//          }
        }
    );

//  var bMap = api.require('bMap');
//  bMap.getLocation({
//      accuracy: '100m',
//      autoStop: true,
//      filter: 1
//  }, function(ret, err){
//      api.hideProgress();
////        alert(JSON.stringify(ret));
//      if(ret.status){
//          var lat = ret.lat;
//          var lon = ret.lon;
//          $api.setStorage("currentLocation",ret);
//          //在系统初始化的时候删除掉定位。首页定时任务每隔5分钟清除一次定位。
//          if(callback){
//                  callback(lat,lon);
//          }
//      }else{
////            alert(JSON.stringify(err));
//          api.alert({
//                  title: '提示',
//              msg: '获取位置信息失败,请确认已打开定位服务',
//              buttons:['确定']
//          },function(ret,err){
//              api.confirm({
//                  title: '是否重新获取位置信息？',
//                  buttons: ['确定', '取消']
//              },function( ret, err ){
//                  if(ret && ret.buttonIndex == 1){
//                          getLocation(callback);
//                  }
//              });
//          });
//      }
//  });

}


function closeApp(){
    api.closeWidget({
        retData: {name: 'closeWidget'},
        silent: true,
        animation: {
            type: 'none',
            subType: 'from_bottom',
            duration: 500
        }
    });
}

var timer = [];

function loopTest(functions,paramsArray){
        if(timer && timer.length > 0){
            for(var i = 0;i < timer.length;i++){
                clearInterval(timer[i]);
            }
            timer = [];
            loopTest(functions,paramsArray);
            return;
        }

        for(var i = 0; i < functions.length;i++){
            var timeout = functions[i].timeout;
            var callback = functions[i].callback;
            var params = paramsArray;

            var t = setInterval(callback,timeout,params);
            timer[i] = t;
        }
}


//弹出框

function showDialog(title,cotent,leftBtnTitle,rightBtnTitle,rightAction,leftAction){
   	var dialogBox = api.require('dialogBox');
    dialogBox.alert ({
        texts: {
            title: title,
            content:cotent,
            leftBtnTitle: leftBtnTitle,
            rightBtnTitle: rightBtnTitle
        },
        tapClose:false,
        styles:{
            bg: '#fff',
            w: 300,
            title:{
                marginT : 20,
                titleSize : 14,
                titleColor : '#5AC8E1'
            },
            content:{
                color: '#000',
                size: 16
            },
            left:{
                marginB: 0,
                marginL: 0,
                w: 150,
                h: 40,
                color:'#000000',
                corner: 0,
                bg: '#E8E8E8',
                size: 14
            },
            right:{
                marginB: 0,
                marginL: 0,
                w: 150,
                h: 40,
                corner: 0,
                bg: '#5AC8E1',
                size: 14,
                color:'#ffffff'
            }
        }
    },function(ret){
        if (ret.eventType == 'left') {
        	if (leftAction) {
        		leftAction();
        	}
            dialogBox.close ({
                dialogName: 'alert'
            });
        }else if(ret.eventType == 'right'){
            rightAction();
            dialogBox.close ({
                dialogName: 'alert'
            });
        }
    });
}




//function showDialog(title,cotent,leftBtnTitle,rightBtnTitle,rightAction,leftAction,flag){
//	var obj = {
//		rect : {
//	        x : 0,
//	        y : 0,
//	        w : api.winWidth,
//	        h : api.winHeight
//		},
//		bgColor : 'rgba(0,0,0,0)'
//	}
//	var parms = {
//		title : title,
//		cotent : cotent,
//		leftBtnTitle : leftBtnTitle,
//		rightBtnTitle : rightBtnTitle,
//		rightAction: rightAction,
//		leftAction: leftAction,
//		flag : flag
//	}
// 	openFrame("showDialog","../common/showDialog.html",parms,0,0,obj)
//}


function showOneDialog(title,cotent,rightBtnTitle,rightAction){
   	var dialogBox = api.require('dialogBox');
    dialogBox.alert ({
        texts: {
            title: title,
            content:cotent,
            rightBtnTitle: rightBtnTitle
        },
        tapClose:true,
        styles:{
            bg: '#fff',
            w: 300,
            title:{
                marginT : 20,
                titleSize : 14,
                titleColor : '#0684d6'
            },
            content:{
                color: '#000',
                size: 16
            },
            right:{
                marginB: 0,
                marginL: 0,
                w: 300,
                h: 40,
                corner: 0,
                bg: '#0684d6',
                size: 14,
                color:'#ffffff'
            }
        }
    },function(ret){
		if(ret.eventType == 'right'){
            rightAction();
            dialogBox.close ({
                dialogName: 'alert'
            });
        }
    });
}


function imgCache(url,callback){
    api.imageCache({
        url: url
    }, function(ret, err){
        if(ret.status){
            callback(ret.url);
        }else{
            callback(url);
        }

    });
}



function updloadImageToShow(ret, err,domId){
    if (ret && isNotBlack(ret.base64Data)) {
        api.showProgress({
            title : '上传中...'
        });
        var suffix = ret.data.substring(data.lastIndexOf(".")+1);
        ajaxBase64(ret.base64Data,suffix,function(imgUrl){
            api.hideProgress();
            $api.byId(domId).src = imgUrl;
        },function(){
            api.hideProgress();
        });
    }
}

function setLocationValue(){
    var bMap = api.require('bMap');
    bMap.getLocation({
        accuracy: '100m',
        autoStop: true,
        filter: 1
    }, function(ret, err){
        if(ret.status){
            $api.setStorage("localPoint",ret);
            bMap.getNameFromCoords({
                lon: ret.lon,
                lat: ret.lat
            },function(ret,err){
                if(ret.status){
                    $api.setStorage("localInfo",ret);
                }else{
                    var obj ={city:'北京市',province:"北京市",district:"海淀区",lon:116.33059945454566,lat:39.9713567426658}
                    $api.setStorage("localInfo",obj);
                }
            });

        }else{
            var obj ={city:'北京市',province:"北京市",district:"海淀区",lon:116.33059945454566,lat:39.9713567426658}
            $api.setStorage("localInfo",obj);
        }
    });
}




function updateImageClip(width,height){

    api.actionSheet({
        title: '选择图片',
        cancelTitle: '取消',
        buttons: ['拍照','从手机相册选择']
    },function(ret,err) {
        var index = ret.buttonIndex;
        var sourceType;

        switch (index) {
            case 1 :
                sourceType = 'camera';
                break;
            case 2 :
                sourceType = 'album';
                break;
            default :
                return;
        }
        api.showProgress({title: '努力加载中...',text: '先喝杯茶...'});
        api.getPicture({
            sourceType: sourceType,
            mediaValue: 'pic',
            destinationType: 'url',
            allowEdit: true,
            quality: 100,
            saveToPhotoAlbum: true
                }, function(ret, err){
                    if(isNotBlack(ret)&&isNotBlack(ret.data)){
                        var pageParam = {
                                    destHtml: api.winName,
                                    data:ret.data,
                                    width:width,
                                    height:height
                                };
                        // openNewWindow("imgClip",imgClipUrl,pageParam,{bounces:false});
                        api.hideProgress();
                    }else{
                        api.hideProgress();
                    }
                });
    })
}

//压缩图片
function coverToSuffix(src){
    var header = src.substring(0,src.lastIndexOf("."));
    var suffix = src.substring(src.lastIndexOf("."));
    return header+suffix.toLocaleLowerCase();
}
function compressImageList(imgList,callBack){
    var compactPicture = api.require('compactPicture');
    compactPicture.HittingPic({
        picpatharray: imgList,
        size: 8
    }, function(ret) {
        if(isNotBlack(ret)  && isNotBlack(ret.states)){
            //转换成小写
            var resultList = new Array;
            var states = ret.states;
            for(var i = 0;i < states.length;i++){
                resultList.push(coverToSuffix(states[i]));
            }
            callBack(resultList);
        }
    });
}
//刷新页面
function reloadHtml(){
    apiready();
}
//刷新frame页
function reloadFrame(){
     api.execScript({
         frameName:api.winName+'_body',
         script:'reload()'
     })
}

function reload() {
    location.reload()
}



function setFrameGroup(name,urls){
	var strDM = api.systemType;//系统
    var strSV = parseFloat(api.systemVersion,10);//版本
    var titleHeight=0;
    if(strDM == 'ios' && strSV > 7){
       titleHeight=20
    }else if(strDM == 'android' && strSV >= 4.4){
       titleHeight = 25;
    }
    var userInfo = getUserInfo();
	var testType = $api.getStorage("testType");
	for(var i = 0;i < testType.length;i++){
		if (testType[i].id == userInfo.testTypeId && i != 0) {
   			var temp = testType[i];
   			testType[i] = testType[0];
   			testType[0] = temp;
   		}
	}
	typeLength = testType.length;
	if (typeLength == 1) {
		var spanWidth = api.winWidth*0.3333 + "px";
		var allWidth = api.winWidth + "px";
	}else if(typeLength == 2){
		var spanWidth = api.winWidth*0.50 + "px";
		var allWidth = api.winWidth + "px";
	}else if(typeLength >= 3){
		var spanWidth = api.winWidth*0.3333 + "px";
		var allWidth = api.winWidth*0.3333*typeLength + "px";
	}
    var data = {list: testType,spanWidth:spanWidth,allWidth:allWidth};
	var html = template('scriptDiv1',data);
	var frameArr = [];
	var index = 0;
   	for (var i = 0; i < typeLength; i++) {
   		var frameObj = {};
   		frameObj.name = name+i;
   		frameObj.bgColor = 'rgba(246,246,246,1)';
   		frameObj.pageParam = {id:testType[i].id,module:api.pageParam};
   		frameObj.url = urls;
   		frameArr.push(frameObj);
   	}
   	var obj = {
   		html : html,
   		frameArr : frameArr,
   		typeLength : typeLength,
   		spanWidth : spanWidth,
   		titleHeight : titleHeight,
   		index : index
   	}
   	return obj;
}
