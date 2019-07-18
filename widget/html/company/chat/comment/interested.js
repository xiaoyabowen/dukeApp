
function interestedInit(Vue) {
    var str = dataValue('company/chat/comment/interested.html')

    return {
        template: str,
        data: function() {
            return {
                interestedMask: false,
                list: []
            }
        },
        created: function() {
            this.lookJobsList();
        },
        mounted :function (){

        },
        methods: {
            // 获取谁看过我数据列表
            lookJobsList: function () {
                var that = this;
                ajaxGetWithProgress(lookJobsList, {}, function (data, err) {
                    console.log(data);
                    if (data.LookJobsPersonList) {
                        var arr1 = data.LookJobsPersonList;
                        var arr2 = [];
                        for (var i = 0; i < arr1.length; i++) {
                            for (var j = 0; j < arr1[i].LookJobsPerson.length; j++) {
                                arr2.push(arr1[i].LookJobsPerson[j]);
                            }
                        }
                        console.log(arr2);
                        that.list = arr2;
                    }
                })
            },
            // 点击查看简历
            resumeHandle: function(person_id) {
                console.log(person_id);
                openNewWindow("seeResume", "../mine/seeResume.html", {
                    person_id: person_id
                });
            }

        }
    }
}
