function magicAllInit(Vue) {
    var str = dataValue('user/great/common/magicAll.html')


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
                listJob1: [
                    {
                        name:"1"
                    },
                    {
                        name:"1"
                    },
                    {
                        name:"1"
                    },
                ],
                index: '',
                tId: '',
            }
        },
        created: function () {
            // this.MenuListQyMenu()
            this.tId = api.pageParam.tId;
            this.commodityList()
        },
        mounted: function () {


            this.$watch("listJob",function (ret) {
                console.log("retert",ret)
            })
        },

        methods: {
            commodityList : function (){

                var that = this
                console.log("that.tId",that.tId)
                ajaxGetWithProgress(commodityList,{tid : that.tId},function (data) {
                    console.log("commodityList",data)
                    var jobList = data.comList
                    if (data) {
                        if (jobList == null) {
                            that.listJob = ''
                        } else {
                            that.listJob = jobList
                        }

                        that.magicComCid1 = data.Typelist[0].tid
                        if (data.Typelist[0].pic == null){
                            that.magicCom1Img = 'http://duke-app.oss-cn-beijing.aliyuncs.com/trend/yun/5n4ehv1hx5dd1jtu.png'
                        }else{
                            that.magicCom1Img = data.Typelist[0].pic
                        }
                        that.magicCom1Text = data.Typelist[0].cateory

                        that.magicComCid2 = data.Typelist[1].tid


                        if (data.Typelist[1].pic == null){
                            that.magicCom2Img = 'http://duke-app.oss-cn-beijing.aliyuncs.com/trend/yun/5n4ehv1hx5dd1jtu.png'
                        }else{
                            that.magicCom1Img = data.Typelist[1].pic
                        }
                        that.magicCom2Text = data.Typelist[1].cateory
                    }
                })
            },
           /* MenuListQyMenu: function () {
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
                        that.magicCom1Img = data.company[0].logo_icon
                        that.magicCom1Text = data.company[0].c_name

                        that.magicComCid2 = data.company[1].c_id
                        that.magicCom2Img = data.company[1].logo_icon
                        that.magicCom2Text = data.company[1].c_name


                    }

                })

            },*/
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
                    this.commodityList();
                }
                this.activeAni = true
                setTimeout(function () {
                    that.activeAni = false;
                }, 1500)
            },
            jobDetailClick: function (cid, comName,index) {
                console.log("12",cid)
                console.log("34",comName)
                this.timeIndex = index;
                // this.housequeryHouseSummary()
                api.sendEvent({
                    name: 'jobAll',
                    extra: {
                        key: {
                            cid: cid,
                            comName: comName,
                        },
                    }
                });

            },
            magicCom1Click: function () {  // 公司1
                var that = this;
                that.commodityList()
                /*store.state.obj.c_id = that.magicComCid1
                store.state.obj.c_name = that.magicCom1Text
                store.state.obj.logo_icon = that.magicCom1Img
                store.state.obj.magicCom =  'magicCom1'*/

                /*var obj = {
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
                            /!*c_id: that.magicComCid1,
                            c_name: that.magicCom1Text,
                            logo_icon: that.magicCom1Img,*!/
                            magicCom1: 'magicCom1'
                        },
                    }
                });*/
            },
            magicCom2Click: function () {  // 公司2
                var that = this;
                // console.log("magicComCid2",that.magicComCid2)
                that.commodityList()
                /*store.state.obj.c_id = that.magicComCid2
                store.state.obj.c_name = that.magicCom2Text
                store.state.obj.logo_icon = that.magicCom2Img
                store.state.obj.magicCom =  'magicCom2'*/

                /*var obj = {
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
                            /!*c_id: that.magicComCid2,
                            c_name: that.magicCom2Text,
                            logo_icon: that.magicCom2Img,*!/
                            magicCom2: 'magicCom2'
                        },

                    }
                });*/
            },
        }
    }
}