
function OnlinePositionInit(Vue) {
    var str = dataValue('company/mine/comment/OnlinePosition.html')

    return {
        template: str,
        data: function() {
            return {

            }
        },
        created: function() {

        },
        mounted :function (){

        },

        methods: {
            mangePositionDetail : function () {
                openNewWindow("mangePositionDetail", "./mangePositionDetail.html", {
                    url: 'mangePosition'
                })
            }
        }
    }
}
