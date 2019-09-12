function magicPositionInit(Vue) {
    var str = dataValue('company/home/common/magicPosition.html')

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
                myPositionText : '我的职位',
                activeAni:true,
                listJob: [],
                index: ''
            }
        },
        created: function () {
            this.magicCom1Text = store.state.obj.job_name
            this.queryPersonListMenu()
        },
        mounted: function () {

            magicBox = document.querySelector(".magicBox")
            bgBlack = document.querySelector(".bgBlack")
            magicBtn = document.getElementsByClassName("magicBtn")
            magicSubBox = document.getElementsByClassName("magicSubBox")
            iconImg = document.getElementsByClassName("iconImg")
            magicBox.style.width = bevelLength * 2 + "px"
            magicBox.style.height = bevelLength + "px"
            var rightYi = bevelLength
            magicBox.style.right = '-' + rightYi + "px"
            bgBlack.style.width = winWidth + "px"
            bgBlack.style.height = winHeight + "px"
            // 里面小盒子宽度
            for (var i = 0; i < magicBtn.length; i++) {
                magicBtn[i].style.width = m_d + "px"
                magicBtn[i].style.height = m_d + "px"
            }
            // 里面小盒子宽度
            for (var i = 0; i < magicSubBox.length; i++) {
                magicSubBox[i].style.width = m_d + "px"
                magicSubBox[i].style.height = m_d + "px"
            }
            // 图片宽度
            for (var i = 0; i < iconImg.length; i++) {
                iconImg[i].style.width = m_d / 2 + "px"
                iconImg[i].style.height = m_d / 2 + "px"
            }
        },

        methods: {

            queryPersonListMenu: function () {
                var that = this
                console.log("store.state.obj.job_name",store.state.obj.job_name)
                ajaxGetWithProgress(filterScreen, {job_type:store.state.obj.job_type}, function (data) {
                    console.log("queryPersonListMenu", data)
                    var jobList;
                    if (data) {
                        jobList = data.list
                        that.listJob = jobList
                        console.log("that.listJob",that.listJob)
                        if (jobList == null) {
                            that.listJob = ''
                        } else if (jobList.length == 5) {
                            document.querySelector(".magicPosiAgin").classList.remove("isDisplay")
                            // 截取 前 4个
                            var jobList4 = jobList.slice(0, -1)
                            // 最后一个
                            var jobList1 = jobList.slice(jobList.length - 1)
                            that.listJob = jobList4

                            that.personId = jobList1[0].person_id
                            that.personText = jobList1[0].p_name

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
                    this.MenuListQyMenu();
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
                    name: 'jobPosiAll',
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
                that.queryPersonListMenu()
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
