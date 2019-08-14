function magicComPosiAllInit(Vue) {
    var str = dataValue('company/home/common/magicComPosiAll.html')
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
                styles: {
                    //存放的是 动态修改的样式
                    width: m_d + "px",// 内容标题总样式
                    height: m_d + "px",
                },
                animate: false,

                personImg: '',
                personId: '',
                personText: '',
                myPositionImg: '../../../image/bigWeigh/jobHome.png',
                myPositionText : '我发布的职位',
                listJob:[

                ],
                index: ''
            }
        },
        created: function () {
            this.queryPersonListMenu()
        },
        mounted: function () {

            /*api.addEventListener({
                name: 'jobPosiAll',
            }, function(ret, err) {
                console.log("ret",ret);
                that.active = ret.value.key.magicComPosiAll;
                that.myPositionText = ret.value.key.job_name;

            });
*/

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
            // 我发布的职位
            myPosition : function(){
                var that = this
                api.sendEvent({
                    name: 'positionAll',
                    extra: {
                        key: {
                            magicPosition: 'magicPosition'
                        },
                    }
                });
            },
            queryPersonListMenu: function () {
                var that = this
                // store.state.obj.job_id = job_id
                that.myPositionText = store.state.obj.job_name
                // store.state.obj.job_icon = job_icon
                ajaxGetWithProgress(queryPersonListMenu, {job_name:that.myPositionText}, function (data) {
                    console.log("queryPersonListMenu", data)
                    var jobList = data.PersonList
                    console.log("jobList",jobList)
                    that.listJob = jobList
                    console.log("that.listJob",that.listJob)
                    // console.log(jobList.slice(jobList.length - 1))
                    // console.log(jobList.slice(0, -1))

                    if (data) {
                        if (jobList == null) {
                            that.listJob = ''
                        } else if (jobList.length == 5) {
                            document.querySelector(".magicPosiAgin").classList.remove("isDisplay")
                            // 截取 前 4个
                            var jobList4 = jobList.slice(0, -1)
                            // 最后一个
                            var jobList1 = jobList.slice(jobList.length - 1)
                            console.log("34",jobList1)
                            that.listJob = jobList4
                            console.log("112111",that.listJob)

                            that.personId = jobList1[0].person_id
                            that.personText = jobList1[0].p_name
                            that.personImg = imgSrcFun(jobList1[0].p_icon)

                        }  else {
                            that.listJob = jobList
                        }


                        /* that.magicComCid1 = data.company[0].c_id
                         that.magicCom1Img = data.company[0].logo_icon
                         that.magicCom1Text = data.company[0].c_name

                         that.magicComCid2 = data.company[1].c_id
                         that.magicCom2Img = data.company[1].logo_icon
                         that.magicCom2Text = data.company[1].c_name*/


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
                    // this.MenuListQyMenu();
                }
            },
            jobDetailClick: function (job_id, job_name) {
                console.log(job_id)
                console.log(job_name)
                api.sendEvent({
                    name: 'jobAll',
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

                api.sendEvent({
                    name: 'comCom1',
                    extra: {
                        key: {
                            c_id: that.magicComCid1,
                            c_name: that.magicCom1Text,
                            logo_icon: that.magicCom1Img,
                            magicCom1: 'magicCom1'
                        },
                    }
                });

            },
            magicCom2Click: function () {  // 公司2
                var that = this;
                console.log(that.magicComCid2)

                api.sendEvent({
                    name: 'comCom2',
                    extra: {
                        key: {
                            c_id: that.magicComCid2,
                            c_name: that.magicCom2Text,
                            logo_icon: that.magicCom2Img,
                            magicCom2: 'magicCom2'
                        },

                    }
                });
            },
        }
    }
}
