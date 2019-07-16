/*
	extend.js
	这是zx-editor.js的扩展库(用于对图片视频音频以及超链接前后端自定义处理)
	作者：小黑猪  QQ：2665815069
*/

	let zxEditorExtend = {
		/*页面图片视频音频以及超链接删除按钮被单击回调(在zx-editor.js中找到第2314行开始即可调用此函数)*/
		deleteClick: function(i,website,url,sendCallback){ //当前点击删除的原始对象、域名、ajax请求地址、回调函数
			var domArr = [];//定义需要获取的标签数组
			var imgArr = document.getElementsByClassName('child-node-is-img');//获取页面中所有类名为child-node-is-img的所有标签数组
			if(imgArr.length>0){
				for(var aa = 0;aa<imgArr.length;aa++){
					domArr.push(imgArr[aa]);
				}
			}
			var videoArr = document.getElementsByClassName('child-node-is-video');//获取页面中所有类名为child-node-is-video的所有标签数组
			if(videoArr.length>0){
				for(var bb = 0;bb<videoArr.length;bb++){
					domArr.push(videoArr[bb]);
				}
			}
			var audioArr = document.getElementsByClassName('child-node-is-audio');//获取页面中所有类名为child-node-is-audio的所有标签数组
			if(audioArr.length>0){
				for(var dd = 0;dd<audioArr.length;dd++){
					domArr.push(audioArr[dd]);
				}
			}
			var aArr = document.getElementsByClassName('child-node-is-a');//获取页面中所有类名为child-node-is-a的所有标签数组
			if(aArr.length>0){
				for(var cc = 0;cc<aArr.length;cc++){
					domArr.push(aArr[cc]);
				}
			}
			for(var xx = 0;xx<domArr.length;xx++){ //循环遍历数组
				var ss = domArr[xx].children;//获取遍历的每一个成员的子成员
				var tempI = i.innerHTML;//获取html对象的innerHTML(即可得到相应文本字符串信息)
				if(seekText(tempI,ss[0].src,0)!=-1){//开始匹配文本
					//匹配成功,即是当前页面正在执行删除的图片或视频或音频
					//console.log(ss[0].src);
					var fileName = divText(ss[0].src,website);//通过域名分割文本
					if(fileName.length>1){
						console.log(fileName[1]);//输出服务器真实路径文件名
						/*startDel("post",url,{'dfile':fileName[1]},function(result,datas){
							if(result==true){
								if(eval("(" + datas + ")").state==1){
									sendCallback(true,eval("(" + datas + ")").msg);
								}else {
									sendCallback(false,eval("(" + datas + ")").msg);
								}
							}else {
								sendCallback(false,eval("(" + datas + ")").msg);
							}
						});*/
						sendCallback(true,"删除文件成功");//本地模拟测试
						zxEditor.dialog.alert('成功删除服务端文件', function () {});
					}
					return;//直接返回不再往下执行
				}
				//console.log(ss[0].id);
			}
			//未匹配成功,即将要删除的是超链接
			sendCallback(true,"删除超链接成功");//本地模拟测试
			zxEditor.dialog.alert('删除超链接成功', function () {});
			//寻找指定文本函数,为匹配到返回-1
			function seekText(str,sub,index){
				if(str==null || sub==null){
					return -1;
				}
				return str.indexOf(sub, index);
			}
			//分割文本
			function divText(str, separator){
				if(str==null || separator==null){
					return null;
				}         
				return str.split(separator);
			}
			
			//向服务端发出删除请求
			function startDel(type,url,data,callback){
				zxEditorExtendRequest.ajax({
					type : type,
					url : url, 
					data : data,
					async : true,
					//backType: dataType,请求返回类型 HTML、JSON，默认 HTML
					success : function(response){ 
						callback(true,response);
					},
					error : function(e){ 
						//console.log(JSON.stringify(e));
						callback(false,"{'state':0,'msg':'ajax请求错误或超时'}");
					}
				});
			}
		},
		//页面图片被单击函数(在zx-editor.js中找到第3142行,在后面添加onclick属性方法：onclick: 'zxEditorExtend.imgClick(this)')
		imgClick: function(obj){
			//console.log(obj);
			if(obj.id !="" || obj.id !=null){
				if(seekText(obj.id,"img",0) != -1){ //判断当前点击对象是图片还是音视频
					console.log("被单击图片："+obj.src);
					zxEditor.dialog.alert('你点击了图片,ID：'+obj.id+'图片地址：'+obj.src, function () {});
				}
			}
			//寻找指定文本函数,为匹配到返回-1
			function seekText(str,sub,index){
				if(str==null || sub==null){
					return -1;
				}
				return str.indexOf(sub, index);
			}
		},
		//页面超链接被单击函数(直接重写notify通知监听回调再调用此函数即可),在zx-editor.js中找到第798行,将href: e改为href: "javascript:void(0)",并在后面添加onclick属性方法：onclick: "zxEditorExtend.linkClick('"+e+"')"
		linkClick: function(url){
			console.log("将要打开url："+url);
			zxEditor.dialog.alert('你点击了超链接,地址：'+url, function () {});
		}
	}
	
	let zxEditorExtendRequest = {
		/* ajax */
		ajax: function(sets){
			if(!sets){sets = {url:null};}
			if(!sets.url){return ;}
			var async = 'async' in sets ? sets.async : true;
			sets.type = 'type' in sets ? sets.type.toUpperCase() : 'GET';
			sets.backType = 'backType' in sets ? sets.backType.toUpperCase() : 'HTML';
			sets.beforeSend = 'beforeSend' in sets ? sets.beforeSend : null;
			sets.complete = 'complete' in sets ? sets.complete : null;
			sets.success = 'success' in sets ? sets.success : function(){};
			sets.error = 'error' in sets ? sets.error : function(e){console.log('ajax error : ' + JSON.stringify(e));}
			sets.ContentType = 'ContentType' in sets ? sets.ContentType : 'application/x-www-form-urlencoded';
			sets.header = 'header' in sets ? sets.header : false;
			var xhr = new window.XMLHttpRequest();
			if(typeof(xhr) == 'undefined'){if(sets.error){sets.error(_lang.xhrError);} return;}
			if(sets.header){
				for(var i = 0; i < sets.header.length; i++){
					xhr.setRequestHeader(sets.header[i][0], sets.header[i][1]);
				}
			}
			xhr.timeout = 'timeout' in sets ? sets.timeout : 0;
			if(sets.beforeSend){sets.beforeSend();}
			xhr.onreadystatechange = function(){
				if(xhr.readyState == 4){
					if(sets.complete){sets.complete();}
					if(xhr.status == 200){
						if(sets.backType == 'HTML'){
							sets.success(xhr.responseText);
						}else if(sets.backType == 'JSON'){
							sets.success(JSON.parse(xhr.responseText));
						}
					}
				}
			}
			xhr.ontimeout = function(){sets.error(_lang.ajaxTimeout);}
			if(sets.error){xhr.onerror = function(e){sets.error(e);}}
			xhr.open(sets.type, sets.url, async);
			if(sets.type == 'POST'){
				var pd = '';
				if(sets.ContentType == 'application/x-www-form-urlencoded'){
					for(var k in sets.data){pd += encodeURIComponent(k)+'='+encodeURIComponent(sets.data[k])+'&';}
					pd = pd.substr(0, pd.length - 1);
				}else{
					pd = sets.data;
				}
				xhr.setRequestHeader('Content-Type', sets.ContentType);
				xhr.send(pd);
			}else{
				xhr.send();
			}
		},
		get: function(url, success, err){
			var sets = {url:url, type:'GET', backType:'HTML', success:success, error:err};
			this.ajax(sets);
		},
		getJSON: function(url, success, err){
			var sets = {url:url, type:'GET', backType:'JSON', success:success, error:err};
			this.ajax(sets);
		},
		post: function(url, pd ,success, err){
			var sets = {url:url, type:'POST',backType:'HTML', data:pd, success:success, error:err};
			this.ajax(sets);
		},
		postJSON: function(url, pd ,success, err){
			var sets = {url:url, type:'POST',backType:'JSON', data:pd, success:success, error:err};
			this.ajax(sets);
		}
	}
	
	//监听移动端键盘弹出可能出现将编辑区光标处遮挡解决方法
	//var curPosition = null;//定义当前光标所在位置(光标底部距离页面顶部距离)
    //var windheight =window.innerHeight;
	/*window.onresize = function(){    
		var docheight = window.innerHeight; 
		if((docheight/2)<curPosition){
			document.body.scrollTop = curPosition-(docheight/2);
		}
		//isScrollUp(windheight-docheight);   
	};*/
	//判断光标所在位置与键盘弹出高度确定是否自动向上滚动一定距离
	/*function isScrollUp(){ //difference代表差值
		var docheight = window.innerHeight; 
		if((docheight/2)<curPosition){
			document.body.scrollTop = curPosition-(docheight/2);
		}
	}*/