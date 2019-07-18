function paymentInit(Vue) {
    var str = dataValue('user/great/common/payment.html')

    return {
        template: str,
        data: function () {
            return {
                number: '',
                personId: ''
            }
        },
        created: function () {
            this.personId = localStorage.getItem('person_id');
        },
        mounted: function () {


            // document.getElementById("input").focus();
        },
        methods: {
            // 添加支付密码
            SetPayPwd: function () {
                var that = this;
                ajaxGetWithProgress(SetPayPwd, {
                    payPass: that.number,
                    personId: that.personId
                }, function (data, err) {
                    console.log(data);
                    if (data.date) {
                        console.log(123)
                        api.closeToWin({
                            name: 'confirmOrder'
                        });
                    }
                    // this.payment = 'payment'
                    that.number = '';
                });
            },
            password: function () {
                console.log(this.number)
                if (this.number.length === 6) {
                    this.SetPayPwd();
                }
            }
        }
    }
}
