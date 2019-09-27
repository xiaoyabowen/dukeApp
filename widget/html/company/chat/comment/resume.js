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

          api.addEventListener({
              name: 'success'
          }, function(ret, err){
              this.activeHandle('new');
          });

        },
        methods: {

            activeHandle(name){ //新简历
              this.active = name;
              //1
              var that = this;
                ajaxGetWithProgress(ResumeList,{status:1},function(data,err){
                    console.log(data,'1');
                    if(data.List.length <=0 ){
                      that.list1 = [];
                    }else{
                      that.list1 = data.List;
                    }
                })
            },
            interviewHandle(name){ //面试
              this.list2 = [];
              this.active = name;

              var that = this;

              ajaxGetWithProgress(ResumeList,{status:2},function(data,err){
                  console.log(data,'2');

                    that.list2 = that.list2.concat(data.List);

              });

              ajaxGetWithProgress(ResumeList,{status:3},function(data,err){
                  console.log(data,'3');
                    that.list2 = that.list2.concat(data.List);

              })
              // 2 3
            },
            noHandle(name){ //不合适
              //5 status
              this.active = name;
              var that = this;
                ajaxGetWithProgress(ResumeList,{status:5},function(data,err){
                    console.log(data,'55');
                    if(data.List.length <=0 ){
                      that.list5 = [];
                    }else{
                      that.list5 = data.List;
                    }
                })
            },

            //邀约
            interview :function (item) {
                // console.log(item,'');
                // return;
                openNewWindow("preliminary", "./preliminary.html", {
                    person_id: item.person_id,
                    app_id: item.app_id,
                    name: item.p_name
                })
            },


            //撤销邀请

            interviewNot: function (app_id, index) {
                var that = this;
                mui.confirm('确定要撤回面试邀请吗？', '友情提示',['确认','取消'], function (e) {
                var altt = that;
                    if (!e.index) {
                        //console.log(app_id);
                        ajaxGetWithProgress(UpdateStatus2, {
                            app_id: app_id,
                            status2: '撤销'
                        }, function (data, err) {
                            //console.log(data);
                            if (data.return.status) {
                                mui.toast('撤销成功')
                                // window.location.reload();
                                // that.interviewHandle('interview');
                                altt.list2 = [];
                                altt.interviewHandle('interview')
                            }
                        })
                    }
                })
            },

            //重新邀请
            interviewAgain: function (app_id, index) {
                var that = this;
                mui.confirm('确定要重新邀约吗？', '友情提示',['确认','取消'], function (e) {
                  var altt = that;
                    if (!e.index) {
                        //console.log(app_id);
                        ajaxGetWithProgress(UpdateStatus2, {
                            app_id: app_id,
                            status2: '未接受'
                        }, function (data, err) {
                            //console.log("chongxin",data);

                            if (data.return.status) {
                                mui.toast('重新邀约成功');
                                altt.list2 = [];
                                altt.interviewHandle('interview');

                                // api.closeWin({});
                                //console.log(that.list2.splice(index, 1));
                            }
                        })
                    }
                })
            },

            //简历详情
            resumeHandle: function (item) {
                //console.log("简历详情跳转数据",item);
                openNewWindow("seeResume", "../mine/seeResume.html", {
                    person_id: item.person_id,
                    status: item.status,
                    time: item.status_time,
                    app_id: item.app_id
                })
            },



            // ResumeList2: function () {
            //     var that = this;
            //     ajaxGetWithProgress(ResumeList, {
            //         status: 2
            //     }, function (data, err) {
            //         console.log(data,'ResumeList22222222222');
            //         if (data.ResumeList) {
            //             var arr1 = data.ResumeList;
            //             // if(arr1 && arr1.length > 0){
            //             //   console.log(arr1,'arr11111');
            //             //   var arr2 = [];
            //             //   for (var i = 0; i < arr1.length; i++) {
            //             //       for (var j = 0; j < arr1[i].length; j++) {
            //             //           arr2.push(arr1[i][j]);
            //             //       }
            //             //   }
            //             //     that.list2 = arr2;
            //             // }
            //             that.list2 = arr1;
            //         }
            //         // ajaxGetWithProgress(ResumeList, {
            //         //     status: 3
            //         // }, function (data, err) {
            //         //     console.log(data,'ResumeList3333333333333');
            //         //     if (data.ResumeList) {
            //         //         var arr3 = data.ResumeList;
            //         //         for (var i = 0; i < arr3.length; i++) {
            //         //             for (var j = 0; j < arr3[i].length; j++) {
            //         //                 that.list2.push(arr3[i][j]);
            //         //             }
            //         //         }
            //         //
            //         //         //console.log(that.list2);
            //         //     }
            //         // })
            //     })
            // },
            // // tab切换  新简历status  1
            // activeHandle: function (name, status) {
            //     console.log("namename",name)
            //     var that = this;
            //
            //     if (name == 'interview') {
            //         ajaxGetWithProgress(ResumeList, {
            //             status: 2
            //         }, function (data, err) {
            //             console.log(data,'interview2222');
            //             if (data.ResumeList) {
            //                 var arr1 = data.ResumeList;
            //                 // var arr2 = [];
            //                 // for (var i = 0; i < arr1.length; i++) {
            //                 //     for (var j = 0; j < arr1[i].length; j++) {
            //                 //         arr2.push(arr1[i][j]);
            //                 //     }
            //                 // }
            //                 console.log(arr2);
            //                 that.list2 = arr1;
            //                 // console.log(that[list]);
            //             }
            //             ajaxGetWithProgress(ResumeList, {
            //                 status: 3
            //             }, function (data, err) {
            //                 console.log(data);
            //                 if (data.ResumeList) {
            //                     var arr3 = data.ResumeList;
            //                     // for (var i = 0; i < arr3.length; i++) {
            //                     //     for (var j = 0; j < arr3[i].queryPersonByJobid.length; j++) {
            //                     //         that.list2.push(arr3[i].queryPersonByJobid[j]);
            //                     //     }
            //                     // }
            //
            //                     console.log(that.list2,'96666');
            //                 }
            //             })
            //         })
            //     } else {
            //         this.ResumeList2(status);
            //     }
            //     that.active = name;
            //
            //     console.log(status,'105555')
            //
            //     ajaxGetWithProgress(ResumeList, {
            //         status: status
            //     }, function (data, err) {
            //         console.log("新简历",data);
            //         that.list1 = data.ResumeList
            //         console.log(that.list1,'112');
            //         //console.log("that.list1",that.list1)
            //     })
            // },
            //
            // // tab切换   面试   2     3
            // interviewHandle: function (name, status) {
            //     var that = this;
            //     that.active = name;
            //     ajaxGetWithProgress(ResumeList, {
            //         status: 2
            //     }, function (data, err) {
            //         // //console.log(data);
            //         if (data.ResumeList) {
            //             var arr1 = data.ResumeList;
            //             // var arr2 = [];
            //             // for (var i = 0; i < arr1.length; i++) {
            //             //     for (var j = 0; j < arr1[i].length; j++) {
            //             //         arr2.push(arr1[i][j]);
            //             //     }
            //             // }
            //             //console.log(arr2);
            //             that.list2 = arr1;
            //             // //console.log(that[list]);
            //         }
            //         // ajaxGetWithProgress(ResumeList, {
            //         //     status: 3
            //         // }, function (data, err) {
            //         //     //console.log(data);
            //         //     if (data.ResumeList) {
            //         //         var arr3 = data.ResumeList;
            //         //         for (var i = 0; i < arr3.length; i++) {
            //         //             for (var j = 0; j < arr3[i].length; j++) {
            //         //                 that.list2.push(arr3[i][j]);
            //         //             }
            //         //         }
            //         //
            //         //         //console.log(that.list2);
            //         //     }
            //         // })
            //     })
            // },
            //
            // // tab切换   不合适   5
            // noHandle: function (name, status) {
            //     var that = this;
            //     that.active = name;
            //     ajaxGetWithProgress(ResumeList, {
            //         status: status
            //     }, function (data, err) {
            //         console.log("不合适",data);
            //         that.list5 = data.ResumeList
            //
            //         //console.log("that.list5",that.list5)
            //     })
            // },
            // // 查看简历详情
            // resumeHandle: function (item) {
            //     //console.log("简历详情跳转数据",item);
            //     // openNewWindow("seeResume", "../mine/seeResume.html", {
            //     //     person_id: item.person_id,
            //     //     status: item.status,
            //     //     time: item.status_time,
            //     //     app_id: item.app_id
            //     // })
            // },
            // interview :function (item) {
            //     // console.log(item,'appidfrom');
            //     // return;
            //     openNewWindow("preliminary", "./preliminary.html", {
            //         person_id: item.person_id,
            //         app_id: item.app_id,
            //         name: item.p_name
            //     })
            // },
            // // 点击重新邀约againHandle
            // interviewAgain: function (app_id, index) {
            //     var that = this;
            //     mui.confirm('确定要重新邀约吗？', '友情提示',['确认','取消'], function (e) {
            //         if (!e.index) {
            //             //console.log(app_id);
            //             ajaxGetWithProgress(UpdateStatus2, {
            //                 app_id: app_id,
            //                 status2: '未接受'
            //             }, function (data, err) {
            //                 //console.log("chongxin",data);
            //
            //                 if (data.return.status) {
            //                     mui.toast('重新邀约成功')
            //                     //console.log(that.list2.splice(index, 1));
            //                 }
            //
            //             })
            //         }
            //     })
            // },
            // // 点击撤回邀请
            // interviewNot: function (app_id, index) {
            //     var that = this;
            //     mui.confirm('确定要撤回面试邀请吗？', '友情提示',['确认','取消'], function (e) {
            //         if (!e.index) {
            //             //console.log(app_id);
            //             ajaxGetWithProgress(UpdateStatus2, {
            //                 app_id: app_id,
            //                 status2: '撤销'
            //             }, function (data, err) {
            //                 //console.log(data);
            //
            //                 if (data.return.status) {
            //                     mui.toast('撤销成功')
            //                     //console.log(that.list2.splice(index, 1));
            //                 }
            //
            //             })
            //         }
            //     })
            // },

        }
    }
}
