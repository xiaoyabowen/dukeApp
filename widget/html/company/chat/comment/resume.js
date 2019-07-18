function resumeInit(Vue) {
    var str = dataValue('company/chat/comment/resume.html')

    return {
        template: str,
        data: function () {
            return {
                list1: [],
                list2: [],
                list3: [],
                list4: [],
                active: 'new',
                status: 1
            }
        },
        created: function () {
            this.ResumeList(1);
            this.ResumeList2();
            this.ResumeList(3);
            this.ResumeList(4);
        },
        mounted: function () {

        },
        methods: {
            // 获取谁看过我数据列表
            ResumeList: function (status) {
                var that = this;
                ajaxGetWithProgress(ResumeList, {
                    status: status
                }, function (data, err) {
                    console.log(data);
                    if (data.ResumeList) {
                        var arr1 = data.ResumeList;
                        var arr2 = [];
                        for (var i = 0; i < arr1.length; i++) {
                            for (var j = 0; j < arr1[i].queryPersonByJobid.length; j++) {
                                arr2.push(arr1[i].queryPersonByJobid[j]);
                            }
                        }
                        console.log(arr2);
                        var list = 'list'+status;
                        that[list] = arr2;
                        // console.log(that[list]);
                    }
                })
            },
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
            // tab切换
            activeHandle: function (name, status) {
                var that = this;
                // if (name == 'interview') {
                //     ajaxGetWithProgress(ResumeList, {
                //         status: 2
                //     }, function (data, err) {
                //         // console.log(data);
                //         if (data.ResumeList) {
                //             var arr1 = data.ResumeList;
                //             var arr2 = [];
                //             for (var i = 0; i < arr1.length; i++) {
                //                 for (var j = 0; j < arr1[i].queryPersonByJobid.length; j++) {
                //                     arr2.push(arr1[i].queryPersonByJobid[j]);
                //                 }
                //             }
                //             console.log(arr2);
                //             that.list2 = arr2;
                //             // console.log(that[list]);
                //         }
                //         ajaxGetWithProgress(ResumeList, {
                //             status: 3
                //         }, function (data, err) {
                //             console.log(data);
                //             if (data.ResumeList) {
                //                 var arr3 = data.ResumeList;
                //                 for (var i = 0; i < arr3.length; i++) {
                //                     for (var j = 0; j < arr3[i].queryPersonByJobid.length; j++) {
                //                         that.list2.push(arr3[i].queryPersonByJobid[j]);
                //                     }
                //                 }
                //
                //                 console.log(that.list2);
                //             }
                //         })
                //     })
                // } else {
                //     this.ResumeList(status);
                // }

                this.active = name;
            },
            // 查看简历详情
            resumeHandle: function (person_id, status) {
                // console.log('resume');
                openNewWindow("seeResume", "../mine/seeResume.html", {
                    person_id: person_id,
                    status: status
                })
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
