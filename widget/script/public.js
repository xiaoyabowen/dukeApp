var version = "1.0.0";
var isTest = false;
var isCleanUser = false;
// var uploadImageUrl="http://xiuqiang.ikid06.cn/storage/handle";
var uploadImageUrl="http://39.107.247.82:50001/storage/handle";
// var serverUrl = "http://192.168.1.41:50001"; //马文军
// var serverUrl = "http://xiuqiang.ikid06.cn";
var serverUrl = "http://39.107.247.82:50001";
//isCleanUser = true;
var rootWindowName = "root";
simpleVersion = true;
// var chatNativeUrl = '139.196.127.188';
var chatNativeUrl = '39.107.247.82';
var chatPointUrl = '22222';
var imgServer = 'http://xiuqiang.ikid06.cn/storage/handle';
//分享地址
var shareNotice="http://39.107.247.82:99/html/classNotice_detail_body.html?nid=";

var falga=false;
function al(data){
    if(falga){
        alert(JSON.stringify(data))
    }else{
    }
}
//isTest = true;
var adminRegistUrl=serverUrl+"/backend/schoolRequest";//园长注册
var adminLoginUrl=serverUrl+"/backend/login";//园长登录
var createAuthCodeOnLoginUrl=serverUrl+"/backend/createAuthCodeOnLogin";//根据手机号发送验证码
var updatePasswordAndLoginUrl=serverUrl+"/backend/updatePasswordAndLogin";//更改密码并且登录 phone code password
var getAllSchoolUrl=serverUrl+"/school/getAllSchoolByProvince ";//获取园所
var visitLogin = serverUrl + '/backend/customer';//游客参观

// 首页
var getIndexFunList = serverUrl + "/functionPort/list";//获取首页功能点列表
var getIndexMsgList = serverUrl + "/message/pager";//获取首页下方消息列表
var getBannerImg = serverUrl + "/banner/list";//获取轮播图片

//园所主页
var mainSchool = serverUrl + "/main/school";//获取园所主页信息



// 宝宝食谱
var getSchoolCookbooksInWeek = serverUrl + '/cookbook/getSchoolCookbooksInWeek'; //根据食谱类型和日期获取某校园的宝宝食谱
var addCook = serverUrl + '/cookbook/add';//添加食谱模板
var getFood = serverUrl + '/cookbook/searchFoodName'; //获取菜名 foodName 查询菜名

var getAllTemplatesName = serverUrl + '/cookbook/getAllTemplatesName';//获取食谱模板名字 参数：name
var getTemplatesDetail = serverUrl + '/cookbook/getTemplatesDetail';//根据食谱名字获取食谱详情 参数：id
// var updateCook = serverUrl + '/cookbook/update';//修改食谱模板

// 服务设备
var getEquipmentList = serverUrl + '/equipment/getAllLists';//获取所有列表
var addEquipment = serverUrl + '/equipment/addEquipment';//添加服务设备
var deleteEquipment = serverUrl + '/equipment/deleteEquipment'; //删除设备                                                  //删除服务设备
var getDistributions = serverUrl + '/equipment/getDistributions'; //获取分配列表
var updateDistribution = serverUrl + '/equipment/updateDistribution' ; //分配设备
var getAllClazzs = serverUrl +"/clazz/getAllClazzs" ;//获取所有班级

// 固定资产
var getLevelKinds = serverUrl + '/fixedasset/getLevelKinds'; //获取固定资产分类
var getLevelKindsList = serverUrl + '/fixedasset/getAllItemInfoByKind'; //获取固定资产分类列表
var getLevelKindsListIndex = serverUrl + '/fixedasset/getItemInfoReqItemLogPager'; //获取固定资产分类详情
var getAuditWait = serverUrl + '/fixedasset/getReqSchoolFixedAssetItemLogPager'; //获取审核中
var getAuditOk = serverUrl + '/fixedasset/getReqPassSchoolFixedAssetItemLogPager';//获取审核通过
var getAuditNo = serverUrl + '/fixedasset/getReqNoPassSchoolFixedAssetItemLogPager'; //获取审核未通过
var ratifyApply = serverUrl + '/fixedasset/passReqItemLog'; // 批准申请
var NoRatifyPassApply = serverUrl + '/fixedasset/noPassReqItemLog'; // 驳回申请
var getAllLocations = serverUrl + '/fixedasset/getAllLocations';//获取资产位置
var FaddBackItemLog = serverUrl + '/fixedasset/addBackItemLog';//退库

//仓库资源
var getAllWarehouseName = serverUrl + '/warehouse/getAllWarehouses'; //获取所有仓库名称
var getWarehouseWait = serverUrl + '/warehouse/getReqSchoolWarehouseItemLogPager'; //获取待审核 sid wid
var getWarehouseOk = serverUrl + '/warehouse/getReqPassSchoolWarehouseItemLogPager'; //获取审核通过 sid wid
var getWarehouseNo = serverUrl + '/warehouse/getReqNoPassSchoolWarehouseItemLogPager'; //获取不通过 sid wid
var passReqItemLog = serverUrl + '/warehouse/passReqItemLog'; //批准申请 id
var noPassReqItemLog = serverUrl + '/warehouse/noPassReqItemLog'; //批准申请 id
var addBackItemLog = serverUrl + '/warehouse/addBackItemLog';//退库
var getWarehouseClass = serverUrl + '/warehouse/getLevelKinds'; // 获取资源分类 sid pid
var getWarehouseClassList = serverUrl + '/warehouse/getAllItemInfoByKind'; //获取资源分类列表 sid kid wid
var getWarehouseClassIndex = serverUrl + '/warehouse/getItemInfoReqItemLogPager'; //获取资源分类详情 sid reqTime did reqUid
var getAlldepartment = serverUrl + '/department/getAllList'; //获取所有部门 sid
var getAllTeacher = serverUrl + '/backend/getAllTeachers'; //获取所有申请人 sid

//缴费管理
var getSchoolChargePagerUrl=serverUrl+"/charge/getSchoolChargePager";//缴费管理列表
var getSchoolChargeHistoryPagerUrl=serverUrl+"/charge/getSchoolChargeHistoryPager";//历史缴费
var loadSchoolChargeDetailUrl=serverUrl+"/charge/loadSchoolChargeDetail";//缴费详情
var payWarn = serverUrl + "/charge/remindChargeParents";//缴费提醒 参数: 缴费itemid:cid  宝宝id:uid

//预约报名
var getUserByAssigned = serverUrl + '/userRequest/getUserByAssigned';//获取预约申请列表 assignedType《指派类型》 1 已指派，2未指派
var updateAssignedTeacher = serverUrl + '/userRequest/updateAssignedTeacher';//指派 teacherId id
var getAssignedDetail = serverUrl + '/userRequest/getAssignedDetail'; //预约详情 urid
var getBookingNum = serverUrl + '/userRequest/getUserNum'; //获取预约人数 不传参


//课程
var teacherListUrl =serverUrl +"/backend/getAllTeachers";//获取教师id sid
var classListUrl =serverUrl +"/clazz/getAllClazzs";//获取班级id  sid
var addClassUrl=serverUrl +"/course/addCourse";//添加课表
var getclassList=serverUrl + "/course/get";//获取课程列表  day cid pager

//公告通知
var addInform=serverUrl+"/notice/publicNotice";//添加通知
var getNoticeList=serverUrl+"/notice/getSchoolNoticePager";//获取全部通知列表 sid cid
var getMyNoticeList=serverUrl+"/notice/getPubulishNoticePager";//获取我发的通知
var getNoticeDetail=serverUrl+"/notice/getOneNoticeDetail";//获取通知详情
var getNoticeDetailName=serverUrl+"/notice/getTeacherNoticeDetail";//获取通知详情教师名字列表
var remindNotice=serverUrl+"/notice/remindNoticeParents";//提醒公告通知 long nid, long uid, int userType
var getNoticeLists=serverUrl+"/notice/getClazzNotice";//获取全部通知列表

//添加通讯录
var addddressList=serverUrl+"/external/addphone";//添加通讯录 sid  uid  用户id,name 联系人姓名, phone 手机号 work
var getDepartmentList=serverUrl+"/department/getAllList";//获取部门 sid
var getDepartmentEmployees=serverUrl+ "/external/getinnerphone";//获取部门下的  员工 did
var getSotozonoList=serverUrl+ "/external/getoutterphone";//获取园外通讯录
//宝宝评语
var PublishedComments=serverUrl+"/weekcomment/add";//发布评语
var getRemark=serverUrl+"/weekcomment/getMyChildComment";//获取评语    宝宝id
var delCommentList=serverUrl+"/weekcomment/deletecomment";//删除评语   评语ID

//评语
var getCommentAllList=serverUrl+"/weekcomment/getall";  //全部评语  cid班级id  month日期
var getAlreadyCommentList=serverUrl+"/weekcomment/getcomment";//未评语 已评语   cid班级id  month日期  commentStatus  0未评语  1已评语



var systemInitUrl = serverUrl+"system/init";//初始化**/  初始化考试类型  学段等信息


// zbw添加
var customMsgUrl = serverUrl+"/message/getDetail";// 自定义消息详情接口



//教学资料
var pathGetUserAllList=serverUrl+"/path/getSchoolAllList";//家长：我的学习目录列表
var pathGetTeacherAllList=serverUrl+"/path/getTeacherAllList";//教师：教学管理目录列表、园所文档目录列表
var pathGetSchoolAllList=serverUrl+"/path/getSchoolAllList";//园长：教学管理目录列表、园所文档目录列表
var documentGetDocList=serverUrl+"/document/getDocList";//获取目录下的文章列表 docType pathId
var systemInitUrl = serverUrl+"system/init";//初始化**/  初始化考试类型  学段等信息
var addDocument=serverUrl+"/document/add"; //添加

// 精彩瞬间
var issueBrilliant = serverUrl + "/timeline/add";//发布精彩瞬间
var getMyissue = serverUrl + "/timeline/myTimeline";//获取我发布的
var getClazzTimeline = serverUrl + "/timeline/clazzTimeline" ;//获取全班时间线
var getloadTimeline = serverUrl +"/timeline/load";//获取精彩瞬间详情
var getSchoolTimeline = serverUrl + "/timeline/schoolTimeline" ;//获取全员时间线
var favoritepager = serverUrl + "/favorite/pager" ;//获取我的收藏
var getTagTimeline = serverUrl + "/timeline/tagTimeline";//获取tag下的时间线
var waiteExamineList = serverUrl + "/timeline/schoolWaitForCheckTimeline";//待审核列表
var examineHandle = serverUrl + "/timeline/check";//审核操作
var getHotTags = serverUrl + "/tag/getHotTags";//获取常用标签/comment/add
var commentadd = serverUrl + "/comment/add";//发表评论 参数：type、typeId、content、images、voice
var commentpager = serverUrl + "/comment/pager";//获取评论  参数：type=2  typeId
var supportadd = serverUrl + "/support/add";//点赞  参数：type、typeId/complain/getComplaints
var supportdelete = serverUrl + "/support/delete";//取消点赞  参数：type、typeId
var favoriteadd = serverUrl + "/favorite/add";//收藏  参数：type、typeId
var favoritedelete = serverUrl + "/favorite/delete";//取消收藏  参数：type、typeId  cid
var complainadd = serverUrl + "/complain/add";//投诉  参数：type、typeId、complaintType、content
var getComplaints = serverUrl + "/complain/getComplaints";//未审核投诉列表
//1--点赞类型-评论；2--点赞类型-timeline 3--点赞类型-通知 4--点赞类型-宝宝评语 5--点赞类型-文档
//投诉 1;//恶意攻击和谩骂  2;//营销广告  3;//淫秽色情  4;//政治反动  5;//其他

var timelinedelete = serverUrl+"/timeline/delete";//删除动态，传tid
//投诉审核
var commentupdate = serverUrl + "/complain/update";//评论取消点赞  参数: id processUid  status


//我们班
var clazzgetAllTeacher = serverUrl + "/clazz/getAllTeacher";//班级下的老师列表  传cid
var clazzgetAllchild = serverUrl + "/clazz/getAllChild";//班级下的宝宝列表
var getClazzAllDayCheck = serverUrl + "/dayCheck/getClazzAllDayCheck";//晨检异常列表  传cid day
var getClazzgetChildMonth = serverUrl + "/attendance/getClazzChildByDay";//考勤异常列表  clazzId day  yyyy-mm-dd
var getDayCheck= serverUrl + "/dayCheck/getDayCheck";//修改晨检id
var updateDayCheck = serverUrl + "/dayCheck/updateDayCheck";//修改晨检
var mainuser = serverUrl + "/main/user";//宝宝详情
var mainteacher = serverUrl + "/main/teacher";//老师详情
var userupdatePersonUser = serverUrl + "/user/addPerformence";//宝宝表现
var usergetInformations = serverUrl + "/user/getPerformences";//获取宝宝表现
var DayCheckgetChildDayCheckList = serverUrl + "/dayCheck/getChildDayCheckList";//宝宝日常晨检 uid
var DayCheckgetChildTimeCheckList = serverUrl + "/dayCheck/getChildTimeCheckList";//宝宝定期体检 uid
var useraddDayCheck = serverUrl + "/dayCheck/addDayCheck";//记录宝宝晨检
var getClazzAllDayCheckByDay =serverUrl +"/dayCheck/getClazzAllDayCheckByDay";


var DayCheckgetaddClazzCheck = serverUrl + "/dayCheck/addClazzCheck";//全班合格 cid day
var DayCheckgetaddSchoolCheck = serverUrl + "/dayCheck/addSchoolCheck";//全园合格

var clazzgetAllclazzBystatus = serverUrl + "/clazz/getAllClazzsByStatus";//获取正常班、毕业班 sid status 0-正常班 1-删除 2-毕业班
var clazzupdateStatus = serverUrl + "/clazz/updateStatus";//将正常班设为毕业班 cid
var clazzget = serverUrl + "/clazz/get";//将正常班设为毕业班 id

var departmentgetAllListAndPerson = serverUrl + "/department/getAllListAndPerson";//获取各部门人员列表 sid
var backendgetAllTeachers = serverUrl + "/backend/getAllTeachers";//获取待审核老师列表 sid
var backendgetInformations = serverUrl + "/backend/getInformations";//获取待审核老师个人信息 uid
var backupdateBackendUser = serverUrl + "/backend/updateBackendUser";//审核状态 uid checkStatus 1-Y  2-N ext
var schoolgetschool = serverUrl + "/school/getschool";//获取园所主页 id
var scholupdateschool = serverUrl + "/school/updateschool";//修改园所主页 id
var getSchoolAllDayCheckByDay = serverUrl + "/dayCheck/getSchoolAllDayCheckByDay";//一键设置晨检 day
//获取所有幼儿园
var getAllSchool = serverUrl + "/school/getSchoolList";//
//我
var getMyInformations = serverUrl +"/backend/getInformations";//我的信息
var mainteacher = serverUrl +"/main/teacher";//我的主页
var updatebacked = serverUrl +"/backend/updateBackendUser";//修改个人信息
var createAuthCodeOnReg = serverUrl +"/backend/createAuthCodeOnReg";//获取验证码
var updateUserPhoneUrl = serverUrl+"/backend/updatePhone";//修改手机号
var  getquestionsUrl= serverUrl+"/helpcenter/questions";//常见问题
var  getquestionUrl= serverUrl+"/helpcenter/question";//常见问题详情
var  getdefaultUrl= serverUrl+"/default";//故障报告
var  getsuggestionUrl= serverUrl+"/suggestion";//提改进意见
var  getscorelogUrl= serverUrl+"/scoreLog/pager";//我的积分
var  CommentRemindStatus=serverUrl+"/backend/updateRemind";//传 remindStatus   0开启，1关闭

var searchUrl= serverUrl+"/document/search";//检索

//园长端
var clazzgetAllClazzs = serverUrl + "/clazz/getAllClazzs";//班级列表 sid

//园长信箱
var  presidentMailbox=serverUrl+ "/mailbox/getSchoolMailboxPager";//获取信箱列表
var  getAcquireEMail=serverUrl+"/mailbox/getMailbox";//获取信箱内容

//教学资料
var getTeachAndDoc = serverUrl + "/path/getSchoolAllList";//获取园所教学资料与园所文档目录列表 pathType 1为园所文档 2为教学资料
var getTeachChild = serverUrl + "/path/getSchoolAllListByPid";////获取园所教学资料与园所文档子目录列表 pathType 1为园所文档 2为教学资料
var seekTeachingData = serverUrl + "/document/search";//搜索资料  pager DocType 所属类型:1为课程 2为食谱 3为照片 4为文档； name 资料标题  pathId:所属目录
var getMyFavorite = serverUrl + "/document/pager";//获取我的收藏 type=5 写死
//==============常量（结束）========================



//头部高度
var headHeight = 44;
//底部高度

var bottomHeight = 59;

//是否初始化
var isInit = "isInit";

var lastTime = 'lastTime';
//是否播放引导视频
var isShowGuide = "isShowGuide";

//
var Storage_School_Active_Notice = "Storage_School_Active_Notice";

//短信验证码发送时间
var Storage_Sms_Time = "smsTime";
//聊天未读消息数
var Storage_chat_num = "chat_num";
//当前地址
var curAddress = 'curAddress';
//当前经度
var curLon = 'curLon';
//当前纬度
var curLat = 'curLat';
//购物车
var cartsKey = 'carts';



var industryNum = 3;//商家最多选择三个行业

//========系统级别的公共方法（开始）==========
/**
 *
 * @param url 跳转   内部跳转 inner://xxx/xxx 外部跳转 http://xxx/xxx
 * @param currentDirectory 当前目录  最外层目录小于0（index.html） 第一级目录（html文件夹下的，目前没有） 第二级目录（html文件夹下的文件夹）
 */
function systemForword(url,currentDirectory,overLoad){
    currentDirectory=currentDirectory||0;
    var path="../";
    if(currentDirectory <= 0){
        path="./html/";
    } else if(currentDirectory==2){
        path="../";
    }else if(currentDirectory == 1){
        path="./";
    }

    if(url.startWith("inner")){
        var content=url.substring("inner://".length);
        var name;
        var uri;
        var queryStr;
        var param={};
        var type;
        if(content.indexOf("?")>0){
            uri=content.substr(0,content.indexOf("?"));
            queryStr=content.substr(content.indexOf("?")+1);
        }else{
            uri=content;
        }
        var parts=uri.split("/");
        type=parts[0];
        name=parts[parts.length-1].replace(".html","");

        if(isNotBlack(queryStr)){
            var params=queryStr.split("&");
            for(var i=0;i<params.length;i++){
                param[params[i].split("=")[0]]=params[i].split("=")[1];
            }
        }
        openNewWindow(name,path+uri,param,overLoad);
    }else if(url.startsWith("http://") || url.startsWith("https://")){
        var linkUrl;
        var queryStr;
        var param = {};

        if(url.indexOf("?")>0){
            linkUrl = url.substr(0,url.indexOf("?"));
            queryStr = url.substr(url.indexOf("?")+1);
        }else{
            linkUrl = url;
        }
        if(isNotBlack(queryStr)){
            var params=queryStr.split("&");
            for(var i=0;i<params.length;i++){
                param[params[i].split("=")[0]]=params[i].split("=")[1];
            }
        }

        param.url = linkUrl;
        var browser = api.require('webBrowser');
        browser.open({
            url:url
        });
//      openNewWindow(hex_md5(url), path + "outside/outside.html",param,overLoad);
    }else{
        var content=url.substring("native://".length);
        var name;
        var queryStr;
        var param={};

        if(url.indexOf("?")>0){
            name = content.substr(0,content.indexOf("?"));
            queryStr = content.substr(content.indexOf("?")+1);
        }else{
            name = url;
        }
        if(isNotBlack(queryStr)){
            var params=queryStr.split("&");
            for(var i=0;i<params.length;i++){
                param[params[i].split("=")[0]]=params[i].split("=")[1];
            }
        }
        api.accessNative({
            name: name,
            extra:param
        }, function(ret, err) {

            if (ret) {

            } else {
                toast("启动失败")
            }
        });
    }
}

//打开用户的照片list页面,打开用户的主页
function openUserHome(uid){
//  alert("打开用户的主页"+uid);
    var url = 'inner://main/userDynamic.html?uid=' + uid;
    systemForword(url,0,{reload:true});
}

//保存购物车
function saveCarts(obj){
	setItem(cartsKey,JSON.stringify(carts),function(ret){

	});
}

function showValue(id,data){
	if(isBlack(document.getElementById(id))){
		return;
	}
	if(isBlack(data)){
		return;
	}
	var imgList = document.getElementById(id).querySelectorAll("*[data-type]");

	for(var i= 0;i<imgList.length;i++){
		var img = imgList[i];
		var id = img.getAttribute("id");
		if(!document.getElementById(id)){
			return;
		}
		if(isBlack(data[id])){
			continue;
		}
		if(img.getAttribute("data-type") == 'show-image'){
			document.getElementById(id).src = data[id];
		}else if(img.getAttribute("data-type") == 'show-value'){
			document.getElementById(id).value = data[id];
		}else if(img.getAttribute("data-type") == 'show-inner'){
			document.getElementById(id).innerHTML = data[id];
		}
	}
}
//将商品添加到购物车
function addToCarts(obj,mallId,mallName){
	getItem(cartsKey,function(ret,err){
		if(ret.status){
			var carts;
			if(isNotBlack(ret.data)){
				carts = JSON.parse(ret.data);
				var mallIdIndex = -1;
				for(var i = 0;i < carts.length;i++){
					if(carts[i].mallId == mallId){
						mallIdIndex = i;
						for(var n = 0;n < carts[i].list.length;n++){
							if(obj.id == carts[i].list[n].id){
								api.toast({
								    msg: "商品已添加至购物车！",
								    duration:2000,
								    location: 'bottom'
								});
								return;
							}
						}
					}
				}
			}else{
				carts = [];
			}

			if(mallIdIndex >= 0){
				carts[mallIdIndex].list.push(obj);
			}else{
				var cart = {};
				cart.mallId = mallId;
				cart.mallName = mallName;
				cart.list = [];
				cart.list.push(obj);
				carts.push(cart);
			}

			setItem(cartsKey,JSON.stringify(carts),function(ret){
				api.toast({
				    msg: "添加购物车成功！",
				    duration:2000,
				    location: 'bottom'
				});
			});
		}else{
//			alert(err)
			api.toast({
			    msg: err.msg,
			    duration:2000,
			    location: 'bottom'
			});
		}
	});
}

//========系统级别的公共方法（结束）==========





//========首页的公共方法（开始）==========
function setLocalFunctionPorts(result){
    var cacheKey = createCacheKey(functionportUrl, {});
    setItem(cacheKey, JSON.stringify(result));
}

function getLocalFunctionPorts(callBackOnGetData){
    var cacheKey = createCacheKey(functionportUrl, {});
    getItem(cacheKey, function (ret, err) {
        var storageStr = "{}";
        if (isNotBlack(ret.data)) {
            storageStr = ret.data;
        }
        var value = JSON.parse(storageStr);
        if (isBlack(value)) {
            callBackOnGetData({});
        } else {
            callBackOnGetData(value);
        }
    });
}

//========首页的公共方法（结束）==========





//========相册的公共方法（开始）==========
//打开用户列表
//if(type==0){
//    titleDiv.innerHTML="相册访客";
//}else if(type==1){
//    titleDiv.innerHTML="相册赞过的人";
//}else if(type=2){
//    titleDiv.innerHTML="最近浏览过的人";
//}else if(type==3){
//    titleDiv.innerHTML="最近赞过的人";
//}


//========相册的公共方法（结束）==========



//===========打开聊天=======
function openChat(type,thirdId,thirdNick){
	openNewWindow("chat"+type+"_"+thirdId,"./chat.html",{type:type,thirdId:thirdId,thirdNick:thirdNick});
}

var selectData = [{value: '2',
					text: '无'
 					},{value: '1',
						text: '有'
					}];


var sexData = [{value: '1',
					text: '男'
					},{value: '2',
					text: '女'
				}];
var ageData = [{"text":1,"value":1},{"text":2,"value":2},{"text":3,"value":3},{"text":4,"value":4},{"text":5,"value":5},{"text":6,"value":6},{"text":7,"value":7},{"text":8,"value":8},{"text":9,"value":9},{"text":10,"value":10},{"text":11,"value":11},{"text":12,"value":12},{"text":13,"value":13},{"text":14,"value":14},{"text":15,"value":15},{"text":16,"value":16},{"text":17,"value":17},{"text":18,"value":18},{"text":19,"value":19},{"text":20,"value":20},{"text":21,"value":21},{"text":22,"value":22},{"text":23,"value":23},{"text":24,"value":24},{"text":25,"value":25},{"text":26,"value":26},{"text":27,"value":27},{"text":28,"value":28},{"text":29,"value":29},{"text":30,"value":30},{"text":31,"value":31},{"text":32,"value":32},{"text":33,"value":33},{"text":34,"value":34},{"text":35,"value":35},{"text":36,"value":36},{"text":37,"value":37},{"text":38,"value":38},{"text":39,"value":39},{"text":40,"value":40},{"text":41,"value":41},{"text":42,"value":42},{"text":43,"value":43},{"text":44,"value":44},{"text":45,"value":45},{"text":46,"value":46},{"text":47,"value":47},{"text":48,"value":48},{"text":49,"value":49},{"text":50,"value":50},{"text":51,"value":51},{"text":52,"value":52},{"text":53,"value":53},{"text":54,"value":54},{"text":55,"value":55},{"text":56,"value":56},{"text":57,"value":57},{"text":58,"value":58},{"text":59,"value":59},{"text":60,"value":60},{"text":61,"value":61},{"text":62,"value":62},{"text":63,"value":63},{"text":64,"value":64},{"text":65,"value":65},{"text":66,"value":66},{"text":67,"value":67},{"text":68,"value":68},{"text":69,"value":69},{"text":70,"value":70},{"text":71,"value":71},{"text":72,"value":72},{"text":73,"value":73},{"text":74,"value":74},{"text":75,"value":75},{"text":76,"value":76},{"text":77,"value":77},{"text":78,"value":78},{"text":79,"value":79},{"text":80,"value":80},{"text":81,"value":81},{"text":82,"value":82},{"text":83,"value":83},{"text":84,"value":84},{"text":85,"value":85},{"text":86,"value":86},{"text":87,"value":87},{"text":88,"value":88},{"text":89,"value":89},{"text":90,"value":90},{"text":91,"value":91},{"text":92,"value":92},{"text":93,"value":93},{"text":94,"value":94},{"text":95,"value":95},{"text":96,"value":96},{"text":97,"value":97},{"text":98,"value":98},{"text":99,"value":99},{"text":100,"value":100}]

function isNotBlack(data) {
	return (data == "" || typeof(data)  == "undefined"|| data == null || isNullJson(data)) ? false : true;
}

function isNullJson(obj) {
	return isJson(obj) && JSON.stringify(obj) == '{}';
}

function isJson(obj) {
	return typeof(obj) == "object" &&
		Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}


function isBlack(data) {
	return (data == "" || typeof(data)  == "undefined" || data == null || isNullJson(data)) ? true : false;
}

//检查是否是数字
function isNum(num){
	if(!(/^\d*$/.test(num))){
		return false;
	}
	return true;
}

function isArray(o) {
	return Object.prototype.toString.call(o) === '[object Array]';
}

function isFunction(func) {
	if (typeof(func) == "function") {
		return true;
	}
	return false;
}

function hex_md5(string) {
	var x = Array();
	var k, AA, BB, CC, DD, a, b, c, d;
	var S11=7, S12=12, S13=17, S14=22;
	var S21=5, S22=9 , S23=14, S24=20;
	var S31=4, S32=11, S33=16, S34=23;
	var S41=6, S42=10, S43=15, S44=21;
	string = uTF8Encode(string);
	x = convertToWordArray(string);
	a = 0x67452301; b = 0xEFCDAB89; c = 0x98BADCFE; d = 0x10325476;
	for (k = 0; k < x.length; k += 16) {
		AA = a; BB = b; CC = c; DD = d;
		a = FF(a, b, c, d, x[k+0],  S11, 0xD76AA478);
		d = FF(d, a, b, c, x[k+1],  S12, 0xE8C7B756);
		c = FF(c, d, a, b, x[k+2],  S13, 0x242070DB);
		b = FF(b, c, d, a, x[k+3],  S14, 0xC1BDCEEE);
		a = FF(a, b, c, d, x[k+4],  S11, 0xF57C0FAF);
		d = FF(d, a, b, c, x[k+5],  S12, 0x4787C62A);
		c = FF(c, d, a, b, x[k+6],  S13, 0xA8304613);
		b = FF(b, c, d, a, x[k+7],  S14, 0xFD469501);
		a = FF(a, b, c, d, x[k+8],  S11, 0x698098D8);
		d = FF(d, a, b, c, x[k+9],  S12, 0x8B44F7AF);
		c = FF(c, d, a, b, x[k+10], S13, 0xFFFF5BB1);
		b = FF(b, c, d, a, x[k+11], S14, 0x895CD7BE);
		a = FF(a, b, c, d, x[k+12], S11, 0x6B901122);
		d = FF(d, a, b, c, x[k+13], S12, 0xFD987193);
		c = FF(c, d, a, b, x[k+14], S13, 0xA679438E);
		b = FF(b, c, d, a, x[k+15], S14, 0x49B40821);
		a = GG(a, b, c, d, x[k+1],  S21, 0xF61E2562);
		d = GG(d, a, b, c, x[k+6],  S22, 0xC040B340);
		c = GG(c, d, a, b, x[k+11], S23, 0x265E5A51);
		b = GG(b, c, d, a, x[k+0],  S24, 0xE9B6C7AA);
		a = GG(a, b, c, d, x[k+5],  S21, 0xD62F105D);
		d = GG(d, a, b, c, x[k+10], S22, 0x2441453);
		c = GG(c, d, a, b, x[k+15], S23, 0xD8A1E681);
		b = GG(b, c, d, a, x[k+4],  S24, 0xE7D3FBC8);
		a = GG(a, b, c, d, x[k+9],  S21, 0x21E1CDE6);
		d = GG(d, a, b, c, x[k+14], S22, 0xC33707D6);
		c = GG(c, d, a, b, x[k+3],  S23, 0xF4D50D87);
		b = GG(b, c, d, a, x[k+8],  S24, 0x455A14ED);
		a = GG(a, b, c, d, x[k+13], S21, 0xA9E3E905);
		d = GG(d, a, b, c, x[k+2],  S22, 0xFCEFA3F8);
		c = GG(c, d, a, b, x[k+7],  S23, 0x676F02D9);
		b = GG(b, c, d, a, x[k+12], S24, 0x8D2A4C8A);
		a = HH(a, b, c, d, x[k+5],  S31, 0xFFFA3942);
		d = HH(d, a, b, c, x[k+8],  S32, 0x8771F681);
		c = HH(c, d, a, b, x[k+11], S33, 0x6D9D6122);
		b = HH(b, c, d, a, x[k+14], S34, 0xFDE5380C);
		a = HH(a, b, c, d, x[k+1],  S31, 0xA4BEEA44);
		d = HH(d, a, b, c, x[k+4],  S32, 0x4BDECFA9);
		c = HH(c, d, a, b, x[k+7],  S33, 0xF6BB4B60);
		b = HH(b, c, d, a, x[k+10], S34, 0xBEBFBC70);
		a = HH(a, b, c, d, x[k+13], S31, 0x289B7EC6);
		d = HH(d, a, b, c, x[k+0],  S32, 0xEAA127FA);
		c = HH(c, d, a, b, x[k+3],  S33, 0xD4EF3085);
		b = HH(b, c, d, a, x[k+6],  S34, 0x4881D05);
		a = HH(a, b, c, d, x[k+9],  S31, 0xD9D4D039);
		d = HH(d, a, b, c, x[k+12], S32, 0xE6DB99E5);
		c = HH(c, d, a, b, x[k+15], S33, 0x1FA27CF8);
		b = HH(b, c, d, a, x[k+2],  S34, 0xC4AC5665);
		a = II(a, b, c, d, x[k+0],  S41, 0xF4292244);
		d = II(d, a, b, c, x[k+7],  S42, 0x432AFF97);
		c = II(c, d, a, b, x[k+14], S43, 0xAB9423A7);
		b = II(b, c, d, a, x[k+5],  S44, 0xFC93A039);
		a = II(a, b, c, d, x[k+12], S41, 0x655B59C3);
		d = II(d, a, b, c, x[k+3],  S42, 0x8F0CCC92);
		c = II(c, d, a, b, x[k+10], S43, 0xFFEFF47D);
		b = II(b, c, d, a, x[k+1],  S44, 0x85845DD1);
		a = II(a, b, c, d, x[k+8],  S41, 0x6FA87E4F);
		d = II(d, a, b, c, x[k+15], S42, 0xFE2CE6E0);
		c = II(c, d, a, b, x[k+6],  S43, 0xA3014314);
		b = II(b, c, d, a, x[k+13], S44, 0x4E0811A1);
		a = II(a, b, c, d, x[k+4],  S41, 0xF7537E82);
		d = II(d, a, b, c, x[k+11], S42, 0xBD3AF235);
		c = II(c, d, a, b, x[k+2],  S43, 0x2AD7D2BB);
		b = II(b, c, d, a, x[k+9],  S44, 0xEB86D391);
		a = addUnsigned(a, AA);
		b = addUnsigned(b, BB);
		c = addUnsigned(c, CC);
		d = addUnsigned(d, DD);
	}
	var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
	return tempValue.toLowerCase();
}



var rotateLeft = function(lValue, iShiftBits) {
	return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}

var addUnsigned = function(lX, lY) {
	var lX4, lY4, lX8, lY8, lResult;
	lX8 = (lX & 0x80000000);
	lY8 = (lY & 0x80000000);
	lX4 = (lX & 0x40000000);
	lY4 = (lY & 0x40000000);
	lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);
	if (lX4 & lY4) return (lResult ^ 0x80000000 ^ lX8 ^ lY8);
	if (lX4 | lY4) {
		if (lResult & 0x40000000) return (lResult ^ 0xC0000000 ^ lX8 ^ lY8);
		else return (lResult ^ 0x40000000 ^ lX8 ^ lY8);
	} else {
		return (lResult ^ lX8 ^ lY8);
	}
}

var F = function(x, y, z) {
	return (x & y) | ((~ x) & z);
}

var G = function(x, y, z) {
	return (x & z) | (y & (~ z));
}

var H = function(x, y, z) {
	return (x ^ y ^ z);
}

var I = function(x, y, z) {
	return (y ^ (x | (~ z)));
}

var FF = function(a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var GG = function(a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var HH = function(a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var II = function(a, b, c, d, x, s, ac) {
	a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
	return addUnsigned(rotateLeft(a, s), b);
};

var convertToWordArray = function(string) {
	var lWordCount;
	var lMessageLength = string.length;
	var lNumberOfWordsTempOne = lMessageLength + 8;
	var lNumberOfWordsTempTwo = (lNumberOfWordsTempOne - (lNumberOfWordsTempOne % 64)) / 64;
	var lNumberOfWords = (lNumberOfWordsTempTwo + 1) * 16;
	var lWordArray = Array(lNumberOfWords - 1);
	var lBytePosition = 0;
	var lByteCount = 0;
	while (lByteCount < lMessageLength) {
		lWordCount = (lByteCount - (lByteCount % 4)) / 4;
		lBytePosition = (lByteCount % 4) * 8;
		lWordArray[lWordCount] = (lWordArray[lWordCount] | (string.charCodeAt(lByteCount) << lBytePosition));
		lByteCount++;
	}
	lWordCount = (lByteCount - (lByteCount % 4)) / 4;
	lBytePosition = (lByteCount % 4) * 8;
	lWordArray[lWordCount] = lWordArray[lWordCount] | (0x80 << lBytePosition);
	lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
	lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
	return lWordArray;
};

var wordToHex = function(lValue) {
	var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
	for (lCount = 0; lCount <= 3; lCount++) {
		lByte = (lValue >>> (lCount * 8)) & 255;
		WordToHexValueTemp = "0" + lByte.toString(16);
		WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
	}
	return WordToHexValue;
};

var uTF8Encode = function(string) {
	string = string.replace(/\x0d\x0a/g, "\x0a");
	var output = "";
	for (var n = 0; n < string.length; n++) {
		var c = string.charCodeAt(n);
		if (c < 128) {
			output += String.fromCharCode(c);
		} else if ((c > 127) && (c < 2048)) {
			output += String.fromCharCode((c >> 6) | 192);
			output += String.fromCharCode((c & 63) | 128);
		} else {
			output += String.fromCharCode((c >> 12) | 224);
			output += String.fromCharCode(((c >> 6) & 63) | 128);
			output += String.fromCharCode((c & 63) | 128);
		}
	}
	return output;
};

function base64_encode(str) {
	var c1, c2, c3;
	var base64EncodeChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
	var i = 0, len = str.length, string = '';

	while (i < len) {
		c1 = str.charCodeAt(i++) & 0xff;
		if (i == len) {
			string += base64EncodeChars.charAt(c1 >> 2);
			string += base64EncodeChars.charAt((c1 & 0x3) << 4);
			string += "==";
			break;
		}
		c2 = str.charCodeAt(i++);
		if (i == len) {
			string += base64EncodeChars.charAt(c1 >> 2);
			string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
			string += base64EncodeChars.charAt((c2 & 0xF) << 2);
			string += "=";
			break;
		}
		c3 = str.charCodeAt(i++);
		string += base64EncodeChars.charAt(c1 >> 2);
		string += base64EncodeChars.charAt(((c1 & 0x3) << 4) | ((c2 & 0xF0) >> 4));
		string += base64EncodeChars.charAt(((c2 & 0xF) << 2) | ((c3 & 0xC0) >> 6));
		string += base64EncodeChars.charAt(c3 & 0x3F)
	}
	return string
}

function base64_decode(str) {
	var c1, c2, c3, c4;
	var base64DecodeChars = new Array(
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1,
		-1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57,
		58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6,
		7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
		25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
		37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1,
		-1, -1
	);
	var i = 0, len = str.length, string = '';

	while (i < len) {
		do {
			c1 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
		} while (
		i < len && c1 == -1
			);

		if (c1 == -1) break;

		do {
			c2 = base64DecodeChars[str.charCodeAt(i++) & 0xff]
		} while (
		i < len && c2 == -1
			);

		if (c2 == -1) break;

		string += String.fromCharCode((c1 << 2) | ((c2 & 0x30) >> 4));

		do {
			c3 = str.charCodeAt(i++) & 0xff;
			if (c3 == 61)
				return string;

			c3 = base64DecodeChars[c3]
		} while (
		i < len && c3 == -1
			);

		if (c3 == -1) break;

		string += String.fromCharCode(((c2 & 0XF) << 4) | ((c3 & 0x3C) >> 2));

		do {
			c4 = str.charCodeAt(i++) & 0xff;
			if (c4 == 61) return string;
			c4 = base64DecodeChars[c4]
		} while (
		i < len && c4 == -1
			);

		if (c4 == -1) break;

		string += String.fromCharCode(((c3 & 0x03) << 6) | c4)
	}
	return string;
}



function getCompressImg(img,w,h){

	var src = img.substring(0,img.lastIndexOf("."));
	var suffix = img.substring(img.lastIndexOf("."));
	var width = api.frameWidth*w;
	//var height = width/h;
	src = src+"_"+width+"_"+0+suffix;
	return src;
}



var formatTimeToDate = function(time){
	return new Date(time).format("yyyy-MM-dd hh:mm");
};
var formatTimeToDay = function(time){
	return new Date(time).format("yyyy-MM-dd");
};
var formatTimeToDays = function(time){
    return new Date(time).format("yyyy.MM.dd");
};
var formatTimeToDay_month = function(time){
    return new Date(time).format("yyyyMM");
};
var formatTimeToDay_months = function(time){
    return new Date(time).format("yyyy-MM");
};
var formatTimeToDateDian = function(time){
	return new Date(time).format("yyyy.MM.dd hh:mm");
};
var formatTimeToMonths = function(time){
    return new Date(time).format("yyyyMM");
};
var formatTimeToDay_day = function(time){
    return new Date(time).format("yyyyMMdd");
};
var formatTimeToDateDianLY = function(time){
	return new Date(time).format("yyyy.MM.dd");
};
var formatTimeToDayYang = function(time){
	return new Date(time).format("yyyyMMdd");
};
var formatTimeToMinute = function(time){
	return new Date(time).format("hh:mm");
};

var formatTimeToDayDade = function(time){
    return new Date(time).format("yyyy/MM/dd");
};

Date.prototype.format = function(format) {
	var date = {
		"M+": this.getMonth() + 1,
		"d+": this.getDate(),
		"h+": this.getHours(),
		"m+": this.getMinutes(),
		"s+": this.getSeconds(),
		"q+": Math.floor((this.getMonth() + 3) / 3),
		"S+": this.getMilliseconds()
	};
	if (/(y+)/i.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length));
	}
	for (var k in date) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1
				? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
		}
	}
	return format;
};
var sdelay=0;
function returnTop() {
	window.scrollBy(0,-100);//Only for y vertical-axis
	if(document.body.scrollTop>0) {
		sdelay= setTimeout('returnTop()',150);
	}
}
function getDateDiff(dateTimeStamp){
	var minute = 1000 * 60;
	var hour = minute * 60;
	var day = hour * 24;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime();
	var diffValue = now - dateTimeStamp;
	if(diffValue < 0){return;}
	var monthC =diffValue/month;
	var weekC =diffValue/(7*day);
	var dayC =diffValue/day;
	var hourC =diffValue/hour;
	var minC =diffValue/minute;
	if(monthC>=1){
		result="" + parseInt(monthC) + "月前";
	}
	else if(weekC>=1){
		result="" + parseInt(weekC) + "周前";
	}
	else if(dayC>=1){
		result=""+ parseInt(dayC) +"天前";
	}
	else if(hourC>=1){
		result=""+ parseInt(hourC) +"小时前";
	}
	else if(minC>=1){
		result=""+ parseInt(minC) +"分钟前";
	}else
		result="刚刚";
	return result;
}
function openNewUrl(url,params){
    var text = "";
    if(isNotBlack(params)){
        text ="?";
        for(var key in params){
            text = text+key+"="+params[key]+"&"
        }
    }
//  if(url.indexOf('login.html') == -1){
        location.href =url+text;
//  }else if(checkUser()){
//     location.href = url+text;
//  }

}


function openSliderInfo(url){
    var browser = api.require('webBrowser');
    browser.open({
        titleBar:{
            bg:'#39bc30',
            textColor:'#fff'
        },
        url:url
    });
}


function checkLength(num,type){
    var value = type.value;
    if(value.length > num){
    	toast("温馨提示：密码为6至8位数字和字母的组合");
    	type.value = type.value.substring(0, num)
//     	return;
    }
}


//检查手机号码
function checkMobileNum(mobileNum){
    // if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(mobileNum))){
    var phoneReg = /^1(3|4|5|7|8)\d{9}$/;
    if(!phoneReg.test(mobileNum)){
        return false;
    }
    return true;
}

//身份证号合法性验证
function checkIdentity(identity) {
    var reg = /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/;
    if (!reg.test(identity)) {
        return false;
    }
    return true;
}

// 身份证验证结束

// 邮箱验证
function checkEmail(emailText) {
    var emailReg =  /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
    if (!emailReg.test(emailText)) {
        return false;
    }
    return true;
}
// 邮箱验证结束


//function hideBackButton(){
//	document.getElementById("leftButton").style.opacity = 0;
//	setTimeout(function(){
//		document.getElementById("leftButton").style.opacity = 1;
//	},300)
//}
//
//
//function showBackButton(){
//	document.getElementById("leftButton").style.opacity = 1;
//}
