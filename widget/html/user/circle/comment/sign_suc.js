
function sign_sucInit(Vue) {


    var str = dataValue('user/circle/comment/sign_suc.html')
    return {
        template: str,
        props: ['list'],
        data: function() {
            return {
                showInfo:false,
                circle_id: '',
            }
        },
        created: function() {

        },
        methods: {
            // 发短信
            smsHandle: function (number) {

                api.sms({
                    numbers: [number],
                    text: ''
                }, function(ret, err) {
                    if (ret && ret.status) {
                        //已发送
                        mui.toast('短信发送成功')
                    } else {
                        //发送失败
                        mui.toast('短信发送失败')
                    }
                });
            },
            // 唤起手机拨号功能
            callHandle: function (number) {
                api.call({
                    type: 'tel_prompt',
                    number: number
                });
            },
            // 显示手机号
            showCont: function (index) {
                this.list[index]['active'] = !this.list[index]['active'];
            },
            // 群发短信
            groupSMS: function () {
                var that = this;
                if (that.list.length < 1) {
                    mui.toast('暂无需要发送的短信的用户');
                    return;
                }
                mui.prompt('群发短信','','请编辑要发送的短信内容',['确认','取消'],function (e) {
                    if (!e.index) {
                        var arr = []
                        arr.push('17600963908');
                        // for (var i = 0; i < that.list.length; i++) {
                        //     arr.push(that.list[i].phone);
                        // }
                        console.log(arr);
                        console.log(e.value);
                        if (!e.value) {
                            mui.toast('短信内容不能为空');
                            return;
                        }
                        ajaxGetWithProgress(MassTexting, {
                            phones: arr,
                            detils: e.value
                        }, function (data, err) {
                            console.log(data);
                        });
                    }
                },'div')
            },
            // 发送名单至邮箱
            groupEmail: function () {
                mui.prompt('请输入邮箱地址','','导出到邮箱',['确认导出','取消'], function (e) {
                    if (e.index) {
                        return;
                    }
                    if (!checkEmail(e.value)) {
                        mui.toast('请输入正确的邮箱格式');
                        return;
                    }
                },'div')
                document.querySelector('.mui-popup-input input').placeholder='请输入邮箱号'
            },
        }
    }
}
