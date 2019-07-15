
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

        },
        mounted :function (){

        },
        methods: {
            // 查看全部职位
            handleClick: function() {
                this.interestedMask = true;
            }

        }
    }
}
