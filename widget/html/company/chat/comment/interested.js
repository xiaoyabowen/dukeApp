
function interestedInit(Vue) {
    var str = dataValue('company/chat/comment/interested.html')

    return {
        template: str,
        data: function() {
            return {
                interestedMask: false
            }
        },
        created: function() {
            this.lookJobsList();
        },
        mounted :function (){

        },
        methods: {
            // 获取谁看过我数据列表
            lookJobsList: function () {
                ajaxGetWithProgress(lookJobsList, {}, function (data, err) {
                    console.log(data);

                })
            },
            // 查看全部职位
            handleClick: function() {
                this.interestedMask = true;
            }

        }
    }
}
