
function myreleaseInit(Vue) {


    var str = dataValue('user/circle/comment/myrelease.html')
    return {
        template: str,
        data: function() {
            return {
                showInfo:false,
                person_id: '',
                list: []
            }
        },
        created: function() {
            // console.log(CKEDITOR)
            this.person_id = localStorage.getItem('person_id');
            this.queryCircleListByPersonId();
        },
        methods: {
            // 请求数据
            queryCircleListByPersonId: function () {
                var that = this;
                ajaxGetWithProgress(queryCircleListByPersonId, {
                    person_id: that.person_id,
                }, function (data, err) {
                    console.log(1111,data);

                    if (data.CircleListByPersonId) {
                        // alert(123);
                        that.showInfo =true;
                        that.list = data.CircleListByPersonId;
                    }

                });
            },
            // 点击跳转到活动详情页
            linkHandle: function (circle_id) {
                console.log(circle_id);
                openNewWindow("details_activities", "./details_activities.html", {
                    circle_id: circle_id,
                    edit: true,
                })
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
