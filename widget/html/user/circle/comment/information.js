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
                // var that = this;
                // api.getPicture({
                //     sourceType: 'library',
                //     encodingType: 'jpg',
                //     mediaValue: 'pic',
                //     destinationType: 'url',
                //     allowEdit: true,
                //     quality: 50,
                //     targetWidth: 100,
                //     targetHeight: 100,
                //     saveToPhotoAlbum: false
                // }, function (ret, err) {
                //     if (ret) {
                //         console.log(ret.data);
                //
                //         that.img = ret.data;
                //         // that.styleObject.background = 'url(' + ret.data + ') no-repeat center';
                //
                //         //上传剪辑后的图像到服务器
                //         // api.ajax({
                //         //     // report : false,
                //         //     url : 'http://192.168.1.10:8000/SE4M/SE/UserProfile/UplodeTest',
                //         //     //这里是我们约定好的后台上传图片的位置 ，你可以根据你的需求来改
                //         //     method : 'post',
                //         //     cache : 'false',
                //         //     timeout : 30,
                //         //     dataTpye : 'json',
                //         //     data : {
                //         //         files : {
                //         //             file : ret.data
                //         //         },
                //         //         person_id: person_id
                //         //     }
                //         // }, function(ret, err) {
                //         //     alert(JSON.stringify(ret));
                //         //     api.hideProgress();
                //         //     if (ret.status == 1) {
                //         //         api.toast({
                //         //             msg : ret.info
                //         //         });
                //         //     }
                //         //     //上传进度
                //         //     if (ret.status == 0) {
                //         //         api.toast({
                //         //             msg : '上传错误',
                //         //             duration : 3000,
                //         //             location : 'bottom'
                //         //         });
                //         //     } else if (ret.status == 1) {
                //         //         $api.byId(valueId).value = ret.id;
                //         //         $api.byId(imgId).src = ret.path;
                //         //     }
                //         // });
                //     } else {
                //         console.log(JSON.stringify(err));
                //     }
                // })

                // dataValue()
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
                        console.log(ret)
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

            }
        }
    }

}
