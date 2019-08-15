function castOneInit(Vue) {
    var str = dataValue('user/great/common/castOne.html')
    console.log(str)

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
                        imgSrc: '../../../image/bigWeigh/mianBan2.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/fangBan3.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/nongBan1.png'
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
            xuanboxCast = document.getElementsByClassName("xuanboxCast")
            daoboxCast = document.getElementsByClassName("daoboxCast")


        },
        methods: {
            castOneClick : function () {
                var that = this
                api.sendEvent({
                    name: 'one',
                    extra: {
                        key: 'castOneOne',
                    }
                });
            },
            castTwoClick : function () {
                var that = this
                api.sendEvent({
                    name: 'onCastOne',
                    extra: {
                        key: 'castTwo',
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
