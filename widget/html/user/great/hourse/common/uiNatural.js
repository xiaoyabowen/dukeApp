function uiNaturalInit(Vue) {
    var str = dataValue('user/great/hourse/common/uiNatural.html')

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

        }
    }
}
