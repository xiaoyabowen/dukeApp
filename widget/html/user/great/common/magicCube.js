function magicCubeInit(Vue) {
    var str = dataValue('user/great/common/magicCube.html')

    var list = [
        {
            job_name: '面膜',
            imgIcon: '../../../../image/great/001.png',
            company_c_id: 'facial',
        },{
            job_name: '旅游',
            imgIcon: '../../../../image/great/002.png',
            company_c_id: 'tourism',
        },
    ]
    return {
        template: str,
        data: function () {
            return {
                isDisplay: true,
                list: list,
                list1: [],
                isHide: true,
                active: false,
                index1: -1,
                index2: -1
            }
        },
        created: function () {
            // this.queryListRandom();
            console.log(this.list);
        },
        mounted: function () {
            document.getElementById('app1').classList.remove('isDisplay');
            this.isDisplay = false;
        },
        methods: {
            queryListRandom: function () {
                var that = this;
                // ajaxGet(queryListRandom, {}, function(data,err){
                //     console.log(123, data);
                //     that.list = data.job;
                //     that.list1 = data.company;
                //     // console.log(that.list)
                //     document.getElementById('app1').classList.remove('isDisplay');
                // });
            },
            togle: function () {
                document.getElementById('subBox').classList.remove('isDisplay');
                console.log(123)
                this.active = true;
                var that = this;
                // this.queryListRandom();
                setTimeout(function () {
                    that.active = false;
                }, 1500)
            },
            detailClick: function (index,job_id) {
                this.index1 = index;
                this.index2 = -1;
                console.log(job_id)
                openNewWindow("index", "widget://html/user/great/"+ job_id +"/index.html");
                // if (job_id == 'great') {
                //     openNewWindow("index", "widget://html/user/great/index.html");
                // } else {
                //     openNewWindow("index", "widget://html/user/great/"+ job_id +"/index.html");
                // }

            },
            detailClick2: function (index,c_id) {
                this.index2 = index;
                this.index1 = -1;
                console.log(c_id)
                openNewWindow("companyInfo", "../home/companyInfo.html", {
                    cid: c_id
                });
            },
            hideHandle: function () {
                document.getElementById('subBox').classList.add('isDisplay');
            }

        }
    }
}
