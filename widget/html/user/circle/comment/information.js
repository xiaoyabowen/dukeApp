

function informationInit(Vue) {
    // dataValue()

    var str = dataValue('user/circle/comment/information.html')
    return {
        template: str,
        data: function () {
            return {
                styleObject: {
                    background: '',
                    backgroundSize: 'cover'
                },
                img: '1',
                title: '1',
                name: '1',
                phone: '1',
                code: '1',
                city: '1',
                time_from: '2017-09-09',
                time_to: '2018-09-09',
                num: '24',
                end: '2019-09-09',
            }
        },
        created : function (){
            this.person_id = JSON.parse(localStorage.getItem('user')).user_uid;
        },
        mounted: function () {
            var that = this
            ajaxGetWithProgress(queryInvoice, {
                person_id: that.person_id,
                circle_id: that.circle_id,
            }, function (data, err) {
                console.log(data);
                if (data.queryInvoice) {
                    that.obj = data.queryInvoice[0];
                    that.qrcode.clear();
                    that.qrcode.makeCode(that.obj.invoice);
                    document.getElementById('box').className = '';
                }

            });
        },
        methods: {
            // 上传图片
            upImg: function () {
                var that = this;
                api.getPicture({
                    sourceType: 'library',
                    encodingType: 'jpg',
                    mediaValue: 'pic',
                    destinationType: 'url',
                    allowEdit: true,
                    quality: 50,
                    targetWidth: 100,
                    targetHeight: 100,
                    saveToPhotoAlbum: false
                }, function (ret, err) {
                    if (ret) {
                        console.log(ret.data);

                        that.img = ret.data;
                        // that.styleObject.background = 'url(' + ret.data + ') no-repeat center';

                        //将图片转换为Base64
                        function getImgToBase64(url, callback) {
                            var canvas = document.createElement('canvas'),
                                ctx = canvas.getContext('2d'),
                                img = new Image;
                            img.crossOrigin = 'Anonymous';
                            img.onload = function () {
                                canvas.height = img.height;
                                canvas.width = img.width;
                                ctx.drawImage(img, 0, 0);
                                var dataURL = canvas.toDataURL('image/png');
                                callback(dataURL);
                                canvas = null;
                            };
                            img.src = url;
                        }

                        //将base64转换为文件对象
                        function dataURLtoFile(dataurl, filename) {
                            var arr = dataurl.split(',');
                            var mime = arr[0].match(/:(.*?);/)[1];
                            var bstr = atob(arr[1]);
                            var n = bstr.length;
                            var u8arr = new Uint8Array(n);
                            while (n--) {
                                u8arr[n] = bstr.charCodeAt(n);
                            }
                            //转换成file对象
                            return new File([u8arr], filename, {type: mime});
                            //转换成成blob对象
                            //return new Blob([u8arr],{type:mime});
                        }

                        //将图片转换为base64,再将base64转换成file对象
                        getImgToBase64(ret.data, function (data) {
                            // console.log(data);
                            var myFile = dataURLtoFile(data, 'testimgtestimgtestimg');
                            // console.log(myFile);

                            // ajaxGetWithProgress('http://192.168.1.10:8000/SE4M/SE/UserProfile/UplodeTest',{
                            //     person_id: person_id,
                            //     upload: myFile
                            // },function(res,err) {
                            //     console.log(res);
                            //
                            //     api.hideProgress();
                            // })

                        });

                        //上传剪辑后的图像到服务器
                        // api.ajax({
                        //     // report : false,
                        //     url : 'http://192.168.1.10:8000/SE4M/SE/UserProfile/UplodeTest',
                        //     //这里是我们约定好的后台上传图片的位置 ，你可以根据你的需求来改
                        //     method : 'post',
                        //     cache : 'false',
                        //     timeout : 30,
                        //     dataTpye : 'json',
                        //     data : {
                        //         files : {
                        //             file : ret.data
                        //         },
                        //         person_id: person_id
                        //     }
                        // }, function(ret, err) {
                        //     alert(JSON.stringify(ret));
                        //     api.hideProgress();
                        //     if (ret.status == 1) {
                        //         api.toast({
                        //             msg : ret.info
                        //         });
                        //     }
                        //     //上传进度
                        //     if (ret.status == 0) {
                        //         api.toast({
                        //             msg : '上传错误',
                        //             duration : 3000,
                        //             location : 'bottom'
                        //         });
                        //     } else if (ret.status == 1) {
                        //         $api.byId(valueId).value = ret.id;
                        //         $api.byId(imgId).src = ret.path;
                        //     }
                        // });
                    } else {
                        console.log(JSON.stringify(err));
                    }
                })
            },
            nextActive:function () {
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
                }
                console.log(obj)
                sessionStorage.setItem("informationObj",JSON.stringify(obj))


            }
        }
    }

}
