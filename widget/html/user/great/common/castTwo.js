function castTwoInit(Vue) {
    var str = dataValue('user/great/common/castTwo.html')

    return {
        template: str,
        data: function () {
            return {

            }
        },
        created: function () {

        },
        mounted: function () {

        },
        methods: {
            returnBtnClick : function () {
                api.sendEvent({
                    name: 'returnBtnImg',
                    extra: {
                        key: 'castOne',
                    }
                });
            }
        }
    }
}
