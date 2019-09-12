
function OnlinePositionInit(Vue) {
    var str = dataValue('company/mine/comment/OnlinePosition.html')

    return {
        template: str,
        data: function() {
            return {
                onlineList: []
            }
        },
        created: function() {
            this.queryMyJobsCandidateNum()
        },
        mounted :function (){

        },
        methods: {
            mangePositionDetail : function (job_id) {
                openNewWindow("mangePositionDetail", "./mangePositionDetail.html", {
                    url: 'mangePosition',
                    job_id : job_id,
                    status:2
                })
            },
            queryMyJobsCandidateNum : function () {
                var that = this
                var uid = localStorage.getItem("user").user_id
                var obj = {
                    uid: uid
                }
                ajaxGetWithProgress(queryMyJobsCandidateNum,obj,function (data,ret) {
                    //console.log("zhiwei",data)
                    if (data.valid == 0){
                        that.onlineList = data.queryMyJobs
                    }else if (data.valid == 1){
                        toast("公司还在审核中")
                    }else {
                        toast("请求出错")
                    }

                })
            }
        }
    }
}
