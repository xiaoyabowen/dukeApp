function resumeInit(Vue) {
    var str = dataValue('company/chat/comment/resume.html')

    return {
        template: str,
        data: function () {
            return {
                list1: [],
                list2: [],
                list4: [],
                list5: [],
                active: 'new',
                status: 1
            }
        },
        created: function () {
            this.activeHandle('new',1);
        },
        mounted: function () {


        },
        methods: {
            // 新简历  status  1
            /*ResumeList: function (status) {
                var that = this;
                ajaxGetWithProgress(ResumeList, {
                    status: status
                }, function (data, err) {
                    console.log("jianlidata",data);
                    that.list1 = data.ResumeList
                })
            },*/
            ResumeList2: function () {
                var that = this;
                ajaxGetWithProgress(ResumeList, {
                    status: 2
                }, function (data, err) {
                    // console.log(data);
                    if (data.ResumeList) {
                        var arr1 = data.ResumeList;
                        var arr2 = [];
                        for (var i = 0; i < arr1.length; i++) {
                            for (var j = 0; j < arr1[i].queryPersonByJobid.length; j++) {
                                arr2.push(arr1[i].queryPersonByJobid[j]);
                            }
                        }
                        console.log(arr2);
                        that.list2 = arr2;
                        // console.log(that[list]);
                    }
                    ajaxGetWithProgress(ResumeList, {
                        status: 3
                    }, function (data, err) {
                        console.log(data);
                        if (data.ResumeList) {
                            var arr3 = data.ResumeList;
                            for (var i = 0; i < arr3.length; i++) {
                                for (var j = 0; j < arr3[i].queryPersonByJobid.length; j++) {
                                    that.list2.push(arr3[i].queryPersonByJobid[j]);
                                }
                            }

                            console.log(that.list2);
                        }
                    })
                })
            },
            // tab切换  新简历status  1
            activeHandle: function (name, status) {
                console.log("namename",name)
                var that = this;
                if (name == 'interview') {
                    ajaxGetWithProgress(ResumeList, {
                        status: 2
                    }, function (data, err) {
                        // console.log(data);
                        if (data.ResumeList) {
                            var arr1 = data.ResumeList;
                            var arr2 = [];
                            for (var i = 0; i < arr1.length; i++) {
                                for (var j = 0; j < arr1[i].queryPersonByJobid.length; j++) {
                                    arr2.push(arr1[i].queryPersonByJobid[j]);
                                }
                            }
                            console.log(arr2);
                            that.list2 = arr2;
                            // console.log(that[list]);
                        }
                        ajaxGetWithProgress(ResumeList, {
                            status: 3
                        }, function (data, err) {
                            console.log(data);
                            if (data.ResumeList) {
                                var arr3 = data.ResumeList;
                                for (var i = 0; i < arr3.length; i++) {
                                    for (var j = 0; j < arr3[i].queryPersonByJobid.length; j++) {
                                        that.list2.push(arr3[i].queryPersonByJobid[j]);
                                    }
                                }

                                console.log(that.list2);
                            }
                        })
                    })
                } else {
                    this.ResumeList(status);
                }
                that.active = name;
                ajaxGetWithProgress(ResumeList, {
                    status: status
                }, function (data, err) {
                    console.log("jianlidata",data);
                    that.list1 = data.ResumeList

                    console.log("that.list1",that.list1)
                })
            },

            // tab切换   面试   2     3
            interviewHandle: function (name, status) {
                var that = this;
                that.active = name;
                ajaxGetWithProgress(ResumeList, {
                    status: 2
                }, function (data, err) {
                    // console.log(data);
                    if (data.ResumeList) {
                        var arr1 = data.ResumeList;
                        var arr2 = [];
                        for (var i = 0; i < arr1.length; i++) {
                            for (var j = 0; j < arr1[i].length; j++) {
                                arr2.push(arr1[i][j]);
                            }
                        }
                        console.log(arr2);
                        that.list2 = arr2;
                        // console.log(that[list]);
                    }
                    ajaxGetWithProgress(ResumeList, {
                        status: 3
                    }, function (data, err) {
                        console.log(data);
                        if (data.ResumeList) {
                            var arr3 = data.ResumeList;
                            for (var i = 0; i < arr3.length; i++) {
                                for (var j = 0; j < arr3[i].length; j++) {
                                    that.list2.push(arr3[i][j]);
                                }
                            }

                            console.log(that.list2);
                        }
                    })
                })
            },

            // tab切换   不合适   5
            noHandle: function (name, status) {
                var that = this;
                that.active = name;
                ajaxGetWithProgress(ResumeList, {
                    status: status
                }, function (data, err) {
                    console.log("jianlidata",data);
                    that.list5 = data.ResumeList

                    console.log("that.list5",that.list5)
                })
            },
            // 查看简历详情
            resumeHandle: function (item) {
                console.log("简历详情跳转数据",item);
                openNewWindow("seeResume", "../mine/seeResume.html", {
                    person_id: item.person_id,
                    status: item.status,
                    time: item.status_time,
                    app_id: item.app_id
                })
            },
            interview :function (item) {

                openNewWindow("preliminary", "./preliminary.html", {
                    person_id: item.person_id,
                    app_id: item.app_id,
                    name: item.p_name
                })
            },
            // 点击重新邀约againHandle
            interviewAgain: function (app_id, index) {
                var that = this;
                mui.confirm('确定要重新邀约吗？', '友情提示',['确认','取消'], function (e) {
                    if (!e.index) {
                        console.log(app_id);
                        ajaxGetWithProgress(UpdateStatus2, {
                            app_id: app_id,
                            status2: '未接受'
                        }, function (data, err) {
                            console.log("chongxin",data);

                            if (data.return.status) {
                                mui.toast('重新邀约成功')
                                console.log(that.list2.splice(index, 1));
                            }

                        })
                    }
                })
            },
            // 点击撤回邀请
            interviewNot: function (app_id, index) {
                var that = this;
                mui.confirm('确定要撤回面试邀请吗？', '友情提示',['确认','取消'], function (e) {
                    if (!e.index) {
                        console.log(app_id);
                        ajaxGetWithProgress(UpdateStatus2, {
                            app_id: app_id,
                            status2: '撤销'
                        }, function (data, err) {
                            console.log(data);

                            if (data.return.status) {
                                mui.toast('撤销成功')
                                console.log(that.list2.splice(index, 1));
                            }

                        })
                    }
                })
            },

        }
    }
}
