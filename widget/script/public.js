var version = "1.0.0";
var isTest = false;
var isCleanUser = false;

// var serverUrl = "http://192.168.1.22:8000/SE4M/SE/";
var serverUrl = "http://192.168.1.3:8000/SE4M/SE";
var localhostHref = 'http://192.168.1.3:8000/SE4M';
var Domain = 'http://192.168.1.3:8088';



/*
var serverUrl = "http://112.126.98.172:8000/SE4M/SE";
var localhostHref = 'http://112.126.98.172:8000/SE4M';
var Domain = 'http://112.126.98.172:8088';
*/


var rootWindowName = "root";
simpleVersion = true;


//分享地址
var shareNotice = "http://39.107.247.82:99/html/classNotice_detail_body.html?nid=";

var falga = false;

function al(data) {
    if (falga) {
        alert(JSON.stringify(data))
    } else {
    }
}

// 接口    信息  列表

var SendSmsCode = serverUrl + "/Login/SendSmsCode";   //获取验证码

var LoginAndRegist = serverUrl + "/Login/LoginAndRegist";   //验证码登陆   role_type
var updatePwd = serverUrl + "/UserProfile/updatePwd";   //验证码登陆   role_type

// 账号密码登录
var PwdLogin = serverUrl + "/Login/pwdLogin";


// 获取面试数量
var GetInterview = serverUrl + "/UserProfile/queryInterviewSum";
// 获取面试列表
var QueryApplicationStatusList = serverUrl + "/EvaluateProfile/queryApplicationStatusList";

// 查询沟通数量
var GetCommunicate = serverUrl + "/UserProfile/queryPersonChatList";

// 查询投递简历的个数
var GetStatusNum = serverUrl + "/UserProfile/queryApplicationStatusNum";
// 获取投递简历列表数据
var QueryjobsList = serverUrl + "/UserProfile/queryjobsList";

// 获取简历全部信息
var GetResumeInformation = serverUrl + "/UserProfile/queryProfileAllinOne";


// 编写自我描述
var updateTags = serverUrl + "/UserProfile/updateTags";

// 获取录用列表数据
var QueryApplicationStatus4List = serverUrl + "/EvaluateProfile/queryApplicationStatus4List";

// 查询教育信息
var GetEducation = serverUrl + "/UserProfile/queryEducationByid";
// 添加/修改教育信息
var AddEducation = serverUrl + "/UserProfile/createEducation";
// 删除此段教育经历
var DeleteEducation = serverUrl + "/UserProfile/removeEducation";

// 查询工作经历
var GetWork = serverUrl + "/UserProfile/queryWorkingExperienceById";
// 添加工作经历
var AddWork = serverUrl + "/WorkingExperienceProfile/addWorkingExperience";
// 删除工作经历
var DeleteWork = serverUrl + "/WorkingExperienceProfile/removeWorkingExperience";
// 修改工作经历
var SetWork = serverUrl + "/WorkingExperienceProfile/updateWorkingExperience";

// tianjia项目经历

var createProjectExperience = serverUrl + "/ProjectExperienceProfile/createProjectExperience";
// 查询项目经历
var GetProjec = serverUrl + "/ProjectExperienceProfile/queryProjectExperienceById";
// 删除项目经历
var DeleteProjec = serverUrl + "/ProjectExperienceProfile/removeProjectExperience";

// 查询求职期望
var GetStatus = serverUrl + "/UserProfile/queryIntention";
// 修改求职期望
var SetStatus = serverUrl + "/UserProfile/createIntention";

// 修改求职状态
var EditStatus = serverUrl + "/UserProfile/editIntentionStatus";

// 获取个人中心数据
var QuerySummary = serverUrl + "/UserProfile/querySummaryPerson";
// 编辑个人中心
var UpdatePerson = serverUrl + "/UserProfile/updatePerson";
// 编辑个人地址
var UpdateAddress = serverUrl + "/UserProfile/updateAddress";

// 职位详情
var QueryJobSummary = serverUrl + "/JobProfile/queryJobSummary";
// 公司详情
var QueryOrgnizationSummary = serverUrl + "/OrgnizationProfile/queryOrgProfileAllinOne";
// d动态详情
var queryDynamicSummaryById = serverUrl + "/OrgnizationProfile/queryDynamicSummaryById";
// 魔方
var queryListRandom = serverUrl + "/UserProfile/queryListRandom";
// 进入职位详情  随机 职位  id
// var JobId = serverUrl + "/JobProfile/JobId";
var JobId = serverUrl + "/JobProfile/JobSummaryRandom";

// 获取订阅列表数据
var QuerySubscriptionById = serverUrl + "/UserProfile/querySubscriptionById";
// 删除订阅
var DeleteSubscriptionById = serverUrl + "/UserProfile/deleteSubscriptionById";
// 修改订阅
var UpdateSubscriptionById = serverUrl + "/UserProfile/updateSubscriptionById";
// 添加订阅
var AddSubscription = serverUrl + "/UserProfile/addSubscription";


// 关注
var attentionCompanyByCid = serverUrl + "/OrgnizationProfile/attentionCompanyByCid";

// 我的关注
var queryAttentionCompany = serverUrl + "/OrgnizationProfile/queryAttentionCompany";


// 创建简历  地图
var addAddressByPerson = serverUrl + "/UserProfile/addAddressByPerson";

// 创建简历   第一步
var CreatePerson = serverUrl + "/UserProfile/CreatePerson";

// 创建简历   第er步
var addWorkingExperience = serverUrl + "/WorkingExperienceProfile/addWorkingExperience";

// 创建简历   第三步
var createEducation = serverUrl + "/UserProfile/createEducation";

// 创建简历   第四步
var createProjectExperience = serverUrl + "/ProjectExperienceProfile/createProjectExperience";

// 个人社交主页 查询
var queryHomePage = serverUrl + "/UserProfile/queryHomePage";

// 个人社交主页 添加
var addHomePage = serverUrl + "/UserProfile/addHomePage";

// 个人社交主页 编辑
var updateHomePage = serverUrl + "/UserProfile/updateHomePage";

// 个人社交主页 删除
var deleteHomePage = serverUrl + "/UserProfile/deleteHomePage";

// 隐私设置 修改手机号
var updatePhone = serverUrl + "/UserProfile/updatePhone";


// 圈子活动列表
var queryCircleList = serverUrl + "/CircleProfile/queryCircleList";
// 圈子添加活动
var createCircle = serverUrl + "/CircleProfile/createCircle";
// 圈子添加活动地址
var addAddress = serverUrl + "/CircleProfile/addAddress";
// 圈子活动详情
// var queryCircleByPersonId = serverUrl + "/CircleProfile/queryCircleByPersonId";
var CircleProfileAllinOne = serverUrl + "/CircleProfile/CircleProfileAllinOne";
// 圈子报名
var joinCircle = serverUrl + "/CircleProfile/joinCircle";
// 圈子查询电子票
var queryInvoice = serverUrl + "/CircleProfile/queryInvoice";
// 圈子活动签到
var editCircleStatus = serverUrl + "/CircleProfile/editCircleStatus";
// 圈子取消活动
var updateCircle = serverUrl + "/CircleProfile/updateCircle";

// 圈子报名管理
var queryApplyList = serverUrl + "/CircleProfile/queryApplyList";
// 群发短信
var MassTexting = localhostHref + "/MassTexting";

// 圈子 我的活动   我参加的
var queryMyJoinCirCle = serverUrl + "/CircleProfile/queryMyJoinCirCle";
// 圈子 我的活动   我发布的
var queryCircleListByPersonId = serverUrl + "/CircleProfile/queryCircleListByPersonId";

// 获取评论数据
var queryCommentSummary = serverUrl + "/CircleProfile/queryCommentSummary";
// 评论活动
var addComment = serverUrl + "/CircleProfile/addComment";
// 评论点赞
var addLike = serverUrl + "/CircleProfile/addLike";
// 取消评论点赞
var removeLike = serverUrl + "/CircleProfile/removeLike";

// 活动收藏
var addAttentionCircle = serverUrl + "/CircleProfile/addAttentionCircle";
// 取消活动收藏
var removeAttentionCircle = serverUrl + "/CircleProfile/removeAttentionCircle";


// 查询屏蔽公司列表
var queryShieldCompany = serverUrl + "/OrgnizationProfile/queryShieldCompany";
// 添加屏蔽公司
var addShieldCompany = serverUrl + "/OrgnizationProfile/addShieldCompany";
// 模糊查询公司
var orgnizationList = serverUrl + "/OrgnizationProfile/orgnizationList";


// 圈子发布活动
var ActivecreateCircle = serverUrl + "/CircleProfile/CreateCircle";
// 意见反馈
var addFeedback = localhostHref + "/addFeedback";

// 意见反馈  图片
// var addFeedBackPic = localhostHref + "/addFeedBackPic";
var addFeedBackPic = localhostHref + "/Pic";


// 圈子发布活动 编辑 图片

var UploadPicCircle = Domain + "/upload/UploadPicCircle";



//  创建简历  头像
var UploadFileupload = Domain + "/upload/UploadFile";



// 聊天-看过我
var lookmeList = serverUrl + "/UserProfile/lookmeList";

// 聊天-获取订阅号
var addTopic = serverUrl + "/ChatProFile/addTopic";

// 聊天-联系人列表
var queryChatList = serverUrl + "/ChatProFile/queryChatList";
// 聊天-看过我
var lookmeList = serverUrl + "/UserProfile/lookmeList";

// 巨划算-面膜详情
var summary = Domain + "/Mask/summary";
// 巨划算-商品收藏
var collectComm = Domain + "/CommodityProFile/collectComm";
// 巨划算-添加银行卡-验证银行卡
var YhCard = Domain + "/idDocument/YhCard";
// 巨划算-添加银行卡-验证手机号
var SendSms = Domain + "/idDocument/SendSms";
// 巨划算-添加银行卡-绑定银行卡
var AddIdYhCard = Domain + "/idDocument/AddIdYhCard";
// 巨划算-添加银行卡-添加支付密码
var SetPayPwd = Domain + "/idDocument/SetPayPwd";

// 巨划算-旅游-以色列详情
var showTravel = Domain + "/travel/showTravel";


// 巨划算-生成订单
var createOrder = Domain + "/reserve/createOrder";
// 巨划算-验证用户是否绑定银行卡
var PayOrder = Domain + "/reserve/PayOrder";

// =======================================聚划算
//  添加地址
var addDeliveryAdr = Domain + "/delivery/addDeliveryAdr";
//  编编辑地址
var deliveryUpdate = Domain + "/delivery/update";
//  查询地址
var deliveryShow = Domain + "/delivery/show";

//  删除地址
var deliveryDelete = Domain + "/delivery/delete";

//  删除地址
var deliverySetAddr = Domain + "/delivery/setAddr";

//  聚划算  旅游 提交订单
var createReserveAndOrder = Domain + "/reserve/createReserveAndOrder";


//  聚划算
var showVisaInformation = Domain + "/visa/showVisaInformation";


//  基本信息   上传图片
var UploadPicon = Domain + "/upload/UploadPicon";

// 发布活动上传图片
var UploadFlieTest = Domain + "/upload/UploadFlieTest";

//伯乐创建简历  头像
var uploadploadFlie = Domain + "/upload/UploadFlie";





// 伯乐-魔方推送
var SmartMenu = serverUrl + "/JobProfile/SmartMenu";
// 伯乐-简历详情
var QueryPerson = serverUrl + "/JobProfile/QueryPerson";
// 伯乐-根据职位查询简历
var queryPersonList = serverUrl + "/JobProfile/queryPersonList";

// 伯乐-消息谁看过我
var lookJobsList = serverUrl + "/JobProfile/lookJobsList";
// 伯乐-status=1 新简历 2初试3复试 4录用 5不合适
var ResumeList = serverUrl + "/JobProfile/ResumeList";
// 伯乐-查看简历详情
var QueryPerson = serverUrl + "/JobProfile/QueryPerson";

// 公司填写信息
var addRecruiter = localhostHref + "/addRecruiter";

// 公司填写信息
var querySuccessLogin = serverUrl + "/Login/querySuccess";

// 公司填写信息
var JobProfileCreateCompany = serverUrl + "/OrgnizationProfile/CreateCompany";





















// 判断当前求职状态
function isStatus(num) {
    // 求职状态
    var statusObj = {
        '1': '离职-随时到岗',
        '2': '在职-月内到岗',
        '3': '在职-考虑机会',
        '4': '在职-暂不考虑',
    }
    return statusObj[num];
}
// 图片路劲去逗号
function imgSrcFun(src) {
    return src.split(',')[0];
}
// 计算年龄或工作年限
function ages(str) {
    var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
    if (r == null) return false;
    var d = new Date(r[1], r[3] - 1, r[4]);
    if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
        var Y = new Date().getFullYear();
        // return ("年龄   =   " + (Y - r[1]) + "   周岁");
        return (Y - r[1]);
    }
    return ("输入的日期格式错误！");
}
// 过滤时间转成 - 4-5-
function filterTime0(time) {
    var arr = time.split('-');
    arr.shift();
    return arr.join('-');
}
// 过滤时间转成 - 4月5日
function filterTime1(time) {
    var arr = time.split('-');
    var month = arr[1] + '月';
    var day = arr[2] + '日';
    return month + day;
}
// 过滤时间不要分秒
function filterTime2(time) {
    var arr = time.split(':');
    arr.pop();
    // console.log(arr);
    return arr.join(':');
}


function checkTelFour(urlString) {
    if (urlString != "") {
        tel = "" + urlString
        var reg = /(\d{3})\d{4}(\d{4})/;
        return tel.replace(reg, "$1****$2")
    }

}

function checkUrl(urlString) {
    if (urlString != "") {
        var reg = /(http|ftp|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/;
        if (!reg.test(urlString)) {
            return false;
        } else {
            return true;
        }

    }
}


function dataValue(name) {
    var path = 'widget://html/' + name;
    // console.log(path)
    //同步返回结果：
    var data = api.readFile({
        sync: true,
        path: path
    });
    // console.log(data)
    return data
}


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

//获取最近多少天日期
function getDay(day) {
    var today = new Date();
    var targetday_milliseconds = today.getTime() + 1000 * 60 * 60 * 24 * day;
    today.setTime(targetday_milliseconds); //注意，这行是关键代码
    var tYear = today.getFullYear();
    var tMonth = today.getMonth();
    var tDate = today.getDate();
    tMonth = getzf(tMonth + 1);
    tDate = getzf(tDate);
    return tYear + "-" + tMonth + "-" + tDate;
}

var industryNum = 3;//商家最多选择三个行业

//========系统级别的公共方法（开始）==========
/**
 *
 * @param url 跳转   内部跳转 inner://xxx/xxx 外部跳转 http://xxx/xxx
 * @param currentDirectory 当前目录  最外层目录小于0（index.html） 第一级目录（html文件夹下的，目前没有） 第二级目录（html文件夹下的文件夹）
 */
function systemForword(url, currentDirectory, overLoad) {
    currentDirectory = currentDirectory || 0;
    var path = "../";
    if (currentDirectory <= 0) {
        path = "./html/";
    } else if (currentDirectory == 2) {
        path = "../";
    } else if (currentDirectory == 1) {
        path = "./";
    }

    if (url.startWith("inner")) {
        var content = url.substring("inner://".length);
        var name;
        var uri;
        var queryStr;
        var param = {};
        var type;
        if (content.indexOf("?") > 0) {
            uri = content.substr(0, content.indexOf("?"));
            queryStr = content.substr(content.indexOf("?") + 1);
        } else {
            uri = content;
        }
        var parts = uri.split("/");
        type = parts[0];
        name = parts[parts.length - 1].replace(".html", "");

        if (isNotBlack(queryStr)) {
            var params = queryStr.split("&");
            for (var i = 0; i < params.length; i++) {
                param[params[i].split("=")[0]] = params[i].split("=")[1];
            }
        }
        openNewWindow(name, path + uri, param, overLoad);
    } else if (url.startsWith("http://") || url.startsWith("https://")) {
        var linkUrl;
        var queryStr;
        var param = {};

        if (url.indexOf("?") > 0) {
            linkUrl = url.substr(0, url.indexOf("?"));
            queryStr = url.substr(url.indexOf("?") + 1);
        } else {
            linkUrl = url;
        }
        if (isNotBlack(queryStr)) {
            var params = queryStr.split("&");
            for (var i = 0; i < params.length; i++) {
                param[params[i].split("=")[0]] = params[i].split("=")[1];
            }
        }

        param.url = linkUrl;
        var browser = api.require('webBrowser');
        browser.open({
            url: url
        });
//      openNewWindow(hex_md5(url), path + "outside/outside.html",param,overLoad);
    } else {
        var content = url.substring("native://".length);
        var name;
        var queryStr;
        var param = {};

        if (url.indexOf("?") > 0) {
            name = content.substr(0, content.indexOf("?"));
            queryStr = content.substr(content.indexOf("?") + 1);
        } else {
            name = url;
        }
        if (isNotBlack(queryStr)) {
            var params = queryStr.split("&");
            for (var i = 0; i < params.length; i++) {
                param[params[i].split("=")[0]] = params[i].split("=")[1];
            }
        }
        api.accessNative({
            name: name,
            extra: param
        }, function (ret, err) {

            if (ret) {

            } else {
                toast("启动失败")
            }
        });
    }
}

//打开用户的照片list页面,打开用户的主页
function openUserHome(uid) {
//  alert("打开用户的主页"+uid);
    var url = 'inner://main/userDynamic.html?uid=' + uid;
    systemForword(url, 0, {reload: true});
}

//保存购物车
function saveCarts(obj) {
    setItem(cartsKey, JSON.stringify(carts), function (ret) {

    });
}

function showValue(id, data) {
    if (isBlack(document.getElementById(id))) {
        return;
    }
    if (isBlack(data)) {
        return;
    }
    var imgList = document.getElementById(id).querySelectorAll("*[data-type]");

    for (var i = 0; i < imgList.length; i++) {
        var img = imgList[i];
        var id = img.getAttribute("id");
        if (!document.getElementById(id)) {
            return;
        }
        if (isBlack(data[id])) {
            continue;
        }
        if (img.getAttribute("data-type") == 'show-image') {
            document.getElementById(id).src = data[id];
        } else if (img.getAttribute("data-type") == 'show-value') {
            document.getElementById(id).value = data[id];
        } else if (img.getAttribute("data-type") == 'show-inner') {
            document.getElementById(id).innerHTML = data[id];
        }
    }
}

//将商品添加到购物车
function addToCarts(obj, mallId, mallName) {
    getItem(cartsKey, function (ret, err) {
        if (ret.status) {
            var carts;
            if (isNotBlack(ret.data)) {
                carts = JSON.parse(ret.data);
                var mallIdIndex = -1;
                for (var i = 0; i < carts.length; i++) {
                    if (carts[i].mallId == mallId) {
                        mallIdIndex = i;
                        for (var n = 0; n < carts[i].list.length; n++) {
                            if (obj.id == carts[i].list[n].id) {
                                api.toast({
                                    msg: "商品已添加至购物车！",
                                    duration: 2000,
                                    location: 'bottom'
                                });
                                return;
                            }
                        }
                    }
                }
            } else {
                carts = [];
            }

            if (mallIdIndex >= 0) {
                carts[mallIdIndex].list.push(obj);
            } else {
                var cart = {};
                cart.mallId = mallId;
                cart.mallName = mallName;
                cart.list = [];
                cart.list.push(obj);
                carts.push(cart);
            }

            setItem(cartsKey, JSON.stringify(carts), function (ret) {
                api.toast({
                    msg: "添加购物车成功！",
                    duration: 2000,
                    location: 'bottom'
                });
            });
        } else {
//			alert(err)
            api.toast({
                msg: err.msg,
                duration: 2000,
                location: 'bottom'
            });
        }
    });
}

//========系统级别的公共方法（结束）==========


//========首页的公共方法（开始）==========
function setLocalFunctionPorts(result) {
    var cacheKey = createCacheKey(functionportUrl, {});
    setItem(cacheKey, JSON.stringify(result));
}

function getLocalFunctionPorts(callBackOnGetData) {
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
function openChat(type, thirdId, thirdNick) {
    openNewWindow("chat" + type + "_" + thirdId, "./chat.html", {type: type, thirdId: thirdId, thirdNick: thirdNick});
}

var selectData = [{
    value: '2',
    text: '无'
}, {
    value: '1',
    text: '有'
}];


var sexData = [{
    value: '1',
    text: '男'
}, {
    value: '2',
    text: '女'
}];
var ageData = [{"text": 1, "value": 1}, {"text": 2, "value": 2}, {"text": 3, "value": 3}, {
    "text": 4,
    "value": 4
}, {"text": 5, "value": 5}, {"text": 6, "value": 6}, {"text": 7, "value": 7}, {"text": 8, "value": 8}, {
    "text": 9,
    "value": 9
}, {"text": 10, "value": 10}, {"text": 11, "value": 11}, {"text": 12, "value": 12}, {
    "text": 13,
    "value": 13
}, {"text": 14, "value": 14}, {"text": 15, "value": 15}, {"text": 16, "value": 16}, {
    "text": 17,
    "value": 17
}, {"text": 18, "value": 18}, {"text": 19, "value": 19}, {"text": 20, "value": 20}, {
    "text": 21,
    "value": 21
}, {"text": 22, "value": 22}, {"text": 23, "value": 23}, {"text": 24, "value": 24}, {
    "text": 25,
    "value": 25
}, {"text": 26, "value": 26}, {"text": 27, "value": 27}, {"text": 28, "value": 28}, {
    "text": 29,
    "value": 29
}, {"text": 30, "value": 30}, {"text": 31, "value": 31}, {"text": 32, "value": 32}, {
    "text": 33,
    "value": 33
}, {"text": 34, "value": 34}, {"text": 35, "value": 35}, {"text": 36, "value": 36}, {
    "text": 37,
    "value": 37
}, {"text": 38, "value": 38}, {"text": 39, "value": 39}, {"text": 40, "value": 40}, {
    "text": 41,
    "value": 41
}, {"text": 42, "value": 42}, {"text": 43, "value": 43}, {"text": 44, "value": 44}, {
    "text": 45,
    "value": 45
}, {"text": 46, "value": 46}, {"text": 47, "value": 47}, {"text": 48, "value": 48}, {
    "text": 49,
    "value": 49
}, {"text": 50, "value": 50}, {"text": 51, "value": 51}, {"text": 52, "value": 52}, {
    "text": 53,
    "value": 53
}, {"text": 54, "value": 54}, {"text": 55, "value": 55}, {"text": 56, "value": 56}, {
    "text": 57,
    "value": 57
}, {"text": 58, "value": 58}, {"text": 59, "value": 59}, {"text": 60, "value": 60}, {
    "text": 61,
    "value": 61
}, {"text": 62, "value": 62}, {"text": 63, "value": 63}, {"text": 64, "value": 64}, {
    "text": 65,
    "value": 65
}, {"text": 66, "value": 66}, {"text": 67, "value": 67}, {"text": 68, "value": 68}, {
    "text": 69,
    "value": 69
}, {"text": 70, "value": 70}, {"text": 71, "value": 71}, {"text": 72, "value": 72}, {
    "text": 73,
    "value": 73
}, {"text": 74, "value": 74}, {"text": 75, "value": 75}, {"text": 76, "value": 76}, {
    "text": 77,
    "value": 77
}, {"text": 78, "value": 78}, {"text": 79, "value": 79}, {"text": 80, "value": 80}, {
    "text": 81,
    "value": 81
}, {"text": 82, "value": 82}, {"text": 83, "value": 83}, {"text": 84, "value": 84}, {
    "text": 85,
    "value": 85
}, {"text": 86, "value": 86}, {"text": 87, "value": 87}, {"text": 88, "value": 88}, {
    "text": 89,
    "value": 89
}, {"text": 90, "value": 90}, {"text": 91, "value": 91}, {"text": 92, "value": 92}, {
    "text": 93,
    "value": 93
}, {"text": 94, "value": 94}, {"text": 95, "value": 95}, {"text": 96, "value": 96}, {
    "text": 97,
    "value": 97
}, {"text": 98, "value": 98}, {"text": 99, "value": 99}, {"text": 100, "value": 100}]

function isNotBlack(data) {
    return (data == "" || typeof (data) == "undefined" || data == null || isNullJson(data)) ? false : true;
}

function isNullJson(obj) {
    return isJson(obj) && JSON.stringify(obj) == '{}';
}

function isJson(obj) {
    return typeof (obj) == "object" &&
        Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
}


function isBlack(data) {
    return (data == "" || typeof (data) == "undefined" || data == null || isNullJson(data)) ? true : false;
}

//检查是否是数字
function isNum(num) {
    if (!(/^\d*$/.test(num))) {
        return false;
    }
    return true;
}

function isArray(o) {
    return Object.prototype.toString.call(o) === '[object Array]';
}

function isFunction(func) {
    if (typeof (func) == "function") {
        return true;
    }
    return false;
}

function hex_md5(string) {
    var x = Array();
    var k, AA, BB, CC, DD, a, b, c, d;
    var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
    var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
    var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
    var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
    string = uTF8Encode(string);
    x = convertToWordArray(string);
    a = 0x67452301;
    b = 0xEFCDAB89;
    c = 0x98BADCFE;
    d = 0x10325476;
    for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
        d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
        c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
        b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
        a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
        d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
        c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
        b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
        a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
        d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
        c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
        b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
        a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
        d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
        c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
        b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
        a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
        d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
        c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
        b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
        a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
        d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
        c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
        b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
        a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
        d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
        c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
        b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
        a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
        d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
        c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
        b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
        a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
        d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
        c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
        b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
        a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
        d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
        c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
        b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
        a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
        d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
        c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
        b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
        a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
        d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
        c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
        b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
        a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
        d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
        c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
        b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
        a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
        d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
        c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
        b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
        a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
        d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
        c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
        b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
        a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
        d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
        c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
        b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
        a = addUnsigned(a, AA);
        b = addUnsigned(b, BB);
        c = addUnsigned(c, CC);
        d = addUnsigned(d, DD);
    }
    var tempValue = wordToHex(a) + wordToHex(b) + wordToHex(c) + wordToHex(d);
    return tempValue.toLowerCase();
}


var rotateLeft = function (lValue, iShiftBits) {
    return (lValue << iShiftBits) | (lValue >>> (32 - iShiftBits));
}

var addUnsigned = function (lX, lY) {
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

var F = function (x, y, z) {
    return (x & y) | ((~x) & z);
}

var G = function (x, y, z) {
    return (x & z) | (y & (~z));
}

var H = function (x, y, z) {
    return (x ^ y ^ z);
}

var I = function (x, y, z) {
    return (y ^ (x | (~z)));
}

var FF = function (a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(F(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
};

var GG = function (a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(G(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
};

var HH = function (a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(H(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
};

var II = function (a, b, c, d, x, s, ac) {
    a = addUnsigned(a, addUnsigned(addUnsigned(I(b, c, d), x), ac));
    return addUnsigned(rotateLeft(a, s), b);
};

var convertToWordArray = function (string) {
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

var wordToHex = function (lValue) {
    var WordToHexValue = "", WordToHexValueTemp = "", lByte, lCount;
    for (lCount = 0; lCount <= 3; lCount++) {
        lByte = (lValue >>> (lCount * 8)) & 255;
        WordToHexValueTemp = "0" + lByte.toString(16);
        WordToHexValue = WordToHexValue + WordToHexValueTemp.substr(WordToHexValueTemp.length - 2, 2);
    }
    return WordToHexValue;
};

var uTF8Encode = function (string) {
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


function getCompressImg(img, w, h) {

    var src = img.substring(0, img.lastIndexOf("."));
    var suffix = img.substring(img.lastIndexOf("."));
    var width = api.frameWidth * w;
    //var height = width/h;
    src = src + "_" + width + "_" + 0 + suffix;
    return src;
}


var formatTimeToDate = function (time) {
    return new Date(time).format("yyyy-MM-dd hh:mm");
};
var formatTimeToDay = function (time) {
    return new Date(time).format("yyyy-MM-dd");
};
var formatTimeToDays = function (time) {
    return new Date(time).format("yyyy.MM.dd");
};
var formatTimeToDay_month = function (time) {
    return new Date(time).format("yyyyMM");
};
var formatTimeToDay_months = function (time) {
    return new Date(time).format("yyyy-MM");
};
var formatTimeToDateDian = function (time) {
    return new Date(time).format("yyyy.MM.dd hh:mm");
};
var formatTimeToMonths = function (time) {
    return new Date(time).format("yyyyMM");
};
var formatTimeToDay_day = function (time) {
    return new Date(time).format("yyyyMMdd");
};
var formatTimeToDateDianLY = function (time) {
    return new Date(time).format("yyyy.MM.dd");
};
var formatTimeToDayYang = function (time) {
    return new Date(time).format("yyyyMMdd");
};
var formatTimeToMinute = function (time) {
    return new Date(time).format("hh:mm");
};

var formatTimeToDayDade = function (time) {
    return new Date(time).format("yyyy/MM/dd");
};

Date.prototype.format = function (format) {
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
var sdelay = 0;

function returnTop() {
    window.scrollBy(0, -100);//Only for y vertical-axis
    if (document.body.scrollTop > 0) {
        sdelay = setTimeout('returnTop()', 150);
    }
}

function getDateDiff(dateTimeStamp) {
    var minute = 1000 * 60;
    var hour = minute * 60;
    var day = hour * 24;
    var halfamonth = day * 15;
    var month = day * 30;
    var now = new Date().getTime();
    var diffValue = now - dateTimeStamp;
    if (diffValue < 0) {
        return;
    }
    var monthC = diffValue / month;
    var weekC = diffValue / (7 * day);
    var dayC = diffValue / day;
    var hourC = diffValue / hour;
    var minC = diffValue / minute;
    if (monthC >= 1) {
        result = "" + parseInt(monthC) + "月前";
    } else if (weekC >= 1) {
        result = "" + parseInt(weekC) + "周前";
    } else if (dayC >= 1) {
        result = "" + parseInt(dayC) + "天前";
    } else if (hourC >= 1) {
        result = "" + parseInt(hourC) + "小时前";
    } else if (minC >= 1) {
        result = "" + parseInt(minC) + "分钟前";
    } else
        result = "刚刚";
    return result;
}

function openNewUrl(url, params) {
    var text = "";
    if (isNotBlack(params)) {
        text = "?";
        for (var key in params) {
            text = text + key + "=" + params[key] + "&"
        }
    }
//  if(url.indexOf('login.html') == -1){
    location.href = url + text;
//  }else if(checkUser()){
//     location.href = url+text;
//  }

}


function openSliderInfo(url) {
    var browser = api.require('webBrowser');
    browser.open({
        titleBar: {
            bg: '#39bc30',
            textColor: '#fff'
        },
        url: url
    });
}


function checkLength(num, type) {
    var value = type.value;
    if (value.length > num) {
        toast("温馨提示：密码为6至8位数字和字母的组合");
        type.value = type.value.substring(0, num)
//     	return;
    }
}


//检查手机号码
function checkMobileNum(mobileNum) {
    // if(!(/^[1][3,4,5,7,8][0-9]{9}$/.test(mobileNum))){
    var phoneReg = /^1(3|4|5|7|8)\d{9}$/;
    if (!phoneReg.test(mobileNum)) {
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
    var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
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
