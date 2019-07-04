function informationInit(Vue) {
    var str = `<div id="informationInit">
            <div class="information_head" :style="styleObject" @click="upImg()">
                <div class="information_head_add" v-if="!img" ></div>
                <img :src="img" v-if="img" alt="">
            </div>
            <div class="information_content">
     
                <div class="information_item cssFlex">
                    <label>活动标题</label>
                    <input type="text" v-model="title" maxlength=80 placeholder="不超过80个字">
                </div>
                <div class="information_item cssFlex">
                    <label>活动发起人</label>
                    <input type="text" v-model="name" maxlength=80 placeholder="姓名">
                </div>
                <div class="information_item cssFlex">
                    <label>发起人电话</label>
                    <input type="number" v-model="phone" maxlength=80 placeholder="请输入手机号码">
                </div>
                <div class="information_item cssFlex">
                    <label>输入验证码</label>
                    <input type="text" v-model="code" maxlength=10 placeholder="验证码">
                    <span class="code">发送验证码</span>
                </div>
                <div class="information_item cssFlex">
                    <label>活动地点</label>
                    <input type="text" v-model="city" maxlength=80 placeholder="请输入活动的具体地址">
                </div>
                <div class="information_item cssFlex">
                    <label>开始时间</label>
                    <input type="text" v-model="time_from" maxlength=80 placeholder="列: 2019-12-12 10:00">
                </div>
                <div class="information_item cssFlex">
                    <label>结束时间</label>
                    <input type="text" v-model="time_to" maxlength=80 placeholder="列: 2019-12-12 18:00">
                </div>
                <div class="information_item cssFlex">
                    <label>活动人数</label>
                    <input type="text" v-model="num" maxlength=80 placeholder="不限">
                </div>
                <div class="information_item cssFlex">
                    <label>报名截止时间</label>
                    <input type="text" v-model="end" maxlength=80 placeholder="列: 2019-12-12 18:00">
                </div>
                
                <div class="information_btn">下一步</div>
            </div>
           
        </div>`
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
            }
        },
        mounted: function () {

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
                            console.log(data);
                            var myFile = dataURLtoFile(data, 'testimgtestimgtestimg');
                            console.log(myFile);

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
            }
        }
    }
}
