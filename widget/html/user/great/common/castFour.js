function castFourInit(Vue) {
    var str = dataValue('user/great/common/castFour.html')

    return {
        template: str,
        data: function () {
            return {
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
