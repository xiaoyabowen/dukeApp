
function myjoinInit(Vue) {


    var str = dataValue('user/circle/comment/myjoin.html')
    return {
        template: str,
        data: function() {
            return {
                showInfo:false,
                person_id: '',
                list: [],
                statusText: {
                    0: ['join-status-dai', '待参加'],
                    1: ['join-status-yes', '已签到'],
                    2: ['join-status-not', '已取消'],
                },//显示状态
            }
        },
        created: function() {
            this.person_id = localStorage.getItem('person_id');
            this.queryMyJoinCirCle();
        },
        methods: {
            // 请求数据
            queryMyJoinCirCle: function () {
                var that = this;
                ajaxGetWithProgress(queryMyJoinCirCle, {
                    person_id: that.person_id,
                }, function (data, err) {
                    console.log(data);

                    if (data.MyJoinCirCle) {
                        // alert(123);
                        that.showInfo =true;
                        that.list = data.MyJoinCirCle;
                    }
                });
            },
            // 点击跳转到活动详情页
            linkHandle: function (circle_id) {
                console.log(circle_id);
                openNewWindow("details_activities", "./details_activities.html", {
                    circle_id: circle_id,
                })
            },
            // 查看电子票
            checkETickets: function(circle_id) {
                // console.log(circle_id);
                // console.log(this.person_id);
                var that = this;
                openNewWindow("E_ticket", "./E_ticket.html", {
                    circle_id: circle_id,
                    person_id: that.person_id
                })
            },
            // 活动签到
            signHandle: function (id) {
                var that = this;
                ajaxGetWithProgress(editCircleStatus, {
                    status: 1,
                    id: id,
                }, function (data, err) {
                    console.log(data);
                    if (data.return.status) {
                        that.obj.status = 1;
                        mui.toast('签到成功');
                    }

                });
            },
            // 取消活动
            cancellation: function (id, index) {
                var that = this;
                console.log(index);
                ajaxGetWithProgress(editCircleStatus, {
                    status: 2,
                    id: id,
                }, function (data, err) {
                    console.log(data);
                    if (data.return.status) {
                        that.list[index].status = 2;
                        mui.toast('已取消活动');
                    }

                });
            },
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
