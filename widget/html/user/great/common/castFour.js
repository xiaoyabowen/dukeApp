function castFourInit(Vue) {
    var str = dataValue('user/great/common/castFour.html')
    apiready = function () {

        winWidth = api.winWidth;
        winHeight = api.winHeight;
        if (winWidth > winHeight / 2){
            m_d = "1.5"
        }else {
            m_d = "1.8"
        }
    }
    return {
        template: str,
        data: function () {
            return {
                styles: {
                    //存放的是 动态修改的样式
                    width: m_d + "rem",// 内容标题总样式
                    height: m_d + "rem",
                },

                imgs: [
                    {
                        imgSrc: '../../../image/bigWeigh/nongBan1.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/nongBan2.png'
                    },
                ]
            }
        },
        created: function () {

        },
        mounted: function () {
            //获得slider插件对象
            var swiper = new Swiper('.swiper-container', {
                pagination: {
                    el: '.swiper-pagination',
                },
                autoplay: true,
            });
        },
        methods: {
            returnBtnClick : function () {
                api.sendEvent({
                    name: 'returnBtnImg',
                    extra: {
                        key: 'castOne',
                    }
                });
            },
            Peach : function (){
                openNewWindow("index", "./farmProduce/index.html", {
                    url: 'index'
                });
            },
            togle : function () {
                toast("切换内容")
                api.sendEvent({
                    name: 'reloadFour',
                    extra: {
                        key: 'castFour',
                    }
                });
            }
        }
    }
}
