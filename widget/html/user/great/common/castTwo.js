function castTwoInit(Vue) {
    var str = dataValue('user/great/common/castTwo.html')
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
                        imgSrc: '../../../image/bigWeigh/mianBan1.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/mianBan2.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/mianBan3.png'
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
            castFangClick : function () {    // 希腊房产
                var that = this
                api.sendEvent({
                    name: 'fang',
                    extra: {
                        key: 'castThree',
                    }
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
            castOneClick : function () {
                var that = this
                api.sendEvent({
                    name: 'one',
                    extra: {
                        key: 'castOneOne',
                    }
                });
            },
            facilClick : function () {
                openNewWindow("index", "facial/index.html");
            },
            togle : function () {
                toast("切换内容")
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
