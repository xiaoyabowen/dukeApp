
function magicCom2Init(Vue) {
    var str = dataValue('user/home/comment/magicCom2.html')
    // var bus = dataValue('user/home/comment/bus.js')
    var magicBGheight
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
                magicComCid1 : '',
                magicComCid2 : '',
                timeIndex:'',
                job_id: '',
                c_id: '',
                activeAni:true,
                listJob: [],
                index: ''
            }
        },
        created: function() {
            this.OneCompanyFourJobMenu()
            this.togle()
        },
        mounted :function (){
            var that = this
            magicBox = document.querySelector(".magicBox")
            magicBtn = document.getElementsByClassName("magicBtn")
            magicSubBox = document.getElementsByClassName("magicSubBox")
            iconImg = document.getElementsByClassName("iconImg")
            magicBox.style.width = bevelLength * 2 + "px"
            magicBox.style.height = bevelLength + "px"
            var rightYi = bevelLength
            magicBox.style.right = '-' + rightYi + "px"

            magicBGheight = document.querySelector(".magicBGheight")
            magicBGheight.style.height = m_d + "px"

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
                var isBlck=document.querySelector('.bgBlack')
                if(isBlck.getAttribute("class")=='isDisplay'){
                    document.querySelector('.bgBlack').classList.remove('isDisplay');
                    console.log(document.querySelector('.bgBlack'))
                }else {
                    var that = this;
                    that.active = 'magicCom2';
                    document.querySelector('.bgBlack').classList.remove('isDisplay');
                    this.OneCompanyFourJobMenu()
                }
                this.activeAni = true
                setTimeout(function () {
                    that.activeAni = false;
                }, 1500)
            },
            OneCompanyFourJobMenu : function () {
                var that = this

                that.magicComCid2 = store.state.obj.c_id
                that.magicCom2Text = store.state.obj.c_name
                that.magicCom2Img = store.state.obj.logo_icon

                ajaxGetWithProgress(OneCompanyFourJobMenu,{cid :that.magicComCid2},function (data) {
                    console.log("com2",data)
                    var jobList = data.job
                    if (data) {
                        if (jobList == null){
                            that.listJob = ''
                        } else{
                            that.listJob = jobList
                        }
                        that.magicComCid1 = data.company[0].c_id
                        if (data.company[0].logo_icon == ''){
                            that.magicCom1Img = 'http://duke-app.oss-cn-beijing.aliyuncs.com/trend/yun/5n4ehv1hx5dd1jtu.png'
                        } else {
                            that.magicCom1Img = data.company[0].logo_icon
                        }
                    }
                })
            },
            jobDetailClick: function (job_id, job_name,index,company_c_id,job_type) {
                console.log("job_id",job_id)
                console.log("job_name",job_name)
                this.timeIndex = index;


                store.state.obj.company_c_id = company_c_id
                store.state.obj.job_name = job_name
                store.state.obj.job_type = job_type
                store.state.obj.job_id = job_id

                api.sendEvent({
                    name: 'jobAll',
                    extra: {
                        key: {
                            job_id : job_id,
                            job_name : job_name,
                            magicCom: 'magicPosiDetail',
                        },
                    }
                });

            },
            magicCom1Click: function () {  // 公司1
                var that = this;

                console.log("that.magicComCid1",that.magicComCid1)

/*
                store.state.obj.c_id = that.magicComCid1
                store.state.obj.c_name = that.magicCom1Text
                store.state.obj.logo_icon = that.magicCom1Img*/

                var obj = {
                    magicComCid1: that.magicComCid1,
                    magicCom1Text: that.magicCom1Text,
                    magicCom1Img: that.magicCom1Img,
                    magicCom: 'magicCom1',
                }

                store.commit('upData', obj);

                api.sendEvent({
                    name: 'comCom1',
                    extra: {
                        key: {
                            /*c_id: that.magicComCid1,
                            c_name: that.magicCom1Text,
                            logo_icon: that.magicCom1Img,*/
                            magicCom1: 'magicCom2'
                        },
                    }
                });
                that.OneCompanyFourJobMenu()
            },
            magicCom2Click: function () {  // 公司2
                var that = this;
                that.togle()

            },
        }
    }
}
