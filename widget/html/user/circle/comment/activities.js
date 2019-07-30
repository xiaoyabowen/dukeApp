
function activitiesInit(Vue) {
    var str = dataValue('user/circle/comment/activities.html')

    console.log(str)

    return {
        template: str,
        data: function() {
            return {
                layedit: '',
                index: ''
            }
        },
        created: function() {

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

        },

        methods: {
            clickHandle: function() {
                var obj = JSON.parse(sessionStorage.getItem('informationObj'));

                console.log(this.layedit.getContent(this.index));
                obj['details'] = this.layedit.getContent(this.index);
                obj['status'] = 1;
                obj['cir_status'] = 1;


                console.log("activeObj",obj);
                var that = this
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
