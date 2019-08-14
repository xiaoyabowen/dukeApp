
function activitiesInit(Vue) {
    var str = dataValue('user/circle/comment/activities.html')

    console.log(str)
    apiready = function () {
        content = api.pageParam.content
    }

    return {
        template: str,
        data: function() {
            return {
                layedit: '',
                index: '',
                value: '',
                person_id: '',
                circle_id: '',
                content: '',
            }
        },
        created: function() {
            this.person_id = localStorage.getItem('person_id');
            this.content = api.pageParam.content
            this.circle_id = api.pageParam.circle_id
            if (this.content = "edit"){
                this.CircleProfileAllinOne()
            }
        },
        mounted :function (){

            this.layedit = layui.layedit;
            var uid = localStorage.getItem('person_id');
            var url = UploadFlieTest + '?uid' + uid

            console.log(url)
            this.layedit.set({
                uploadImage: {
                    url: UploadFlieTest, //接口url
                    type: 'post' //默认post
                }
            });

            this.index = this.layedit.build('demo'); //建立编辑器
            console.log("layedit",this.index);
            console.log(layui.layedit)

        },

        methods: {
            CircleProfileAllinOne: function () {
                var that = this;
                // console.log(123)
                ajaxGetWithProgress(CircleProfileAllinOne, {
                    person_id: that.person_id,
                    circle_id: that.circle_id
                }, function (data, err) {
                    console.log("CircleProfileAllinOne1", data);
                    // alert(data);
                    if (data.circle_summary) {
                        that.value = data.circle_summary.details
                        console.log("layeditvalue",that.value)
                        layui.layedit.setContent(1,that.value,false)
                    }
                });
            },
            clickHandle: function() {



                console.log("activeObj",obj);
                var that = this
                if (that.content == "edit"){
                    alert(12)
                    var obj = JSON.parse(sessionStorage.getItem('informationObj'));

                    console.log("12343",this.layedit.getContent(this.index));
                    obj['details'] = this.layedit.getContent(this.index);
                    obj['status'] = 1;
                    obj['cir_status'] = 1;
                    obj['circle_id'] =that.circle_id;

                    ajaxGetWithProgress(ActivecreateCircle, obj, function (data, err) {
                        console.log(data);
                        if (data.createCircle.return_info.status) {
                            mui.confirm('已发布请等待审核', '',['确认','取消'], function (e) {
                                if (!e.index) {
                                    openNewWindow("index", "./index.html")
                                }
                            })

                        }
                    });
                } else {
                    alert(456)
                    var obj = JSON.parse(sessionStorage.getItem('informationObj'));

                    console.log(this.layedit.getContent(this.index));
                    obj['details'] = this.layedit.getContent(this.index);
                    obj['status'] = 1;
                    obj['cir_status'] = 1;
                    ajaxGetWithProgress(ActivecreateCircle, obj, function (data, err) {
                        console.log(data);
                        if (data.createCircle.return_info.status) {
                            mui.confirm('已发布请等待审核', '',['确认','取消'], function (e) {
                                if (!e.index) {
                                    openNewWindow("index", "./index.html")
                                }
                            })

                        }
                    });
                }

            }
        }
    }
}
