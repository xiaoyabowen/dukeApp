function castOneInit(Vue) {
    var str = dataValue('user/great/common/castOne.html')

    return {
        template: str,
        data: function () {
            return {
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
                window.location.reload()
            }

        }
    }
}
