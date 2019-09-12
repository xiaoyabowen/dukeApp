
function offlinePositionInit(Vue) {

    var str = dataValue('company/mine/comment/offlinePosition.html')
    return {
        template: str,
        data: function () {
            return {
                onlineList: []
            }
        },
        created: function () {
            this.queryICListJobProfile()
        },
        mounted: function () {

        },
        methods: {
            mangePositionDetail : function (job_id) {
                openNewWindow("mangePositionDetail", "./mangePositionDetail.html", {
                    url: 'mangePosition',
                    job_id : job_id,
                    status:1
                })
            },
            queryICListJobProfile : function () {
                var that = this
                var uid = localStorage.getItem("user").user_id
                var obj = {
                    uid: uid
                }
                ajaxGetWithProgress(queryICListJobProfile,obj,function (data,ret) {
                    //console.log(data)
                    if (data){
                        that.onlineList = data.ICList
                    } else {
                        toast("请求出错")
                    }
                })
            }
        }

    }
}
