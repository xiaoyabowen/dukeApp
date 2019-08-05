function magicAllInit(Vue) {
    var str = dataValue('user/home/comment/magicAll.html')

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

                magicCom2Img: '',
                magicCom1Img: '',
                magicCom2Text: '',
                magicCom1Text: '',
                magicComCid1: '',
                magicComCid2: '',


                job_id: '',
                listJob1Img: '',
                listJob1Text: '',
                listJob2Img: '',
                listJob2Text: '',
                listJob3Img: '',
                listJob3Text: '',
                listJob4Img: '',
                listJob4Text: '',

                listJob: [],
                index: ''
            }
        },
        created: function () {
            this.MenuListQyMenu()
        },
        mounted: function () {



            this.$nextTick(function () {
                console.log("111",this.$refs.magicBG)
                console.log("333",this.$refs)
            })
            magicBox = document.querySelector(".magicBox")
            magicBtn = document.getElementsByClassName("magicBtn")
            magicSubBox = document.getElementsByClassName("magicSubBox")
            iconImg = document.getElementsByClassName("iconImg")
            magicBox.style.width = bevelLength * 2 + "px"
            magicBox.style.height = bevelLength + "px"
            var rightYi = bevelLength
            magicBox.style.right = '-' + rightYi + "px"

            // 里面小盒子宽度
            for (var i =0;i<magicBtn.length ; i++){
                magicBtn[i].style.width = m_d + "px"
                magicBtn[i].style.height = m_d + "px"
            }
            // 里面小盒子宽度
            for (var i =0;i<magicSubBox.length ; i++){
                magicSubBox[i].style.width = m_d + "px"
                magicSubBox[i].style.height = m_d + "px"
            }
            // 图片宽度
            for (var i =0;i<iconImg.length ; i++){
                iconImg[i].style.width = m_d/2 + "px"
                iconImg[i].style.height = m_d/2 + "px"
            }

        },

        methods: {
            togle : function() {
                this.MenuListQyMenu()
            },
            MenuListQyMenu: function () {
                var that = this
                ajaxGetWithProgress(MenuListQyMenu, {}, function (data) {
                    console.log("magicall", data)
                    var jobList = data.job
                    if (data) {
                        that.listJob = jobList
                        that.listJob1Img = imgSrcFun(data.job[0].icon)
                        that.listJob1Text = data.job[0].job_name
                        that.listJob2Img = imgSrcFun(data.job[1].icon)
                        that.listJob2Text = data.job[1].job_name
                        that.listJob3Img = imgSrcFun(data.job[2].icon)
                        that.listJob3Text = data.job[2].job_name
                        that.listJob4Img = imgSrcFun(data.job[3].icon)
                        that.listJob4Text = data.job[3].job_name




                        that.magicComCid1 = data.company[0].c_id
                        that.magicCom1Img = data.company[0].logo_icon
                        that.magicCom1Text = data.company[0].c_name

                        that.magicComCid2 = data.company[1].c_id
                        that.magicCom2Img = data.company[1].logo_icon
                        that.magicCom2Text = data.company[1].c_name


                    }

                })

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
