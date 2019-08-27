function magicAllInit(Vue) {
    var str = dataValue('user/home/comment/magicAll.html')
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

                activeAni:true,
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

            MenuListQyMenu: function () {
                var that = this
                ajaxGetWithProgress(MenuListQyMenu, {}, function (data) {
                    console.log("magicall", data)
                    var jobList = data.job
                    console.log(jobList)
                    if (data) {
                        if (jobList == null) {
                            that.listJob = ''
                        } else {
                            that.listJob = jobList
                        }


                        that.magicComCid1 = data.company[0].c_id
                        if (data.company[0].logo_icon == ''){
                            that.magicCom1Img = 'http://duke-app.oss-cn-beijing.aliyuncs.com/trend/yun/5n4ehv1hx5dd1jtu.png'
                        } else {
                            that.magicCom1Img = data.company[0].logo_icon
                        }
                        that.magicCom1Text = data.company[0].c_name
                        that.magicComCid2 = data.company[1].c_id
                        if (data.company[1].logo_icon == ''){
                            that.magicCom2Img = 'http://duke-app.oss-cn-beijing.aliyuncs.com/trend/yun/5n4ehv1hx5dd1jtu.png'
                        } else {
                            that.magicCom2Img = data.company[1].logo_icon
                        }
                        that.magicCom2Text = data.company[1].c_name


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
            jobDetailClick: function (job_id, job_name,index,company_c_id,job_type) {

                this.timeIndex = index;
                store.state.obj.company_c_id = company_c_id
                store.state.obj.job_name = job_name
                store.state.obj.job_type = job_type
                store.state.obj.job_id = job_id

                console.log("indexindex",this.timeIndex)
                api.sendEvent({
                    name: 'jobAll',
                    extra: {
                        key: {
                            job_id: job_id,
                            job_name: job_name,
                            magicCom: 'magicPosiDetail',
                        },
                    }
                });

            },
            magicCom1Click: function () {  // 公司1
                var that = this;
                store.state.obj.c_id = that.magicComCid1
                store.state.obj.c_name = that.magicCom1Text
                store.state.obj.logo_icon = that.magicCom1Img
                // console.log("that.magicComCid1",that.magicComCid1)
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
                console.log("magicComCid2",that.magicComCid2)

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
            },
        }
    }
}
