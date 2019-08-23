
function magicCom1Init(Vue) {
    var str = dataValue('user/home/comment/magicCom1.html')

    var bus = dataValue('user/home/comment/bus.js')

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
                timeIndex : '',
                magicCom2Img: '',
                magicCom1Img: '',
                magicCom2Text: '',
                magicCom1Text: '',
                magicComCid1 : '',
                magicComCid2 : '',

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

            that.magicComCid1 = store.state.obj.c_id
            that.magicCom1Text = store.state.obj.c_name
            that.magicCom1Img = store.state.obj.logo_icon
        },

        methods: {
            togle : function() {
                /*var that = this
                that.magicComCid1 = store.state.obj.c_id
                that.magicCom1Text = store.state.obj.c_name
                that.magicCom1Img = store.state.obj.logo_icon*/
                var isBlck=document.querySelector('.bgBlack')
                if(isBlck.getAttribute("class")=='isDisplay'){
                    document.querySelector('.bgBlack').classList.remove('isDisplay');
                    console.log(document.querySelector('.bgBlack'))
                }else {
                    var that = this;
                    that.active = 'magicCom1';
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
                /*api.addEventListener({
                    name: 'comCom1',
                }, function(ret, err) {

                    console.log("comCom1",ret)
                    that.magicComCid1 = ret.value.key.c_id
                    that.magicCom1Text = ret.value.key.c_name
                    that.magicCom1Img = ret.value.key.logo_icon


                });*/
                /*that.magicComCid1 = localStorage.getItem("magic_id")
                that.magicCom1Text = localStorage.getItem("magic_name")
                that.magicCom1Img = localStorage.getItem("magic_img")
*/
                that.magicComCid1 = store.state.obj.c_id
                that.magicCom1Text = store.state.obj.c_name
                that.magicCom1Img = store.state.obj.logo_icon


                console.log("store.state.obj.c_name1",store.state.obj.c_name)

                ajaxGetWithProgress(OneCompanyFourJobMenu,{cid :that.magicComCid1},function (data) {
                    console.log("com1",data)

                    var jobList = data.job
                    if (data) {
                        if (jobList == null){
                            that.listJob = ''
                        } else{
                            that.listJob = jobList
                        }

                        that.magicCom2Img =data.company[0].logo_icon
                        that.magicCom2Text = data.company[0].c_name
                        that.magicComCid2 = data.company[0].c_id



                    }
                })
            },
            jobDetailClick : function (job_id,job_name,index){
                console.log("job_id",job_id)
                console.log("job_name",job_name)
                this.timeIndex = index;
                api.sendEvent({
                    name: 'jobAll',
                    extra: {
                        key: {
                            job_id : job_id,
                            job_name : job_name,
                        },
                    }
                });


            },
            magicCom1Click: function () {  // 公司1
                var that = this;
                that.OneCompanyFourJobMenu()
            },
            magicCom2Click: function () {  // 公司2
                var that = this;

                /*store.state.obj.c_id = that.magicComCid2
                store.state.obj.c_name = that.magicCom2Text
                store.state.obj.logo_icon = that.magicCom2Img*/

                var obj = {
                    magicComCid1: that.magicComCid2,
                    magicCom1Text: that.magicCom2Text,
                    magicCom1Img: that.magicCom2Img,
                    magicCom: 'magicCom2',
                }
                store.commit('upData', obj);

                api.sendEvent({
                    name: 'comCom2',
                    extra: {
                        key: {
                            /*c_id: that.magicComCid2,
                            c_name: that.magicCom2Text,
                            logo_icon: that.magicCom2Img,*/
                            magicCom2: 'magicCom2'
                        },

                    }
                });
                that.OneCompanyFourJobMenu()
            },
        }
    }
}
