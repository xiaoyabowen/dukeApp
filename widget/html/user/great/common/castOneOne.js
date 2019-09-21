function castOneOneInit(Vue) {
    var str = dataValue('user/great/common/castOneOne.html')
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
                        imgSrc: '../../../image/bigWeigh/lvyouBan1.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/lvyouBan2.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/lvyouBan3.png'
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
            tourClick : function (ouId) {
                // openNewWindow("index", "../great/ouou/index1.html")
                openNewWindow("index", "../great/ouou/index1.html",{
                    ouId : ouId
                });
            },
            castSixClick : function () {    // 农产品     第六个
                var that = this
                api.sendEvent({
                    name: 'six',
                    extra: {
                        key: 'castThree',
                    }
                });
            },
            togle : function () {
                toast("切换内容")
                window.location.reload()
            },
            castFourClick : function () {
                toast("暂无商品")
            },
            castFiveClick : function () {
                toast("暂无商品")
            },

            castSevenClick : function () {
                toast("暂无商品")
            },
            castEightClick : function () {
                toast("暂无商品")
            },
        }
    }
}
