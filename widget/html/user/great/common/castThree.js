function castThreeInit(Vue) {
    var str = dataValue('user/great/common/castThree.html')

    return {
        template: str,
        data: function () {
            return {
                imgs: [
                    {
                        imgSrc: '../../../image/bigWeigh/fangBan1.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/fangBan2.png'
                    },
                    {
                        imgSrc: '../../../image/bigWeigh/fangBan3.png'
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
            togle : function () {
                toast("切换内容")
                window.location.reload()
            }
        }
    }
}
