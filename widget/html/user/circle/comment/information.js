function informationInit(Vue) {

    var str = dataValue('user/circle/comment/information.html')

    apiready = function () {
        content = api.pageParam.content
    }

    return {
        template: str,
        data: function () {
            return {
                styleObject: {
                    background: '',
                    backgroundSize: 'cover'
                },
                circle_id :'',
                person_id :'',
                img: '',
                title: '',
                name: '',
                phone: '',
                code: '',
                time_from: '',
                time_to: '',
                num: '',
                end: '',
                poster: '',
                content : '',
                item : ''
            }
        },
        created: function () {
            this.person_id = localStorage.getItem('person_id');
            this.content = api.pageParam.content
            this.circle_id = api.pageParam.circle_id
            if (this.content == "edit"){
                this.CircleProfileAllinOne()
            }
        },
        mounted: function () {
            var that = this;
            var informationInfo = JSON.parse(sessionStorage.getItem('informationObj'));
            console.log(sessionStorage.getItem('informationObj'));
            if (informationInfo && informationInfo !== '') {
                that.img = informationInfo.img || '';
                that.title = informationInfo.title || '';
                that.name = informationInfo.cir_name || '';
                that.phone = informationInfo.phone || '';
                that.time_from = informationInfo.c_from || '';
                that.time_to = informationInfo.c_to || '';
                that.num = informationInfo.number || '';
                that.end = informationInfo.endtime || '';
                that.poster = informationInfo.poster || '';
                that.code = informationInfo.code || '';
                document.querySelector(".addressInput").value = informationInfo.addressInput || ''
            }

            ajaxGetWithProgress(queryInvoice, {
                person_id: that.person_id,
                circle_id: that.circle_id,
            }, function (data, err) {
                console.log("data=",data);
               /* if (data.queryInvoice) {
                    that.obj = data.queryInvoice[0];
                    that.qrcode.clear();
                    that.qrcode.makeCode(that.obj.invoice);
                    document.getElementById('box').className = '';
                }*/

            });

        },
        methods: {
            // 获取数据
            CircleProfileAllinOne: function () {
                var that = this;
                // console.log(123)
                ajaxGetWithProgress(CircleProfileAllinOne, {
                    person_id: that.person_id,
                    circle_id: that.circle_id
                }, function (data, err) {
                    console.log("CircleProfileAllinOne", data);
                    // alert(data);
                    if (data.circle_summary) {
                        that.item = data.circle_summary;

                        that.img = that.item.poster;
                        that.title = that.item.title;
                        that.name = that.item.p_name;
                        that.phone = that.item.phone;
                        that.time_from = that.item.c_from;
                        that.time_to = that.item.c_to;
                        that.num = that.item.number;
                        that.end = that.item.endtime;

                        document.querySelector(".addressInput").value = that.item.shortname || ''
                        // that.queryApplyList();
                        // that.queryCommentSummary();
                    }
                });
            },
            // 上传图片
            upImg: function () {

                var that = this
                var UIAlbumBrowser = api.require('UIAlbumBrowser');
                UIAlbumBrowser.open({
                    max: 1,
                    styles: {
                        bg: '#fff',
                        mark: {
                            icon: '',
                            position: 'bottom_left',
                            size: 30
                        },
                        nav: {
                            bg: 'rgba(0,0,0,0.6)',
                            titleColor: '#fff',
                            titleSize: 18,
                            cancelColor: '#fff',
                            cancelSize: 16,
                            finishColor: '#fff',
                            finishSize: 16
                        }
                    },
                    rotation: true
                }, function (ret) {
                    if (ret) {
                        console.log("ret==",ret)
                        that.img = ret.list[0].thumbPath
                        var obj = {
                            uid: localStorage.getItem("user").user_id
                        }
                        api.ajax({
                            // report : false,
                            url: 'http://112.126.98.172:8088/upload/UploadFlieTest',
                            //这里是我们约定好的后台上传图片的位置 ，你可以根据你的需求来改
                            method: 'post',
                            cache: 'false',
                            timeout: 30,
                            dataTpye: 'json',
                            data: {

                                files: {
                                    file: that.img
                                },
                                values: obj

                            }
                        }, function (data, err) {
                            console.log("data",data);
                            if (data.code == 0) {
                                that.poster = data.date.src.split(',')[0];
                            }
                        });
                    }
                });

            },

            starTime : function () {
                var that = this
                var year = new Date().getFullYear();
                var mount = (new Date().getMonth()) + 2;
                var day = new Date().getDay();
                var dtpicker = new mui.DtPicker(
                    {
                        type: "datetime", //设置日历初始视图模式
                        beginDate: new Date(1950, 04, 25), //设置开始日期
                        endDate: new Date(year, mount, day) //设置开始日期
                    }
                );
                dtpicker.show(function (selectItems) {
                    console.log(selectItems.text)
                    that.time_from = selectItems.text
                })

            },
            endTime : function () {
                var that = this
                var year = new Date().getFullYear();
                var mount = (new Date().getMonth()) + 2;
                var day = new Date().getDay();
                var dtpicker = new mui.DtPicker(
                    {
                        type: "datetime", //设置日历初始视图模式
                        beginDate: new Date(1950, 04, 25), //设置开始日期
                        endDate: new Date(year, mount, day) //设置开始日期
                    }
                );
                dtpicker.show(function (selectItems) {
                    console.log(selectItems.text)
                    that.time_to = selectItems.text
                })

            },
            upEndTime : function () {
                var that = this
                var year = new Date().getFullYear();
                var mount = (new Date().getMonth()) + 2;
                var day = new Date().getDay();
                var dtpicker = new mui.DtPicker(
                    {
                        type: "datetime", //设置日历初始视图模式
                        beginDate: new Date(1950, 04, 25), //设置开始日期
                        endDate: new Date(year, mount, day) //设置开始日期
                    }
                );
                dtpicker.show(function (selectItems) {
                    console.log(selectItems.text)
                    that.end = selectItems.text
                })

            },
            activeAdr : function () {
                openNewWindow("gaomapActive", "../../company/map/gaomapActive.html", {
                    url: 'publishing_activities',
                })

            },
            getCode : function () {
                var that = this
                var flag = true;//防止重复点击获取验证码
                if(!flag){
                    return;
                }
                tel = that.phone;
                if (isBlack(tel)) {
                    toast('请输入手机号');
                    api.hideProgress();
                    return;
                }else if(!checkMobileNum(tel)){
                    toast("手机号码不正确");
                    return;
                }
                var obj = {
                    phone : tel
                }
                flag = false;
                that.setTime();
                ajaxGetUser(SendSmsCode,obj,function(ret,err) {
                    if (ret && ret.success ) {
                        toast("获取成功，请注意查收！");
                    }else if(ret && !ret.success){
                        if(ret){
                            var msg = ret.msg || "网络连接错误，请稍后重试！";
                            toast(msg);
                        }else{
                            var msg = err.msg || "网络连接错误，请稍后重试！";
                            toast(msg);
                        }
                    }
                })
            },
            setTime : function (){
                var time;
                var sms = document.getElementById('sms');
                time = time||59;
                sms.innerHTML = time+"s";
                var codeInterval = setInterval(function(){
                    if(time > 0){
                        time--;
                        sms.innerHTML = time+"s";
                    }else{
                        sms.innerHTML = "获取验证码";
                        clearInterval(codeInterval);
                        flag = true;
                    }
                },1000)
            },
            nextActive: function () {
                var that = this
                var obj = {
                    person_id: that.person_id,
                    cir_name: that.name,
                    title: that.title,
                    poster: that.poster,
                    code: that.code,
                    phone: that.phone,
                    c_from: that.time_from,
                    c_to: that.time_to,
                    number: that.num,
                    endtime: that.end,
                    img: that.img,
                    adr_id: document.querySelector(".adr_id").value,
                    addressInput: document.querySelector(".addressInput").value,
                    time : nowDate()
                }
                console.log(obj)
                // console.log(dateStrChangeTimeTamp(that.c_from))
                if (isBlack(that.img)){

                    toast("请选择活动海报")
                    return
                }
                if (isBlack(that.title)){
                    toast("请输入活动标题")
                    return
                }
                if (isBlack(that.name)){
                    toast("请输入活动发起人")
                    return
                }
                if (isBlack(that.phone)){
                    toast("请填写手机号")
                    return
                }
                if (isBlack(that.code)){
                    toast("请填写验证码")
                    return
                }

                if (isBlack(document.querySelector(".addressInput").value)){
                    toast("请填写活动地址")
                    return
                }
                if (isBlack(that.time_from)){
                    toast("请填写开始时间")
                    return
                }
                if (isBlack(that.time_to)){
                    toast("请填写结束时间")
                    return
                }
                if (isBlack(that.num)){
                    toast("请填写活动人数")
                    return
                }
                if (isBlack(that.end)){
                    toast("请填写报名截止时间")
                    return
                }
                sessionStorage.setItem("informationObj", JSON.stringify(obj))
                // that.$emit('informationObj', 'details');
                api.sendEvent({
                    name: 'onInformation',
                    extra: {
                        key: 'activities',
                    }
                });

            },
        }
    }

}
