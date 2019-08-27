function homeAllInit(Vue) {
    var str = dataValue('user/home/comment/homeAll.html')

    apiready = function () {
        winWidth = api.winWidth;
        winHeight = api.winHeight;
        a01_w = (winWidth > winHeight / 2) ? winWidth : winHeight / 2;

        // 斜边长
        bevelLength = Math.sqrt((a01_w * a01_w / 2))
        // width_d=(screen_w-20) *2/5 - 5;
        m_d = (a01_w - 10) * 0.23 - 10;    // 100
    }
    return {
        template: str,
        data: function () {
            return {
                styles:{
                    //存放的是 动态修改的样式
                    width:m_d + "px",// 内容标题总样式
                    height : m_d + "px",
                },
                animate : false,

                jobImg: '',
                jobText: '',

                circleImg: '',
                circleText: '',

                juImg: '',
                juText: '',

                activeImg: '',
                activeText: '',

                active1Img: '',
                active1Img: '',

                active2Img: '',
                active2Img: '',

                listJob: [],
                index: ''
            }
        },
        created: function () {
            this.MenuListQyMenu()
        },
        mounted: function () {


        },

        methods: {
            togle : function() {
                this.MenuListQyMenu()
            },
            MenuListQyMenu: function () {
                var that = this
                ajaxGetWithProgress(MenuListQyMenu, {}, function (data) {
                    console.log("magicalldata", data)
                    var jobList = data.job
                    console.log(jobList)
                    if (data) {
                        if (jobList == null){
                            that.listJob = ''
                        } else{
                            that.listJob = jobList
                        }


                        that.magicComCid1 = data.company[0].c_id
                        that.magicCom1Img = data.company[0].logo_icon
                        that.magicCom1Text = data.company[0].c_name

                        that.magicComCid2 = data.company[1].c_id
                        that.magicCom2Img = data.company[1].logo_icon
                        that.magicCom2Text = data.company[1].c_name


                    }

                })

            },
            jobDetailClick : function (job_id,job_name){
                positionDe(job_id,'1','1',job_name)
            },
            magicCom1Click: function () {  // 公司1
                var that = this;
                localStorage.setItem("magic_id",that.magicComCid1)
                localStorage.setItem("magic_img",that.magicCom1Img)
                localStorage.setItem("magic_name",that.magicCom1Text)

                api.sendEvent({
                    name: 'com1',
                    extra: {
                        key: 'magicCom1',
                        c_id : that.magicComCid1
                    }
                });
            },
            magicCom2Click: function () {  // 公司2
                var that = this;
                localStorage.setItem("magic_id2",that.magicComCid2)
                localStorage.setItem("magic_img2",that.magicCom2Img)
                localStorage.setItem("magic_name2",that.magicCom2Text)
                api.sendEvent({
                    name: 'com2',
                    extra: {
                        key: 'magicCom2',
                        c_id : that.magicComCid2
                    }
                });
            },
        }
    }
}
