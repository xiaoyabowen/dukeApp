function immigrantInit(Vue) {
    var str = dataValue('user/great/hourse/common/immigrant.html')

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
