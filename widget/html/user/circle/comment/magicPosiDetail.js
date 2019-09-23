
function magicPosiDetailInit(Vue) {
    var str = dataValue('user/circle/comment/magicPosiDetail.html')
    var bus = dataValue('user/home/comment/bus.js')
    var magicBGheight
    apiready = function () {

        winWidth = api.winWidth;
        winHeight = api.winHeight;
        // a01_w = (winWidth > winHeight / 2) ? winWidth : winHeight / 2;
        a01_w = winWidth;

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

                company_c_id : '',
                job_name : '',

                timeIndex:'',
                job_id: '',
                c_id: '',
                activeAni:true,
                listJob: [],
                index: ''
            }
        },
        created: function() {
            var that = this
            this.JobThreeOneCompanyMueu()


            // this.togle()
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
                    ////console.log(document.querySelector('.bgBlack'))
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
                var that = this;
                ajaxGetWithProgress(CircleOneType,{type :store.state.obj.magicCom1Text},function (data) {

                    console.log("CircleOneType",data);
                    var jobList = data.Circlelist
                    if (data) {
                        if (jobList == null || jobList == '') {
                            that.listJob = ''
                        } else {
                            that.listJob = jobList
                        }
                        that.magicCom1Text = data.CircleType.type_name
                    }
                    /*var jobList = data.job
                    if (data) {
                        if (jobList == null){
                            that.listJob = ''
                        } else{
                            that.listJob = jobList
                        }

                        that.magicCom1Img =data.company[0].logo_icon
                        that.magicCom1Text = data.company[0].c_name
                        that.magicComCid1 = data.company[0].c_id

                    }*/
                })
            },

            JobThreeOneCompanyMueu : function () {
                var that = this
                var obj ={
                    type : store.state.obj.magicCom1Text,
                    circle_id : store.state.obj.cirId,
                    title : store.state.obj.title,
                    count : "3",
                }

                console.log("CircleMenuObj",obj)
                ajaxGetWithProgress(CircleMenu,obj,function (data) {
                    console.log("CircleMenu",data)
                    var jobList = data.list
                    if (data) {
                        if (jobList == null || jobList == '') {
                            that.listJob = ''
                        } else {
                            that.listJob = jobList
                        }

                        that.magicComCid1 = data.CircleMenu[0].id

                        that.magicCom1Text = data.CircleMenu[0].type_name
                        that.magicComCid2 = data.CircleMenu[1].id

                        that.magicCom2Text = data.CircleMenu[1].type_name


                    }

                })
            },
            jobDetailClick: function (circle_id,suggest,title,index) {
                var that = this


                this.timeIndex = index;
                store.state.obj.magicCom1Text = suggest;
                store.state.obj.cirId = circle_id;
                store.state.obj.title = title;


                console.log("cirId",circle_id)
                //console.log("indexindex",this.timeIndex)
                api.sendEvent({
                    name: 'circleAll',
                    extra: {
                        key: {
                            cirId: circle_id,
                            cir_suggest: suggest,
                            magicCom: 'magicPosiDetail',
                        },
                    }
                });

                that.JobThreeOneCompanyMueu()

            },
            magicCom1Click: function () {  // 公司1
                var that = this;

                //console.log("that.magicComCid1",that.magicComCid1)


                /*store.state.obj.c_id = that.magicComCid1
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
