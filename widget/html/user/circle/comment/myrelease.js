
function myreleaseInit(Vue) {


    var str = dataValue('user/circle/comment/myrelease.html')
    return {
        template: str,
        data: function() {
            return {
                showInfo:false
            }
        },
        created: function() {
            // console.log(CKEDITOR)

        },
        methods: {
            groupEmail: function () {
                mui.prompt('请输入邮箱地址','','导出到邮箱',['确认导出','取消'],null,'div')
                document.querySelector('.mui-popup-input input').placeholder='请输入邮箱号'
            },
            showCont: function () {
                this.showInfo = !this.showInfo;
            }

        }
    }
}
