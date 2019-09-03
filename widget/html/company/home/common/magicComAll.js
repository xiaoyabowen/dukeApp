function magicComAllInit(Vue) {
    var str = dataValue('company/home/common/magicComAll.html')
    /*var bus = Vue.use(Vuex);

    console.log("bus",bus)
    var obj = {
        magicCom2: 'magicCom2'
    }
    bus.$emit("com1Value",obj)
    console.log("bus",bus.$emit("com1Value",'1'))*/
    // console.log("123",$store)



    apiready = function () {
        winWidth = api.winWidth;
        winHeight = api.winHeight;
        // a01_w = (winWidth > winHeight / 2) ? winWidth : winHeight / 2;
        a01_w = (winWidth > winHeight / 2) ? winWidth/2 : winHeight / 2;


        // 斜边长
        bevelLength = Math.sqrt((a01_w * a01_w / 2))
        // width_d=(screen_w-20) *2/5 - 5;
        m_d = (a01_w - 10) * 0.23 - 10;    // 100
    }
    return {
        template: str,
        data: function () {
            return {
                styles: {
                    //存放的是 动态修改的样式
                    width: m_d + "px",// 内容标题总样式
                    height: m_d + "px",
                },
                animate: false,
                timeIndex : '',
                magicCom2Img: '',
                magicCom1Img: '',
                magicCom2Text: '',
                magicCom1Text: '',
                magicComCid1: '',
                magicComCid2: '',
                myPositionImg: '../../../image/bigWeigh/jobHome.png',
                myPositionText : '我的职位',
                activeAni:true,
                listJob: [],
                index: ''
            }
        },
        created: function () {
            this.SmartMenuMenu()
            this.togle()
        },
        mounted: function () {
            var that = this
            // that.myPositionText = store.state.obj.job_name
            that.magicComCid2 = store.state.obj.job_id
            console.log("myPositionText",that.myPositionText)
            console.log("myPositionTextmagicComCid2",that.magicComCid2)
        },

        methods: {
            SmartMenuMenu: function () {
                var that = this
                ajaxGetWithProgress(SmartMenuMenu, {}, function (data) {
                    console.log("magicall", data)
                    var jobList = data.PersonList
                    console.log("listJobjobList",jobList)

                    // console.log("jobList.length",jobList.length)
                    if (data) {
                        if (jobList == null) {
                            that.listJob = ''
                        } else if (jobList.length == 5) {
                            // 截取 前 4个
                            var jobList4 = jobList.slice(0, -1)
                            // 最后一个
                            var jobList1 = jobList.slice(jobList.length - 1)
                            console.log("jobList.jobList1",jobList1)
                            that.listJob = jobList4

                            that.magicComCid1 = jobList1[0].person_id
                            that.magicCom1Text = jobList1[0].p_name

                        }  else {
                            that.listJob = jobList
                        }


                    }

                })

            },
            togle: function () {
                // this.active = true;
                var isBlck = document.querySelector('.bgBlack')
                if (isBlck.getAttribute("class") == 'isDisplay') {
                    document.querySelector('.bgBlack').classList.remove('isDisplay');
                    console.log(document.querySelector('.bgBlack'))
                } else {
                    var that = this;
                    that.active = 'magicAll';
                    document.querySelector('.bgBlack').classList.remove('isDisplay');
                    this.SmartMenuMenu();
                }
                this.activeAni = true
                setTimeout(function () {
                    that.activeAni = false;
                }, 1500)
            },
            jobDetailClick: function (job_id, job_name,index) {
                console.log("job_idjob_id",job_id)
                console.log("job_namejob_name",job_name)
                this.timeIndex = index;
                api.sendEvent({

                    name: 'jobAllName',
                    extra: {
                        key: {
                            job_id: job_id,
                            job_name: job_name,
                        },
                    }
                });

            },
            magicCom1Click: function () {  // 公司1
                var that = this;
                /*store.state.obj.c_id = that.magicComCid1
                store.state.obj.c_name = that.magicCom1Text
                store.state.obj.logo_icon = that.magicCom1Img
                store.state.obj.magicCom =  'magicCom1'*/

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
                            magicCom1: 'magicCom1'
                        },
                    }
                });
            },
            magicCom2Click: function () {  // 公司2
                var that = this;
                api.sendEvent({
                    name: 'magicComPosiAll',
                    extra: {
                        key: {

                            magicComPosiAll: 'magicComPosiAll'
                        },

                    }
                });
            },
        }
    }
}
