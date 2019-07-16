
function activitiesInit(Vue) {
    var str = dataValue('user/circle/comment/activities.html')


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

            console.log(UploadFlieTest)

            this.layedit.set({
                uploadImage: {
                    url: UploadFlieTest, //接口url
                    type: 'post' //默认post
                }
            });

            this.index = this.layedit.build('demo'); //建立编辑器
            console.log(this.index);
        },
        methods: {
            clickHandle: function() {
                var obj = JSON.parse(sessionStorage.getItem('informationObj'));
                console.log(this.layedit.getContent(this.index));
                obj['details'] = this.layedit.getContent(this.index);
                console.log(obj);
                var that = this
                ajaxGetWithProgress(ActivecreateCircle, obj, function (data, err) {
                    console.log(data);
                    if (data.createCircle.return_info.status) {
                        openNewWindow("index", "./index.html")
                    }
                });
            }
        }
    }
}
