
function sign_erroInit(Vue) {


    var str = dataValue('user/circle/comment/sign_erro.html')

    return {
        template: str,
        data: function() {
            return {
                showInfo:false
            }
        },
        created: function() {
            // console.log(CKEDITOR)
        },
        methods: {
            showCont: function () {
                this.showInfo = !this.showInfo;
            }
        }
    }
}
