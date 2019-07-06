
function myjoinInit(Vue) {


    var str = dataValue('user/circle/comment/myjoin.html')
    return {
        template: str,
        data: function() {
            return {
                showInfo:false,
                statusText: {
                    0: ['join-status-dai', '待参加'],
                    1: ['join-status-yes', '已签到'],
                    2: ['join-status-not', '已取消'],
                },//显示状态
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
