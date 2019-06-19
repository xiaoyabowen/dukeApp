//======================系统初始化（开始）=============================
function systemInit(callBack){
      initDb(function (ret, err) {
          if (ret.status) {
              initFs(function (ret) {
                  if (ret.status || ret.exist) {
                    //判断是否第一次打开
//                 initShowGuide(function(){
                        //初始化用户
//                      initUser(function(){
                            //初始化系统信息
//                          initSystemInfo(function(){
                                if(callBack) {
                                    callBack();
                                }
//                          });
//                      });
//                  });
                  } else {
                      api.alert({msg: "无法建立本地文件夹"});
                  }
              });
          } else {
              api.alert({msg: "数据库加载错误:" + JSON.stringify(err)});
          }
      });
}

var callbackMethod;
function initShowGuide(callback){
    //判断是否第一次打开
    var showGuide = $api.getStorage(isShowGuide);
    if (!showGuide || isTest) {
        callbackMethod = callback;
        openFrame('guide','html/common/guide.html',{},0,0);
    } else {
        callback();
    }
}
function runCallback(){
    if(callbackMethod){
        callbackMethod();
    }
}

function initUser(callback){
    var user = getUserInfo();
    //alert(JSON.stringify(user));
    if(isCleanUser == true){
        user = null;
        setUserInfo(user);
    }
    if (isBlack(user)) {
       openNewWindow("login","./html/login/chooseIdentify .html",{},{slidBackEnabled:false});
        return;
    } else {
        callback();
    }
}

function initSystemInfo(callBack){
    api.showProgress({
        style: 'default',
        animationType: 'fade',
        title: '系统初始化中...',
        modal: true
    });
    _initSystemInfo(function(){
        api.hideProgress();
        callBack();
    });
}


function _initSystemInfo(callback){
	  $api.setStorage("indexType","");//清除上一次  首页底部切换 存储的标示
    ajaxGetUser(systemInitUrl,{},function(ret,err) {
        if(isNotBlack(ret)&&ret.success){
            if(isNotBlack(ret.data.areaBackList)){
            		var areaMap = {};//组装地区map
            		var areaListLength = ret.data.areaBackList.length;
            		for(var i = 0; i < areaListLength;i++){
            				areaMap[ret.data.areaBackList[i].id] = ret.data.areaBackList[i];
            		}
            		$api.setStorage("areaMap",areaMap)//存储对应省份下面的各市区
            		$api.setStorage("areaBackList",ret.data.areaBackList)//存储所有地区数据
            }

            if(isNotBlack(ret.data.testType)){
            		var testTypeMap = {};//组装地区map
            		var testTypeLength = ret.data.testType.length;
            		for(var j = 0; j < testTypeLength;j++){
            				testTypeMap[ret.data.testType[j].id] = ret.data.testType[j];
            		}
            		$api.setStorage("testTypeMap",testTypeMap)//存储对应考试类型下面的各学段和科目
            		$api.setStorage("testType",ret.data.testType)//存储所有考试类型   学段  学科科目
            }
            if(callback){
                callback();
            }
        }else{
            if(callback){
                api.confirm({
                    title: '当前网络或服务有问题',
                    msg: '是否重试？',
                    buttons:['确定', '取消']
                },function(ret,err){
                    if(ret.buttonIndex == 1){
                        _initSystemInfo(callback);
                    }else{
                        closeApp();
                    }
                });
            }
        }
    });
}
//======================系统初始化（结束）=============================





//======================下方tab栏目切换（开始）=============================

var prevPid;//上一个tab
var curPid;//当前tab
var frameArr = [];//打开的列表
//各个栏目


//点击切换tab标签
function openTab(type,index) {
    if (!type) {
        return;
    }
    var frameOpened_wonderfulTimeSelect_body = $api.getStorage("frameOpened_wonderfulTimeSelect_body");
    if(frameOpened_wonderfulTimeSelect_body){
        api.setFrameAttr({
            name:"cesda",
            hidden:true
        });
    }
    //切换样式
    var header = $api.dom('#header .active');//对应头部的样式
    $api.removeCls(header, 'active');
    var thisHeader = $api.dom('#header .' + type);
    $api.addCls(thisHeader, 'active');
    var actTab = $api.dom('#nav .active');//对应底部的样式
    $api.removeCls(actTab, 'active');
    var thisTab = $api.dom('#nav .' + type);
    thisTab = thisTab.parentNode;
    $api.addCls(thisTab, 'active');

    prevPid = curPid;
    curPid = type;

    if (prevPid != curPid) {
        if (isOpened(type)) {
            //打开已经打开过的页面
            if (tabs[type].isGroup) {
                api.setFrameGroupAttr({
                    name: type,
                    hidden: false
                });
            } else {
                api.setFrameAttr({
                    name: type,
                    hidden: false
                });
            }
        } else {
            //打开新页面
            if (tabs[type].isGroup) {
                api.openFrameGroup(tabs[type].group, function (ret, err) {
                    tabs[type].groupCallBack(ret);
                });
            } else {
                api.openFrame(tabs[type].frame);
            }
            frameArr.push(type);
        }

        if (prevPid) {
            //关闭前一个页面
            if (tabs[prevPid].isGroup) {
                api.setFrameGroupAttr({
                    name: prevPid,
                    hidden: true
                });
            } else {
                api.setFrameAttr({
                    name: prevPid,
                    hidden: true
                });
            }

        }
    }

};


//是否打开过
function isOpened(frmName) {
    var i = 0, len = frameArr.length;
    for (i; i < len; i++) {
        if (frameArr[i] == frmName) {
            return true;
        }
    }
    return false;
}


//======================下方tab栏目切换（结束）=============================
