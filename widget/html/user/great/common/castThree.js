function castThreeInit(Vue) {
    var str = dataValue('user/great/common/castThree.html')
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
                hourseList : [],
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
            this.commodityListCommodityProFile()
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
            commodityListCommodityProFile : function () {
                var that = this
                ajaxGetWithProgress(commodityListCommodityProFile,{tid:3},function (data) {
                    //console.log("commodityListCommodityProFile",data)
                    var hourseList = data.commodityList
                    that.hourseList = hourseList
                    /*// 最后一个
                    var jobList1 = jobList.slice(jobList.length - 1)
                    //console.log("34",jobList1)
                    that.listJob = jobList4
                    //console.log("112111",that.listJob)*/
                })

            },

            returnBtnClick : function () {
                api.sendEvent({
                    name: 'returnBtnImg',
                    extra: {
                        key: 'castOne',
                    }
                });
            },
            hourser1 : function (id){
                openNewWindow("index", "../great/hourse/index.html",{
                    hourseId : id
                })
            },
            togle : function () {
                toast("切换内容")
                window.location.reload()
            }
        }
    }
}
