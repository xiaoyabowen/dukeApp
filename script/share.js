//分享
//分享方法
function openShare(title,share,shareImg,shareDynamicUrl,did) {
    var dialogBox = api.require('dialogBox');
    dialogBox.actionMenu ({
        rect:{
            h: 150
        },
        tapClose:true,
        items:[
            {
                text: '微信好友',
                icon: 'widget://icon/wx.png'
            },
            {
                text: '微信朋友圈',
                icon: 'widget://icon/wxline.png'
            },
            {
                text: 'QQ好友',
                icon: 'widget://icon/QQ.png'
            },
            {
                text: 'QQ空间',
                icon: 'widget://icon/qzone.png'
            },
            {
                text: '新浪微博',
                icon: 'widget://icon/wb.png'
            }
        ],
        styles:{
            bg:'#FFF',
            column: 5,
            itemText: {
                color: '#000',
                size: 12,
                marginT:8
            },
            itemIcon:{
                size:40
            }

        }
    }, function(ret){
        if(ret.index == 0){
            var wx = api.require('wx');

            wx.shareWebpage({
                apiKey: '',
                scene: 'session',// 单聊
                title: title,
                description:shareTitle,
                thumb:saveImgInPath(shareImg),
                contentUrl: shareDynamicUrl+ did
            }, function(ret, err) {
                if (ret.status) {
                    toast('分享成功');
                } else {
                    if(err.code == 2){
                        toast('分享失败')
                    }
                }
            });
        }else if(ret.index == 1){
            var wx = api.require('wx');
            wx.shareWebpage({
                apiKey: '',
                scene: 'timeline',// 朋友圈
                title: title,
                description: shareTitle,
                thumb: saveImgInPath(shareImg),
                contentUrl: shareDynamicUrl + did
            }, function(ret, err) {
                if (ret.status) {
                    toast('分享成功');
                } else {
                    if(err.code == 2){
                        toast('分享失败')
                    }
                }
            });
        }else if(ret.index == 2){
            var qq = api.require('qq');
            qq.shareNews({
                url: shareDynamicUrl+did,
                title:title,
                description: shareTitle,
                imgUrl: saveImgInPath(shareImg),  //不能带汉字
                type:'QFriend'
            },function(ret,err){
                if (ret.status){
                    shareSuccess()
                } else {
                    api.alert({msg: JSON.stringify(err)});
                }
            });
        }else if(ret.index == 3){
            var qq = api.require('qq');
            qq.shareNews({
                url: shareDynamicUrl+did,
                title: title,
                description:shareTitle,
                imgUrl: saveImgInPath(shareImg),
                type:'QZone'
            },function(ret,err){
                if (ret.status){
                    shareSuccess()

                } else {
                    api.alert({msg: JSON.stringify(err)});
                }
            });
        }else if(ret.index == 4){ //微博
            toast('微博登录正在开发中…')
        }
    });
}
function shareSuccess() {
    var uid = getUserInfo().id;
    ajaxFabulous(shareSuccessUrl,{uid:uid},function (ret,err) {
        if(ret && ret.success){
            var dialogBox = api.require('dialogBox');
            dialogBox.close({
                dialogName: 'actionMenu'
            });
            toast('分享成功')

        }
    })
}
function saveImgInPath (url) {
    var imgPath = 'widget://icon/sax.png';
    api.download({
        url: url,
        savePath: 'fs://share.png',
        report: true,
        cache: true,
        allowResume: true
    }, function(ret, err) {
        al(ret)
        if (ret.state == 1) {
            imgPath = ret.savePath;
            return imgPath;
            //下载成功
        } else {
            return imgPath;
        }
    });
}
