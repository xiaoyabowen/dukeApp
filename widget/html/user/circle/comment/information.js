function informationInit(Vue) {

    var str = dataValue('user/circle/comment/information.html')
    return {
        template: str,
        data: function () {
            return {
                styleObject: {
                    background: '',
                    backgroundSize: 'cover'
                },
                img: '',
                title: '',
                name: '',
                phone: '',
                code: '',
                city: '',
                time_from: '',
                time_to: '',
                num: '',
                end: '',
                poster: ''
            }
        },
        created: function () {
            this.person_id = JSON.parse(localStorage.getItem('user')).user_uid;
        },
        mounted: function () {
            var that = this
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
                            url: UploadFlieTest,
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

                            console.log(data);
                            if (data.code == 0) {
                                that.poster = data.date.src.split(',')[0];
                            }
                        });
                    }
                });

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
                    poster: that.poster,
                }
                console.log(obj)
                sessionStorage.setItem("informationObj", JSON.stringify(obj))
                // that.$emit('informationObj', 'details');
                api.sendEvent({
                    name: 'onInformation',
                    extra: {
                        key: 'activities',


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

            }
        }
    }

}
