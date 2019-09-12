function magicComAllInit(Vue) {
    var str = dataValue('company/home/common/magicComAll.html')

    apiready = function() {
        winWidth = api.winWidth;
        winHeight = api.winHeight;
        // a01_w = (winWidth > winHeight / 2) ? winWidth : winHeight / 2;
        a01_w = (winWidth > winHeight / 2) ? winWidth / 2 : winHeight / 2;


        // 斜边长
        bevelLength = Math.sqrt((a01_w * a01_w / 2))
            // width_d=(screen_w-20) *2/5 - 5;
        m_d = (a01_w - 10) * 0.23 - 10; // 100;
        magicBGheight = document.querySelector(".magicBGheight")
        magicBGheight.style.height = m_d + "px"

    }

    var rankObj = {};



    return {
        template: str,
        data: function() {
            return {
                styles: {
                    //存放的是 动态修改的样式
                    width: m_d + "px", // 内容标题总样式
                    height: m_d + "px",
                },
                animate: false,
                timeIndex: '',
                magicCom2Img: '',
                magicCom1Img: '',
                magicCom2Text: '',
                magicCom1Text: '',
                magicComCid1: '',
                magicComCid2: '',
                myPositionImg: '../../../image/bigWeigh/jobHome.png',
                myPositionText: '我的职位',
                activeAni: true,
                listJob: [],
                index: ''
            }
        },
        created: function() {
            this.SmartMenuMenu()
            this.togle()
        },
        mounted: function() {
            var that = this
                // that.myPositionText = store.state.obj.job_name
            that.magicComCid2 = store.state.obj.job_id
            //console.log("myPositionText", that.myPositionText)
            //console.log("myPositionTextmagicComCid2", that.magicComCid2)

            // start
            api.addEventListener({
                name: 'filteRank',
            }, function(ret, err) {
                rankObj = ret.value.key;
                // //console.log(ret.value.key;,'19999999999999');
                //console.log(rankObj,'2444444444444')
                /*localStorage.setItem("magic_id2",ret.value.key.c_id)
                localStorage.setItem("magic_img2",ret.value.key.logo_icon)
                localStorage.setItem("magic_name2",ret.value.key.c_name)*/
                // //console.log(str,'2999999')
                that.SmartMenuMenu(rankObj);

            });
            // end
        },
        methods: {
            SmartMenuMenu: function(obj) {
                var that = this
                    //leilei
                var rankObj = {};
                if(obj){
                  rankObj = obj;
                }
                store.dispatch('loadMagicData', rankObj).then(() => {
                        var jobList = store.state.newMagicList;
                        //console.log(jobList, 'magic');
                        if (jobList == null) {
                            that.listJob = ''
                        } else if (jobList.length == 5) {
                            // 截取 前 4个
                            var jobList4 = jobList.slice(0, -1)
                                // 最后一个
                            var jobList1 = jobList.slice(jobList.length - 1)
                            //console.log("jobList.jobList1", jobList1)
                            that.listJob = jobList4
                            that.magicComCid1 = jobList1[0].person_id
                            that.magicCom1Text = jobList1[0].p_name
                                // that.togle();
                        } else {
                            that.listJob = jobList;
                        }
                    })
                    //leilei

                // ajaxGetWithProgress(filterScreen, {}, function (data) {
                //     //console.log("magicall", data)
                //     var jobList = data.list
                //     //console.log("listJobjobList",jobList)
                //
                //     // //console.log("jobList.length",jobList.length)
                //     if (data) {
                //         if (jobList == null) {
                //             that.listJob = ''
                //         } else if (jobList.length == 5) {
                //             // 截取 前 4个
                //             var jobList4 = jobList.slice(0, -1)
                //             // 最后一个
                //             var jobList1 = jobList.slice(jobList.length - 1)
                //             //console.log("jobList.jobList1",jobList1)
                //             that.listJob = jobList4
                //
                //             that.magicComCid1 = jobList1[0].person_id
                //             that.magicCom1Text = jobList1[0].p_name
                //
                //         }  else {
                //             that.listJob = jobList
                //         }
                //
                //
                //     }
                //
                // })

            },
            togle: function() {
                // this.active = true;
                var isBlck = document.querySelector('.bgBlack')
                if (isBlck.getAttribute("class") == 'isDisplay') {
                    document.querySelector('.bgBlack').classList.remove('isDisplay');
                    //console.log(document.querySelector('.bgBlack'))
                } else {
                    var that = this;
                    that.active = 'magicAll';
                    document.querySelector('.bgBlack').classList.remove('isDisplay');
                    this.SmartMenuMenu();
                }
                this.activeAni = true
                setTimeout(function() {
                    that.activeAni = false;
                }, 1500)
            },
            jobDetailClick: function(job_id, job_name, index) {
                //console.log("job_idjob_id", job_id)
                //console.log("job_namejob_name", job_name)
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
            magicCom1Click: function() { // 公司1
                var that = this;

                api.sendEvent({
                    name: 'jobAllName',
                    extra: {
                        key: {

                            job_id: that.magicComCid1

                        },
                    }
                });
            },
            magicCom2Click: function() { // 公司2
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
