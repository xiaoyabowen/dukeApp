function resumeInit(Vue) {
    var str = dataValue('company/chat/comment/resume.html')

    return {
        template: str,
        data: function () {
            return {
                list: [],
                active: 'new'
            }
        },
        created: function () {
            // this.lookmeList();
        },
        mounted: function () {

        },
        methods: {
            // 获取谁看过我数据列表
            lookmeList: function () {
                var that = this;

                var list = localStorage.getItem('seens');
                if (list) {
                    that.list = JSON.parse(list);
                    ajaxGet(lookmeList, {}, function (data, err) {
                        console.log('后台获取数据更新的本地数据库:', data);
                        if (data.lookmeList) {
                            that.list = data.lookmeList;
                            localStorage.setItem('seens', JSON.stringify(that.list));
                        }
                    });
                    return;
                }

                ajaxGetWithProgress(lookmeList, {}, function (data, err) {
                    console.log(data);
                    if (data.lookmeList) {
                        that.list = data.lookmeList;

                        localStorage.setItem('seens', JSON.stringify(that.list));

                        that.listDB = data.lookmeList;


                    }
                })
                // this.setIndexedDB(this);
            },
            // tab切换
            activeHandle: function (name) {
                this.active = name;
            },
            // 查看简历详情
            resumeHandle: function () {
                console.log('resume');
                openNewWindow("seeResume", "../mine/seeResume.html")
            },
            // 点击重新邀约
            againHandle: function () {
                console.log('againHandle');
            },
            // 点击撤回邀请
            withdrawHandle: function () {
                mui.confirm('确定要撤回面试邀请吗？', '友情提示', function (e) {
                    if (e.index) {
                        console.log('withdrawHandle')
                    }
                })
            }
        }
    }
}
