function castOneInit(Vue) {
    var str = dataValue('user/great/common/castOne.html')

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
            castTwoClick : function () {
                var that = this
                api.sendEvent({
                    name: 'onCastOne',
                    extra: {
                        key: 'castTwo',
                    }
                });
            }
        }
    }
}
