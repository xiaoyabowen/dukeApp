
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
                console.log(this.layedit.getContent(this.index))
            }
        }
    }
}
