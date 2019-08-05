
function magicCom2Init(Vue) {
    var str = dataValue('user/home/comment/magicCom2.html')

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
        data: function() {
            return {
                animate : false,

                magicCom2Img: '',
                magicCom1Img: '',
                magicCom2Text: '',
                magicCom1Text: '',


                job_id: '',
                c_id: '',
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
        created: function() {
            this.OneCompanyFourJobMenu()
        },
        mounted :function (){
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
                this.OneCompanyFourJobMenu()
            },
            OneCompanyFourJobMenu : function () {
                var that = this

                ajaxGetWithProgress(OneCompanyFourJobMenu,{cid :localStorage.getItem("magic_id2")},function (data) {
                    console.log("com2",data)
                    var jobList = data.job
                    if (data) {
                         that.listJob = jobList

                        that.listJob1Img = imgSrcFun(data.job[0].icon)
                        that.listJob1Text = data.job[0].job_name
                        that.listJob2Img = imgSrcFun(data.job[1].icon)
                        that.listJob2Text = data.job[1].job_name
                       /* that.listJob3Img = imgSrcFun(data.job[2].icon)
                        that.listJob3Text = data.job[2].job_name
                        that.listJob4Img = imgSrcFun(data.job[3].icon)
                        that.listJob4Text = data.job[3].job_name*/

                        that.magicCom2Img =localStorage.getItem("magic_img2")
                        that.magicCom1Img =data.company[0].logo_icon
                        that.magicCom2Text = localStorage.getItem("magic_name2")
                        that.magicCom1Text = data.company[0].c_name

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
